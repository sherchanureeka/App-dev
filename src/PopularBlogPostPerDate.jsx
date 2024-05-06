// PopularBlogPostPerDate.jsx
import React from 'react';
import Navbar from './Navbar'; // Ensure this path matches where the Navbar is located
import './PopularBlogPostPerDate.css'; // Adjust path as needed

function PopularBlogPostPerDate() {
    return (
        
        <div className="popular-blog-post-per-date">
             <Navbar />

            <div className="content">
                <h2>Popular Blog Post Per Date</h2>

                <div className="date-range">
                    <label htmlFor="from-date">From</label>
                    <select id="from-date">
                        <option>Date</option>
                    </select>
                    <label htmlFor="to-date">to</label>
                    <select id="to-date">
                        <option>Date</option>
                    </select>
                </div>

                {/* Blog Form Fields */}
                <div className="form-fields">
                    <div className="form-item">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" className="input-box" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="blog-title">Blog Title</label>
                        <input id="blog-title" type="text" className="input-box" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="blog-text">Blog Text</label>
                        <textarea id="blog-text" className="input-box"></textarea>
                    </div>
                    <div className="form-item">
                        <label htmlFor="image">Image</label>
                        <div id="image" className="static-image">Static Image Placeholder</div>
                    </div>
                </div>

                {/* Upvote/Downvote Section */}
                <div className="vote-buttons">
                    <button className="upvote-button" aria-label="Upvote">↑</button>
                    <button className="downvote-button" aria-label="Downvote">↓</button>
                </div>
            </div>
        </div>
    );
}

export default PopularBlogPostPerDate;
