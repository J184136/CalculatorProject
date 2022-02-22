import React,{useState} from "react";
import "./App.css"

function App() {
    const sayValue = (name) => {
        var s= document.getElementById("calc");
        s.value += `${name}`;
    };
    const clear = () => {
      var s= document.getElementById("calc");
        s.value = " ";
    };
    const answer = (val) => {
      var v= eval(val);
      var s= document.getElementById("calc");
       s.value = `${v}`;
    };

    return(
        <section>
        <h1> Calculator </h1>
        <div className = "formstyle">
        <form name = "form1">
          <input id = "calc" type ="text" name = "answer"></input>
          <input type = "button" value = "1" onClick = {() => sayValue('1')}></input>
          <input type = "button" value = "2" onClick = {() => sayValue('2')}></input>
          <input type = "button" value = "3" onClick = {() => sayValue('3')}></input>
           <input type = "button" value = "+" onClick = {() => sayValue('+')}></input>
          
          <input type = "button" value = "4" onClick = {() => sayValue('4')}></input>
          <input type = "button" value = "5" onClick = {() => sayValue('5')}></input>
          <input type = "button" value = "6" onClick = {() => sayValue('6')}></input>
          <input type = "button" value = "-" onClick = {() => sayValue('-')}></input>
          
          <input type = "button" value = "7" onClick = {() => sayValue('7')}></input>
          <input type = "button" value = "8" onClick = {() => sayValue('8')}></input>
          <input type = "button" value = "9" onClick = {() => sayValue('9')}></input>
          <input type = "button" value = "*" onClick = {() => sayValue('*')}></input>
          
          
          <input type = "button" value = "/" onClick = {() => sayValue('/')}></input>
          <input type = "button" value = "0" onClick = {() => sayValue('0')}></input>
            <input type = "button" value = "." onClick = {() => sayValue('.')}></input>
          <input type = "button" value = "=" onClick = {() => answer(document.getElementById('calc').value)}></input>
          <input type = "button" value = "Clear All" onClick = {() => clear()} id= "clear" ></input>
          
        </form>
        </div>
        </section>
    );
}
export default App;