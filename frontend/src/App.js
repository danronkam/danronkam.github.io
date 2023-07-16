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
        {text: "MongoDB", img: "https://placehold.co/600x400"},
        {text: "Javascript", img: "https://placehold.co/600x400"},
        {text: "React", img: "https://placehold.co/600x400"},
        {text: "Redux", img: "https://placehold.co/600x400"},
        {text: "Express.js", img: "https://placehold.co/600x400"},
        {text: "Node.js", img: "https://placehold.co/600x400"}
      ],
      features: [
        {title: 'User Authentication', text: ''},
        {title: 'Message Thread Feature', text: ''},
        {title: 'Confessions - Creation and Display', text: ''},
        {title: 'Edit Controller', text: ''},
        {title: 'Backend Saftey', text: ''},
      ]
    },
    {
      id: 2,
      title: ':derailed',
      heading: 'Derailed',
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
        {text: "Ruby", img: "https://placehold.co/600x400"},
        {text: "Rails", img: "https://placehold.co/600x400"},
        {text: "React", img: "https://placehold.co/600x400"},
        {text: "Redux", img: "https://placehold.co/600x400"},
        {text: "postgreSQL", img: "https://placehold.co/600x400"},
        {text: "AWS", img: "https://placehold.co/600x400"},
        {text: "JavaScript", img: "https://placehold.co/600x400"},
        {text: "HTML", img: "https://placehold.co/600x400"},
        {text: "CSS", img: "https://placehold.co/600x400"},

      ],
      features: [
        {title: 'User Authentication', text: ''},
        {title: 'Listing CRUD with Photos', text: ''},
        {title: 'Security and Scalabilty with AWS', text: ''},
        {title: 'Search - by Query and Filters', text: ''},
        {title: 'User Editing and Display', text: ''},
        {title: 'Comment Functionality', text: ''},
      ]
    }, 
    {
      id: 3,
      title: ':dkfm',
      heading: 'DK-FM',
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
        {text: "Javascript", img: "https://placehold.co/600x400"},
        {text: "HTML", img: "https://placehold.co/600x400"},
        {text: "SCSS", img: "https://placehold.co/600x400"},
        {text: "AWS", img: "https://placehold.co/600x400"},
      ],
      features: [
        {title: 'Music and Background filters', text: ''},
        {title: 'Hotkey Controller', text: ''},
        {title: 'Confessions - Creation and Display', text: ''},

      ]
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

        <Route exact path='/blog'>
          <Blog blogPosts={blog}/>
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
