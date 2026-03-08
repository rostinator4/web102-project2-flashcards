import './card.css'
import { useState } from 'react';

const Card = ({ question, answer, category}) => {

    const [isRevealed, setRevealed] = useState(false)

    const handleClick = () => {
        setRevealed(!isRevealed)
    }

    return (
        <div className="flashcard-container" onClick={handleClick}>
            <div className={`flashcard-inner ${category.toLowerCase()} ${isRevealed ? 'is-revealed' : ''}`}>
                <div className="flashcard-front">
                    <h2>{question}</h2>
                </div>
                <div className="flashcard-back">
                    <h2>{answer}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card;