import './App.css';
import { useState } from 'react';
import { MdDeleteSweep } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';

function App() {
  const [input, setInput] = useState("");
  const [list, setlist] = useState([]);
  const [uid, setuid] = useState()
  const [update, setupdate] = useState(false);
  const [Emailerror, setEmailerror] = useState("");

  function handleInput(e) {
    // const val = e.target.value;
    // var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // // console.log("test",validRegex.test(val));

    // if (validRegex.test(val)) {
    //   setEmailerror("")
    // } else {
    //   setEmailerror("invalid email")
    // }
    setInput(e.target.value);
  }

  const handleTask = () => {
    if (input.trim() !== "") {
      if(update){
        handleUpdate();
      }else if(list.includes(input)){
        alert("already exist")
      }else{
        setlist([...list, input])
        setInput("")
      }
    } 
  }

  const handleUpdate = () => {
    list.splice(uid,1,input)
    setupdate(false);
    setInput("");
  }
  const handleDelete = (i) => {
    const filterList = list.filter((elm) => elm !== list[i])
    console.log("filterList", filterList)
    setlist(filterList)
  }
  const handleEdit = (i) => {
    const filterList = list.filter((elm) => elm === list[i])
    // console.log("filterList", filterList)
    setInput(filterList[0])
    setuid()
    setupdate(true)
  }
  return (
    <div className="App">
      <h2 className="container">Todo List</h2>
      <div className='container'>
        <div className="input-box">
          <input type="text"
            value={input}
            onChange={(e) => {
              handleInput(e);              
            }}
            placeholder="Add item" className='input'
          />
          {update ? <button onClick={handleUpdate}>Update</button> :
            <button onClick={handleTask}>+</button>}
        </div>
        {Emailerror}
        <div className="list">
          <ul>
            {list.map((item, i) => <li key={i}>
              <input type="checkbox" className='checkbox' /> {item}
              <CiEdit
                className='edit-icon'
                onClick={() => handleEdit(i)}
              />
              <MdDeleteSweep
                className='delete-icon'
                onClick={() => handleDelete(i)} />
            </li>
            )}
          </ul>
          {list.length === 0 ? (
            <p className="notify">You are done!</p>) : null}
        </div>
      </div>
    </div>
  );
}
export default App;










