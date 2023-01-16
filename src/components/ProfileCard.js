function ProfileCard({ title, handle, description, image, alt }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img alt={alt} src={image} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
        </div>
      </div>

      <div className="content">{description}</div>
    </div>
  );
}
export default ProfileCard;
