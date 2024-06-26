import image1 from '../assets/oil.png';
import flat from '../assets/Flat Cylinder 5.png';
import clock from '../assets/clock.png';
import calendar from '../assets/calendar.png';
import schedule from '../assets/schedule.png';
import ChartBar from '../assets/ChartBar.png';
import users from '../assets/users.png';
import lineup from '../assets/lineup.png';
import '../App.css';


export function Adthree () {
    return(
        <div className='ad-ctn'>
       <div className='why'>
        <img src={flat} alt='' />
        <p className='whytxt'>Why MyTime?</p>
       </div>
       <p className='p4'>Online scheduling 
       and staff management</p>
       <p className='p5'>MyTime is as customizable as you need it to be and fully-integrated. You can focus on customer experience, instead of technology.</p>
       <div className='disp-btns'>
        <button> Book a Demo</button>
        <p>See all features</p>
       </div>
       <div className='img-ctn'>
        
       </div>

       <div className='feats-ctn'>
        <div className='feats2'>
            <img src={clock} alt="" />
            <p className='ttl'>Easy Checkout on Web or Mobile</p>
            <p className='tt2'>Easily sell products and services on the same ticket.Our built-in credit card processing makes it easy to accept payment from all cards at one low rate.</p>
        </div>

        <div className='feats2'>
            <img src={calendar} alt="" />
            <p className='ttl'>POS Hardware Integration</p>
            <p className='tt2'>Make that last experience a great one, with easy checkout for your clients and staff.</p>
        </div>

        <div className='feats2'>
            <img src={schedule} alt="" />
            <p className='ttl'>Manage Your Inventory</p>
            <p className='tt2'>Automatically track product inventory and receive replenishment alerts whenever it's time to re-order.</p>
        </div>

        <div className='feats2'>
            <img src={ChartBar} alt="" />
            <p className='ttl'>Sell Gift Cards and Packages</p>
            <p className='tt2'>Sell and track gift cards and packages online and in person. Encourage purchases by making the redemption process simple.</p>
        </div>

        <div className='feats2'>
            <img src={users} alt="" />
            <p className='ttl'>Make Accounting Simple</p>
            <p className='tt2'>Calculate your sales tax, staff commissions, and full Profit & Loss. Instant sync with QuickBooks Online will make your accountant happy.</p>
        </div>

        <div className='feats2'>
            <img src={lineup} alt="" />
            <p className='ttl'>Get Paid Quickly</p>
            <p className='tt2'>Receive payment to your account in one day. Earn more with our low 2.5% + $0.30 per transaction flat processing fee for all credit cards.</p>
        </div>
       </div>

        <div className='disp3'>
         <p className='tt'>Take the first step towards revolutionising your operations</p>
         <p className='tt5'>MyTime is as customizable as you need it to be and fully-integrated. You can focus on customer experience, instead of technology.</p>
         <button className='d-bkd'>Book a Demo</button>
        </div>


    </div>
    )
}