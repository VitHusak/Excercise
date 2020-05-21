


const chatBboxElm = document.querySelector('#chat-box');



for (let i = 1; i <= conversation.length ; i +=1 ) {
  
  setDelay(i);
}

function setDelay(i) {
  setTimeout(function(){
    const item = conversation[i]

    const side = item.side.toLowerCase();
    const name = item.name.toLowerCase();
    const text = item.text.toLowerCase();
    
  
    const sideElm = document.createElement('div');
    sideElm.className = `chat__side chat__side--${side}`;
    sideElm.innerHTML += `
      <div class="chat__userpic chat__userpic--${name}"></div>
      <div class="chat__message chat__message--${side}">
        ${text}
      </div>
    `;
  
    chatBboxElm.appendChild(sideElm);



    console.log(i);
  }, 1000*i);
}

