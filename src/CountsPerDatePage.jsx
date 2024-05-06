// CountsPerDatePage.jsx
import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './CountsPerDatePage.css'; // Import the CSS for this page

function CountsPerDatePage() {
    return (
        
        <div className="counts-per-date-page">
     <Navbar />

            <div className="content">
                <h2>Count Per Date Page</h2>

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

                <div className="counts">
                    <div className="count-row">
                        <label>User Count</label>
                        <input type="number" className="input-box" />
                    </div>
                    <div className="count-row">
                        <label>Blog Count</label>
                        <input type="number" className="input-box" />
                    </div>
                    <div className="count-row">
                        <label>Total Comments</label>
                        <input type="number" className="input-box" />
                    </div>
                    <div className="count-row">
                        <label>Upvotes</label>
                        <input type="number" className="input-box" />
                    </div>
                    <div className="count-row">
                        <label>Downvotes</label>
                        <input type="number" className="input-box" />
                    </div>
                </div>

            
            </div>
        </div>
    );
}

export default CountsPerDatePage;
