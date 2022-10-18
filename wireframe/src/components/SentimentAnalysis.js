export default function SentimentAnalysis(props){
    return(
        <div className= 'sentiment'>
            <h1>Sentiment Analysis</h1>
            <ul className = 'sent-list'>
            <li>{props.posNumber} Postive Reviews</li>
                <li>{props.nNumber} Neutral Reviews</li>
                <li>{props.negNumber} Negative Reviews</li>
            </ul>
        </div>
    )
}