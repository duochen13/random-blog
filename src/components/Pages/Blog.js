import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import blogZeroImg from '../../assets/react_0.jpeg';
import blogOneImg from '../../assets/siliconValley_0.jpeg';
import blogTwoImg from '../../assets/cc_0.jpeg';
import blogThreeImg from '../../assets/umichEECS_0.jpeg';
import blogFourImg from '../../assets/git_0.jpeg';

import "../../styles/Blog.css"



//props: title, image, description, clickCard
class BlogCard extends Component {
  render() {
    const { title, image, description, clickCard } = this.props;
    return (
      <div>

      <div className="blog-card" onClick={clickCard}>
        <h2>{title}</h2>
        <img src={image} />
        <p>
          {description} 
        </p>
       
      </div>

      </div>
    )
  }
}


function Blog() {

  let state = {
    hashtags: ["DFS", "BFS", "Python", "C++", "Golang", "Cloud Computing", "React", "OOD", "DP", "Stripe", "Twilio"],
    blogCards: [
      {
        title: "React Life Cycle",
        image: "",
        description: ""
      }
    ]
  }

  let history = useHistory();

  const { hashtags } = state;

  const renderedHashTags = hashtags.map((tag, index) => {
    return (
      <div>
        <h3>#{tag}</h3>
      </div>
    )
  })

  function clickCard(blogId) {
    history.push(`/blog/${blogId}`);
  }

  return (
    <div>

      <div className="blog-header">
        <h1>Some Random Thoughts</h1>
      </div>
      
      <div className="blog-container">
        <div className="blog-leftcolumn">

            <BlogCard 
              clickCard={() => clickCard("0")}
              image={blogZeroImg}
              title="Pass data from child component to parent component in React"
              description="The front-end can be treated as a virtual DOM tree, when user interacts..."
            />
            <BlogCard 
              clickCard={() => clickCard("1")}
              image={blogOneImg}
              title="Landing a job at Faangjkbekszw"
              description='I am not saying it is inappopriate to click the "Easy Apply" and fill...'
            />
            <BlogCard 
              clickCard={() => clickCard("2")}
              image={blogTwoImg}
              title="System design with AWS"
              description='Assume we want to build a newsfeed App that can feed users news content based on...'
            />

            <BlogCard 
              clickCard={() => clickCard("3")}
              image={blogThreeImg}
              title="Takeaways from 5-year computer science learning journey"
              description='Does programming language matter?...'
            />

            <BlogCard 
              clickCard={() => clickCard("4")}
              image={blogFourImg}
              title="Git commands within 10min"
              description='Some super usefull git commands...'
            />
          
        </div>

        <div className="blog-rightcolumn">
          {/* <h2>Topics </h2> */}
          {renderedHashTags}
        </div>
      </div>

    </div>
  );
}

export default Blog;
