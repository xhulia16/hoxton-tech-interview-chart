
import './App.css'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { useState } from 'react';
const studentData = [
  {
    name: 'Stephen',
    submissions: {
      beavers: 3,
      stars: 2,
    }
  },
  {
    name: 'Eduardo',
    submissions: {
      beavers: 7,
      stars: 1,
    }
  },
  {
    name: 'Pepe',
    submissions: {
      beavers: 6,
      stars: 9,
    }
  },
  {
    name: 'Gigachad',
    submissions: {
      beavers: 0,
      stars: 10,
    }
  },
]

// Using the Recharted library, create a graph as similar as you can, to the one in the #Classroom

function App() {
  const [students, setStudents]=useState(studentData);
  
  window.students=students
  return(
    <div>
<BarChart width={730} height={250} data={students}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="submissions.beavers" fill="#da9249" name="beavers"  />
  
  <Bar dataKey="submissions.stars" fill="#ffd700" name="stars" />
</BarChart> 

{students.map((item)=>(
  <div>
  <h2>{item.name}</h2>
  <button onClick={()=>{
    const newStudents=structuredClone(students)
    const match= newStudents.find(target=> target.name===item.name)
    if(match){
      match.submissions.beavers++;
    }
    setStudents(newStudents)
  }}>+1 beaver</button>
  <button onClick={()=>{
    const newStudents=structuredClone(students)
    const match= newStudents.find(target=> target.name===item.name)
    if(match){
      match.submissions.stars++;
    }
    setStudents(newStudents)}}
  >+1 star</button>
  </div>
))}
<form onSubmit={(event)=>{
  event.preventDefault()
  let newStudent={
    name: event.target.name.value,
    submissions: {
      beavers:0,
      stars:0
    }
  }
  setStudents([...students, newStudent])
  console.log(studentData)
}}>
  <h3>Add a student</h3>
  <input placeholder="name of the student" name="name"></input>
</form>

    </div>


 )
}

export default App
