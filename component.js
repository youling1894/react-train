class Welcome extends React.Component {
  render() {
    return <h3>hello {this.props.name}</h3>;
  }
}
const component = (
  <div>
    <Welcome name="tony"></Welcome>
    <Welcome name="jerry"></Welcome>
    <Welcome name="lzs"></Welcome>
  </div>
);

function Test() {
  return (
    <div>
      <Welcome name="tony"></Welcome>
      <Welcome name="jerry"></Welcome>
      <Welcome name="lzs"></Welcome>
    </div>
  );
}

const componentDom = document.querySelector("#component");
ReactDOM.render(<Test />, componentDom);
///////////////////////////////////////////////////////////////////////////
const user = {
  name: "tom",
  avatarUrl:
    "http://img1.imgtn.bdimg.com/it/u=1547725310,211351709&fm=26&gp=0.jpg",
};

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}></UserInfo>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}></Avatar>
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

const commentDom = document.querySelector("#comment");
ReactDOM.render(
  <Comment
    author={user}
    text="details"
    date={new Date().toLocaleDateString()}
  ></Comment>,
  commentDom
);
