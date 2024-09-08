import exercises from "../data/Exercises"
import { Container, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addExercise } from "./ExerciseSlice"

const ExerciseSelect = () => {
    const dispatch = useDispatch()

    const exercises = useSelector((state) => {
    console.log(state);
    return state.workout.exercises})

    const exerciseList = exercises ? Object.keys(exercises) : []; 

    const addToWorkout = (id) => {
        dispatch(addExercise({id}))
    }
  return (
    <Container>
        <h2>Your Workout Plan</h2>
        <div>{Object.keys(exercises).map((id) => (
            <Card key={idx} style={{width: '18rem'}}>
              <Card.Body>
                <Card.Title>Your Personalized Workout Plan</Card.Title>
                <Card.Text>{id}</Card.Text>
              </Card.Body>
            </Card>
        ))}
        </div>
    </Container>
  )
}

export default ExerciseSelect