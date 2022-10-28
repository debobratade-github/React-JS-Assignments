
import './App.css';

import {useState} from 'react'

function App() {

  const[data, setData] = useState(null)
  const[len, setLen] = useState(null)
  const[print, setPrint] = useState(false)

  function getData(val){
    setData(val.target.value)
    let text = val.target.value
    
    let count=0
        let newText=text.split("")
        for(let i in newText){
          newText[i]=newText[i].trim()
          if(newText[i].length>0)
          count++
        }

    setLen("Length : " + count)
    setPrint(false);
  }
  function clear(){
    document.getElementById("my_field").value = '';
    setPrint('');
    setData('');
    setLen('')
    
  }


  return (
    <>
    <div className="Title">
   <h3> Name : Debobrata Dey  [ fn-rad-39UDL ]</h3>
   <h3>React Assignment-1</h3>
    </div>
    <div className='parent'>
    <div className="App">
      <h1>Text Printer</h1>

      <input type='text' id='my_field' onChange={getData} placeholder=' Enter your text'/> <br/> <br/>
      <button className='btn1' onClick={()=>{setPrint(true)}}>Submit</button>
      <button className='btn2' onClick={clear}>clear</button>
      
      
      
      {
        print?
        <h2>{data}</h2>
        :null
      }
      {
        print?
        <h2>{len}</h2>
        :null
      }
    </div>
    </div>
    </>
  );
}

export default App;
