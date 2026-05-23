function Profile({ image, name, title, bio}) {
    return (
        <section className="profile">
            <img src={image} alt={name} />

            <div className="profile-content">
                <h2>{name}</h2>

                <h3>{title}</h3>

                <p>{bio}</p>
            </div>
        </section>
    );
}

export default Profile;