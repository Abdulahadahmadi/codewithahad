import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GoogleAdSense from './components/GoogleAdSense'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      {/* write head section for seo of my website */}
      <Head>
        <title>Code With Ahad</title>
        <meta name="description" content="Explore a world of programming and tech insights on 'Code with Ahad.' Discover in-depth articles, tutorials, and posts covering software development, coding tips, and the latest tech trends. Level up your skills and stay up-to-date with Ahad's expertise in the world of technology." />
        <meta name='keywords' content='code with ahad, codewithahad, programming, coding, blogging, Abdul Ahad, Ahad, Technology personal platform, blog, code with ahad in youtube, software, software developer, development, ui, ux, design, ahad design' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Service />
      <GoogleAdSense />
      <About />
      <Testimonial />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  )
}
