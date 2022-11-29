function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = 
      <div>
        <img src="https://media.tenor.com/tSDmbxafFXsAAAAC/yes-sweet.gif" />
        <h3>Congrats, you win!</h3>
      </div>
    } else {
      msg = 
      <p>Sorry you lose!</p>
    }
    return(
      <div>
        <h1>Can you get a 7?</h1>
        <h2>Your number is: {num}</h2>
        <p>
          {
            num === 7 
              ? 'Congrats' 
              : 'Unlucky'
            }
          </p>
          {msg}
      </div>
    )
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));