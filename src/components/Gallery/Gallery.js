import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Gallery = () => {
    //     const [data, setData] = useState({ pics: [] });
    // useEffect( () => {
    //     const fetchData = async( ) => {
    //         const result = await axios(
    //             'https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"31130990322","first":15,"after":null}',
    //         );
    //         setData(result.data.data.user.edge_owner_to_timeline_media.edges);
    //     };
    //     fetchData()
    // }, []);
    return (
    <div>
      {/*<p>{data.pics.map((pic, index) => {*/}
      {/*    return (*/}
      {/*        <img key={index} src={pic.display_url}  alt='#'/>*/}
      {/*    )*/}
      {/*})}</p>*/}
    </div>
  )
}

export default Gallery
