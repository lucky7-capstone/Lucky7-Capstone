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
      selectedClassifications : {},
      workspaceClassifications : {}
    }
  }

  addWorkspaceClassifications = (key) => {
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

  removeWorkspaceClassifications = () => {
    const inWorkspace = this.state.selectedClassifications;
    const selectedWorkspace = this.state.workspaceClassifications;
    Object.keys(selectedWorkspace).map(key => {
      delete inWorkspace[key]
    });
    this.setState({
      workspaceClassifications : {},
      selectedClassifications: inWorkspace
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
			      <Classifications classifications={this.state.classifications} callback={this.handleClassificationsExport}/>
			      <Fields fields={this.state.fields} callback={this.handleFieldsExport} />
			      <WorkspaceGrid classifications={this.state.selectedClassifications}
                           fields={this.state.fields}
                           fieldCallback={this.deleteField}
                           addClassificationCallback={this.addWorkspaceClassifications}
                           removeClassificationCallback={this.removeWorkspaceClassifications}/>
			</div>
		);
	}

}

export default AnalysisPage;

