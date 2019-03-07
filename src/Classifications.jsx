import React from 'react';
import EnhancedTable from './EnhancedTable.jsx'

const sortMethods = (values) => {
    return {
      Alphabetical: function (a, b) {
          return values[a].name > values[b].name ? 1 : (
            values[a].name < values[b].name ? -1 : 0
          )
      },
      Other: function(a, b) {
        return 0
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
