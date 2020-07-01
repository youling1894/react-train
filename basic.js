const domContainer = document.querySelector("#root");
ReactDOM.render(<h1>Hello, world</h1>, domContainer);

const tony = document.querySelector("#tony");
const name = "tony";
const element = <h1>hello {name}</h1>;
ReactDOM.render(element, tony);

function formatName(user) {
  if (user) {
    return user.name + " " + user.age;
  } else {
    return "error user";
  }
}
const user = {
  name: "tony",
  age: 99,
  avatarUrl:
    "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1457142803,4010601568&fm=26&gp=0.jpg",
};
const userElement = <b>{formatName(user)}</b>;
const userDom = document.querySelector("#user");
ReactDOM.render(userElement, userDom);

const detailsDom = document.querySelector("#details");
const detailElement = (
  <div>
    name:<span>{user.name}</span> age:<b>{user.age}</b>
  </div>
);
ReactDOM.render(detailElement, detailsDom);

const title = Response.potentiallyMaliciousInput;
const titleDom = document.querySelector("#title");
const titleElement = <span>{title}</span>;
ReactDOM.render(titleElement, titleDom);

const objectEle = React.createElement(
  "b",
  { className: "greeting" },
  "hello object"
);
const objectDom = document.querySelector("#obj");
ReactDOM.render(objectEle, objectDom);
