import './card.css'

const Card = ({question, answer, revealed}) => {
    
    return (
        <div className="flashcard">
            {
            revealed ? <p>{answer}</p> : <h3>{question}</h3>
            }
        </div>
    )
}

export default Card;