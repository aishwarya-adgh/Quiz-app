import React, { Component ,Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class QuizSummary extends Component{
    constructor(props){
        super(props);
        this.state={
            score:0,
            noOfQuestions:0,
            noOfAsweredQuestion:0,
            correctAnswers:0,
            wrongAnswers:0
        };
    }
    componentDidMount(){
        const {state}=this.props.location;
        this.setState({
            score:state.score,
            noOfQuestions:state.noOfQuestions,
            noOfAsweredQuestion:state.noOfAsweredQuestion,
            correctAnswers:state.correctAnswers,
            wrongAnswers:state.wrongAnswers 
        });
    }
    render(){
        const {state,score}=this.props.location;
        let stats,remark;
        remark='Your Test Score';
        if(state !== undefined){
            stats=(
               <Fragment>
                   
                <div class="summary">
                <div className="container">
                <h2>Quiz has ended</h2>
                    <h4>{remark}</h4>
                    <h2>Score:{this.state.score.toFixed(0)}</h2>
                    <span id="span"className="stat left">Total number of Questions:</span>
                    <span id="span" className="right">{this.state.noOfQuestions}</span>                    

                    <span id="span" className="stat left">Number of Correct Answers:</span>
                    <span id="span" className="right">{this.state.correctAnswers}</span>

                    <span id="span" className="stat left">Number of Wrong Answers:</span>
                    <span id="span" className="right">{this.state.wrongAnswers}</span>

                   
                </div>
                <section>
                   <center>
                   <ul>
                        <li><Link to="/">Back</Link></li>
                        <li><Link to="/play/quiz">Play Again</Link></li>
                    </ul>
                   </center>
                </section>
                </div>
               </Fragment>
            );
        }else{
            stats=(<section><h1 className="no-stats">No Statistics</h1>
           
              
              <ul >
            <li ><Link  to="/">Back</Link></li>
            <li ><Link  to="/play/quiz">Play Again</Link></li>
        </ul>
              
           </section>
           );
        }
        return(
          <Fragment id="main">
              <Helmet><title>Quiz-Summary</title></Helmet>
              {stats}
          </Fragment>
        );
    }
}

export default QuizSummary;