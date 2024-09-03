import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import ExerciseSelect from './components/ExerciseSelect'
import NavigationBar from './components/NavigationBar'

const App = () => {
  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path='/' element={Homepage}/>
      <Route path='/exercises' element={Exercises}/>
      <Route path='/exerciseselect' element={ExerciseSelect}/>
    </Routes>
    </>
  )
}

export default App;