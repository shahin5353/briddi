import React from 'react';
import HeroBlock from '../../Component/HeroBlock/HeroBlock';
import NewsBlock from '../../Component/NewsBlock/NewsBlock';
import FeatureBlock from '../../Component/FeatureBlock/FeatureBlock';
import TopSidebar from '../../Component/TopSidebar/TopSidebar';
import BottomSidebar from '../../Component/BottomSidebar/BottomSidebar';
import FilterBox from '../../Component/FilterBox/FilterBox';

const ContentPage = () => {
    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-lg-2 col-md-2 col-sm-4 d-none d-lg-block">
                    <FilterBox/>
                </div>
                <div className="col-lg-7 col-md-8 px-4">
                    <HeroBlock/>
                    <NewsBlock/>
                    <FeatureBlock/>
                </div>
                <div className="col-lg-3 col-md-4">
                    <TopSidebar/>
                    <BottomSidebar/>
                </div>
            </div>
        </div>
    );
};

export default ContentPage;