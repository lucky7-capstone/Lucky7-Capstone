import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

const styles = {
  table: {
    minWidth: 200,
  },
  paperContainer: {
    display: 'flex',
    width: '100%',
    height: '1%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  }
};

class WorkspaceItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedFields : {},
      selected: false
    }
  }

  getPaperStyle() {
    return {
      display: 'flex',
      width: '100%',
      height: '1%',
      opacity: this.state.selected ? '0.8' : '1',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  }

  handleSelect = () => {
    this.props.classificationCallback();
    const selected = !this.state.selected;
    this.setState({
      selected: selected
    })
  };

  handleSelectRow = (key) => {
    const selected = this.state.selectedFields;
    if (key in selected) {
      delete selected[key]
    } else {
      selected[key] = 1;
    }
    this.setState({
      selectedFields: selected
    })
  };

  tableHead(tableName){
    return(
      <TableHead>
        <TableRow onClick={() => this.handleSelect()}>
          <TableCell>
            <h1>{tableName}</h1>
          </TableCell>
        </TableRow>
      </TableHead>
    )
  }

  tableBody(values){
    return (
      <TableBody>
        {Object.keys(values).map( key => (
          <TableRow
            hover
            onClick={() => this.props.fieldCallback(key)}
            selected={key in this.state.selectedFields}
          >
            <TableCell>{key}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
  }

  render(){
    return(
      <div>
        <Paper style={this.getPaperStyle()}>
          <Table style={styles.table}>
            {this.tableHead(this.props.name)}
            {this.tableBody(this.props.values)}
          </Table>
        </Paper>
      </div>
    )
  }
}

export default WorkspaceItem;


