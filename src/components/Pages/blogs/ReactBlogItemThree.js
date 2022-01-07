

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { CopyBlock, dracula, atomOneDark, codepen, github } from "react-code-blocks";
import siliconValleyZero from '../../../assets/siliconValley_0.jpeg';
import siliconValleyOne from '../../../assets/siliconValley_1.jpeg';
import umichEECSZero from '../../../assets/umichEECS_0.jpeg';
import reactCoffeeExample from '../../../assets/react_4.jpeg';
import '../../../styles/BlogItemPage.css';

// code block ref: https://github.com/rajinwonderland/react-code-blocks
  // https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/

class ReactBlogItemThree extends Component {
    render() {
        let blogId = this.props.match.params.blogId;
    

        return (
            <div>
                <div className="blog-container">
                    
                    <Link to='/blog'>
                        <div className="back-button">&#60;&#60;&nbsp;back</div>
                    </Link>

                    <div className="blog-header">
                        <h2>Takeaways from 5-year computer science learning journey</h2>
                    </div>
                    
                   
                    <img src={umichEECSZero} />



                    <div className="blog-content">

                        <h3>Does programming language matter</h3>
                        <p>
                            I have written less than 20 lines of Golang before joining TikTok help build their video caption microservice in Golang.
                            Architecture, design trade-offs would be more important, programming language syntax would be picked up gradually
                            after reviewing several PRs and receiving comments from senior engineers.
                        </p>  
                       
                        <h3>40% Design + 40% Communication + 20% Coding</h3>
                        <p>
                            I used to be the guy who would prefer to spend the whole afternoon setting up my development environment, such as finding fancy plugins in vimrc,
                            picking dark atom colorscheme for visual studio code etc, in order to write a simple hello world program.
                        </p>     

                        <h3>Most courses, just take the one you are interested in</h3>
                        <p>
                            Dont take the course if you think you may need it  

                        </p>

                        <h3>Talk to people</h3>
                        <p>
                            I met lots of great minds during ServiceNow Hackathon.
                        </p>

                        <h3>Beyond focusing on your own playground</h3>
                        <p>Product sense, AB testing</p>

                        <h3>Skip the class if necessary</h3>
                        <p>
                            I probably forgot how to adjust AVL tree during my data structure and algorithm course, but I do remember the time I skip the class, build my own website
                            in the hatcher at umich.
                        </p>

                        <h3>Profit per effort oriented programming</h3>
                        <p>
                            WLB matters
                        </p>
                        
                        <div className="code-snippet">

                            

                        </div>

                        
                        

                    <p>(Date: 01/06/2022, 6:11pm)</p>
                        
                    </div>            

                </div>
                            
            </div>
        )
    }
}

export default ReactBlogItemThree;
