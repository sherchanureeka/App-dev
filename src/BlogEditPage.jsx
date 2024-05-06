// BlogEditPage.jsx
import React, { useState } from 'react';
import './BlogEditPage.css';

function BlogEditPage() {
    
    const [paragraph1, setParagraph1] = useState("A paragraph of text with an unassigned link.");
    const [paragraph2, setParagraph2] = useState("A second row of text with a web link.");
    const [paragraph3, setParagraph3] = useState("An icon ➕ inline with text.");

    const handleEdit = () => {
        alert("Editing blog post");
       
    };

    const handleCreate = () => {
        alert("Creating a new blog post");
        
    };

    const handleDelete = () => {
        alert("Deleting blog post");
        
    };

    return (
        <div className="blog-edit-page">
            <h2>Blog 1</h2>
            <div className="blog-content">
                <p><strong>{paragraph1}</strong> <a href="#unassigned">unassigned link</a></p>
                <p><em>{paragraph2}</em> <a href="#web-link">web link</a></p>
                <p>An icon <strong>➕</strong> inline with text.</p>
            </div>
            <div className="blog-content">
                <p><strong>{paragraph1}</strong> <a href="#unassigned">unassigned link</a></p>
                <p><em>{paragraph2}</em> <a href="#web-link">web link</a></p>
                <p>An icon <strong>➕</strong> inline with text.</p>
            </div>
            <div className="blog-content">
                <p><strong>{paragraph1}</strong> <a href="#unassigned">unassigned link</a></p>
                <p><em>{paragraph2}</em> <a href="#web-link">web link</a></p>
                <p>An icon <strong>➕</strong> inline with text.</p>
            </div>
            {/* Edit Button */}
            <div className="edit-button-section">
                <button className="edit-button" onClick={handleEdit}>Edit</button>
            </div>

            {/* Create and Delete Buttons */}
            <div className="action-buttons">
                <button className="create-button" onClick={handleCreate}>Create</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default BlogEditPage;
