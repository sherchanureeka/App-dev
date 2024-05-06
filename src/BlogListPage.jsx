// BlogListPage.jsx
import React from 'react';
import './BlogListPage.css';

function BlogListPage() {
    // Sample data to display in the table
    const blogData = [
        { id: 1, title: "First Blog Post", content: "This is the first blog post content.", image: "Image 1" },
        { id: 2, title: "Second Blog Post", content: "This is the second blog post content.", image: "Image 2" }
    ];

    // Handlers for updating and deleting blog posts
    const handleUpdate = (id) => {
        alert(`Update blog with ID: ${id}`);
        // Add logic for updating the specific blog
    };

    const handleDelete = (id) => {
        alert(`Delete blog with ID: ${id}`);
        // Add logic for deleting the specific blog
    };

    return (
        <div className="blog-list-page">
            <div className="content">
                <h2>Blog List</h2>
                <table className="blog-table">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Blog Title</th>
                            <th>Content</th>
                            <th>Image</th>
                            <th>Actions</th> {/* New column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {blogData.map((blog, index) => (
                            <tr key={blog.id}>
                                <td>{index + 1}</td>
                                <td>{blog.title}</td>
                                <td>{blog.content}</td>
                                <td>{blog.image}</td>
                                <td className="actions">
                                    <button className="update-button" onClick={() => handleUpdate(blog.id)}>Update</button>
                                    <button className="delete-button" onClick={() => handleDelete(blog.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BlogListPage;
