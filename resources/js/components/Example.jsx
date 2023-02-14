import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
class TestClass extends React.Component {
    
    render(){
	return <h2>Hi, I am TestClass! </h2>
    }
}
/*
class TestAxios extends React.Component {
  clicked() {
    axios({
  method       : 'GET', 
  url          : '/test', 
  params       : { hoge: 'fuga' }, 
  responseType : 'document', 
})
.then((res) => {
    const body = document.querySelector('body');
    Array.from(res.data.body.childNodes).forEach((node) => {
      body.appendChild(node);
    });
});
  }
*/
class AxiosSample extends React.Component {
  constructor() {
    super();
      this.state = {
	  member: []
      }
     }
    
  

  render() {
      console.log(this.state.member);
      return (
          <>
	  <button onClick={ this.getJson }> Get Json </button>
              <ul id="list">
	    
		{this.state.member.map(item => {
		    return <li key={item.name}> {item.name} {item.email} {item.id} </li>;
		})}
	      </ul>
	</>
	   
      )
  
  }
    
		eraseJson = () => {
		    const data = "";
		    
		    document.getElementById("list").remove();
		}
  getJson = () => {
    const url = "/index";
      axios.get("/api/index")
	  .then(res => {
	      this.setState({
		  member : res.data.data
	      })
	      
	  }
	       )
  }
  
  
}


export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}

if (document.getElementById('testclass')){
    ReactDOM.render(<TestClass /> , document.getElementById('testclass'));
}

if (document.getElementById('testaxios')){
	ReactDOM.render(<AxiosSample />, document.getElementById('testclass'));
}
