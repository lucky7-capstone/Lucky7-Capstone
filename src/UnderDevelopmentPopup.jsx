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

class UnderDevelopmentPopup extends Component {
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
    
    render() {
        return (
          <Container open={this.props.open}>
            <Overlay className="overlay" onClick={this.props.onClose}/>
            <Modal>
                <h2>This feature is under development!</h2>
                <p>Please check back later!</p>
                <p>Click the button again to remove this message</p>
            </Modal>
          </Container>
        );
      }
}

export default UnderDevelopmentPopup;