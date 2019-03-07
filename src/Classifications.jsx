import React from 'react';
import EnhancedTable from './EnhancedTable.jsx'

// MAKE THIS ONLY DISPLAY NON-WORKBENCH CLASSIFICATIONS
const sortMethods = (values) => {
    return {
      AlphabeticalD: function (a, b) {
        return values[a].name > values[b].name ? 1 : (
          values[a].name < values[b].name ? -1 : 0
        )
      },
      AlphabeticalA: function (a, b) {
        return values[a].name > values[b].name ? -1 : (
          values[a].name < values[b].name ? 1 : 0
        )
      },
      SizeD: function(a, b) {
        return Object.keys(values[a].values).length - Object.keys(values[b].values).length
      },
      SizeA: function(a, b) {
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
            />
        )
    }
}

export default Classifications;
