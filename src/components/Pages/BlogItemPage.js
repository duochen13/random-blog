import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";


class BlogItemPage extends Component {
    render() {
        let blogId = this.props.match.params.blogId;
        
        return (
            <div>
                <Link to='/blog'>
                    <button>Back</button>
                </Link>
                
                <div className="hashtags">
                    <h3>#{blogId}</h3>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default BlogItemPage;
