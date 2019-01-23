import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
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
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <h1>Classifications</h1>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {Object.keys(this.props.classifications).map( key => (
                            <TableBody>
                                <TableRow
                                    hover
                                    onClick={event => this.handleSelectRow(key)}
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
                        onClick={(event) => this.props.callback(this.state.selected)}
                >
                    Send to WorkBench
                </Button>
            </div>
        )
    }
}


export default Classifications;
