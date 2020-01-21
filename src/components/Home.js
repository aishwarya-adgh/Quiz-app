import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
// import ClassComponent from './quiz/Test';
// import {ClassComponent ,FunctionalComponent} from './quiz/Test';

const Home =() =>(
    <Fragment>
        <Helmet>
            <title>Quiz App-home</title>
        </Helmet>
        <div id="home"> 
            <section>
                <div style={{textAlign:'center'}}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Quiz App</h1>
                
                
                <div className="play-button-container">
                    <ul>
                        <li ><Link className="play-button" to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                {/* <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login">Login</Link>
                    <Link to="/signup" className="auth-buttons" id="signup">SignUp</Link>
                </div> */}
            </section>
        </div>
    </Fragment>
    
    );

export default Home;