class JSXDemo extends React.Component {
  render() {
    return React.createElement("h3", null, "I AM AN H3");
  }
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root"))
