// HomePage.jsx
import React from 'react';
import CustomNavbar from './CustomNavbar';
import './HomePage.css'; // Ensure this file exists

function HomePage() {
    // Sample blog data
    const blogs = [
        { id: 1, title: "Blog 1", author: "user1", image: "Static Image 1" },
        { id: 2, title: "Blog 2", author: "user2", image: "Static Image 2" },
        { id: 3, title: "Blog 3", author: "user3", image: "Static Image 3" }
    ];

    return (
        <div className="home-page">
            {/* Include the custom navigation bar */}
            <CustomNavbar />
          

            {/* Main Blog List */}
            <div className="content">
                <h2>All Blogs Page</h2>
                <div className="blogs-container">
                    {blogs.map((blog) => (
                        <div className="blog-item" key={blog.id}>
                            <div className="blog-info">
                                <h3>{blog.title}</h3>
                                <p>Written by {blog.author}</p>
                            </div>
                            <div className="blog-actions">
                                <div className="static-image">{blog.image}</div>
                                <div className="vote-buttons">
                                    <button className="upvote-button">↑</button>
                                    <button className="downvote-button">↓</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             {/* Comment Section */}
             <div className="comment-section">
                    <h3>Leave a Comment Below</h3>
                    <textarea className="comment-box" placeholder="Type your comment here..."></textarea>
                    <button className="comment-submit">Post Comment</button>
                </div>
        </div>
    );
}

export default HomePage;