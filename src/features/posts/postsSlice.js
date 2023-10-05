import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: "Learning Redux Toolkit", content: "I've heard good things." },
    { id: '2', title: "Slices...", content: "The more I say slice, the more I want pizza." },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }  // prepare callback simplifies component as it can return an object
              // with payload that will be passed to addPost reducer
        },
    }
    
})

export const selectAllPosts = (state) => state.posts

export const {addPost} = postsSlice.actions // action creators

export default postsSlice.reducer