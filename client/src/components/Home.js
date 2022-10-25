import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    
    const createPostBtn = () => navigate("/post/create")
    const readMoreBtn = () => navigate("/post/:id")

    return (
        <div className='home'>
            <nav className='home__navbar'>
                <h2>Notionous</h2>
                <div className='home__buttons'>
                    <button className='home__createBtn' onClick={createPostBtn}>
                        CREATE POST
                    </button>
                    <button className='home__notifyBtn'>NOTIFY</button>
                </div>
            </nav>

            <div className='posts__container'>
                <div className='post'>
                    <h3>How to create a new Socket.io client</h3>
                    <button className='post__cta' onClick={readMoreBtn}>
                        READ MORE
                    </button>
                </div>
                <div className='post'>
                    <h3>Creating React Native project with Expo</h3>
                    <button className='post__cta' onClick={readMoreBtn}>
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;