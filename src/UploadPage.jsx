import React, {Component} from 'react'
import AnalysisPage from './AnalysisPage.jsx'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Dropzone from 'react-dropzone'
import classNames from 'classnames'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
}

const input = {
	backgroundColor: '#d7dbe2',
	borderRadius: '10px'
}

class UploadPage extends Component{
	constructor(props) {
    	super(props);
    	this.file_names = []
	    this.data = new FormData();
	    this.counter = 0;
	}

	onDrop = (files) => {
	    for(let file of files){
	    	this.file_names.push(file.name)
	    	this.data.append('file' + this.counter,file);
	    	this.counter++;
	    }
	}

	uploadFiles = () => {
		fetch('api/upload', {
	      method: 'POST',
	      body: this.data,
	    }).then((response) => {
	      response.json().then((body) => {
	        this.props.handleData(body);
	      });
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
				                	this.counter > 0 ?
				                  		this.file_names.map(function(name, idx){
		         							return (<p> {name}</p>)
		       							}) 
		       						:
			                  			<p>Drag and drop or click to choose files.</p>
			              			}
			              		</div>
			            		</div>
			          		)
			        	}}
			      </Dropzone>
			      <Button variant={"contained"}  color="primary" onClick={this.uploadFiles}>
			      	Upload Files

			      </Button>
			    </div>
	     </div>
	    );
  	}
} 


export default UploadPage;