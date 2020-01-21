import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

const Quizinstructions=()=>(
  <Fragment>
      <Helmet>
          <title>Quiz Instructions-Quiz App</title>
          
      </Helmet>
      <div className="instructions container">
              <h1>How to play the game</h1>
              <ol>
                  <li>Number of Questions 4</li>
                  <li>3 options for each Questions</li>
                  <li>You can choose only one answer</li>
              </ol>
              <div>
                  <span className="left"><Link to="/">Back</Link></span>
                  <span className="right"><Link to="/play/quiz">Start</Link></span>
              </div>
          </div>
  </Fragment>  
);
export default Quizinstructions;