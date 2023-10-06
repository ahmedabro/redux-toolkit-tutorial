import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({userId}) => {

    const users = useSelector(selectAllUsers)

    const author = users.filter(user => user.id === userId)[0]


  return (
    <span>
        by {author ? author.name : 'Anonymous Author'}
    </span>
  )
}

export default PostAuthor
