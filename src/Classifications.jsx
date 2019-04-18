import React from 'react';
import EnhancedTable from './EnhancedTable.jsx'

class Classifications extends React.Component {

    render(){
        return (
            <EnhancedTable
                name={"Classifications"}
                classifications={this.props.classifications}
                fields={this.props.fields}
                values={this.props.classifications}
                callback={this.props.callback}
		allowSendData={true}
            />
        )
    }
}

export default Classifications;
