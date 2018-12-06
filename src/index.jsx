import React from 'react';
import ReactDOM from 'react-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Dashboard from './Dashboard.jsx';

class App extends React.Component {
	componentDidMount() {
	    fetch('api/test')
	      .then(response => response.json())
	      .then(data => console.log(data));
  	}

    render() {
        return (

            <React.Fragment>
                <Dashboard />
            </React.Fragment>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
