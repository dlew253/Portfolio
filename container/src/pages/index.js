import React from 'react'
import Helmet from 'react-helmet'
import brew from '../assets/images/thumbs/brewcrewlogo2.jpg'
import pong from '../assets/images/thumbs/pongthumb2.png'
import giveback from '../assets/images/thumbs/givebackLanding.png'
import p4 from '../assets/images/thumbs/p4logo.png'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const IMAGES = [
  {
    id: '1',
    //source: brewl,
    thumbnail: brew,
    caption: 'BrewCrew',
    description: 'Express based app designed to link beer lovers and breweries.',
    link: <Link to='/Portfolio/'/>,
  },
  {
    id: '2',
    //source: pongl,
    thumbnail: pong,
    caption: 'Pong',
    description: 'Pong. Created with HTML, CSS, and vanilla JavaScript',
  },
  {
    id: '3',
    //source: full03,
    thumbnail: p4,
    caption: 'RemindMe!',
    description: 'React.js and Flask based To-Do list.',
  },
  {
    id: '4',
    //source: full04,
    thumbnail: giveback,
    caption: 'GiveBack',
    description: 'Full-stack MERN project organizer created for community volunteers.',
  },
  
]

const HomeIndex = () => {
  const siteTitle = 'CodeDylan'
  const siteDescription = 'Web Portfolio of Dylan Lewis'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
             Who am i?
              <br />
              
            </h2>
          </header>
          <p>
            Passionate, determined, resourceful. A 28 year old former sous-chef turned web developer from Seattle Washington. After a decade of living out a childhood dream, I found myself hungry for a new challenge in my career path. A craving for problem solving and a desire to be a part of the future lined up a perfect storm of opportunity for my growth that lead me to General Assembly's Software Engineering Immersive bootcamp in January of 2020. 
          </p>
          
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery
            images={IMAGES.map(
              ({ id, source,
                 thumbnail, caption, description, link }) => ({
                source,
                thumbnail,
                caption,
                description,
                link,
              }),
            )}
          />
          <ul className="actions">
            <li>
              <Link to='/Portfolio' className="button" >
                Full Portfolio
              </Link>
            </li>
          </ul>
          
        </section>

        <section id="three">
          <h2>Skills</h2>
          <p>
            HTML, JavaScript, React.Js<br /> CSS, SCSS, Bootstrap, Material UI <br />Express, Node.js, Python, Flask, SQLAlchemy, Postgres, MongoDb, 
          </p>
        </section>

        <section id="four">
          <h2>Get In Touch</h2>
          <p>
            Feel free to reach out with any comments, messaged of good will, or job offers.
          </p>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <span>Dlew253@yahoo.com</span>
                </li>
                <li>
                <h3 className="icon fa-github">
                <span className="label">Github</span>
                </h3 >
                <a href="https://github.com/dlew253">dlew253</a>
                </li>
              </ul>
              <ul className="actions">
            <li>
              <h3>Resume</h3>
              <a href="https://imgur.com/a/19MHjJ9">See my resume</a>
            </li>
          </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
