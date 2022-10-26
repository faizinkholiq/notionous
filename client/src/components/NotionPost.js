import React, { useState } from "react";

const NotionPost = () => {
    const [comment, setComment] = useState("");
    const handleAddComment = (e) => {
        e.preventDefault();
        console.log({ comment });
        setComment("");
    };

    return (
        <div className='notionPost'>
            <div className='notionPost__container'>
                <h1>How to create a new React Native project with Expo</h1>
                <div className='notionPost__meta'>
                    <p className='notionPost__author'>By Julien Loki</p>
                    <p className='notionPost__date'>Created on 22nd September, 2022</p>
                </div>
                <div className='notionPost__content'>
                    For this article, I will use Puppetter and ReactJS. Puppetter is a
                    Node.js library that automates several browser actions such as form
                    submission.
                </div>
            </div>
            <div className='comments__container'>
                <h2>Add Comments</h2>
                <form className='comments__inputContainer' onSubmit={handleAddComment}>
                    <textarea
                        placeholder='Type in your comments...'
                        rows={5}
                        className='comments__input'
                        value={comment}
                        required
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button className='comments__cta'>Add Comment</button>
                </form>
                <div>
                    <p className='comment'>
                        <span style={{ fontWeight: 'bold' }}>Noel Noa</span> - Nice post fam! ❤️
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotionPost;