import React, { Component } from 'react';
import styled from 'styled-components'
import Popup from './Popup.jsx'

class UnderDevelopment extends Component {

    interior(){
        return(
            <div>
                Please check back later!<br/>
                Click the button again to remove this message
            </div>
        );
    }

    head(){
        return(<div>This feature is under development!</div>);
    }

    render(){
        return (
            <Popup
                open={this.props.open}
                onClose={this.props.onClose}
                interior={this.interior()}
                head={this.head()}
            />
        );
      }
}

export default UnderDevelopment;