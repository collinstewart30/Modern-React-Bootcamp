class Machine extends React.Component {
  render() {
    const {s1, s2, s3} = this.props;
    const pStyles = {fontSize: '50px', backgroundColor: 'purple'};
    const winOrLose = s1 === s2 && s1 === s3;
      
    return (
      <div className="Machine">
        <p style={pStyles}>{s1} - {s2} - {s3}</p>
        <h2 className={winOrLose ? 'winner' : 'loser'}>
          {winOrLose ? 'You Won!' : 'You Lost!'}
        </h2>
      </div>
    )
  }
}