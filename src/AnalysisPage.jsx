import React from 'react';
import Classifications from './Classifications.jsx'
import Fields from './Fields.jsx'
import WorkspaceGrid from "./WorkspaceGrid.jsx";

const styles = {
  analysisPageStyle: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    padding: '30px'
  }
};

class AnalysisPage extends React.Component {


  constructor(props){
    super(props);
    console.log(this.props.data);
    this.state = {
      classifications : this.props.data.Classifications,
      fields : this.props.data.Fields,
      workspaceClassifications : {},
      selectedWorkspaceClassifications : {}
    }
  }

  addWorkspaceClassifications = (key) => {
    const selected = this.state.selectedWorkspaceClassifications;
    if (this.state.classifications[key] in selected) {
        delete selected[key]
    }
    selected[key] = this.state.classifications[key];
    console.log(selected);
    this.setState({
      selectedWorkspaceClassifications : selected
    });
  };

  removeWorkspaceClassifications = () => {
    const inWorkspace = this.state.workspaceClassifications;
    const selectedWorkspace = this.state.selectedWorkspaceClassifications;
    Object.keys(selectedWorkspace).map(key => {
      delete inWorkspace[key]
    });
    this.setState({
      selectedWorkspaceClassifications : {},
      workspaceClassifications: inWorkspace
    });
  };

  handleClassificationsExport = (key) => {
    const selected = this.state.workspaceClassifications;
    Object.keys(key).map( key => {
      if (this.state.classifications[key] in selected) {
        delete selected[key]
      }
      selected[key] = this.state.classifications[key]
    });
    this.setState({
        workspaceClassifications : selected
    });
  };

  handleFieldsExport = (key) => {
      const classifications = this.state.classifications;
      Object.keys(key).map( fKey => {
        Object.keys(this.state.selectedWorkspaceClassifications).map(wKey => {
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
			      <Classifications classifications={this.state.classifications} fields={this.state.fields} callback={this.handleClassificationsExport}/>
			      <Fields classifications={this.state.classifications} fields={this.state.fields} callback={this.handleFieldsExport} />
			      <WorkspaceGrid classifications={this.state.workspaceClassifications}
                           fields={this.state.fields}
                           fieldCallback={this.deleteField}
                           addClassificationCallback={this.addWorkspaceClassifications}
                           removeClassificationCallback={this.removeWorkspaceClassifications}/>
			</div>
		);
	}

}

export default AnalysisPage;

