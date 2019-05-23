import React, { Component } from 'react';
import styled from 'styled-components'
import Popup from './Popup.jsx'

class ItemView extends Component {
    constructor(props) {
		super(props);
		this.state = {
          open : false
    	};
    }


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
                        valueBody.push( <p> {fields[value].name} </p> )
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
                        var valueBack = valTable[value]
                        if (isNaN(valueBack)){
                            valueBody.push(<p> {classifications[classOpt].name} null </p> )
                         } else{
                            valueBody.push(<p> {classifications[classOpt].name} {valTable[value]} </p> )
                         }
                    }
                }
            }
        }

        return (
          valueBody 
        )
      }

      interior(){
          return(
              <div>
                  {this.props.children}
                  {this.fieldValues(this.props.modalData.classifications, this.props.modalData.fields, this.props.modalData.selectedValue, this.props.modalData.values)}
              </div>
          );
      }

    head(){
        return(
            <div>{this.props.modalData.selectedValue}</div>
        );
    }

    render() {
        return (
            <Popup
                open={this.props.open}
                onClose={this.props.onClose}
                head={this.head()}
                interior={this.interior()}
            />
        );
    }

}

export default ItemView;