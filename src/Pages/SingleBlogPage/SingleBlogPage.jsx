import React from 'react';
import SingleBlog from '../../Component/SingleBlog/SingleBlog';
import TopSidebar from '../../Component/TopSidebar/TopSidebar';
import BottomSidebar from '../../Component/BottomSidebar/BottomSidebar';

const SingleBlogPage = () => {
    return (
        <div className="container">
        <div className="row py-4">
            <div className="col-lg-8 col-md-9 px-4">
            <SingleBlog/>
            </div>
            <div className="col-lg-4 col-md-3">
                <TopSidebar/>
                <BottomSidebar/>
            </div>
        </div>
    </div>
    );
};

export default SingleBlogPage;