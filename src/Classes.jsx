import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Classes extends React.Component {
  render() {
    return (
    	<div>
	    	<h1>Classes</h1>
	        <List component="nav">
	          	{this.props.values.map(value => (
	            	<ListItem button key="1">
	              		<ListItemText primary={value}/>
	            	</ListItem>
	     		))}
	        </List>
        </div>
    	);
	}
}

export default Classes;









