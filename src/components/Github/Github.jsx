import React from "react";

import { useLoaderData } from "react-router-dom";

// import { useEffect } from "react";


function Github() {

    const data = useLoaderData();

    if (!data) {
        return <div className="m-4 p-4 text-2xl">Loading...</div>;
    }

//   useEffect(() => {
//     fetch("https://api.github.com/users/vinay-aaryan")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);


  return (
    <div className="m-4 bg-green-600 text-white  p-4 text-2xl flex flex-col justify-center items-center gap-20 ">
      <h2>Github Profile</h2>
      <p>Followers: {data.followers}</p>
      <img alt="git picture " width={300} src= {data.avatar_url}/>
    </div>
  );
}

export default Github;


export const gitHubInfoLoader = async () =>{
    try {
        const res = await fetch('https://api.github.com/users/vinay-aaryan')
        if (!res.ok) {
            throw new Error('Failed to fetch GitHub data');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        throw error;
    }
}