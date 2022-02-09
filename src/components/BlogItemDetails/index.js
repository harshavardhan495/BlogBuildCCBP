import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getCardDetails()
  }

  getCardDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedBlogDetails = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogItemDetails: updatedBlogDetails, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {author, avatarUrl, content, imageUrl, title} = blogItemDetails

    const mainBlogView = (
      <div className="main-card-display-container">
        <h1 className="title-spec">{title}</h1>
        <div className="card-container">
          <div className="profile-details">
            <img src={avatarUrl} alt="title" className="avatar" />
            <p className="topic">{author}</p>
          </div>
          <img src={imageUrl} alt={title} className="banner-img" />
          <p className="content-style">{content}</p>
        </div>
      </div>
    )

    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      mainBlogView
    )
  }
}

export default BlogItemDetails
