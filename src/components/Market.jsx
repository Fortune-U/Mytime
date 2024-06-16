import growth from '../assets/Image.png';
import hr from '../assets/hr.png';
import spam from '../assets/spam.png';
import she from '../assets/she.png';
import prod from '../assets/prod.png';
import deal from '../assets/deal.png';
import '../App.css';


export default function Market() {
    return(
        <div className='market-wrp'>
                        <p className='atm'>Automated marketing that grows your business</p>
            <div>

            <div className='ad-box'>
                <p className='atm-s'>Automate your Growth</p>
                <img src={growth} alt="" />
                <p className='deets'>Reduce no-shows, get more reviews, and drive customer referrals with automated emails and text messages</p>
            </div>

            <div className='ad-box'>
                <p className='atm-s'>Keep Your Schedule Filled</p>
                <img src={hr} alt="" />
                <p className='deets'>Just click on an unfilled time to create a flash sale and push it out via social media, push notification, or email.</p>
            </div>

            <div className='ad-box'>
                <p className='atm-s'>Email Campaigns that Work</p>
                <img src={spam} alt="" />
                <p className='deets'>Create campaigns based on appointment history or custom segments that you create. You can even add unique promo codes!</p>
            </div>

            <div className='ad-box'>
                <p className='atm-s'>Get Found Online</p>
                <img src={she} alt="" />
                <p className='deets'>We'll make sure you have an accurate profile and service menu across important sites such as Google, Yelp and Facebook.</p>
            </div>

            <div className='ad-box'>
                <p className='atm-s'>Emails in Your Style</p>
                <img src={prod} alt="" />
                <p className='deets'>Just click to edit templates with our easy-to-use What-You-See-Is-What-You-Get editor. It's never been so easy to personalize your communications.</p>
            </div>

            <div className='ad-box'>
                <p className='atm-s'>Improve Your Reputation</p>
                <img src={deal} alt="" />
                <p className='deets'>MyTime automatically prompts happy customers to share their reviews on whichever site you select. Feedback from dissatisfied clients is emailed privately to you.</p>
            </div>

            </div>
        </div>
    );
}