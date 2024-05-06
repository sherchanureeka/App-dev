// PopularPostPagePerDate.jsx
import React from 'react';
import Navbar from './Navbar';
import './PopularPostPagePerDate.css';

function PopularPostPagePerDate() {
    return (
        <div className="popular-post-page-per-date">
            <Navbar />

            <div className="content">
                <h2>Popular Post Page Per Date</h2>

                <div className="date-range">
                    <label>From</label>
                    <select>
                        <option>Date</option>
                    </select>
                    <label>to</label>
                    <select>
                        <option>Date</option>
                    </select>
                </div>

                <div className="posts-container">
                    {/* First Column */}
                    <div className="post-column">
                        <div className="post">
                            <label>Username</label>
                            <input type="text" className="input-box" />
                        </div>
                        <div className="post">
                            <label>Blog Title</label>
                            <input type="text" className="input-box" />
                        </div>
                        <div className="post">
                            <label>Blog Text</label>
                            <textarea className="input-box"></textarea>
                        </div>
                        <div className="post">
                            <label>Image</label>
                            <div className="static-image">Static Image Placeholder</div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="post-column">
                        <div className="post">
                            <label>Username</label>
                            <input type="text" className="input-box" />
                        </div>
                        <div className="post">
                            <label>Blog Title</label>
                            <input type="text" className="input-box" />
                        </div>
                        <div classname="post">
                            <label>Blog Text</label>
                            <textarea className="input-box"></textarea>
                        </div>
                        <div classname="post">
                            <label>Image</label>
                            <div className="static-image">Static Image Placeholder</div>
                        </div>
                    </div>
                </div>

                {/* Comment Section with Upvote/Downvote Buttons */}
                <div className="comment-section">
                    <div className="comment-area">
                        <label>Comment text:</label>
                        <textarea className="comment-box"></textarea>
                    </div>
                    <div className="vote-buttons">
                        <button className="upvote-button">↑</button> {/* Unicode up arrow */}
                        <button className="downvote-button">↓</button> {/* Unicode down arrow */}
                    </div>
                    <div className="comment-area">
                        <label>Comment text:</label>
                        <textarea className="comment-box"></textarea>
                    </div>
                    <div className="vote-buttons">
                        <button className="upvote-button">↑</button> {/* Unicode up arrow */}
                        <button classname="downvote-button">↓</button> {/* Unicode down arrow */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularPostPagePerDate;
