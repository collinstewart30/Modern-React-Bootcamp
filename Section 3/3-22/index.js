class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          to="Ringo"
          from="Paul"
          bangs={4}
        />
        <Hello 
          to="George"
        />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);