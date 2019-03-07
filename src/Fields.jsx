import React from 'react';
import EnhancedTable from './EnhancedTable.jsx'

class Fields extends React.Component {

  render() {
    return (
      <EnhancedTable
          name={"Fields"}
          classifications={this.props.classifications}
          fields={this.props.fields}
          values={this.props.fields}
          callback={this.props.callback}
      />
    );
              }
}

export default Fields;