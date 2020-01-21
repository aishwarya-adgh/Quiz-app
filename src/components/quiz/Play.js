import React, { Fragment } from 'react';
import {Helmet} from 'react-helmet';
import M from 'materialize-css';
import questions from '../../questions.json';
import isEmpty from '../../utils/is-empty';


class Play extends React.Component {
    constructor(props){
        super(props);
        this.state={
            questions,
            currentQuestion:{},
            nextQuestion:{},
            previousQuestion:{},
            answer:"",
            noOfQuestions:0,
            noOfAnsweredQuestion:0,
            currentQuestionIndex:0,
            score:0,
            correctAnswers:0,
            wrongAnswers:0,
        };
    }
    componentDidMount(){
        const {questions,currentQuestion,nextQuestion,previousQuestion}=this.state
        this.displayQuestions(questions,currentQuestion,nextQuestion.previousQuestion);
    }

    displayQuestions=(questions=this.state.questions,currentQuestion,nextQuestion,previousQuestion)=>{
        let {currentQuestionIndex}=this.state;
        if(!isEmpty(this.state.questions))
        {
            questions=this.state.questions;
            currentQuestion=questions[currentQuestionIndex];
            nextQuestion=questions[currentQuestionIndex+1];
            previousQuestion=questions[currentQuestionIndex-1];
            const answer=currentQuestion.answer;
            this.setState(
                {
                    currentQuestion,
                    nextQuestion,
                    previousQuestion,
                    noOfQuestions:questions.length,
                    answer
                });
        }
    };
    
    handleOptionClick=(e)=>{
       if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
       this.correctAnswers();
       }else{
           this.wrongAnswers();
       }

    }
    correctAnswers=()=>{
        M.toast({
            html:'correct Answer!',
            classes:'toast-valid',
            displayLength:1500
        });
        this.setState(prevState=>({
            score:prevState.score+1,
            correctAnswers:prevState.correctAnswers+1,
            currentQuestionIndex:prevState.currentQuestionIndex+1,
            noOfAnsweredQuestion:prevState.noOfAnsweredQuestion+1
        }),()=>{
            if(this.state.nextQuestion===undefined){
                this.endGame();
            }else{
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
         }
          });
    }
    wrongAnswers=()=>{
        navigator.vibrate(1000);
        M.toast({
            html:'wrong Answer!',
            classes:'toast-invalid',
            displayLength:1500
        });
        this.setState(prevState=>({
           wrongAnswers:prevState.wrongAnswers+1,
           currentQuestionIndex:prevState.currentQuestionIndex+1,
           noOfAnsweredQuestion:prevState.noOfAnsweredQuestion+1
        }),()=>{
            if(this.state.nextQuestion===undefined){
                this.endGame();
            }else{

            
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
         }
         });
    }
    handleButtonClick=(e)=>{
        switch(e.target.id){
            case 'next-button':
                this.handlenextbuttonclick();
                break;
                case 'previous-button':
                    this.handlepreviousbuttonclick();
                    break;
            default:
                break;
        }
    }
    handlenextbuttonclick=()=>{
        
        if(this.state.nextQuestion!==undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex+1
            }),()=>{
                this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
            });
        }
    };
    handlepreviousbuttonclick=()=>{
        
        if(this.state.previousQuestion!==undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex-1
            }),()=>{
                this.displayQuestions(this.state.state,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
            });
        }
    };
   
    endGame=()=>{
        
        const{state}=this;
        const playStats={
            score:state.score,
            noOfQuestions:state.noOfQuestions,
            noOfAnsweredQuestion:state.noOfAnsweredQuestion,
            correctAnswers:state.correctAnswers,
            wrongAnswers:state.wrongAnswers,
            
        };
        alert('Quiz has ended!');
        console.log(playStats);
        setTimeout(()=>{
            this.props.history.push('/play/QuizSummary',playStats);
        },1000);
    }
    render() { 
        const {currentQuestion,currentQuestionIndex,noOfQuestions}=this.state;
        return ( 
          <Fragment><Helmet>
              <title>Quiz Page</title></Helmet>
              <div class="animated jackInTheBox ">
              <div className="questions">
                  <h2>Quiz Mode</h2>
                  <div><p><span className="noq">{currentQuestionIndex+1}/{noOfQuestions}</span></p></div>
        <h5>{currentQuestion.question}</h5>
                 <center> <div className="options-container">
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                  </div></center>
                  <div className="button-container">
                      <button id="previous-button" onClick={this.handleButtonClick} className="left" >Previous</button>
                      <button id="next-button" onClick={this.handleButtonClick} className="right" >Next</button>
                      
                  </div>
              </div>
              </div>
                  </Fragment>
         );
    }
}
 
export default Play;