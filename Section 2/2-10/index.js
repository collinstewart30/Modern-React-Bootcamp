class JSXDemo extends React.Component {
  render() {
    return(
      <div>
        <h1>My Image!</h1>
        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
      </div>
    )
  }
}

ReactDOM.render(<JSXDemo/>, document.getElementById("root"))
