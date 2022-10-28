import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate();
    
    const [postTitle, setPostTitle] = useState();
    const [postContent, setPostContent] = useState();

    const  currentDate = () => {
        const d = new Date();
        return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
    }

    const addPost = (e) => {
        e.preventDefault();
        console.log({
            postTitle,
            postContent,
            username: localStorage.getItem("username"),
            timestamp: currentDate(),
        });
        navigate("/dashboard")
    }

    return (
        <>
            <div className='createPost'>
                <h2>Create a new Post</h2>
                <form className='createForm' onSubmit={addPost}>
                    <label htmlFor='title'> Title</label>
                    <input
                        type='text'
                        required
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        className='createForm__title'
                    />
                    <label htmlFor='title'> Content</label>
                    <textarea
                        required
                        rows={15}
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        className='createForm__content'
                    />
                    <button className='createForm__button'>ADD POST</button>
                </form>
            </div>
        </>
    );
};

export default CreatePost;