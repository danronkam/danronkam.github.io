import React, { useEffect } from "react";
import {GraphQLClient, gql} from 'graphql-request';

const graphcms = new GraphQLClient(
    "https://api-us-west-2.hygraph.com/v2/clgmrycpt5d7x01t2f1ojemuw/master"
);

const QUERY = gql`
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

function Blogposts() {

    const [blog, setBlog] = useState([]);

    useEffect(() => {

    })

    return(
        <>
        <div className="post">

        </div>

        </>
    )
}

export default Blogposts