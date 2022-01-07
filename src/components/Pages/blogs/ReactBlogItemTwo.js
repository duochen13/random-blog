
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { CopyBlock, dracula, atomOneDark, codepen, github } from "react-code-blocks";
import newsFeedZero from '../../../assets/newsfeed_0.jpeg';
import newsFeedOne from '../../../assets/newsfeed_1.jpeg';
import umichEECSZero from '../../../assets/umichEECS_0.jpeg';
import ccZero from '../../../assets/cc_0.jpeg';
import '../../../styles/BlogItemPage.css';

// code block ref: https://github.com/rajinwonderland/react-code-blocks
  // https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/

class ReactBlogItemTwo extends Component {
    render() {
        let blogId = this.props.match.params.blogId;
    

        return (
            <div>
                <div className="blog-container">
                    
                    <Link to='/blog'>
                        <div className="back-button">&#60;&#60;&nbsp;back</div>
                    </Link>

                    <div className="blog-header">
                        <h2>System Design in AWS</h2>
                    </div>
                    
                   
                    <img src={ccZero} />



                    <div className="blog-content">

                        <h3>Draft Architecture</h3>
                        
                        <p>
                            Let's we want to build a newsfeed App that can feed users news content based on their view history, this is the first draft version of our backend architecture.
                        </p>
                        <img src={newsFeedOne} />
                        

                        <h3>API Gateway</h3>
                        <p>
                            As the name speaks for itself, it serves as the gateway for our downstream services, which can be a microservice deployed on EC2, or it can be a serverless lambda function.
                            Noticed that if the traffic is extremely high (high QPS), then lambda function may not be a great idea since it gets triggered everytime when one request comes.
                        </p>

                        <h3>DynamoDB and ElasticSearch</h3>
                        <p>
                            DynamoDB already serves as high-performance key-value NoSQL database, we can store news content data containing keys such as "news_id", "title", "description", "date", "labels" in the dynamodb table,
                            specifically, attribute "labels" is a list of strings containing associated news labels such as "business", "wall street", "WSB", "GME" etc. If we want to recommend user several news items which all containing
                            label "business", then we need ElasticSearch, where we create a mapping from "labels" to a list of "news_id", once we get the "news_id" based on "label" via ElasticSearch, we can get the detailed information of news from dynamodb.
                        </p>
                    
                        <h3>Notification with Cloudwatch</h3>
                        <p>
                            There is a lambda function(LB3) keeps fetching latest news via 3rd party NewsAPI, triggered by cloudwatch, which we can set trigger rules in AWS console. Then the lambda function will push the news content (or we can called it message) to SQS 
                            message queues (Simple Queue Service). Then there is another lambda function(LB5) consumes messages from SQS and sends the news back to users in the format of email(SES).
                        </p>

                        <h3>Voice-based search</h3>
                        <p>
                            Amazon Lex, nothing special, just look at the documents and use the API.
                        </p>

                        
                        <img src={newsFeedZero} />
                        <p>(Architecture for COMS 6156 Course Project at Columbia)</p>

                    <p>(Date: 01/03/2022, 5:01pm)</p>
                        
                    </div>            

                </div>
                            
            </div>
        )
    }
}

export default ReactBlogItemTwo;
