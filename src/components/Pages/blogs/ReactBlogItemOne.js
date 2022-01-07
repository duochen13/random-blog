import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { CopyBlock, dracula, atomOneDark, codepen, github } from "react-code-blocks";
import siliconValleyZero from '../../../assets/siliconValley_0.jpeg';
import siliconValleyOne from '../../../assets/siliconValley_1.jpeg';
import reactThree from '../../../assets/react_3.jpeg';
import reactCoffeeExample from '../../../assets/react_4.jpeg';
import '../../../styles/BlogItemPage.css';

// code block ref: https://github.com/rajinwonderland/react-code-blocks
  

class ReactBlogItemOne extends Component {
    render() {
        let blogId = this.props.match.params.blogId;
    

        return (
            <div>
                <div className="blog-container">
                    
                    <Link to='/blog'>
                        <div className="back-button">&#60;&#60;&nbsp;back</div>
                    </Link>

                    <div className="blog-header">
                        <h2>About Landing a job at Faangjkbekszw</h2>
                    </div>
                    
                   
                    <img src={siliconValleyZero} />



                    <div className="blog-content">

                        <h3>Get the interview</h3>
                        <p>
                            I'm not saying it's inappropriate to click the "Easy Apply" and fill the "Yes Yes Asian Male No No" form in your job application while sitting on the toilet. 
                            Things can be worse, the number of the workday account you created is more than the number of questions you solved on leetcode. Last but not least, if you search "Thank you for your interest" on Gmail,
                            the number of results you got is approximately the number of applications you submitted during the recruiting season.
                        </p>
                        <p>
                            The most common and convenient way is applying online, handshake or other campus internal systems would be better since the candidate pool is smaller compared to applying on the company website
                        </p>
                        <p>
                            University career fairs also can be a great resource to get interviews. Umich used to have a company list of over 350 tech companies for each career fair, but ironically none of them gives me an interview when
                            I was in sophomore year. While looking back, I'm the guy who has been in the queue of Google for over 40min and can't talk to a recruiter about my experience and projects for over 10min (my record was 7min emmm cuz I talked super slow).
                            Not because my intro to programming course project was a joke to engineers, but I was in the wrong direction. Especially for interns, they don't expect you to understand every aspect of technologies listed on job descriptions (even senior engineers don't master all, but 
                            if you know a few, excellent!), but they care more about whether you understand and show great passion about their products. It not only increases your chance of getting interviews but also cultivates your produce sense also broadens the horizon, figuring out what's going on in the industry.
                        </p>
                        <p>
                            Asking for a referral is by far the best way to get interviews, but also depends on companies and other factors. Don't be ashamed to ask some alumni you don't know for referrals on Linkedin, they understand how hard it can be to get interviews especially for people in the early stage of their career,
                            since everyone has been there.
                        </p>

                        <h3>Prepare for the interview</h3>
                        
                        <p>
                            "Cracking the coding interview" by McDowell is a great book, but some questions are relatively easy, but it covers some basic data structure implementations (hash table conflict resolution, heapify implementation) which we might ignore while practicing coding questions. 
                        </p>
                        <p>
                            The aspects that companies focus on vary a lot. Some companies don't ask leetcode questions, like Stripe, they have particularly long and detailed question descriptions, I feel like I was working on building small features related to company business logic while interviewing with them, which gives the candidate
                            a feeling of what kind of problems encountered during daily routine. Some companies prefer candidates who solve the problem well in a limited time, like Meta(Facebook), they ask 1 easy + 1 medium questions with several follow-ups during 45min single round of coding interview.
                        </p>        
                        <p>
                            Mock interviews can also be extremely effective, I used to be a discord channel and ask random people (most of them are college students and software engineers) for mock interviews, you may meet freshman who hasn't taken data structure and algorithm course, but you may also meet someone who has the similar background or
                            similar or slightly better level of skills can be a long-term mock company.

                            In addition, interview.io also provides a great resource for mock interviews. But I'm skeptical about whether those FAANG interviewers are actually from FAANG, since you can book a 1-hour time slot on weekday.
                        </p>

                        <h3>Pass the interview</h3>
                        <p>
                            
                        </p>

                        <h3></h3>
                        

                        <p></p>
                        
                        <div className="code-snippet">

                            

                        </div>

                        <img src={siliconValleyOne} />
                        <p>(source: https://www.pinterest.com/pin/1477812361044886/)</p>
                        
                        

                    <p>(Date: 01/01/2022, 5:30pm)</p>
                        
                    </div>            

                </div>
                            
            </div>
        )
    }
}

export default ReactBlogItemOne;
