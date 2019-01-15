import React, {Component} from 'react'
import AnalysisPage from './AnalysisPage.jsx'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class UploadPage extends Component{
	constructor(props) {
    	super(props);
    	this.handleUploadImage = this.handleUploadImage.bind(this);
  	}

	handleUploadImage(ev) {
	    ev.preventDefault();

	    const data = new FormData();
	    data.append('file', this.uploadInput.files[0]);
	    fetch('api/upload', {
	      method: 'POST',
	      body: data,
	    }).then((response) => {
	      response.json().then((body) => {
	        this.props.handleData(body);
	      });
	    });
	}

  	render() {
	    return (
	    	<div align={"center"}>
	    	  Choose a csv file to analyze
		      <form onSubmit={this.handleUploadImage}>
		        <Button>
		          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
		        </Button>
		        <br />
		        <div>
		          <button>Upload</button>
		        </div>
		      </form>	
	     	</div>
	    );
  	}
} 


export default UploadPage;