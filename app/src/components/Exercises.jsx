import React from 'react'
import exercises from '../data/Exercises'
import { useDispatch } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import { addExercise } from './ExerciseSlice';

const Exercises = () => {
  // const dispatch = useDispatch()

  const handleAddToPlan = (id) => {
    dispatchEvent(addExercise({id}))
  };

  return (
    <Container>
      <div>
          {
              exercises.map((exercise, idx) => (
                  <p key={idx}>{exercise.exercise}</p>
              ))
          }
      </div>
    </Container>
  )
};

export default Exercises;