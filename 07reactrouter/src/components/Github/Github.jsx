import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  /* const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []); */
  return (
    <div className="text-center bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response;
};
