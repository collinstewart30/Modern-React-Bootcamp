class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machines</h1>
        <hr />
        <Machine s1="a" s2="b" s3="c"/>
        <hr />
        <Machine s1="a" s2="a" s3="a"/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));