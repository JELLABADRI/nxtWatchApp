import {Link} from 'react-router-dom'
// import {formatDistanceToNow} from 'date-fns'

const GameVideoList = props => {
  const {homeVideoList} = props
  const {id, thumbnail, title, views} = homeVideoList

  return (
    <li>
      <Link to={`/videos/${id}`}>
        <div>
          <img src={thumbnail} alt="video thumbnail" />
          <div>
            <p>{title}</p>
            <div>
              <p>{views}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default GameVideoList
