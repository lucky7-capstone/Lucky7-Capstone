import React from 'react';

import Grid from '@material-ui/core/Grid';
import Classes from './Classes.jsx'
import Fields from './Fields.jsx'

class MainPage extends React.Component {

	render() {

		return (

			  <Grid container className="verify_view" justify="center" spacing={16}>
			    <Grid key="1" xs="3" item>
			      <Classes values={["class", "class", "class", "class", "class"]} />
			    </Grid>
			    <Grid key="2" xs="3" item>
			      <Fields values={["field", "field", "field", "field", "field"]} />
			    </Grid>
			    <Grid key="3" xs="6" item>
			      <img src="https://i1.rgstatic.net/ii/profile.image/337767809732610-1457541529558_Q128/Bruno_Da_Silva3.jpg" alt="Italian Trulli" />
			    </Grid>
			  </Grid>

		);
	}

}

export default MainPage;

