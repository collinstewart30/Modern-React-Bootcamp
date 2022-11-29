class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello />
        <Hello />
        <hr />
        <NumPicker />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));