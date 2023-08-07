import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {request} from 'graphql-request'

import TLDR from "./components/Tldr";
import Homepage from "./components/homepage";
import Guestbook from "./components/Guestbook";
import Navbar from "./components/navbar";
import Blog from "./components/Blog";
import BlogShow from "./components/BlogShow";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectPage from "./components/ProjectPage";
import ProjectsIndex from "./components/ProjectsIndex";


function App() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { blogs } = await request(
        "https://api-us-west-2.hygraph.com/v2/clgmrycpt5d7x01t2f1ojemuw/master",
        `
          {
            blogs {
                claps
                createdAt
                date
                description
                headings
                id
                publishedAt
                slug
                tags
                title
                updatedAt
                photos {
                  id
                  url
                }
                coverPhoto {
                  url
                }
                sections {
                  text
                }
              }
          }
        `
      );

     
      setBlog(blogs);
    };

    fetchBlogs();
  }, [])

  const  projects = [
    {
      id: 1,
      title: ':heard',
      heading: 'Heard',
      headImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/bobbing-273.gif',
      type: 'Wellness Web Application',
      intro: {
        body: "Heard is an application that aims to foster a safe, anonymous community of secret sharers and secret bearers. Users can choose to share a confession or start a message thread about a specific topic. The application design takes a mobile-focused approach as most of the interactions will likely take place sporadically throughout the day on an accessible device.",
        img: "https://placehold.co/600x400"
      },
      planning: {
        layoutImg: 'https://placehold.co/600x400',
        flowImg: 'https://placehold.co/600x400',
        text: "Planning and developing a full stack MERN application within a week as part of a group in a software engineering bootcamp requires efficient coordination and effective use of agile Scrum methods. The team will start by conducting a thorough analysis of the project requirements and breaking them down into manageable tasks. Utilizing the Scrum framework, the team will create a product backlog, prioritize user stories, and define sprint goals. Daily stand-up meetings will be held to ensure open communication and provide progress updates. With a focus on iterative development, the team will work collaboratively, leveraging JavaScript, HTML, and CSS to build the frontend, while utilizing MongoDB, Express.js, and Node.js for the backend. Frequent retrospectives and sprint reviews will enable the team to evaluate progress, make necessary adjustments, and deliver a functional full stack MERN application that meets the desired objectives within the given timeframe."
      },
      tech: [
        {text: "MongoDB", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/mongo.png"},
        {text: "Javascript", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/js.png"},
        {text: "React", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/react.png"},
        {text: "Redux", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/redux.png"},
        {text: "Express.js", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/express.png"},
        {text: "Node.js", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/node.png"}
      ],
      features: [
        {title: 'User Authentication', text: 'Heard features a fully functional user authentication system, complete with a demo user login and error handling for incomplete entries. Upon successful login, the user will be redirected to a home page where the user can choose to participate in the application as a listener or create confessions or message threads.'},
        {title: 'Message Thread Feature', text: 'Users can create topics that open message threads, or proceed directly to an index of topics. From a side menu, they can edit and/or delete the threads that they created. Within a chat, users are anonymized. New messages are fetched at regular short intervals from the server. In order to create messages then, the frontend must send in not only the content of the new message, but the topicId of the topic the message is affiliated with. Authentication middleware grabs the userId from the JSON Web Token (JWT). It is then populated with its topicId before the topic is found and updated by appending the message to its list of messages using findByIdAndUpdate(). Updating the titles title and / or mood or deleting it is simpler, involving mainly the findById and findByIdAndUpdate methods, since a new instance of a Message object does not have to be created.'},
        {title: 'Confessions - Creation and Display', text: 'On Heard, users can anonymously share their deepest secrets with our confessions tab, where theyre sent to our MongoDatabase and stored until randomly selected to be seen by another user. Once seen confessions are then deleted, never to be seen again. If a user ever regrets a confession, they can be deleted on their profile where only they can see it.'},
        {title: 'Edit Controller', text: 'This controller was designed to allow only the user of the post or an admin to edit the title, mood, etc. However, ANY user can edit the flagged field of any document. This was fun to think about and adds a great safety feature for the admin users who can see all posts and comments and delete or un-flag them upon review. It also provides safety for the user knowing no-one can edit confessions by them or edit their topic threads. Similar safety features are in place for all requests that involve editing or deleting a users content. The team felt that an admin user feature were important when creating an Anonymous platform so as to be able to hold those who chose to share irresponsibly accountable. Fun fun to code :)'},
        {title: 'Backend Saftey', text: 'protection for user from others editing their content ablility to flag others content when innapropriate admin abilities to edit and delete any users content'},
      ],
      live: 'https://heard--app.herokuapp.com/home',
      git: 'https://github.com/danronkam/Heard'
    },
    {
      id: 2,
      title: ':derailed',
      heading: 'Derailed',
      headImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/ezgif.com-gif-maker.gif',
      type: 'Menswear Ecommerce Platform',
      intro: {
        body: "Derailed is a footwear focused clone of Grailed. On the site, users can search through listings to find their grail shoe, hopefully for a price that hasn't gone too off the rails. Once logged in users can create listings of their own, and leave offers on others items for sale.",
        img: "https://placehold.co/600x400"
      },
      planning: {
        layoutImg: 'https://placehold.co/600x400',
        flowImg: 'https://placehold.co/600x400',
        text: "Derailed was designed, created, and deployed during a two week sprint during App Academy's Bootcamp. To stay on task with such tight deadlines, I used Figma to create wireframe guides to follow MVP features, and Scrum methodologies manage time."
      },
      tech: [
        {text: "Ruby", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/rby.png"},
        {text: "Rails", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/rails.png"},
        {text: "React", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/react.png"},
        {text: "Redux", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/redux.png"},
        {text: "postgreSQL", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/postgres.png"},
        {text: "AWS", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/aws.png"},
        {text: "JavaScript", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/js.png"},
        {text: "HTML", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/html.png"},
        {text: "CSS", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/css.png"},

      ],
      features: [
        {title: 'User Authentication', text: ''},
        {title: 'Listing CRUD with Photos', text: ''},
        {title: 'Security and Scalabilty with AWS', text: ''},
        {title: 'Search - by Query and Filters', text: ''},
        {title: 'User Editing and Display', text: ''},
        {title: 'Comment Functionality', text: ''},
      ],
      live: 'https://dk-derailed.herokuapp.com/',
      git: 'https://github.com/danronkam/derailed'
    }, 
    {
      id: 3,
      title: ':dkfm',
      heading: 'DK-FM',
      headImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/dkfm_wip_white.gif',
      type: 'Pirate Radio',
      intro: {
        body: "DK-FM is a music player that lets users select a genre and mood which plays a continuous curated set of songs and accompanying visuals. While many music players focus on the users and the playlists they make, DK-FM is meant to be set up and forgotten while users focus on other more important things in their lives. Although the playlist won't be user made, they will still have the ability to cycle through the songs and backgrounds in order to create their ideal set up. It’s background music that won't distract you but also won’t put you to sleep.",
        img: "https://placehold.co/600x400"
      },
      planning: {
        layoutImg: 'https://placehold.co/600x400',
        flowImg: 'https://placehold.co/600x400',
        text: "Planning and developing a full stack MERN application within a week as part of a group in a software engineering bootcamp requires efficient coordination and effective use of agile Scrum methods. The team will start by conducting a thorough analysis of the project requirements and breaking them down into manageable tasks. Utilizing the Scrum framework, the team will create a product backlog, prioritize user stories, and define sprint goals. Daily stand-up meetings will be held to ensure open communication and provide progress updates. With a focus on iterative development, the team will work collaboratively, leveraging JavaScript, HTML, and CSS to build the frontend, while utilizing MongoDB, Express.js, and Node.js for the backend. Frequent retrospectives and sprint reviews will enable the team to evaluate progress, make necessary adjustments, and deliver a functional full stack MERN application that meets the desired objectives within the given timeframe."
      },
      tech: [
        {text: "Javascript", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/js.png"},
        {text: "HTML", img: "https://placehold.co/600x400"},
        {text: "SCSS", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/scss.png"},
        {text: "AWS", img: "https://derailed-seed.s3.us-west-1.amazonaws.com/aws.png"},
      ],
      features: [
        {title: 'Music and Background filters', text: ''},
        {title: 'Hotkey Controller', text: ''},
        {title: 'Confessions - Creation and Display', text: ''},
      ],
      live: 'https://doafavorfor.me/DKFM247/',
      git: 'https://github.com/danronkam/DKFM247' 
    }
  ]


  return (
    <>
    <Navbar />
 
    <div className="page-container">
      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/tldr">
          <TLDR />
        </Route>

        <Route exact path='/guestbook'>
          <Guestbook />
        </Route>

        <Route exact path='/work'>
          <Blog />
        </Route>

        <Route exact path='/blog/:slug' element={<post/>}>
          <BlogShow />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/projects">
          <ProjectsIndex />
        </Route>

        <Route exact path="/project/:title">
          <ProjectPage   projectData={projects} />
        </Route>


        <Redirect to='/' />

      </Switch>
    </div>
    <Footer />
    </>
    
  );
}

export default App;
