import React, { Component } from "react";
import boomtown from "../../images/boomtown.svg";

class MenuBar extends Component {
  render() {
    return (
      <div>
        <a>
          <img src={boomtown} />
        </a>
       </div>
    );
  }
}

export default MenuBar;
