import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";

const styles = {
  wrapper: {
    padding: '20px',
    margin: '10px',
    float: 'left',
    width: '50vh'
  },
  table: {
    minWidth: 200,
  },
};

class WorkspaceItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
  }

  getPaperStyle() {
    return {
      display: 'flex',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: this.state.selected ? '#BFEFFF' : 'white',
      borderStyle: 'solid',
      borderWidth: '3px',
      borderColor: this.state.selected ? 'blue' : 'transparent'
    }
  }

  handleSelect = () => {
    this.props.classificationCallback();
    const selected = !this.state.selected;
    this.setState({
      selected: selected
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
          >
            <TableCell>{this.props.fields[key].name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
  }

  render(){
    return(
      <div style={styles.wrapper}>
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


