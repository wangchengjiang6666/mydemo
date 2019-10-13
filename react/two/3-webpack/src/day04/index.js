import React from "react";

import ReactDOM from "react-dom";

class Hello extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };
  }

  render() {
    console.log(this.state.a);
    return (
      <div>
        <h1>我是 Hello, {this.state.name}</h1>
        <p>{this.state.counter}</p>
        {/* <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1
            });
            this.setState({
              counter: this.state.counter + 2
            });
            this.setState({
              counter: this.state.counter + 3
            });

            setTimeout(() => {
              this.setState({
                counter: this.state.counter + 4
              });
            }, 1000);
            console.log(this.state.counter);
          }}
        >
          添加
        </button> */}
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      a: this.state.a + 1
    });
    this.setState({
      a: this.state.a + 2
    });
    this.setState({
      a: this.state.a + 3
    });
    setTimeout(() => {
      this.setState({
        a: this.state.a + 4
      });
    });
  }
}

ReactDOM.render(<Hello />, document.getElementById("app"));
