// UpdateBlogPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateBlogPage.css'; // Make sure the CSS file exists

function UpdateBlogPage() {
    const navigate = useNavigate();

    // State for the blog details
    const [blogTitle, setBlogTitle] = useState('Current Blog Title');
    const [blogContent, setBlogContent] = useState('Current blog content goes here.');
    const [blogImage, setBlogImage] = useState('Pick Image');

    // Placeholder function to handle updating a blog post
    const handleUpdateBlog = () => {
        alert("Blog post updated!");
        // Add logic to update the blog post
    };

    return (
        <div className="update-blog-page">
            <div className="content">
                <h2>Update Blog</h2>

                <div className="form-fields">
                    <div className="form-item">
                        <input
                            type="text"
                            className="input-box"
                            placeholder="Input your blog title"
                            value={blogTitle}
                            onChange={(e) => setBlogTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <textarea
                            className="input-box"
                            placeholder="Input your blog content"
                            value={blogContent}
                            onChange={(e) => setBlogContent(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-item">
                        <label>Image:</label>
                        <button className="image-button">{blogImage}</button>
                    </div>
                </div>

                {/* Update and Go Back Buttons */}
                <div className="action-buttons">
                    <button className="update-button" onClick={handleUpdateBlog}>Update</button>
                    <button className="go-back-button" onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateBlogPage;
