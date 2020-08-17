import React from 'react';
import './ContentPage.scss';
import stadium from '../../Images/stadium.jpg';

const ContentPage = () => {
    return (
        <div className="container-fluid">
            <div className="row body">
                <div className="col-lg-2">
                    <h2>lets start</h2>
                </div>
                <div className="col-lg-8 middle-part">
                    <div className='title-text'>
                        <h2>THE BIG IDEA LIVING 'IN</h2>
                        <h2>THE SHADOW OF</h2>
                        <h2>POLICING</h2>
                    </div>
                    <img className='title-img' src={stadium} alt="title pic here"/>
                    <h4 style={{textAlign: 'center', fontWeight: '700'}}>/LATEST NEWS/</h4>
                    
                    <div className="row latest-news1">
                        <div className="col-lg-4">
                            <div className="box">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                    </div>
                    <br/><br/>

                    <div className="row latest-news1">
                        <div className="col-lg-4">
                            <div className="box">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                        <div className="col-lg-4">
                            <div className="box">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                    </div>
                    <br/><br/>

                    <h4 style={{textAlign: 'center', fontWeight: '700'}}>/FEATURED/</h4>

                    <div className="row latest-news2">
                        <div className="col-lg-6">
                            <div className="box1">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                        <div className="col-lg-6">
                            <div className="box1">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                    </div>

                    <div className="row latest-news2">
                        <div className="col-lg-6">
                            <div className="box1">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                        <div className="col-lg-6">
                            <div className="box1">

                            </div>
                            <h6>POLITICS</h6>
                            <h6>The name of our country is Bangladesh. It is a very beautiful country. It is an agricultural country.</h6>
                        </div>
                    </div>

                </div>
                <div className="col-lg-2 last-part">
                    <h2>lets start</h2>
                    <p>The name of our country is Bangladesh.</p>
                    <p>The name of our country is Bangladesh.</p>
                    <p>The name of our country is Bangladesh.</p>
                    <p>The name of our country is Bangladesh.</p>
                    
                    <h6 style={{textAlign: 'center', fontWeight: '700'}}>/WHAT'S HAPPENING/</h6>

                    <div>
                        <div className="row">
                            <div className="col-lg-4 box3">
                            
                            </div>
                            <div className="col-lg-8">
                            <h6>The name of our country is Bangladesh. It is a very beautiful country.</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 box3">
                            
                            </div>
                            <div className="col-lg-8">
                            <h6>The name of our country is Bangladesh. It is a very beautiful country.</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 box3">
                            
                            </div>
                            <div className="col-lg-8">
                            <h6>The name of our country is Bangladesh. It is a very beautiful country.</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 box3">
                            
                            </div>
                            <div className="col-lg-8">
                            <h6>The name of our country is Bangladesh. It is a very beautiful country.</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 box3">
                            
                            </div>
                            <div className="col-lg-8">
                            <h6>The name of our country is Bangladesh. It is a very beautiful country.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentPage;