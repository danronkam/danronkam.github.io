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
              }
          }
        `
      );

      setBlog(blogs);
    };

    fetchBlogs();
  }, [])


  return (
    <>
    <Navbar />
 
    <div className="page-container">
      <Switch>

        <Route exact path="/">
          <TLDR />
        </Route>

        <Route exact path="/sp">
          <Homepage />
        </Route>

        <Route exact path='/guestbook'>
          <Guestbook />
        </Route>

        <Route exact path='/blog'>
          <Blog blogPosts={blog}/>
        </Route>

        <Route exact path='/blog/:slug'>
          <BlogShow/>
        </Route>

        <Redirect to='/' />

      </Switch>
    </div>
    
    </>
    
  );
}

export default App;
