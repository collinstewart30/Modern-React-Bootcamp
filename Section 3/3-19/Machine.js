class Machine extends React.Component {
  render() {
    const {s1, s2, s3} = this.props;
    var winOrLose = 'You Lost!';

    if (s1 === s2 && s1 === s3)
      winOrLose = 'You Won!';
      
    return (
      <div>
        <p>{s1} - {s2} - {s3}</p>
        <h2>{winOrLose}</h2>
      </div>
    )
  }
}