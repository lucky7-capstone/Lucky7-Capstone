import React, {Component} from 'react'
import AnalysisPage from './AnalysisPage.jsx'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import MDSpinner from "react-md-spinner";

const style = {
    display: 'flex',
    //backgroundImage: 'url("https://cdn.britannica.com/s:300x300/55/174255-004-9A4971E9.jpg")',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'relative',
    top: '25%',
    justifyContent: 'center',
}

// uploadFiles = () => {
//         let data = new FormData();
//         for(let file in this.state.file_names){
//             data.append(file,this.state.file_names[file]);
//         }
//         fetch('api/upload', {
//           method: 'POST',
//           body: data,
//         }).then((response) => {
//           response.json().then((body) => {
//             this.props.handleData(body);
//           });
//         });
//     }

class SpinnerPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div style = {style}>
            <MDSpinner size={100} />
          </div>
        );
    }
} 


export default SpinnerPage;