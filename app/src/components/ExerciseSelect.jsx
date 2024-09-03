import exercises from "../data/Exercises"
import { Container, Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const ExerciseSelect = () => {
    const dispatch = useDispatch()
    const addToWorkout = (id) => {
        dispatch(addExercise((id)))
    }
  return (
    <Container>
        <h2>Your Workout Plan</h2>
        <div>{exercises.map((exercise, idx) => (
            <Card key={idx} style={{width: '18rem'}}>

            </Card>
        ))}
        </div>
    </Container>
  )
}

export default ExerciseSelect