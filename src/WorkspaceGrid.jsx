import React from 'react';
import Grid from "@material-ui/core/Grid";
import WorkspaceItem from "./WorkspaceItem.jsx";
import Button from "@material-ui/core/Button";


const styles = {
  workspaceStyle: {
    overflowX: 'scroll',
    display: 'flex',
    height: '75vh',
    width: '50vh',
    marginTop: '25px',
    marginBottom: '10px',
    float: 'left'
  }
};

class WorkspaceGrid extends React.Component {

  removeButton(){
    return(
      <Button variant={"contained"}
              component={'span'}
              onClick={this.props.removeClassificationCallback}
      >
        Remove from Workbench
      </Button>
    )
  }

  render() {
    return (
      <div style={{width: '50vh'}}>
        <div style={styles.workspaceStyle}>
          <Grid container justify="center" spacing={24} wrap={'nowrap'}>
            {Object.keys(this.props.classifications).map( key => (
            <WorkspaceItem name={this.props.classifications[key].name}
                           values={this.props.classifications[key].values}
                           fields={this.props.fields}
                           classificationCallback = {() => this.props.addClassificationCallback(key)}
                           fieldCallback = {(event) => this.props.fieldCallback(key, event)}/>
          ))}
          </Grid>
        </div>
        <Button variant={"contained"}
                component={'span'}
                onClick={this.props.removeClassificationCallback}
        >
          Remove from Workbench
        </Button>
      </div>
    );
  }
}

export default WorkspaceGrid;


