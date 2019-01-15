import React from 'react';
import Grid from '@material-ui/core/Grid';
import Classifications from './Classifications.jsx'
import Fields from './Fields.jsx'

class AnalysisPage extends React.Component {

	render() {

		return (
			<div>
			  <Grid container justify="center" spacing={24}>
			    <Grid key="1" xs={3} item>
			      <Classifications values={["class", "a", "b", "c", "d"]} />
			    </Grid>
			    <Grid key="2" xs={3} item>
			      <Fields values={["field", "asdf", "dsfa", "asdfsda", "fieadsfasdfsadfasdfld"]} />
			    </Grid>
			    <Grid key="3" xs={6} item>
			      <img src="https://i1.rgstatic.net/ii/profile.image/337767809732610-1457541529558_Q128/Bruno_Da_Silva3.jpg" alt="Italian Trulli" />
			    </Grid>
			  </Grid>
			  </div>
		);
	}

}

export default AnalysisPage;
