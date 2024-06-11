import '../App.css'
import logo from "../assets/image 21.png";
import ig from "../assets/Frame 63.png";
import fb from "../assets/Frame 64.png";

export default function Footer () {
    return(
        <div className='footer'>
            <section className='sec1'>
                <div><img src={logo} alt='' /></div>
                <div className='socials'>
                    <img src={ig} alt='' />
                    <img src={fb} alt='' />

                </div>
            </section>
            <section className='sec2'>
                <p>FEATURES</p>
                <ul>
                    <li>Scheduling</li>
                    <li>Point of Sale</li>
                    <li>Search & social Bookings</li>
                    <li>2-way messaging</li>
                    <li>Analytics</li>
                </ul>
                <div className='btm'>
                    <p></p>
                    <p>09066021425</p>
                    <p>fortuneeziefula3@gmail.com</p>
                </div>
            </section>
            <section className='sec2'>
                <p>INFORMATION</p>
                <ul>
                    <li>Enterprise</li>
                    <li>Franchise</li>
                    <li>Blog</li>
                    <li>Support</li>
                    <li>Status</li>
                </ul>
            </section>
            <section className='sec2'>
                <p>COMPANY</p>
                <ul>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </section>
            <section className='sec3'>
                <p>&copy; 2021 - Novation Med</p>
                <p>All Rights Reserved</p>
            </section>
        </div>
    )
}