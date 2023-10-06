import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1',
        title: "Learning Redux Toolkit",
        content: "I've heard good things.",
        date: sub(new Date(), {minutes: 10}).toISOString(),
    },
    {
        id: '2',
        title: "Slices...",
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), {minutes: 5}).toISOString(),
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
                        date: new Date().toISOString()
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