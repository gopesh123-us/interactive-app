import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

function Room(){
  const[isLit, setLit] = React.useState(false);
  const brightness = isLit ? 'lit' : 'dark';
  const [temp, setTemp] = React.useState(72);

  return(
  <div className={`text-center h1 room ${brightness}`}>
    The room is {isLit ? "lit" : "dark"}
    <br />
    <h2 className="h2">The room temperature is {temp} degree Fahrenheit</h2>
    <br />
    <button class="btn btn-primary mt-10" onClick={() => setLit(!isLit)}>Flip</button>
    <br />

    <div className="d-flex justify-content-center">
      <div className="on-button">
        <button className="btn btn-info" onClick={() => setLit(true)}>ON</button>
      </div> 
      <div className="off-button">
        <button class="btn btn-danger" onClick={() => setLit(false)}>OFF</button>
      </div>
    </div>
    <span className="h3">Adjust Temperature</span>
      <br />
    <div className="d-flex justify-content-center">
      <button className="btn btn-warning m-10 p-10" onClick={()=>setTemp(temp + 1)}>+</button>
      <button className="btn btn-warning m-10 p-10" onClick={() => setTemp(temp - 1)}>-</button>
    </div>
    
  </div>
  );
}

ReactDOM.render(<Room />, document.getElementById('root'));
