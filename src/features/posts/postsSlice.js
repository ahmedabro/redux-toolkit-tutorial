import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1',
        title: "Learning Redux Toolkit",
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
    {
        id: '2',
        title: "Slices...",
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        },
                    }
                }
            }  // prepare callback simplifies component as it can return an object
              // with payload that will be passed to addPost reducer
        },

        addReaction: (state, action) => {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++ 
                // normally we have to mutate the state to make  changes to state, but in createSlice we can change state like this because it is handled by immerJS
                // Redux Toolkit's createReducer and createSlice automatically use Immer internally to let you write simpler immutable update logic using "mutating" syntax.
            }
        }
    }
    
})

export const selectAllPosts = (state) => state.posts

export const {addPost, addReaction} = postsSlice.actions // action creators

export default postsSlice.reducer