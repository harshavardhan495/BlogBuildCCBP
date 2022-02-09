import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem/index'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getApiResponse()
  }

  getApiResponse = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const UpdatedBlogData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogData: UpdatedBlogData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const mainDisplayComponent = (
      <ul className="blog-container">
        {blogData.map(eachItem => (
          <BlogItem key={eachItem.id} blogDetails={eachItem} />
        ))}
      </ul>
    )
    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      mainDisplayComponent
    )
  }
}

export default BlogList
