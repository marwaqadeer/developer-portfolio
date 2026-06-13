function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">

                <a href="/resume.pdf"
                    download
                >
                    Download Resume
                </a>

                <a href="https://github.com/" target="_blank" rel="noreferrer">
                    GitHub 
                </a>

                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>

                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    Twitter
                </a>

            </div>

            <p>
                © {new Date().getFullYear()} Marwa Qadeer
            </p>
        </footer>
    );
}

export default Footer; 