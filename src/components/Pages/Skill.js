import React, { Component } from "react";
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import CloudItem from "./CloudItem";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "../../styles/Skill.css";

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
    }, 3500);
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
            <div style={styles.large}>Golang</div>
            <div style={styles.large}>Interview</div>
            <div style={styles.large}>Vim</div>
            <div style={{ fontFamily: "courier" }}>Java</div>
            <div style={{ fontSize: 30 }}>Git</div>
            <div style={{ fontStyle: "italic" }}>Python</div>
            <div style={{ fontWeight: 200 }}>Microservice</div>
            <div style={{ color: "green" }}>C++</div>
            {/* <div className="tag-item-wrapper">
              <div>Hover Me Please!</div>
              <div className="tag-item-tooltip">HOVERED!</div>
            </div> */}
            <div>Object Oriented Design</div>
            <div>AWS</div>
            <div>CI/CD</div>
            <div>Distributed System</div>
            <div>Javascript</div>

            
            <div style={styles.small}>Network</div>
            <div style={styles.small}>Data Migration</div>
            <div style={styles.small}>Metaprogramming</div>
            <div style={styles.small}>Agile Development</div>

          </TagCloud>
        </div>
      </div>
    );
  }
}

class Skill extends Component {
    render() {
        return(
            <div>
                
                <WordCloud />
            </div>
        )
    }
}

export default Skill;