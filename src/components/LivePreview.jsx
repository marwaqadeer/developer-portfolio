function LivePreview({ name, email, message }) {
    return (
        <div className="preview">

            <h3>Live Preview</h3>

            <p>👤 {name}</p>

            <p>📧 {email}</p>

            <p>💬 {message}</p>

        </div>
    );
}

export default LivePreview;