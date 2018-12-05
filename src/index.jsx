import React from 'react';
import ReactDOM from 'react-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



class App extends React.Component {
	componentDidMount() {
	    fetch('api/test')
	      .then(response => response.json())
	      .then(data => console.log(data));
  	}

    render() {
        return (
            <List component="nav">
              <ListItem button key="1">
                <ListItemText primary="TEST"/>
              </ListItem>
              <ListItem button key="2">
                <ListItemText primary="WOW"/>
              </ListItem>
              <ListItem button key="3">
                <ListItemText primary="COOL"/>
              </ListItem>
          </List>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
