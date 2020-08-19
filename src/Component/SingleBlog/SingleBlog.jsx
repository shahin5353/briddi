import React from 'react';
import './SingleBlog.scss';
import demoImg from '../../Images/stadium.jpg';
import authorImg from '../../Images/author.jpg';

const SingleBlog = () => {
    return (
        <div className="single-blog">
            <div className="blog-header">
                <h4 className="font-italic text-uppercase">news <span className="post-time">08/18/2020 03:36 pm BD </span></h4>
                <h1>Lincoln Project Accused Of Plagiarizing, Improperly Attributing Viral Content</h1>
                <h6 className="lead">In response to the allegations, the anti-Trump Republican group said it would “make every effort to attribute content” in the future.</h6>
                <div className="author d-flex my-2"><img src={authorImg} alt=""/><p className="py-3 pl-2">By Hayley Miller</p></div>
            </div>
           <div><img src={demoImg} alt=""/></div>
           <div className="blog-text py-4">
               <p>
               The Lincoln Project, the Republican group that has gained popularity among some liberals for its snarky anti-Trump tweets and videos, has been accused by some content creators of plagiarism and improper attribution.</p>

<p>Several Twitter users, including video editor and comedian Vic Berger, alleged in recent weeks that The Lincoln Project copied their tweets or used their photos and videos without permission or proper attribution. The group — whose content earned it nearly 2 million followers and millions in cash from political donors in just a few months — was benefiting from smaller creators’ content for free, they said.</p>

<p>In one instance, the group shared without credit an edited image Berger had created that made it look as though Trump had framed photos of convicted sex offender Jeffrey Epstein on his desk in the Oval Office. </p>

<p>The accusations garnered widespread attention on Sunday when NBC News reporter Brandy Zadrozny shared several of the claims with her 48,000 Twitter followers.</p>

<p>“Stealing from creators is a nonpartisan crime,” Zadrozny wrote in her tweet, which had been retweeted more than 4,000 times as of Tuesday.</p>
<p>In a statement to HuffPost, The Lincoln Project said Tuesday that it would “make every effort to attribute content” in the future.</p>

<p>“The Lincoln Project works every day to defeat Donald Trump and his enablers in November,” the group said in its statement. “Along the way, we’ve scaled quickly, and have been fortunate to build a larger social following than we ever could’ve hoped for.”</p>

<p>The statement continued: “We recognize that with our reach comes a responsibility to always recognize the talent and hard work of creators. Moving forward, we will make every effort to attribute content, and we are evolving our policies to ensure that happens.”</p>

<p>The Lincoln Project was formed in late 2019 by several Republicans ― including attorney George Conway, the husband of White House adviser Kellyanne Conway ― with the stated purpose of preventing Trump’s reelection.</p>

<p>Many so-called Resistance Democrats latched on to the group’s Trump-trolling ads, creating a surge of enthusiasm for the group that reflected in both its social media presence and its piggy bank.</p>

<p>The Lincoln Project’s Twitter account, created in December 2019, has more than 1.9 million followers, and the group said it raised more than $16 million in donations between April and June. The Lincoln Project’s latest filings show the vast majority of its spending during this time period went to firms run by the group’s board members, according to the Center for Responsive Politics.
</p>
<p>In their allegations of plagiarism, some Twitter users noted The Lincoln Project’s connection to Meme2020, a company founded by Jerry Media CEO Mick Purzycki. The New York Times reported last month on Meme2020’s partnership with The Lincoln Project in a campaign focused on voter mobilization.</p>

<p>Jerry Media, a social media marketing agency, was founded in 2016 by Purzycki, James Ohliger and Elliot Tebele, the owner and operator of the mega-popular Instagram account @fuckjerry. The company was subject to backlash last year after content creators, including Berger, accused it of stealing their content. It was also behind the failed Fyre Festival’s notorious promotional campaign.</p>




           </div>
        </div>
    );
};

export default SingleBlog;