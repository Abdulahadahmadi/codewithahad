import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import GoogleAdSense from './components/GoogleAdSense'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Code With Ahad',
  description: "Explore a world of programming and tech insights on 'Code with Ahad.' Discover in-depth articles, tutorials, and posts covering software development, coding tips, and the latest tech trends. Level up your skills and stay up-to-date with Ahad's expertise in the world of technology.",
  keywords: 'code with ahad, codewithahad, web, website, web app, web application, programming, coding, blogging, Abdul Ahad, Ahad, Technology personal platform, blog, code with ahad in youtube, software, software developer, development, ui, ux, design, ahad design, youtube channel, youtube, problem solving, programming competition, icpc, international colligate programming contest, acm',
  icons: ['/favicon.ico'],
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <GoogleAdSense />
      <About />
      <Testimonial />
      <Portfolio />
      <Contact />

    </div>
  )
}
