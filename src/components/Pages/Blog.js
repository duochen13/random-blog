import React, { Component } from "react";
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import CloudItem from "./CloudItem";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";


import "../../styles/App.css";
import "../../styles/Blog.css"


const styles = {
  large: {
    fontSize: 60,
    fontWeight: "bold"
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};


class WordCloud extends Component {

  
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 5000);
  }


  render() {
    return (
      <div className="app-outer">
        <div className="app-inner">
          {/* <h1>react-tag-cloud demo</h1> */}
          <TagCloud
            className="tag-cloud"
            rotate={() => Math.round(Math.random()) * 90}
            style={{
              fontFamily: "sans-serif",
              // fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 50,
              color: () =>
                randomColor({
                  hue: "black"
                }),
              padding: 5
            }}
          >

            {/* <div
              style={{
                fontFamily: "serif",
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: "bold",
                color: randomColor()
              }}
            >  
            </div> */}

            {/* <CloudItem text="Custom item, Hover me!" />
            <CloudItem text="Custom item 2, Hover me!" /> */}
            <Link to="/blog/react" >
              <div style={styles.large} >React</div>
            </Link>           
            <div style={styles.large}>Depth First Search</div>
            <div style={styles.large}>Interview</div>
            <div style={styles.large}>Vim</div>
            <div style={{ fontFamily: "courier" }}>Stripe</div>
            <div style={{ fontSize: 30 }}>Python</div>
            <div style={{ fontStyle: "italic" }}>C++</div>
            <div style={{ fontWeight: 200 }}>Twilio</div>
            <div style={{ color: "green" }}>Git</div>
            {/* <div className="tag-item-wrapper">
              <div>Hover Me Please!</div>
              <div className="tag-item-tooltip">HOVERED!</div>
            </div> */}
            <div>Object Oriented Design</div>
            <div>Breadth First Search</div>
            <div>Dynamic Programming</div>
            <div>AWS</div>
            <div style={styles.small}>Network</div>
            <div style={styles.small}>Distributed System</div>
          </TagCloud>
        </div>
      </div>
    );
  }
}



//props: title, image, description
class BlogCard extends Component {
  render() {
    const { title, image, description } = this.props;
    return (
      <div>
        image
        title: {title}
        description: {description} 
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


  const { hashtags } = state;

  const renderedHashTags = hashtags.map((tag, index) => {
    return (
      <div className="hashtags">
        <a href={`#${tag}0`} >
          <h3>#{tag}</h3>
        </a>
      </div>
    )
  })

  // const renderedBlogCards = 

  return (
    <>
      <div className="hashtags-container">
        {renderedHashTags}
      </div>

      <WordCloud />

    </>
  );
}

export default Blog;
