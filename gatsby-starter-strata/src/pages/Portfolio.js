import React from 'react'
import Layout from '../components/layout'


const Portfolio = () => (
  <Layout>
    <div id='main'>
      <h1>Portfolio</h1>
      <br/>
        <div id='entry'>
          <h3> BrewCrew</h3>
          <p> BrewCrew is my first attempt at a full-stack application using an Express back-end and an simple styled HTML front-end. The concept behind my app is to connect the average craft beer-loving urbanite with local taprooms and breweries, with the idea to host public hangouts, rate beers, and get involved in bar events like karaoke or trivia nights. My first several attempts at getting the app to function have so far been unsucessful stemming from issues in moving data between pages. This is my first post-cohort task, when the functionality is complete I might come back and reformat the front end with React.js as I've found it to be a fun and very useful language.</p>
          <a href="https://github.com/dlew253/BrewCrew">https://github.com/dlew253/BrewCrew</a>
          <h5>Skills Used: HTML, CSS, JavaScript, Express</h5>
        </div>
        <div id='entry'>
          <h3> PongDre3000</h3>
          <p> PongDre3000 better known as Pong is my very first project attempt during cohort. Pong has been something i've known since I was allowed to use a computer, and felt like a good classic to try my hand with. I used vanilla JavaScript for the functionality and HTML/CSS for the layout and styling and it is by no means perfect, it does function. What I did learn from this was how limited the technologies implemented were, and based on other projects could have been much better in both functionality and style.</p>
          <a href="https://dlew253.github.io/Project-1/">https://dlew253.github.io/Project-1/</a>
          <h5>Skills Used: HTML, CSS, JavaScript</h5>
        </div>
        <div id='entry'>
          <h3> RemindMe!</h3>
          <p> My final project in cohort was a decoupled React app that created simple to-do lists. It uses Flask to run the server-side functionality. Of all the implemented skills getting Auth to function was by far the most challenging task, but it was a lot of fun getting made. I plan to do a few things with the back end data-storage and add notifications for users in the near future. </p>
          <a href='https://github.com/dlew253/project4'>https://github.com/dlew253/project4</a>
          <h5>Skills Used: React.js, Python, Flask</h5>
        </div>
        <br/>
        <h2>Group Projects</h2>
        <div id='entry'>
          <h3> GiveBack</h3>
          <p> My first collaborative effort in cohort was a MERN-stack app connecting local individuals and volunteer orginizations come together for community improvment. I really was able to hone my skills in React with this project, with a lot of thanks to my group leader. The back-end team was a phenominal duo of skill and wit, mixed with a brash and creative front-end team, that worked with fantastic synergy to complete our goals in a timely manner.</p>
          <a href='https://givebackvolunteer.herokuapp.com/'>https://givebackvolunteer.herokuapp.com/</a>
          <h5>Skills Used: React.js, MongoDb</h5>
        </div>
        <div id='entry'>
          <h3>Zen-Up </h3>
          <p> Hackathon special!! <br/> As a end-of-year special our cohort teamed up with a class of UXDI students to create a project that sparked joy in our lives. Together we collabrated to design and build a task completion application that gave you a short list of things to do on a daily basis that are good for your mind, body, and soul. The design crew absolutly blew us away with what they came up with and we worked long into the night to create something that could help bring inner calmness to us during the uncertainty that was the quarantine.</p>
          <a href='https://github.com/dlew253/Zen-Up'>https://github.com/dlew253/Zen-Up</a>
          <h5>Skills Used: React.js, CSS</h5>
        </div>

      
    </div>
  </Layout>
)

export default Portfolio