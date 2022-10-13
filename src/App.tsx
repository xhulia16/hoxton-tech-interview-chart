
import './App.css'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
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
  return(
<BarChart width={730} height={250} data={studentData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="submissions.beavers" fill="#da9249" name="beavers"  />
  <Bar dataKey="submissions.stars" fill="#ffd700" name="stars" />
</BarChart>  )
}

export default App
