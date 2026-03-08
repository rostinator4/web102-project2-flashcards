import './App.css'
import Card from './card'
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0)

  const nextCard = () => {
    (index + 1) > flashcards.length - 1 ? setIndex(0) : setIndex(index + 1)
  }

  const previousCard = () => {
    (index - 1) < 0 ? setIndex(flashcards.length - 1) : setIndex(index - 1)
  }



  const flashcards = [
    {
      question: "What is the time complexity of Binary Search?",
      answer: "O(log n)"
    },
    {
      question: "What data structure uses FIFO?",
      answer: "Queue"
    },
    {
      question: "What data structure uses LIFO?",
      answer: "Stack"
    },
    {
      question: "What is the derivative of sin(x)?",
      answer: "cos(x)"
    },
    {
      question: "What is the derivative of ln(x)?",
      answer: "1/x"
    },
    {
      question: "What is the integral of x²?",
      answer: "x³/3 + C"
    },
    {
      question: "What is the formula for the area of a circle?",
      answer: "πr²"
    },
    {
      question: "What is the time complexity of Merge Sort?",
      answer: "O(n log n)"
    },
    {
      question: "What does Σ (sigma) represent?",
      answer: "Summation"
    },
    {
      question: "What is the Pythagorean theorem?",
      answer: "a² + b² = c²"
    }
  ];

  return (
    <div>
      <h1>
        Algorithm & Math Trainer
      </h1>
      <h3>
        Practice key concepts used in mathematics and computer science.
      </h3>
      <h3>
        Flip each card to test your understanding.
      </h3>
      <h3>Number of cards: {flashcards.length}</h3>
      <Card question={flashcards[index].question}
        answer={flashcards[index].answer}></Card>
      <div className='buttons'>
        <button onClick={previousCard} className='button-next'></button>
        <button onClick={nextCard} className='button-back'></button>
      </div>

    </div>

  )
}

export default App
