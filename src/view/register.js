export default () => {
  const view =`<h1> holaaaa </h1>
  <p>soy el register</p> `;

const articleElem = document.createElement('article')
articleElem.innerHTML = view;
return articleElem;
}