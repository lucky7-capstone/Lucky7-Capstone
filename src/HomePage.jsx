
import React from 'react';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Classes from './Classes.jsx'
// import Fields from './Fields.jsx'
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';

const styles = {
    paperContainer: {
    	display: 'flex',
    	width: '100%',
    	height: '100%',
        backgroundImage: `url(https://cdn1.marklogic.com/wp-content/uploads/2018/09/home-hero-marklogic-data-hub-service-v1-1600x700.jpg)`,
    	backgroundSize: 'cover',
    	backgroundPosition: 'center'
    }
};

class HomePage extends React.Component{

    render(){
        return(
        	
          <Paper style={styles.paperContainer}>
            Some text to fill the Paper Component
          </Paper>

        );
    }
}


export default HomePage;

