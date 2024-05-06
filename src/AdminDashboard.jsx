// AdminDashboard.jsx
import React, { useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
    const [overview, setOverview] = useState('Monthly Overview');

    // Placeholder data
    const topPosts = [
        { title: "Post Title 1", upvotes: 150, downvotes: 10 },
        { title: "Post Title 2", upvotes: 120, downvotes: 20 },
        { title: "Post Title 3", upvotes: 90, downvotes: 30 }
    ];

    const topBloggers = [
        { name: "Blogger Name 1", totalPosts: 10 },
        { name: "Blogger Name 2", totalPosts: 8 },
        { name: "Blogger Name 3", totalPosts: 5 }
    ];

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="monthly-overview">
                <label htmlFor="overview-select">Overview:</label>
                <select
                    id="overview-select"
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                >
                    <option>Monthly Overview</option>
                    <option>Weekly Overview</option>
                    <option>Daily Overview</option>
                </select>
            </div>

            {/* All-time Metrics */}
            <div className="metrics-section">
                <h3>All-time Metrics</h3>
                <p>Total Blog Posts: | Total Upvotes: | Total Downvotes:</p>
                <p>Total Comments: | Average Upvotes: | Average Downvotes:</p>
            </div>

            {/* Daily Metrics */}
            <div className="metrics-section">
                <h3>Daily Metrics</h3>
                <label>Date Range:</label>
                <a href="#date-picker">Date Picker</a>
            </div>

            {/* Top 10 Posts */}
            <div className="top-section">
                <h3>Top 10 Posts</h3>
                <ul>
                    {topPosts.map((post, index) => (
                        <li key={index}>
                            {index + 1}. {post.title} - Upvotes: {post.upvotes} | Downvotes: {post.downvotes}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Top 10 Bloggers */}
            <div className="top-section">
                <h3>Top 10 Bloggers</h3>
                <ul>
                    {topBloggers.map((blogger, index) => (
                        <li key={index}>
                            {index + 1}. {blogger.name} - Total Posts: {blogger.totalPosts}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboard;
