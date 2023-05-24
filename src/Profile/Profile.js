import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
//import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './Profile.css';
import firebase from 'firebase'

function Profile() {
  const [apple, setapple] = useState([])
  const [micro, setMicro] = useState([])
  const [fb, setfb] = useState([])
  const [name, setName] = useState('')
 
  const user = firebase.auth().currentUser;
            const uid = user.uid;
            
  useEffect(() => {
    firebase.firestore().collection("users")
            .where("uid", "==", uid)
            .get()
            .then(querySnapshot => {
              const user = querySnapshot.docs[0].data();
              const role = user.name;
              setName(role);
              console.log(role);
    })
    firebase.firestore().collection("Collection").doc('0').get()
    //.where("uid","==" ,0).get()
    .then((doc) => {
      if (doc.exists) {
        // Document data exists
        console.log(doc.data().Company);
        setapple(doc.data().Company);

      } else {
        // Document does not exist
        console.log("Document not found!");
      }
    })
    /*.then(query=>{
      console.log(query.docs[0].data())
    })*/
  
    

    firebase.firestore().collection("Collection").doc('1').get()
    //.where("uid","==" ,0).get()
    .then((doc) => {
      if (doc.exists) {
        // Document data exists
        console.log(doc.data().Company);
        setfb(doc.data().Company);

      } else {
        // Document does not exist
        console.log("Document not found!");
      }
    })
    /*.then(query=>{
      console.log(query.docs[0].data())
    })*/
  

    firebase.firestore().collection("Collection").doc('2').get()
    //.where("uid","==" ,0).get()
    .then((doc) => {
      if (doc.exists) {
        // Document data exists
        console.log(doc.data().Company);
        setMicro(doc.data().Company);

      } else {
        // Document does not exist
        console.log("Document not found!");
      }
    })
    /*.then(query=>{
      console.log(query.docs[0].data())
    })*/
  
    
  },[])
  
  
  const [task, setTask] = useState('');
    const [company, setCompany] = useState('Apple');
    const [tasks, setTasks] = useState([
      { id: 1, company: 'Apple', completed: false },
      { id: 2, company: 'Microsoft', completed: false },
      { id: 3, company: 'Facebook', completed: false },
    ]);
  
    const handleChange = (event) => {
      setTask(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      setCompany(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newTask = {
        task: task,
        company: company,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTask('');
    };
  
    const handleComplete = (id) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      setTasks(updatedTasks);
    };
  
    const handleDelete = (id) => {
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
    };
    
    return (
    <div>
        <div>
            <Header/>
        </div>
        

        <div>
            
            <h1>{name}</h1>
        </div>
        <div className="TodoList">
      <h1>Watch List</h1>
      <form className="TodoList-form" onSubmit={handleSubmit}>
        <select className='TodoList-option' value={company} onChange={handleSelectChange}>
          <option value={apple}>Apple</option>
          <option value={micro}>Microsoft</option>
          <option value={fb}>Facebook</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <ul className="TodoList-list">
        {tasks.map((task) => (
          <li key={task.id}>
            
            <div className="TodoList-company">{task.company}</div>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>



        <div>
            <Footer/>
        </div>
    </div>
  )
}
export default Profile