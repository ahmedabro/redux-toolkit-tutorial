import { useState } from "react";
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { addPost } from "./postsSlice";

const AddPost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePost = () => {
        if (title && content) {
            dispatch(
                addPost({
                    id: nanoid(),
                    title,
                    content,
                })
            ) 
        }
        setTitle("")
        setContent("")
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                {/* <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select> */}
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePost}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPost