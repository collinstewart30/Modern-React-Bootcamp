class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="Ringo" 
          from="Paul" 
          bangs={4}
          img="https://data.whicdn.com/images/45931598/original.gif"
        />
        <Hello 
          to="Bob" 
          from="Minnie" 
          bangs={25}
          img="https://i.pinimg.com/originals/ec/48/8b/ec488b083ce1c33ebbd98530940d28aa.gif"
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));