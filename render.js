function tick() {
  const element = (
    <div>
      <h5>hello</h5>
      <span>it is {new Date().toLocaleTimeString()}</span>
    </div>
  );
  const elementDom = document.querySelector("#root");
  ReactDOM.render(element, elementDom);
}
setInterval(tick, 1000); //1s一调用
