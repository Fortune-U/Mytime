import test1 from '../assets/image 18.png';
import womanOne from '../assets/alma-lxsduAdWXy4-unsplash.jpg'
import womanTwo from '../assets/etty-fidele-XjrKU_z4kXM-unsplash.jpg'
import womanThree from '../assets/prince-akachi-LWkFHEGpleE-unsplash.jpg'
import '../App.css';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function Testimonies () {
    return(
        <div className='test-ctn'>
           <div>

           
                <Carousel>
                
  <CarouselContent>
 
    <CarouselItem className="carousel-item"> <main>
                    <p className='t-p1'> “Things are a lot smoother since I started using MyTime. Now that clients can schedule and reschedule their appointments automatically, I don't have to worry about managing them.”</p>
                    <p className='t-p2'>Majesty Hair Salon</p>
                    <div>
                        <p className='t-p3'>Hannah Olsen</p>
                        <p className='t-4'>--Owner</p>
                    </div>
                </main>
                <aside>
                    <img src={womanOne} alt=''/>
                    </aside></CarouselItem>
    <CarouselItem className="carousel-item"><main>
                    <p className='t-p1'> “Things are a lot smoother since I started using MyTime. Now that clients can schedule and reschedule their appointments automatically, I don't have to worry about managing them.”</p>
                    <p className='t-p2'>Majesty Hair Salon</p>
                    <div>
                        <p className='t-p3'>Hannah Olsen</p>
                        <p className='t-4'>--Owner</p>
                    </div>
                </main>
                <aside>
                    <img src={womanTwo} alt=''/>
                    </aside></CarouselItem>
    <CarouselItem className="carousel-item"><main>
                    <p className='t-p1'> “Things are a lot smoother since I started using MyTime. Now that clients can schedule and reschedule their appointments automatically, I don't have to worry about managing them.”</p>
                    <p className='t-p2'>Majesty Hair Salon</p>
                    <div>
                        <p className='t-p3'>Hannah Olsen</p>
                        <p className='t-4'>--Owner</p>
                    </div>
                </main>
                <aside>
                    <img src={womanThree} alt=''/>
                    </aside></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="prev"  />
  <CarouselNext className="nxt" />
</Carousel>

</div>

            
            <div className='testimgs'>
                <img src={test1} alt="" />
                <img src={test1} alt="" />
                <img src={test1} alt="" />
                <img src={test1} alt="" />
                <img src={test1} alt="" />
                <img src={test1} alt="" />
            </div>
        </div>
    )
}