class Machine extends React.Component {
  render() {
    var s1 = this.props.s1, s2 = this.props.s2, s3 = this.props.s3;
    var winOrLose = '';

    if (s1 === s2 && s1 === s3) {
      winOrLose = 'You Won!';
    } else {
      winOrLose = 'You Lost!';
    }
    return (
      <div>
        <p>{s1} - {s2} - {s3}</p>
        <h2>{winOrLose}</h2>
      </div>
    )
  }
}