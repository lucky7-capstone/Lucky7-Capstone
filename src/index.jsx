import React from 'react';
import ReactDOM from 'react-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Welcome from './Welcome.jsx'
import Classes from './Classes.jsx'
import Fields from './Fields.jsx'

class App extends React.Component {
	componentDidMount() {
	    fetch('api/test')
	      .then(response => response.json())
	      .then(data => console.log(data));
  	}

  render() {
    return (
      <div>
        <Welcome name="Data Scientist"/>
        <Grid container className="verify_view" justify="center" spacing={16}>
          <Grid key="1" xs="3" item>
            <Classes values={["class", "class", "class", "class", "class"]} />
          </Grid>
          <Grid key="1" xs="3" item>
            <Fields values={["field", "field", "field", "field", "field"]} />
          </Grid>
          <Grid key="1" xs="6" item>
            <img src="https://i1.rgstatic.net/ii/profile.image/337767809732610-1457541529558_Q128/Bruno_Da_Silva3.jpg" alt="Italian Trulli" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));