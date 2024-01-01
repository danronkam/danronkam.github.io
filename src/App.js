import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./index.css"

import TLDR from "./components/Tldr";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import Blog from "./components/Blog";
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectPage from "./components/ProjectPage";
import Linktree from "./components/Linktree";
import Ecommerce from "./components/Ecom";


function App() {
 
  const  projects = [
    {
      id: 1,
      title: ':heard',
      heading: 'Heard',
      headImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/bobbing-273.gif',
      type: 'Wellness Web Application',
      intro: {
        body: [
          "Heard was my first foray into developing as a team and I took on the role of lead front end developer. Given the one week turnaround, I also took it upon myself to implement agile methodology as the scrum master. In group settings, I highly value communication. Making sure my partners and I were on the same page about production status was not only key to getting our deliverables in on time, but making sure we stayed sane in the process. Daily stand ups, shared calendars of short term goals, and collective group sprints were some of the main methods I implemented. ",
          "Since Heard is somewhere between a confessional and mental health application, I knew we had a responsibility to present in a more professional manner for users. Inspiration came from leading mental health applications like Betterhelp, Calm, and more. From that I created mock up images to present in stand ups to involve the whole team in the process to create something we all can be proud of. "
        ],
        img: "https://derailed-seed.s3.us-west-1.amazonaws.com/heard_pc_gif.gif"
      },
      planning: {
        layoutImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/My+project-1.png',
        flowImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/Heard-Flow-Chart.png',
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
      links: {
        live: "https://heard--app.herokuapp.com/home",
        code: "https://github.com/danronkam/Heard"
      }
    },
    {
      id: 2,
      title: ':derailed',
      heading: 'Derailed',
      headImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/ezgif.com-gif-maker.gif',
      type: 'Menswear Ecommerce Platform',
      intro: {
        body: [
          "Derailed is a clone of the menswear ecommerce platform Grailed. Since this project was to be an exact clone of the Grailed, most of the design and functionality choices were already determined for me. To flex some of my creative muscles a little more, the images and animations featured on the homepage are my own. Some images are from photo shoots I’ve done for companies like Valentino, some are from my own grailed listings, and others are graphics made in the Adobe suite to show off current trends in menswear. ",
          "Before becoming a software engineer I worked in media and marketing and a lot of my work day involved creating similar graphics for social media and web, but this project was the first time I was uploading to a website I fully created front to back. Previously I was limited by the boundaries set by the SaaS companies my employers were using. While websites like WordPress help anyone create a website, I would eventually hit a wall where I could not create the functionalities I wanted through their service and I knew I would expand my skill set to improve as a developer. Completing this project was a full circle moment for me as it helped to complete one of the goals I started App Academy for."
        ],
        img: "https://derailed-seed.s3.us-west-1.amazonaws.com/derailed_pc_gif.gif"
      },
      planning: {
        layoutImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/1_Z0v4l_KaPHQpwMY_tlzYfw.jpg',
        flowImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/Frame+1.png',
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
      links: {
        live: "https://dk-derailed.herokuapp.com/",
        code: "https://github.com/danronkam/derailed/"
      }
    }, 
    {
      id: 3,
      title: ':dkfm',
      heading: 'DK-FM',
      headImg: 'https://derailed-seed.s3.us-west-1.amazonaws.com/dkfm_wip_white.gif',
      type: 'Pirate Radio',
      intro: {
        body: [
          "One of the first things I used the internet for was music, the legality of my sources mattered less to me than finding new sounds and genres from across the world. The musicians and djs I found on sites like Myspace, Limewire, FilthFM, Rinse FM, Beatport, Datpiff, PureVolume, KoolFM, and many more helped to mold my music tastes. This project is an homage to them. ",
          "The design of the music player is based on the legendary Microsoft Winamp and all the custom skins anonymous designers created over the years. I never liked the randomized visualizers that became popularized in the late 90s to early 2000s, I wanted users to have control of what they’re seeing since they’re not selecting the playlist. The music selections are me projecting my music tastes on others. The current theme is, hotel-pool house music, but previously I put together playlists of Hawaiian soul music, an homage to Sophie, songs to feel sad too, plus others. "
        ],
        img: "https://derailed-seed.s3.us-west-1.amazonaws.com/dkfm_pc_gif.gif"
      },
      planning: {
        layoutImg: 'https://beebom.com/wp-content/uploads/2020/09/Winamp-skin-museum-feat..jpg?w=750&quality=75',
        flowImg: 'https://user-images.githubusercontent.com/101153713/196276575-6b9d38de-2ec9-4644-8435-bb5e143a010f.png',
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
      links: {
        live: "https://doafavorfor.me/DKFM247/",
        code: "https://github.com/danronkam/DKFM247"
      }
    }
  ]


  return (
    <>
    <div className="content-wrapper" >

      
        <Navbar />
  
      <div className="page-container">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/ecom">
            <Ecommerce />
          </Route>

          <Route exact path="/tldr">
            <TLDR />
          </Route>


          <Route exact path='/work'>
            <Blog />
          </Route>

          <Route exact path="/please">
            <Linktree />
          </Route>

          <Route exact path="/project/:title">
            <ProjectPage   projectData={projects} />
          </Route>


          <Redirect to='/' />

        </Switch>
      </div>
      <Footer />
    </div>

      </>
  );
}

export default App;
