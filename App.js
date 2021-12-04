import logo from './logo.svg';
import './App.css';
import {add, sub , mul , div} from './Calci';

function App() {
   
  let curDate = new Date(2021 , 10 , 29);
  curDate = curDate.getHours();
  let greeting = " ";
  const cssStyle = { };

  if(curDate >= 1 && curDate < 12 ){
    greeting = "Good Morning";
    cssStyle.color = "green";
  }else if(curDate >= 12 && curDate < 19 ){
    greeting = "Good AfterNoon";
    cssStyle.color = "orange";
  }else{
    greeting = "Good Night";
    cssStyle.color = "darkblue";
  }

  return (
    <div className="App">
      <h1> Hello Shanu , <span style =  {cssStyle} >{greeting}</span> </h1>
      <ul>
        <li> <h1> sum = {add(5,5)}</h1> </li>
        <li> <h1> subtraction = {sub(5,5)}</h1> </li>
        <li> <h1> multiplication = {mul(5,5)}</h1> </li>
        <li> <h1> division = {div(5,5)}</h1> </li>
      </ul>
    </div>
    
  );
}

export default App;
