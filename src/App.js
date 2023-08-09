
import './App.css';

import { useState } from 'react';

let initialvalue = [

  { Rno: 0},
  { Name: ''},
  {s1: 0},
  {s2: 0},
  {s3: 0},
  {s4: 0},
  {s5: 0},
  {total: 0},
  {per: 0},
]

function app() {

  const [name, setname] = useState(initialvalue)
  const [arr,setarr] = useState([])

  const changeData = (e) => {
    setname({ ...name, [e.target.name]: e.target.value });
  }

  const submitData = () => {
    name.total = parseInt(name.s1) + parseInt(name.s2) + parseInt(name.s3) +parseInt(name.s4) + parseInt(name.s5);
    name.per = name.total / 5;

    setarr(arr => [...arr, name])
  }

  return (

    <div className='app'>
      Rno: <input type='text' value={name.Rno} name='Rno' onChange={changeData} /> <br/>
      Name: <input type='text' value={name.Name} name='Name' onChange={changeData} /> <br/>
      s1: <input type='text' value={name.s1} name='s1' onChange={changeData} /> <br/>
      s2: <input type='text' value={name.s2} name='s2' onChange={changeData} /> <br/>
      s3: <input type='text' value={name.s3} name='s3' onChange={changeData} /> <br/>
      s4: <input type='text' value={name.s4} name='s4' onChange={changeData} /> <br/>
      s5: <input type='text' value={name.s5} name='s5' onChange={changeData} /> <br/>


      <br/>

      <button onClick={submitData} >Submit</button>

      <br/>
      <br/>
      <br/>

      <center>
        <table border={1}>
          <tr>
                        
              <th>Roll No</th>
              <th>Name</th>
              <th>s1</th>
              <th>s2</th>
              <th>s3</th>
              <th>s4</th>
              <th>s5</th>
              <th>Total</th>
              <th>Per</th>
            
          </tr>
          
        
        </table>
      </center>
    </div>
  )
}

export default app;