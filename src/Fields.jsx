import React from 'react';
import EnhancedTable from './EnhancedTable.jsx'

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
    }
  }
};

class Fields extends React.Component {

  render() {
    return (
      <EnhancedTable
          name={"Fields"}
          classifications={this.props.classifications}
          fields={this.props.fields}
          values={this.props.fields}
          callback={this.props.callback}
          sortMethods={sortMethods}
	        allowSendData={true}
      />
    );
              }
}

export default Fields;
