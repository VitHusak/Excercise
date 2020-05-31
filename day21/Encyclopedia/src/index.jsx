import React from "react";
import ReactDOM from "react-dom";
import Term from "./Term/term.jsx";
import "./style.scss";
import "./index.html";


const appElm = document.querySelector('#app');


class Inbox extends  React.Component {
  render() {
    return (
      <>
      <h1>The Encyclopedia</h1>
      <Term
        h2="Antidisestablishmentarianism"
        explain="A political position that developed in 19th-century Britain in opposition to Liberal proposals for the disestablishment of the Church of England—meaning the removal of the Anglican Church's status as the state church of England, Ireland, and Wales. The establishment was maintained in England, but in Ireland, the Church of Ireland (Anglican) was disestablished in 1871. In Wales, four Church of England dioceses were disestablished in 1920 and became the Church in Wales."
      />
      <Term
        h2="blblblblablablalb"
        explain="lorem ipsum ach jo tady to nefunguje, to si to jako musím napsat v html a pak sem zkopírovat?"
      />
      </>
    );
  }
}
let x = ReactDOM.render(<Inbox />, appElm);
console.log(x)

