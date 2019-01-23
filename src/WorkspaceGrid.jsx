import React from 'react';
import Grid from "@material-ui/core/Grid";
import WorkspaceItem from "./WorkspaceItem.jsx";


const styles = {
  workspaceStyle: {
    overflowX: 'scroll',
    height: '300px'
  }
};

class WorkspaceGrid extends React.Component {
  render() {
    return (
      <div style={styles.workspaceStyle}>
        <Grid container justify="center" spacing={24} wrap={'nowrap'}>
          {this.props.classifications.map(classification => (
            <WorkspaceItem name={classification.name} values={classification.values} />
          ))}
        </Grid>
      </div>
    );
  }
}

export default WorkspaceGrid;


