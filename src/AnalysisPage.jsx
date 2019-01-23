import React from 'react';
import Grid from '@material-ui/core/Grid';
import Classifications from './Classifications.jsx'
import Fields from './Fields.jsx'
import Workspace from "./Workspace.jsx";

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
			      <Workspace />
			    </Grid>
			  </Grid>
			</div>
		);
	}

}

export default AnalysisPage;

