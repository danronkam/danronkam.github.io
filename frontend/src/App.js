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
      title: ':dkfm',
      heading: 'DKFM',
      intro: {
        body: "",
        img: ""
      },
      planning: {
        layoutImg: '',
        flowImg: '',
        text: ''
      },
      tech: [
        {text: "", img: ""}
      ]
    },
    {
      id: 2,
      title: ':heard'
    }, 
    {
      id: 3,
      title: ':derailed'
    }
  ]

    console.log('blog is a', typeof blog)


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

        <Route exact path="/project/:title">
          <ProjectPage projectData={projects} />
        </Route>

        <Route exact path="/projects/derailed">
          
        </Route>

        <Redirect to='/' />

      </Switch>
    </div>
    <Footer />
    </>
    
  );
}

export default App;
