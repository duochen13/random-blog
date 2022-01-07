import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { CopyBlock, dracula, atomOneDark, codepen, github } from "react-code-blocks";
import reactZero from '../../assets/react_0.jpeg';
import reactThree from '../../assets/react_3.jpeg';
import reactCoffeeExample from '../../assets/react_4.jpeg';
import '../../styles/BlogItemPage.css';

// code block ref: https://github.com/rajinwonderland/react-code-blocks
  

class BlogItemPage extends Component {
    render() {
        let blogId = this.props.match.params.blogId;

        const showLineNumbers = true;
        const startingLineNumber = 1;

        return (
            <div>
                <div className="blog-container">
                    
                    <Link to='/blog'>
                        <div className="back-button">&#60;&#60;&nbsp;back</div>
                    </Link>

                    <div className="blog-header">
                        <h2>Pass data from child component to parent component in React</h2>
                    </div>
                    
                   
                    <img src={reactZero} />


                    <div className="blog-content">
                        
                        
                        <div className="code-snippet">

                            <h3>Parent Component Coffee Shop</h3>
                           
                            <br />
                            <h3>Child Components with Open and Close Button</h3>
                            

                        </div>
                        

                    <p>(Date: 01/06/2022, 6:11pm)</p>
                        
                    </div>            

                </div>
                            
            </div>
        )
    }
}

export default BlogItemPage;
