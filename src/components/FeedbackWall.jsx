import { useState } from "react";
import FeedbackCard from "./FeedbackCard";

function FeedbackWall() {

    const [feedbacks, setFeedbacks] =
       useState([]);

    const [name, setName] =
       useState("");

    const [rating, setRating] =
       useState(5);

    const [comment, setComment] =
       useState("");

    const addFeedback = (e) => {

        e.preventDefault();

        const newFeedback = {
            id: Date.now(),
            name, 
            rating,
            comment
        };

        setFeedbacks([
            newFeedback,
            ...feedbacks
        ]);

        setName("");
        setRating(5);
        setComment("");
    };

    return (
        <section className="feedback-wall">

            <h2>
                Visitor Feedback
            </h2>

            <form
                onSubmit={addFeedback}
            >

                <input 
                   type="text"
                   placeholder="Your Name"
                   value={name}
                   onChange={(e) => 
                    setName(
                        e.target.value
                    )
                   }
                />

                <select
                   value={rating}
                   onChange={(e) =>
                    setRating(
                        Number(
                            e.target.value
                        )
                    )
                   }
                >

                    <option value="1">
                        1 Star
                    </option>

                    <option value="2">
                        2 Stars
                    </option>

                    <option value="3">
                        3 Stars 
                    </option>

                    <option value="4">
                        4 Stars
                    </option>

                    <option value="5">
                        5 Stars
                    </option>

                </select>

                <textarea
                    placeholder="Comment"
                    value={comment}
                    onChange={(e) =>
                       setComment(
                        e.target.value
                       )
                    }
                />

                <button type="submit">
                    Add Feedback
                </button>

            </form>

            {feedbacks.length === 0 && (
                <p>
                    No feedback yet.
                </p>
            )}

            {feedbacks.map(
                (feedback) => (
                    <FeedbackCard
                       key={feedback.id}
                       feedback={feedback}
                    />
                )
            )}
        </section>
    );
}

export default FeedbackWall;