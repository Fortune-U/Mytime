import image1 from '../assets/oil.png';
import oven from '../assets/Oven.png';
import flat from '../assets/Flat Cylinder 5.png';
import disp from '../assets/disp.png';
import '../App.css';

export default function Adtwo(){
    return(
        <div className='ad-ctn'>
       <div className='why'>
        <img src={flat} alt='' />
        <p className='whytxt'>Why MyTime?</p>
       </div>
       <p className='p4'>Point of Sale and
       Inventory management</p>
       <p className='p5'>MyTime is as customizable as you need it to be and fully-integrated. You can focus on customer experience, instead of technology.</p>
       <div className='disp-btns'>
        <button> Book a Demo</button>
        <p>See all features</p>
       </div>
       <div className='img-ctn'>
        <img src={image1} alt="" />
       </div>

       <div className='feats-ctn'>
        <div className='feats'>
            <img src={oven} alt="" />
            <p className='ttl'>Easy Checkout on Web or Mobile</p>
            <p className='tt2'>Easily sell products and services on the same ticket.Our built-in credit card processing makes it easy to accept payment from all cards at one low rate.</p>
        </div>

        <div className='feats'>
            <img src={oven} alt="" />
            <p className='ttl'>POS Hardware Integration</p>
            <p className='tt2'>Make that last experience a great one, with easy checkout for your clients and staff.</p>
        </div>

        <div className='feats'>
            <img src={oven} alt="" />
            <p className='ttl'>Manage Your Inventory</p>
            <p className='tt2'>Automatically track product inventory and receive replenishment alerts whenever it's time to re-order.</p>
        </div>

        <div className='feats'>
            <img src={oven} alt="" />
            <p className='ttl'>Sell Gift Cards and Packages</p>
            <p className='tt2'>Sell and track gift cards and packages online and in person. Encourage purchases by making the redemption process simple.</p>
        </div>

        <div className='feats'>
            <img src={oven} alt="" />
            <p className='ttl'>Make Accounting Simple</p>
            <p className='tt2'>Calculate your sales tax, staff commissions, and full Profit & Loss. Instant sync with QuickBooks Online will make your accountant happy.</p>
        </div>

        <div className='feats'>
            <img src={oven} alt="" />
            <p className='ttl'>Get Paid Quickly</p>
            <p className='tt2'>Receive payment to your account in one day. Earn more with our low 2.5% + $0.30 per transaction flat processing fee for all credit cards.</p>
        </div>
       </div>

        <div className='disp2'>
          <img src={disp} alt='' />
        </div>


    </div>
    )
}