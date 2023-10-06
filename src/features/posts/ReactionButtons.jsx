import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    heart: '❤️',
    wow: '😮',
    rocket: '🚀',
    coffee: '☕',
}

const ReactionButtons = ({ post }) => {
    
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => 
                    dispatch(addReaction({postId: post.id, reaction: name}))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    // Object.entries returns an array of key-value pairs for example Object.entries(reactionEmoji) will return [['thumbsUp', '👍'],['heart' '❤️'],...,['coffee' '☕']]

  return (
    <div>
      {reactionButtons}
    </div>
  )
}

export default ReactionButtons
