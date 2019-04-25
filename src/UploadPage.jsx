import React, {Component} from 'react'
import AnalysisPage from './AnalysisPage.jsx'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import DeleteIcon from '@material-ui/icons/Delete';

const style = {
	display: 'flex',
    position: 'relative',
    top: '10%',
    justifyContent: 'center',
    alignItems: 'center',
}
const drop = {
	display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '80%'
}

const input = {
	backgroundColor: '#d7dbe2',
	borderRadius: '10px',
	justifyContent: 'center',
	alignItems: 'center',
	display: 'flex',
}

class UploadPage extends Component{
	constructor(props) {
    	super(props);
	    this.state ={
	    	file_names : {},
	    };
	}

	onDrop = (files) => {
		let file_names = this.state.file_names;
	    for(let file of files){
	    	file_names[file.name] = file;
	    }
	    this.setState({
	    	file_names : file_names,
	    });
	}

	uploadFiles = () => {
		let data = new FormData();

		if (this.state.file_names.length == 0) {
			this.props.handleError("No Files Upload");	
		}

		for(let file in this.state.file_names){
			data.append(file,this.state.file_names[file]);
		}

		this.props.loadSpinner();

		fetch('api/upload', {
	      method: 'POST',
	      body: data,
	    }).then((response) => {
	      response.json().then((body) => {
	      	if(body.error){
	      		this.props.handleError(body.error);
	      	}else{
	        	this.props.handleData(body);
	    	}
	      });
			});
	}

	DelFile = (file) => {
		let file_names = this.state.file_names;
		delete file_names[file]	;
		this.setState({
			file_names : file_names
		});
	}

  	render() {
	    return (
    		<div style={style}>
	    		<div style={drop}>
			    	<Dropzone onDrop={this.onDrop}>
			        	{({getRootProps, getInputProps, isDragActive}) => {
			          		return (
			            		<div style={input}
			              		{...getRootProps()}
			              		className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
			            		>
			              		<input {...getInputProps()} />
				              		<div>
				              			{
					                	Object.keys(this.state.file_names).length > 0 ?

					                		<List component="nav">
					                			{Object.keys(this.state.file_names).map(function(name){
			         								return (
											        	<ListItem button key={name} onClick={(e) => {e.stopPropagation();this.DelFile(name)}}>
											          		<ListItemIcon>
											            		<DeleteIcon />
											          		</ListItemIcon>
											          		<ListItemText primary={name} />
											        	</ListItem>
			         								)
			       								}.bind(this))}
									        </List>
			       						:
				                  			<p>Drag and drop or click to choose files.</p>
				              			}
				              		</div>
			            		</div>
			          		)
			        	}}
			      </Dropzone>
			      <Button variant={"contained"}  color="primary" onClick={this.uploadFiles}>
			      	Start File Analysis

			      </Button>
			    </div>
	     </div>
	    );
  	}
} 


export default UploadPage;