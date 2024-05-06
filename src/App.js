import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Surfers from './Surfers';
import ChangePassword from './ChangePassword';
import PopularBlogPostPerDate from './PopularBlogPostPerDate';
import PopularPostPagePerDate from './PopularPostPagePerDate';
import CountsPerDatePage from './CountsPerDatePage';
import AllBlogsPage from './AllBlogsPage';
import AddBlogPage from './AddBlogPage';
import BlogListPage from './BlogListPage';
import UpdateBlogPage from './UpdateBlogPage';
import UserListPage from './UserListPage';
import UpdateUserPage from './UpdateUserPage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import AdminDashboard from './AdminDashboard';
import BlogEditPage from './BlogEditPage';

function App() {
    return (
        <Router>
            <div className="App">
                
                <div className="content">
                    <Routes>
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/surfers" element={<Surfers />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/countsperdate" element={<CountsPerDatePage />} />
                        <Route path="/popular-post-page-per-date" element={<PopularPostPagePerDate />} />
                        <Route path="/popular-blog-post-per-date" element={<PopularBlogPostPerDate />} />
                        <Route path="/allblogs" element={<AllBlogsPage />} />
                        <Route path="/addblogs" element={<AddBlogPage />} />
                        <Route path="/bloglist" element={<BlogListPage />} />
                        <Route path="/updateblog" element={<UpdateBlogPage />} />
                        <Route path="/userlist" element={<UserListPage />} />
                        <Route path="/updateuser" element={<UpdateUserPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/blog-edit" element={<BlogEditPage />} />
                        <Route path="/change-password" element={<ChangePassword />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
