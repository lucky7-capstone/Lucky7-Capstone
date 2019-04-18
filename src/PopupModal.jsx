import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: ${props => props.open ? 'flex' : 'none'};
    justify-content: center;
    align-items: center; 
`;

const Header = styled.h2`
   font-size: 32px;
    margin: 0 0 24px 0;
`;

const Body = styled.h3`
   font-size: 20px;
    margin: 0 0 24px 0;
`;

const Overlay = styled.div`
z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.05);
`;

const Modal = styled.div`
    background: white;
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
    border-radius: 12px;
    padding: 24px;
    max-width: 28vw;
    max-height: 36vh;
    left: 15em;
    right: 0;
    bottom: 0;
    top: 0;
`;

class PopupModal extends Component {
    constructor(props) {
		super(props);
		this.state = {
          open : false
    	};
    }

    openModal = () => {
        this.setState({ open: true });
    }; 
    
    closeModal = () => {
        this.setState({ open: false });
    };
    
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };
    
    handleListItemClick = value => {
        this.props.onClose(value);
    };
    
    fieldValues(classifications, fields, selectedValue, values){
        var values; 
        var valueNames = new Array();
        var valueBody = [];
        var count = 0;
        if (values == classifications) {
        for (var classOpt in classifications) {
            if (classifications[classOpt].name == selectedValue) {
                values = classifications[classOpt].values
                for (var value in values) {
                    if (count == 3) {
                        break
                    } else {    
                        valueNames.push(fields[value].name)
                        valueBody.push( <Body> {fields[value].name} </Body> )
                        count = count + 1;
                    }    
                }
            }
        }
        } else {
            var fieldID = ""
            for (var field in fields) {
                if (fields[field].name == selectedValue) {
                    var fieldID = field 
                }
            }

            for (var classOpt in classifications) {
                var valTable = classifications[classOpt].values
                for (var value in valTable) {
                    if (value == fieldID) {
                        valueBody.push(<Body> {classifications[classOpt].name} {valTable[value]} </Body> )
                    }
                }
            }
        }

        return (
          valueBody 
        )
      }

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;
    
        return (
          <Container open={this.props.open}>
            <Overlay className="overlay" onClick={this.props.onClose}/>
            <Modal>
                {this.props.children}
                <Header> {this.props.modalData.selectedValue} </Header>
                {this.fieldValues(this.props.modalData.classifications, this.props.modalData.fields, this.props.modalData.selectedValue, this.props.modalData.values)}
            </Modal>
          </Container>
        );
      }
}

export default PopupModal;