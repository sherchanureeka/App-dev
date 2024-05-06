

import React from 'react';
import './Surfers.css'; // Ensure CSS styles are defined as needed

function Surfers() {
    return (
        <div className="home-page">
            <nav className="top-nav">
                <a href="/home">Home</a>
                <a href="/surfers">Surfers</a>
                <a href="/profile">Profile</a>
                <a href="/login">Log In</a>
            </nav>
            <div className="blog-post">
                <h1>Title 3</h1>
                <p>A paragraph of text with an <button className="link-button" onClick={() => { console.log('Link clicked!'); }}>unassigned link</button>.</p>
                <p>A second row of text with a <button className="link-button" onClick={() => { console.log('Link clicked!'); }}>web link</button>.</p>
                <p>An icon <i className="icon-placeholder">🔗</i> inline with text.</p>
                <div className="blog-images">
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                </div>
            </div>
            <div className="comment-section">
                <h2>Leave A Comment</h2>
                <input type="text" placeholder="Your comment here..." />
                <button>Comment</button>
            </div>
            <div className="comments-display">
                <h2>Comments</h2>
                <p>A paragraph of text with an <i className="icon-placeholder">🔗</i> unassigned link.</p>
                <p>A second row of text with a <button className="link-button" onClick={() => { console.log('Link clicked!'); }}>web link</button>.</p>
                <p>An icon <i className="icon-placeholder">🔗</i> inline with text.</p>
            </div>
        </div>
    );
}

export default Surfers;
