

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { CopyBlock, dracula, atomOneDark, codepen, github } from "react-code-blocks";
import siliconValleyZero from '../../../assets/siliconValley_0.jpeg';
import siliconValleyOne from '../../../assets/siliconValley_1.jpeg';
import gitZero from '../../../assets/git_0.jpeg';
import gitOne from '../../../assets/git_1.jpeg';
import gitTwo from '../../../assets/git_2.jpeg';
import gitThree from '../../../assets/git_3.jpeg';
import reactCoffeeExample from '../../../assets/react_4.jpeg';
import '../../../styles/BlogItemPage.css';

// code block ref: https://github.com/rajinwonderland/react-code-blocks
  // https://www.simplethread.com/20-things-ive-learned-in-my-20-years-as-a-software-engineer/

class ReactBlogItemFour extends Component {
    render() {
        let blogId = this.props.match.params.blogId;
    

        return (
            <div>
                <div className="blog-container">
                    
                    <Link to='/blog'>
                        <div className="back-button">&#60;&#60;&nbsp;back</div>
                    </Link>

                    <div className="blog-header">
                        <h2>Git commands within 10min</h2>
                    </div>
                    
                   
                    <img src={gitZero} />



                    <div className="blog-content">

                    <h3>Rewrite last commit message</h3>
                        <p>
                            It's always good practice to write descriptive commit messages in the maintainable codebase. But what if you want to discard the last commit messages? <b>git commit --amend</b> can help discard the previous commit message so you can write a new one. 
                            At the high level, it helps replace the last commit with the staged changes and the last commit combined. Use with nothing staged to edit the last commit’s message.
                        </p>  
                       
                        <h3>Reset local changes to specific commit</h3>
                        <p>
                            <b>git reset --hard &#60;commit id&#62; </b> helps reset local repo to specific commit, remove all history until given commit point. Noticed that "git reset --hard" will move the current HEAD to the given commit, the --hard flag tells Git to overwrite all changes in the working directory.
                        </p>     

                        <h3>Squash multiple commit messages to single one</h3>
                        <p>
                            I remember when I worked as an intern at ServiceNow, I commit several meaningless commits on the sub development branch, when I submit a PR, the first thing is always git squash all local commit messages to a single one, which will appear on the master branch, so other developers can easily track the PR associated with a specific commit.
                            Essentially, it's been used in merging a finished feature branch onto master. I'll accumulate any useful information into the squashed commit, but specifically don't want this feature's incremental development history polluting the master commit timeline.
                        </p>
                        <img src={gitOne} />
                        <p>
                            Consider the scenario that Dan is working on his sub-branch "dev/dan", and there are 2 local commits "feat: add foo function" and "feat: add baz function" respectively on the dev/dan branch.
                            If we merge Dan's feature simply by "git merge dev/dan" on the master branch, then Dan's local commit history ("feat: add foo function" and "feat: add baz function" ) will be included in the commit history of the master branch, just like the following image.
                        </p>
                        <img src={gitTwo} />

                        <p>
                            To keep master branch's commit messages clean and easy to keep track of, when we are on the master we can use "git merge dev/dan --squash" instead, which will merge dev/dan into master.
                        
                        </p>


                        <h3>When somebody pushes something broken, happy cherry picking!</h3>
                        <p>
                            Imagine when we push something broken to master, the quickest way to resolve the issue is replacing the current broken commit with a worked commit by cherry picking.
                        </p>
                        <img src={gitThree} />
                        <p>
                            In the above picture, under dev/dan branch, we cherry-pick commit "9075b8..." and apply on the current branch's HEAD, it's very similar to "git merge" but instead of merging the whole branch, it merges specific commits.
                        </p>

                        
                        <div className="code-snippet">

                            

                        </div>

                        
                        

                    <p>(Date: 01/10/2022, 10:11pm)</p>
                        
                    </div>            

                </div>
                            
            </div>
        )
    }
}

export default ReactBlogItemFour;
