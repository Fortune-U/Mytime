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
                <p className='atm-s'>Automate your Growth</p>
                <img src={hr} alt="" />
                <p className='deets'>Reduce no-shows, get more reviews, and drive customer referrals with automated emails and text messages</p>
            </div>

            <div className='ad-box'>
                <p className='atm-s'>Automate your Growth</p>
                <img src={spam} alt="" />
                <p className='deets'>Reduce no-shows, get more reviews, and drive customer referrals with automated emails and text messages</p>
            </div>

            <div className='ad-box'>
                <p className='atm-s'>Automate your Growth</p>
                <img src={she} alt="" />
                <p className='deets'>Reduce no-shows, get more reviews, and drive customer referrals with automated emails and text messages</p>
            </div>

            <div className='ad-box'>
                <p className='atm-s'>Automate your Growth</p>
                <img src={prod} alt="" />
                <p className='deets'>Reduce no-shows, get more reviews, and drive customer referrals with automated emails and text messages</p>
            </div>

            <div className='ad-box'>
                <p className='atm-s'>Automate your Growth</p>
                <img src={deal} alt="" />
                <p className='deets'>Reduce no-shows, get more reviews, and drive customer referrals with automated emails and text messages</p>
            </div>

            </div>
        </div>
    );
}