class Hello extends React.Component {
  render() {
    const props = this.props;
    return (
      <div>
        <p>Hello, {props.to}! From {props.from}</p>
      </div>
    )
  }
}