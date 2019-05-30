import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import PopupModal from "./PopupModal.jsx";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';


/////////////////////////////////////////////////////////////////////////////
// The table for Classifications and fields share many of the same
// components.  The EnhancedTable contains all those shared features
// in one super class

const styles = {
  wrapper: {
    margin: "25px",
    height: "75vh",
    width: "35vh"
  },
  table: {
    minWidth: 300
  },
  paperContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  button: {
    margin: "10px"
  }
};

PopupModal.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      modalData: {
        selectedValue: " ",
        classifications: {},
        fields: {},
        values: {},
        key: ""
      },
      open: false,
      sortMethod: "A-z",
      methodsList: this.props.sortMethods(this.props.values),
      enterClassName: false,
        textField: ""
    };
    console.log(Object.keys(this.state.methodsList))
      this.handleChange = this.handleChange.bind(this);
      this.textFieldSubmit = this.textFieldSubmit.bind(this);
      this.toggleClassTextField = this.toggleClassTextField.bind(this);
  }

  clear = (callback) => {
    callback(this.state.selected);
    this.setState({ selected: {} })
  };

  toggleModal = () => {
    this.setState({open: !this.state.open})
  };

  handleSelectRow = key => {
    const selected = this.state.selected;
    if (key in selected) {
      delete selected[key];
    } else {
      selected[key] = 1;
    }
    this.setState(selected);
  };

  handleRightClick = ( click, key, values, classifications, fields ) => {
    click.preventDefault();
    this.handlePopup(key, values, classifications, fields);
  }

  handlePopup = ( key, values, classifications, fields) => {
    this.setState({
      modalData: {
        selectedValue: values[key].name,
        classifications: classifications,
        fields: fields,
        values: values,
        key: key
      }, 
      open: !this.state.open,
    });
  };

  tableHead(tableName) {
    return (
        <TableHead>
          <TableRow styles={{ display: "flex" }}>
            <TableCell>
              <h1>{tableName}</h1>
                Sort by
                  <form autoComplete="off">
                    <FormControl>
                      <Select
                        value={this.state.sortMethod}
                        onChange={this.updateSortMethod}
                      >
                        {Object.keys(this.state.methodsList).map(key => (
                          <MenuItem value={key}>{key}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </form>
	    {this.addClassificationButton(this.props.classButton)}
	    {this.classTextField()}
            </TableCell>
          </TableRow>
        </TableHead>
    );
  }

  updateSortMethod = event => {
    this.setState({ sortMethod: event.target.value });
  };

  toList = (values, sortMethod) => {
    let indices = Object.keys(values);
    indices.sort(sortMethod);
    return indices
  };

  tableBody(values, classifications, fields) {
    return (
      <TableBody classifications={classifications} fields={fields}>
        {this.toList(values, this.state.methodsList[this.state.sortMethod]).map(key => {
          if (true) { //TODO check to see if this key is already in the workbench
              return (<TableRow
                  hover
                  onClick={() => this.handleSelectRow(key)}
                  onContextMenu={(click) =>
                      this.handleRightClick(
                          click,
                          key,
                          values,
                          classifications,
                          fields)}
                  key={key}
                  selected={key in this.state.selected}

              >
                  <TableCell>
                      <Checkbox
                          checked={key in this.state.selected}
                      />
                      {values[key].name}
                  </TableCell>
              </TableRow>)
          }})}
      </TableBody>
    );
  }

  sendDataButton(callback, allow) {
    if (allow) {
	    return (
	      <Button
		style={styles.button}
		variant={"contained"}
		component={"span"}
		onClick={() => callback(this.state.selected)}
	      >
		Send to WorkBench
	      </Button>
	    );
    }
  }

  addClassificationButton(allow) {
    if (allow) {
	    return (
	      <Button
		style={styles.button}
		variant={"contained"}
		component={"span"}
		onClick={() => this.toggleClassTextField(this)}
	      >
		Add Classification
	      </Button>
	    );
    }
  }

  toggleClassTextField(){
    this.setState({enterClassName: true});
  }

  classTextField(){
   if(this.state.enterClassName){
	  return(
	      <form onSubmit={this.textFieldSubmit}>
            <TextField
              id="classification"
              label="Enter Classification Name"
              margin="normal"
              variant="outlined"
              value={this.state.textField}
              onChange={this.handleChange}
            />
          </form>);
   }
  }

  textFieldSubmit(event){
    event.preventDefault();
    this.props.addClassification(this.state.textField);
    this.setState({enterClassName: false, textField: ""});
  }

    handleChange(event) {
        this.setState({textField: event.target.value});
    }

  render() {
    return (
      <div style={styles.wrapper}>
        <PopupModal
          onClose={this.toggleModal}
          open={this.state.open}
          modalData={this.state.modalData}
        />
        <Paper style={styles.paperContainer}>
          <Table style={styles.table}>
            {this.tableHead(this.props.name)}
            {this.tableBody(
              this.props.values,
              this.props.classifications,
              this.props.fields,
            )}
          </Table>
        </Paper>
        {this.sendDataButton(this.props.callback, this.props.allowSendData)}
      </div>
    );
  }
}

export default EnhancedTable;
