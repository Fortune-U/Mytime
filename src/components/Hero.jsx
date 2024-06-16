import '../App.css'
import React from "react";
import { cn } from "@/lib/utils"
import { useEffect } from 'react';
//import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
  
import logo from "../assets/image 21.png";

const components= [
    {
      title: "MyTime Booking Manager",
      href: "/docs/primitives/alert-dialog",
      description:
        "Streamline your appointment scheduling with MyTime Booking Manager. Effortlessly manage and schedule bookings with automated reminders and real-time updates, ensuring no appointments are missed and clients stay informed.",
    },
    {
      title: "MyTime Client Relations",
      href: "/docs/primitives/hover-card",
      description:
        "Enhance your client interactions with MyTime Client Relations. This tool helps you keep track of client preferences, histories, and communications, enabling personalized and efficient service.",
    },
    {
      title: "MyTime POS (Point of Sale)",
      href: "/docs/primitives/progress",
      description:
        "Simplify transactions with MyTime POS. An integrated point of sale system that handles payments, invoicing, and receipts, all in one place.",
    },
    {
      title: "MyTime Staff Coordinator",
      href: "/docs/primitives/scroll-area",
      description: "Optimize your workforce management with MyTime Staff Coordinator. Easily schedule shifts, track work hours, and manage staff availability.",
    },
    {
      title: "MyTime Marketing Suite",
      href: "/docs/primitives/tabs",
      description:
        "Grow your business with MyTime Marketing Suite. Design and implement targeted marketing campaigns, track their effectiveness.",
    },
    {
      title: "MyTime Analytics",
      href: "/docs/primitives/tooltip",
      description:
        "Make data-driven decisions with MyTime Analytics. Access comprehensive reports and insights on your business performance.",
    },
  ]

  const pricing= [
    {
      title: "Starter Plan $29/month",
      href: "/docs/primitives/alert-dialog",
      description:
        "Ideal for small businesses just starting out. Includes basic features for booking management and client relations. Limited to 2 staff members and 50 bookings per month.",
    },
    {
      title: "Basic Plan $59/month",
      href: "/docs/primitives/hover-card",
      description:
        "Perfect for growing businesses. Offers advanced booking management, client relations, and POS integration. Supports up to 5 staff members and 200 bookings per month.",
    },
    {
      title: "Professional Plan $99/month",
      href: "/docs/primitives/progress",
      description:
        "Designed for established businesses needing comprehensive tools. Includes all Basic Plan features plus staff coordination and marketing suite. Supports up to 10 staff members and 500 bookings per month.",
    },
    {
      title: "Business Plan $149/month",
      href: "/docs/primitives/scroll-area",
      description: "Tailored for larger businesses with extensive needs. Provides all Professional Plan features with added advanced analytics and custom reporting. Supports up to 20 staff members and 1,000 bookings per month.",
    },
    {
      title: "Enterprise Plan $299/month",
      href: "/docs/primitives/tabs",
      description:
        "For large enterprises requiring extensive customization and support. Includes all Business Plan features with priority support and unlimited staff and bookings. Customized features available upon request.",
    },
    {
      title: "Pay-As-You-Go Plan",
      href: "/docs/primitives/tooltip",
      description:
        "Flexible plan for businesses with fluctuating needs. Pay only for the features and usage you need each month. Ideal for seasonal businesses or those with unpredictable volumes.",
    },
  ]
  


export default function Hero () {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        <div className='hero'>
            <div className='Nav-bar'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img src={logo} alt='' />
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Mytime
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Revolutionize your Beauty salon and Spa Franchise Operations
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
              With MyTime, managing bookings, client relations, point of sale, staff coordination, and so much more just got a whole lot easier.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                Get started on our web app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Tools">
              All the tools you need powered with automated workflows
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[340px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[340px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {pricing.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>



                </div>
                <div className=" nav-btns">
                    <button className='sgn'>Sign in</button>
                    <button className='bkd'>Book a Demo</button>
                </div>
            </div>

            <div className='area'>


            <div className='cnt'>
              <p className='p1'>Revolutionize your Beauty salon and Spa Franchise Operations</p>
              <p className='p2'>With MyTime, managing bookings, client relations, point of sale, staff coordination, and so much more just got a whole lot easier. All the tools you need powered with automated workflows - grow smarter.</p>
              <div className='nav-btns'>
                <button className='bkd'> Book a Demo</button>
                <button className='sgn'>Sign in</button>
              </div>
            </div>

            <p className='p3'>Watch the video</p>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  ));
  ListItem.displayName = "ListItem";