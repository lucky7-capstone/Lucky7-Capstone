import React from 'react';
import Grid from "@material-ui/core/Grid";
import WorkspaceItem from "./WorkspaceItem.jsx";


const styles = {
  workspaceStyle: {
    overflowX: 'scroll',
    display: 'flex',
    height: '80vh',
    width: '100%',
    margin: '30px'
  }
};

class WorkspaceGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedClassifications : {},
    }
  }

  render() {
    return (
      <div style={styles.workspaceStyle}>
        <Grid container justify="center" spacing={24} wrap={'nowrap'}>
          {Object.keys(this.props.classifications).map( key => (
          <WorkspaceItem name={this.props.classifications[key].name}
                         classificationCallback = {() => this.props.classificationCallback(key)}
                         values={this.props.classifications[key].values}
                         fieldCallback = {(event) => this.props.fieldCallback(key, event)}/>
        ))}
        </Grid>
      </div>
    );
  }
}

export default WorkspaceGrid;


