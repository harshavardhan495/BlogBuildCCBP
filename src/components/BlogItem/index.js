import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, author, title, imageUrl, avatarUrl, topic} = blogDetails

  return (
    <li>
      <Link to={`/blogs/${id}`} className="card-link">
        <div className="blog-card">
          <img src={imageUrl} alt="title" className="main-img-props" />
          <div className="text-content">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="profile-details">
              <img src={avatarUrl} alt="avatar" className="avatar" />
              <p className="topic">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
