import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { CopyBlock, dracula, atomOneDark, codepen, github } from "react-code-blocks";
import reactZero from '../../../assets/react_0.jpeg';
import reactThree from '../../../assets/react_3.jpeg';
import reactCoffeeExample from '../../../assets/react_4.jpeg';
import '../../../styles/BlogItemPage.css';

// code block ref: https://github.com/rajinwonderland/react-code-blocks
  

class ReactBlogItemZero extends Component {
    render() {
        let blogId = this.props.match.params.blogId;
        const parentCode = `
        class Parent extends Component {
            state = {
              status: ""
            }
          
            notifyParent = (eventName) => {
              this.setState({
                status: eventName
              })
            }
          
            render() {
              const { status } = this.state;
          
              return (
                <div>
                  <h2>Coffee Shop status: {status}</h2>
                  <Child name="open" notifyParent={() => this.notifyParent("open")}/>
                  <Child name="close" notifyParent={() => this.notifyParent("close")}/>
                </div>
              )
            }
        }
        `;
        const childCode = `
        // props: name
        class Child extends Component {
            render() {
                const { name, notifyParent } = this.props;

                return (
                <div>
                    <button onClick={notifyParent}>{name}</button>
                </div>
                )
            }
        }
        `;
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
                        <p>
                        The front-end can be regarded as a virtual DOM tree, when a user interacts with a specific component, instead of rendering all components in the DOM tree, we only rerender the associated components, which enhances the efficiency tremendously.
                            React component is generally considered as the object representing the user interface. For example, we can break the following UI into several React components.
                        </p>
                        
                        <img src={reactCoffeeExample} />
                        <p>
                            Imagine you are the owner of a coffee shop, and you can control the status (open or close) of the coffee shop via two simple buttons. We can break the user interface into the following components.
                        </p>        

                        <img src={reactThree} />
                        <p>
                            In the hierarchy tree, coffee shops pass two parameters: a string variable name, and a function notifyParent(yes you can pass function as the parameter in react!). Once the user clicks the "close" button, in other words, interact with the child component with the button "close", notifyParent function is triggered, child component will notify parent component along with the corresponding parameter name="close", then within the implementation of notifyParent(), we change the state parameter status to "close".
                        </p>
                        <p>
                        To avoid code duplication and redundancy, there is no function declaration or definition of notifyParent() inside the child component, parent component will help handle this.
                            Also noticed that when user clicks the close button, only parent and right child component are re-rendered, left child component with "open" button stays still, which caters to the fact that only necessary components would be updated in React virtual DOM tree.
                        </p>
                        

                        <p></p>
                        
                        <div className="code-snippet">

                            <h3>Parent Component Coffee Shop</h3>
                            <CopyBlock
                                    text={parentCode}
                                    language={"jsx"}
                                    showLineNumbers={showLineNumbers}
                                    startingLineNumber={startingLineNumber}
                                    theme={github}
                                    codeBlock
                                />
                            <br />
                            <h3>Child Components with Open and Close Button</h3>
                            <CopyBlock
                                    text={childCode}
                                    language={"jsx"}
                                    showLineNumbers={showLineNumbers}
                                    startingLineNumber={startingLineNumber}
                                    theme={github}
                                    codeBlock
                                />;

                        </div>
                        

                    <p>(Date: 12/23/2021, 10:01pm)</p>
                        
                    </div>            

                </div>
                            
            </div>
        )
    }
}

export default ReactBlogItemZero;
