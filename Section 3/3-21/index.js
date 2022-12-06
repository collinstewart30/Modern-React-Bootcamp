class App extends React.Component {
  render() {
    return (
      <div>
        <Friend 
          name="Elton"
          hobbies={['Piano', 'Singing', 'Dancing']}
        />
        <hr />
        <Friend 
        name="Frida"
        hobbies={['Painting', 'Drawing']}
      />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);