'use strict';

const tab1Elm = document.querySelector('#tab1');
const tab2Elm = document.querySelector('#tab2');
const tab3Elm = document.querySelector('#tab3');

const clickedColour1 = () => {
  tab1Elm.classList.add('tabs__item--clicked');
  tab2Elm.classList.remove('tabs__item--clicked');
  tab3Elm.classList.remove('tabs__item--clicked');
};

const clickedColour2 = () => {
  tab2Elm.classList.add('tabs__item--clicked');
  tab1Elm.classList.remove('tabs__item--clicked');
  tab3Elm.classList.remove('tabs__item--clicked');
};

const clickedColour3 = () => {
  tab3Elm.classList.add('tabs__item--clicked');
  tab2Elm.classList.remove('tabs__item--clicked');
  tab1Elm.classList.remove('tabs__item--clicked');
};

const clickedContent1 = () => {
  const contentElm = document.querySelector('#content');
  contentElm.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dicta tempora eos tenetur autem vel fuga id vitae error aliquid, eveniet asperiores esse ipsa culpa voluptatibus. Perspiciatis reprehenderit aliquid quisquam.';
};

const clickedContent2 = () => {
  const contentElm = document.querySelector('#content');
  contentElm.textContent = 'Voluptatem modi dicta veritatis quia. Sed inventore numquam laudantium ipsam. Iste nihil numquam consequuntur. Similique aut adipisci. Ut amet quae possimus corporis. Dolore qui ut et qui delectus. ea similique reprehenderit Culpa animi qui aperiam pariatur earum. nam sed magnam optio magnam qui. Cupiditate non non ut Maiores autem eum et voluptatem.';
};

const clickedContent3 = () => {
  const contentElm = document.querySelector('#content');
  contentElm.textContent = 'Dolore quo nihil alias. Quo qui officiis necessitatibus. Numquam non nobis non quisquam. Deleniti qui tempore laborum. Suscipit corrupti possimus nisi dolorem. Mollitia in voluptas sunt quasi. Sed voluptatem voluptates illum esse et odit dolor ex. Et quis voluptatum omnis.';
};

const clicked1 = () => {
  clickedColour1();
  clickedContent1();
};

const clicked2 = () => {
  clickedColour2();
  clickedContent2();
};

const clicked3 = () => {
  clickedColour3();
  clickedContent3();
};

tab1Elm.addEventListener('click', clicked1);
tab2Elm.addEventListener('click', clicked2);
tab3Elm.addEventListener('click', clicked3);
