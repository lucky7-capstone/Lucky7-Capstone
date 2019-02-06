import React from 'react';
import Grid from '@material-ui/core/Grid';
import Classifications from './Classifications.jsx'
import Fields from './Fields.jsx'
import WorkspaceGrid from "./WorkspaceGrid.jsx";

const styles = {
  analysisPageStyle: {
    width: '100%',
  }
};

class AnalysisPage extends React.Component {


  constructor(props){
    super(props);
    console.log(this.props.data);
    this.state = {
      classifications : this.props.data.Classifications,
      fields : this.props.data.Fields,
      selectedClassifications : {},
      workspaceClassifications : {}
    }
  }

  handleWorkspaceClassifications = (key) => {
    const selected = this.state.workspaceClassifications;
    if (this.state.classifications[key] in selected) {
        delete selected[key]
    }
    selected[key] = this.state.classifications[key];
    console.log(selected);
    this.setState({
      workspaceClassifications : selected
    });
  };

  handleClassificationsExport = (key) => {
    const selected = this.state.selectedClassifications;
    Object.keys(key).map( key => {
      if (this.state.classifications[key] in selected) {
        delete selected[key]
      }
      selected[key] = this.state.classifications[key]
    });
    this.setState({
        selectedClassifications : selected
    });
  };

  handleFieldsExport = (key) => {
      const classifications = this.state.classifications;
      Object.keys(key).map( fKey => {
        Object.keys(this.state.workspaceClassifications).map(wKey => {
          classifications[wKey].values[fKey] = {fKey: 0.0}
        })
      });
      this.setState({
        classifications : classifications
      });
  };


  deleteField = (key, field) => {
    const classifications = this.state.classifications;
    delete classifications[key].values[field];
    this.setState({
      classifications : classifications
    })
  };


	render() {

		return (
			<div style={styles.analysisPageStyle}>
			  <Grid container>
			    <Grid key="1" item>
			      <Classifications classifications={this.state.classifications} callback={this.handleClassificationsExport}/>
			    </Grid>
			    <Grid key="2" item>
			      <Fields fields={this.state.fields} callback={this.handleFieldsExport} />
			    </Grid>
			    <Grid key="3" item>
			      <WorkspaceGrid classifications={this.state.selectedClassifications}
                           fieldCallback={this.deleteField}
                           classificationCallback={this.handleWorkspaceClassifications}/>
			    </Grid>
			  </Grid>
			</div>
		);
	}

}

export default AnalysisPage;

