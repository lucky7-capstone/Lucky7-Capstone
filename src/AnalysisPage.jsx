import React from 'react';
import Grid from '@material-ui/core/Grid';
import Classifications from './Classifications.jsx'
import Fields from './Fields.jsx'
import WorkspaceGrid from "./WorkspaceGrid.jsx";

class AnalysisPage extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      selectedClassifications : {},
      selectedFields : {}
    }
  }


	classifications = {
		c_1 : {
			name : "classification 1",
			values : {
				v1: 1,
				v2: 2
			}
		},
        c_2 : {
            name : "classification 2",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_3 : {
            name : "classification 3",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_4 : {
            name : "classification 4",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_5 : {
            name : "classification 5",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_6 : {
            name : "classification 6",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_7 : {
            name : "classification 7",
            values : {
                v1: 1,
                v2: 2
            }
        },
        c_8 : {
            name : "classification 8",
            values : {
                v1: 1,
                v2: 2
            }
        },
    };
    
    fields = {
        f_1 : {
            name: "field 1"
        },
        f_2 : {
            name: "field 2"
        },
        f_3 : {
            name: "field 3"
        },
        f_4 : {
            name: "field 4"
        },
        f_5 : {
            name: "field 5"
        },
        f_6 : {
            name: "field 6"
        },
        f_7 : {
            name: "field 7"
        },
        f_8 : {
            name: "field 8"
        },
    };


  handleClassificationsExport = (key) => {
    const selected = this.state.selectedClassifications;
    Object.keys(key).map( key => {
      if (this.classifications[key] in selected) {
        delete selected[key]
      }
      selected[key] = this.classifications[key]
    });
    this.setState({
        selectedClassifications : selected
    });
  };

  handleFieldsExport = (key) => {
      const selected = this.state.selectedFields;
      Object.keys(key).map( key => {
          if (this.fields[key] in selected) {
              delete selected[key]
          }
          selected[key] = this.fields[key]
      });
      this.setState({
          selectedFields : selected
      });
  }


	render() {

		return (
			<div>
			  <Grid container justify="center" spacing={24}>
			    <Grid key="1" xs={6} item>
			      <Classifications classifications={this.classifications} callback={this.handleClassificationsExport}/>
			    </Grid>
			    <Grid key="2" xs={6} item>
			      <Fields fields={this.fields} callback={this.handleFieldsExport} />
			    </Grid>
			    <Grid key="3" xs={6} item>
			      <WorkspaceGrid classifications={this.state.selectedClassifications}/>
			    </Grid>
			  </Grid>
			</div>
		);
	}

}

export default AnalysisPage;

