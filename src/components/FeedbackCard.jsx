function FeedbackCard({ feedback }) {
    return (
        <div className="feedback-card">

            <h4>{feedback.name}</h4>

            <p>
                {"⭐".repeat(feedback.rating)}
            </p>

            {feedback.rating === 5 && (
                <span className="featured-badge">
                    🌟 Featured
                </span>
            )}

            <p>{feedback.comment}</p>

        </div>
    );
}

export default FeedbackCard;