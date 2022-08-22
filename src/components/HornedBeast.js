import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <div className="main">
        <h2>{this.props.title}</h2>
        <p>{this.props.descr}</p>
        <img src= {this.props.img} alt = 'Dog image'/>
      </div>
    );
  }
}
export default HornedBeast;
