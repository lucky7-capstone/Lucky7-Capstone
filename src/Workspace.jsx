import React from "react";
import WorkspaceGrid from "./WorkspaceGrid.jsx";


const styles = {
  workspaceStyle: {
    overflowX: 'scroll',
  }
};


class Workspace extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      classifications: []
    };
  }

  addClassification = () => {
    let value = {name:"name", values:[1, 2, 3]};
    this.setState({
      classifications: this.state.classifications.concat([value])
    })
  };

  render(){
    return(
      <div>
        <button onClick={this.addClassification}>Add Classification</button>
        <WorkspaceGrid classifications={this.state.classifications}/>
      </div>

    );
  }
}



export default Workspace;
