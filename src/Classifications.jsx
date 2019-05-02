import React from 'react';
import EnhancedTable from './EnhancedTable.jsx'

// MAKE THIS ONLY DISPLAY NON-WORKBENCH CLASSIFICATIONS
const sortMethods = (values) => {
    return {
      "A-z": function (a, b) {
        return values[a].name > values[b].name ? 1 : (
          values[a].name < values[b].name ? -1 : 0
        )
      },
      "Z-a": function (a, b) {
        return values[a].name > values[b].name ? -1 : (
          values[a].name < values[b].name ? 1 : 0
        )
      },
      "Size (Asc.)": function(a, b) {
        return Object.keys(values[a].values).length - Object.keys(values[b].values).length
      },
      "Size (Desc.)": function(a, b) {
        return Object.keys(values[b].values).length - Object.keys(values[a].values).length
      }
    }
};

class Classifications extends React.Component {

    render(){
        return (
            <EnhancedTable
                name={"Classifications"}
                classifications={this.props.classifications}
                fields={this.props.fields}
                values={this.props.classifications}
                callback={this.props.callback}
                sortMethods={sortMethods}
		            allowSendData={true}
            />
        )
    }
}

export default Classifications;
