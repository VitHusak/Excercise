import React from "react";
import "./style.scss";

export default class Answer extends React.Component {
  state = {
    answerArr : [
      { user: 'baked_turtle', text: 'Your question is stupid.' },
      { user: 'naked_eye', text: 'Chill out, man!' },
      { user: 'faked_icecream', text: 'Holy Moly!' },
    ],

    likenumberArr : [],
  }


  render() {
    return (
      <div className="answer">
        {
            this.state.answerArr.map((answer, index) => {
            this.state.likenumberArr.push([0, false])

            let handleClick = () => {
              this.state.likenumberArr[index][1] = !this.state.likenumberArr[index][1];
              console.log(this.state.likenumberArr[index][1]);

              if(this.state.likenumberArr[index][1] === true) {
                this.state.likenumberArr[index][0] = 1;
              } else {
                this.state.likenumberArr[index][0] = 0;
              }


              this.setState({
                likenumberArr: this.state.likenumberArr
              })
          
            }
          
            return (
              <>
              <div className="answer__sender">{answer.user}</div>
              <div className="answer__text">{answer.text}</div>
              <div onClick={handleClick}> Like:{this.state.likenumberArr[index][0]}</div>
              </>
            )
          })
        }
      </div>
    )
  }
}