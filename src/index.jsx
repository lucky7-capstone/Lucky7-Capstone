import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
	componentDidMount() {
	    fetch('api/test')
	      .then(response => response.json())
	      .then(data => console.log(data));
  	}

    render() {
        return (
            <div>HELLOOOOSAM!</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
