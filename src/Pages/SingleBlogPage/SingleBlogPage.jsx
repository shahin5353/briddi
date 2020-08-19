import React from 'react';
import SingleBlog from '../../Component/SingleBlog/SingleBlog';
import TopSidebar from '../../Component/TopSidebar/TopSidebar';
import BottomSidebar from '../../Component/BottomSidebar/BottomSidebar';

const SingleBlogPage = () => {
    return (
        <div className="container">
        <div className="row py-4">
            <div className="col-lg-8 col-md-8 col-sm-12 px-4">
            <SingleBlog/>
            </div>
            <div className="col-lg-4 col-md-2 col-sm-4 last-part">
                <TopSidebar/>
                <BottomSidebar/>
            </div>
        </div>
    </div>
    );
};

export default SingleBlogPage;