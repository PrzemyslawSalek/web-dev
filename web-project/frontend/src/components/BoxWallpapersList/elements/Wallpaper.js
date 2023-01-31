import React, { Component } from "react";
import { Card } from "reactstrap";

import "./Wallpaper.css";

class Wallpaper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { wallpaper } = this.props;

    return (
      <Card className="wallpaper">
        <div className="wallpaper__image-wrapper">
          <img
            className="wallpaper__image"
            alt={wallpaper.name}
            src={wallpaper.image}
          />
        </div>
        <div className="wallpaper__title">{wallpaper.name}</div>
      </Card>
    );
  }
}

export default Wallpaper;
