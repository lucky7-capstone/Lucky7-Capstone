import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

/////////////////////////////////////////////////////////////////////////////
// The table for Classifications and fields share many of the same
// components.  The EnhancedTable contains all those shared features
// in one super class

const styles = {
    wrapper: {
        margin: '30px',
        height: '80vh'
    },
    table: {
        minWidth: 200,
    },
  tableBody: {
     overflow: 'auto',
    maxHeight: '80vh'
  },
    paperContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
};

class EnhancedTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selected : {}
        }
    }

    handleSelectRow = (key) => {
        const selected = this.state.selected;
        if (key in selected) {
            delete selected[key]
        } else {
            selected[key] = 1;
        }
        this.setState(selected)
    };

    tableHead(tableName){
        return(
            <TableHead>
                <TableRow styles={{display: 'flex'}}>
                    <TableCell>
                        <h1>{tableName}</h1>
                    </TableCell>
                </TableRow>
            </TableHead>
        )
    }

    tableBody(values){
        return (
            <TableBody style={styles.tableBody}>
                {Object.keys(values).map( key => (
                    <TableRow
                        hover
                        onClick={() => this.handleSelectRow(key)}
                        selected={key in this.state.selected}
                    >
                        <TableCell>{values[key].name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        )
    }

    sendDataButton(callback){
        return(
            <Button variant={"contained"}
                    component={'span'}
                    onClick={() => callback(this.state.selected)}
            >
                Send to WorkBench
            </Button>
        )
    }

    render(){
        return(
            <div style={styles.wrapper}>
                <Paper style={styles.paperContainer}>
                    <Table style={styles.table}>
                        {this.tableHead(this.props.name)}
                        {this.tableBody(this.props.values)}
                    </Table>
                </Paper>
                {this.sendDataButton(this.props.callback)}
            </div>
        )
    }

}

export default EnhancedTable;
