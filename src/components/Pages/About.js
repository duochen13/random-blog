import React from "react";
import "../../styles/About.css";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>I'm currently a master student studying computer science at Columbia, I finished my CS bachelor's at Umich and used to intern at TikTok, ServiceNow, and Genemod. </p>
      <p>The time at Ann Arbor was busy but fulfilling, I was a member of MDP (Multidisciplinary Design Program), collaborated with the business team and researchers, working on building an anonymous secure communication app.</p>
      <p>During my sophomore year, I worked at Genemod in Seattle and built the full-stack app called Freezer, which helps researchers facilitates the process of tracking chemical reagents in the biochemical lab.</p>
      <p>During my junior year, I worked at ServiceNow, form-control team to help build react-like web components, I learned how sprint planning, Dev and QA cycle works, and how much effort and time can take to merge a small feature into a huge codebase. Also, I participated in the ServiceNow hackathon and met some great friends, we built a voice-based SQL executor, and surprisingly, the project went to the final round and we managed to present it to VPs within the company.</p>
      <p>After interning at an early-stage start-up and ToB software company, I tried to seek more interesting work with a relatively broader scope, thus I chose to intern at TikTok, the backend engineering team at Mountain View office, specifically the video caption team. I helped build the video caption metadata microservice mainly using Gin and Kite (Golang frameworks) which can take over 500 QPS from TikTok upstream core services.</p>
      <p>In my square time, I would like to build toy projects and read engineering blogs (My favorite ones are Stripe's and Uber's), I'm also interested in designing and building large-scale distributed systems and cloud computing.</p>
    </>
  );
};

export default About;
