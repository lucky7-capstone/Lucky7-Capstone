import React from 'react';
import Classifications from './Classifications.jsx'
import Fields from './Fields.jsx'
import WorkspaceGrid from "./WorkspaceGrid.jsx";
import uuid from "uuid";

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
    this.props.setAnalysisToVisible()
    this.state = {
      classifications : this.props.data.Classifications,
      fields : this.props.data.Fields,
      workspaceClassifications : {},
      selectedWorkspaceClassifications : {}
    }

    this.addClassification = this.addClassification.bind(this);
  }

  addWorkspaceClassifications = (key) => {
    const selected = this.state.selectedWorkspaceClassifications;
    if (this.state.classifications[key] in selected) {
        delete selected[key]
    }
    selected[key] = this.state.classifications[key];
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

  addClassification(className){
    const newClassList = this.state.classifications;
    const cid = 'classification-' + uuid.v4();
    newClassList[cid] = {
            name: className,
            metadata: {},
            values: {}};
    this.setState({classifications:  newClassList});
  }


	render() {
    const { classifications, fields } = this.state;
		return (
			<div style={styles.analysisPageStyle}>
			      <Classifications
                      classifications={classifications}
                      fields={fields}
                      callback={this.handleClassificationsExport}
                      addClassification={this.addClassification}/>
			      <Fields classifications={classifications} fields={fields} callback={this.handleFieldsExport} />
			      <WorkspaceGrid classifications={this.state.workspaceClassifications}
                           fields={fields}
                           fieldCallback={this.deleteField}
                           addClassificationCallback={this.addWorkspaceClassifications}
                           removeClassificationCallback={this.removeWorkspaceClassifications}/>
			</div>
		);
	}

}

export default AnalysisPage;

