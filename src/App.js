import React from 'react';
import './App.css';
import Ques1 from './ques/JS1';
import Ques2 from './ques/JS2';
import Ques3 from './ques/JS3';
import Ques4 from './ques/JS4';

let QuesArr = [...Ques1, ...Ques2, ...Ques3, ...Ques4]; // {Question: ... , Response: [...], correct: [...]}

class App extends React.Component {

  state = {
    question: null,
    started: false,
    showAnswer: false
  }
 
  selectRandomQuestion = () => {
    let random = Math.floor(Math.random() * QuesArr.length);
    let singleQuestoin = QuesArr[random];
    this.setState({question : singleQuestoin, started : true, showAnswer : false});
  }

  showAnswerHandler = () => {
    this.setState({showAnswer: !this.state.showAnswer})
  }

  renderQuestion = () => {
    let Question = null;
    let Answers = null;
    // added random comment
    if (this.state.question) {
      Question = <h3>{this.state.question.Question}</h3>;
      Answers = [];
      if (this.state.question.correct.length < 2) {
        for (let q in this.state.question.Response) {
          let classes = ["container"];
          if(this.state.showAnswer) {
            let found = this.state.question.correct.find(elem => elem == q);
            if (found !== undefined) {
              classes.push("right")
            } else {
              classes.push("wrong")
            }
          }
          Answers.push(
            <label key= {q} className={classes.join(" ")}>
              {this.state.question.Response[q]}
              <input type="radio" name="radio"/>
              <span className="checkmark"></span>
            </label>
          )
        }
      } else {
        Answers.push(<div key='moreAnswers' className="moreAnswers">{this.state.question.correct.length} answers possible!</div>)
        for (let q in this.state.question.Response) {
          let classes = ["container"];
          if(this.state.showAnswer) {
            let found = this.state.question.correct.find(elem => elem == q);
            if (found !== undefined) {
              classes.push("right")
            } else {
              classes.push("wrong")
            }
          }
          Answers.push(
            <label key= {q} className={classes.join(" ")}>
              {this.state.question.Response[q]}
              <input type="checkbox" name="radio"/>
              <span className="check"></span>
            </label>
          )
        }
      }
    }
    return [Question, Answers];
  }

  renderNextQuestion = () => {
    if (this.state.started) { return (
      <div className="buttonDiv">
        <button className="button button2" onClick={this.selectRandomQuestion}>Next Question</button>
        <button
        className={this.state.showAnswer ? "button button2 buttonRed" : "button button2"}
        onClick={this.showAnswerHandler}>
          {this.state.showAnswer ? "Hide Answers": "Show Answers"}
        </button>
      </div>)
      } else {return null}
  }

  render () {
    let start = this.state.started ? null : <button className="button button2 middle" onClick={this.selectRandomQuestion}>Start Quiz</button>;
    let nextQuestion = this.renderNextQuestion();
    let [Question, Answers] = this.renderQuestion();
    let ques = this.state.started ? ( 
      <div>
        {Question}
        <div className="quesContainer">
          {Answers}
        </div>
      </div>) : null;

    return ( 
      <div className="App">
        <div>
          {start}
          {ques}
        </div>
          {nextQuestion}
      </div>
    );
  }
}

export default App;
