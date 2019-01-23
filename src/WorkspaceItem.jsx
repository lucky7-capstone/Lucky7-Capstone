import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class WorkspaceItem extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <List component="nav">
          {Object.keys(this.props.values).map( key => (
            <ListItem button key={key}>
              <ListItemText primary={key}/>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default WorkspaceItem;


