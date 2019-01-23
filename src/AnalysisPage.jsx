import React from 'react';
import Grid from '@material-ui/core/Grid';
import Classifications from './Classifications.jsx'
import Fields from './Fields.jsx'

class AnalysisPage extends React.Component {

	classifications = {
		c_1 : {
			c_name : "classification 1",
			values : {
				v1: 1,
				v2: 2
			}
		},
        c_2 : {
            c_name : "classification 2",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_3 : {
            c_name : "classification 3",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_4 : {
            c_name : "classification 4",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_5 : {
            c_name : "classification 5",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_6 : {
            c_name : "classification 6",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_7 : {
            c_name : "classification 7",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_8 : {
            c_name : "classification 8",
            values : {
                v1: 1,
                v2: 2
            }
        },
	}

	render() {

		return (
			<div>
			  <Grid container justify="center" spacing={24}>
			    <Grid key="1" xs={6} item>
			      <Classifications classifications={this.classifications} />
			    </Grid>
			    <Grid key="2" xs={6} item>
			      <Fields values={["field", "asdf", "dsfa", "asdfsda", "fieadsfasdfsadfasdfld"]} />
			    </Grid>
			  </Grid>
			</div>
		);
	}

}

export default AnalysisPage;

