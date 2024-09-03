import exercises from "../data/Exercises"
import { Container, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const ExerciseSelect = () => {
    const dispatch = useDispatch()

    const exercises = useSelector((state) => state.exercises)

    const addToWorkout = (id) => {
        dispatch(addExercise((id)))
    }
  return (
    <Container>
        <h2>Your Workout Plan</h2>
        <div>{exercises.map((exercise, idx) => (
            <Card key={idx} style={{width: '18rem'}}>
              <Card.Body>
                <Card.Title>Your Personalized Workout Plan</Card.Title>
                <Card.Text>{exercise}</Card.Text>
              </Card.Body>
            </Card>
        ))}
        </div>
    </Container>
  )
}

export default ExerciseSelect