import './App.css'
import Card from './card'
import { useMemo, useState } from 'react';

function App() {

  const flashcards = [
    {
      question: "What is the derivative of sin(x)?",
      answer: "cos(x)",
      category: "Math"
    },
    {
      question: "What is the integral of x²?",
      answer: "x³ / 3 + C",
      category: "Math"
    },
    {
      question: "What is the Pythagorean theorem?",
      answer: "a² + b² = c²",
      category: "Math"
    },
    {
      question: "What is the formula for the area of a circle?",
      answer: "πr²",
      category: "Math"
    },
    {
      question: "What is the derivative of ln(x)?",
      answer: "1/x",
      category: "Math"
    },
    {
      question: "What is the time complexity of Binary Search?",
      answer: "O(log n)",
      category: "CS"
    },
    {
      question: "What data structure uses FIFO?",
      answer: "Queue",
      category: "CS"
    },
    {
      question: "What data structure uses LIFO?",
      answer: "Stack",
      category: "CS"
    },
    {
      question: "What is the time complexity of Merge Sort?",
      answer: "O(n log n)",
      category: "CS"
    },
    {
      question: "What does Big-O notation describe?",
      answer: "Algorithm time or space complexity",
      category: "CS"
    }
  ];


  const shuffledOrder = useMemo(() => {
    const order = [...Array(flashcards.length).keys()]

    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]]
    }

    return order;
  }, [flashcards.length])

  const [index, setIndex] = useState(0)
  const shuffledIndices = shuffledOrder

  const nextCard = () => {
    (index + 1) > shuffledIndices.length - 1 ? setIndex(0) : setIndex(index + 1)
  }

  const previousCard = () => {
    (index - 1) < 0 ? setIndex(shuffledIndices.length - 1) : setIndex(index - 1)
  }

  const currentCard = flashcards[shuffledIndices[index]]


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
      <Card question={currentCard.question}
        answer={currentCard.answer}
        category={currentCard.category}></Card>
      <div className='buttons'>
        <button onClick={previousCard} className='button-next'></button>
        <button onClick={nextCard} className='button-back'></button>
      </div>

    </div>

  )
}

export default App
