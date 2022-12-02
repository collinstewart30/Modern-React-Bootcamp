class Hello extends React.Component {
  render() {
    const props = this.props;
    //Code below wont work, cant change props
    //this.props.from = "BLUE";
    return (
      <div>
        <p>Hello, {props.to}! From {props.from}</p>
      </div>
    )
  }
}