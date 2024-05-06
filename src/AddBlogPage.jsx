// AddBlogPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBlogPage.css'; // Ensure this CSS file exists

function AddBlogPage() {
    const navigate = useNavigate();

    // Placeholder function to handle adding a blog post
    const handleAddBlog = () => {
        alert("Blog post added!");
        // Perform additional logic for saving the blog
    };

    return (
        <div className="add-blog-page">
            <div className="content">
                <h2>Add Blog</h2>

                <div className="form-fields">
                    <div className="form-item">
                        <input
                            type="text"
                            className="input-box"
                            placeholder="Input your blog title"
                        />
                    </div>
                    <div className="form-item">
                        <textarea
                            className="input-box"
                            placeholder="Input your blog content"
                        ></textarea>
                    </div>
                    <div className="form-item">
                        <label>Image:</label>
                        <button className="image-button">Pick Image</button>
                    </div>
                </div>

                {/* Add and Go Back Buttons */}
                <div className="action-buttons">
                    <button className="add-button" onClick={handleAddBlog}>Add</button>
                    <button className="go-back-button" onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </div>
    );
}

export default AddBlogPage;
