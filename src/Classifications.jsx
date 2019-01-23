import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


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

class EnhancedTableHead extends React.Component {

    render(){
        return(
            <TableHead>
                <TableRow>
                    <TableCell>
                        <h1>{this.props.tableName}</h1>
                    </TableCell>
                </TableRow>
            </TableHead>
        )
    }
}



class Classifications extends React.Component {

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

    render(){
        return (
            <div>
                <Paper style={styles.paperContainer}>
                    <Table style={styles.table}>
                        <EnhancedTableHead tableName={"Classifications"}/>
                        {Object.keys(this.props.classifications).map( key => (
                            <TableBody>
                                <TableRow
                                    hover
                                    onClick={() => this.handleSelectRow(key)}
                                    selected={key in this.state.selected}
                                >
                                    <TableCell>{this.props.classifications[key].name}</TableCell>
                                </TableRow>
                            </TableBody>
                        ))}
                    </Table>
                </Paper>
                <Button variant={"contained"}
                        component={'span'}
                        onClick={() => this.props.callback(this.state.selected)}
                >
                    Send to WorkBench
                </Button>
            </div>
        )
    }
}


export default Classifications;
