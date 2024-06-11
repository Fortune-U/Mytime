import image1 from '../assets/image 11.png';
import oven from '../assets/Oven.png';
import flat from '../assets/Flat Cylinder 5.png';
import chat from '../assets/Chats.png';
import atom from '../assets/Atom.png';
import mail from '../assets/Mailbox.png';
import cash from '../assets/CashRegister.png';
import planet from '../assets/Planet.png';

import '../App.css';


export default function Ad ()
{
    return(
    <div className='ad-ctn'>
       <div className='why'>
        <img src={flat} alt='' />
        <p className='whytxt'>Why MyTime?</p>
       </div>
       <p className='p4'>Manage your Salon or Spa with ease</p>
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
            <p className='ttl'>Exclusive Online Booking Integrations</p>
            <p className='tt2'>Our exclusive partner network let clients find & book you directly from Google, Bing and Facebook. Expect 20% more online bookings!</p>
        </div>

        <div className='feats'>
            <img src={chat} alt="" />
            <p className='ttl'>Real-time Messaging with Clients</p>
            <p className='tt2'>Send and receive messages and share photos with your clients in real-time. You won't believe how much this will increase your client engagement.</p>
        </div>

        <div className='feats'>
            <img src={atom} alt="" />
            <p className='ttl'>Automated Marketing</p>
            <p className='tt2'>Reduce no-shows by 85%, win back lapsed clients, and improve your online reviews with our automated email and text message marketing.</p>
        </div>

        <div className='feats'>
            <img src={mail} alt="" />
            <p className='ttl'>Integrated Email Campaigns</p>
            <p className='tt2'>Send customized marketing campaigns with promo codes based on appointment history. Remember, engaged clients come back more often.</p>
        </div>

        <div className='feats'>
            <img src={cash} alt="" />
            <p className='ttl'>Full POS & Inventory Tracking</p>
            <p className='tt2'>Why have two systems? Take payment for your online bookings and in-store purchases with a single system - at industry-leading credit card rates.</p>
        </div>

        <div className='feats'>
            <img src={planet} alt="" />
            <p className='ttl'>Web Presence Management</p>
            <p className='tt2'>Built-in Listing and Reputation Management makes your business discoverable throughout the Web, and with better reviews to boot.</p>
        </div>
       </div>



    </div>
    )
}