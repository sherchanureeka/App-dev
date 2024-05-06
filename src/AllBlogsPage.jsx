// AllBlogsPage.jsx
import React from 'react';
import Navbar from './Navbar'; // Adjust the path to your Navbar component
import './AllBlogsPage.css'; // Ensure this file matches your project structure

function AllBlogsPage() {
    return (
        <div className="all-blogs-page">
            {/* Include Navbar */}
            <Navbar />

            <div className="content">
                <h2>All Blogs Page</h2>
                <div className="blogs-container">
                    {/* First Column */}
                    <div className="blog-column">
                        <div className="form-item">
                            <label>Username</label>
                            <input type="text" className="input-box" readOnly value="Username 1" />
                        </div>
                        <div className="form-item">
                            <label>Blog Title</label>
                            <input type="text" className="input-box" readOnly value="Blog Title 1" />
                        </div>
                        <div className="form-item">
                            <label>Blog Text</label>
                            <textarea className="input-box" readOnly>Sample blog text for blog 1.</textarea>
                        </div>
                        <div className="form-item">
                            <label>Image</label>
                            <div className="static-image">Static Image Placeholder 1</div>
                        </div>
                        <div className="vote-buttons">
                            <button className="upvote-button">↑</button>
                            <button className="downvote-button">↓</button>
                        </div>
                        <div className="form-item">
                            <label>Comment</label>
                            <textarea className="input-box" readOnly>Sample comment for blog 1.</textarea>
                        </div>
                        <div className="vote-buttons">
                            <button className="upvote-button">↑</button>
                            <button className="downvote-button">↓</button>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="blog-column">
                        <div className="form-item">
                            <label>Username</label>
                            <input type="text" className="input-box" readOnly value="Username 2" />
                        </div>
                        <div className="form-item">
                            <label>Blog Title</label>
                            <input type="text" className="input-box" readOnly value="Blog Title 2" />
                        </div>
                        <div className="form-item">
                            <label>Blog Text</label>
                            <textarea className="input-box" readOnly>Sample blog text for blog 2.</textarea>
                        </div>
                        <div className="form-item">
                            <label>Image</label>
                            <div className="static-image">Static Image Placeholder 2</div>
                        </div>
                        <div className="vote-buttons">
                            <button className="upvote-button">↑</button>
                            <button className="downvote-button">↓</button>
                        </div>
                        <div className="form-item">
                            <label>Comment</label>
                            <textarea className="input-box" readOnly>Sample comment for blog 2.</textarea>
                        </div>
                        <div className="vote-buttons">
                            <button className="upvote-button">↑</button>
                            <button className="downvote-button">↓</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllBlogsPage;
