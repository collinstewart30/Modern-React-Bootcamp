class Hello extends React.Component {
  render() {
    console.log(this.props);
    const props = this.props;

    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <p>Hello, {props.to}! From {props.from}{bangs}</p>
        <img src={props.img} />
      </div>
    )
  }
}