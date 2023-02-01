import axios from "axios";
import React, { Component } from "react";

import "./BoxWallpaper.css";

class BoxWallpaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallpaper: {},
    };
  }

  componentDidMount() {
    this.getWallpapers();
  }

  getWallpapers = () => {
    axios
      .get(`/wallpapers/${this.props.params.id}`)
      .then((res) => this.setState({ wallpaper: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    const { wallpaper } = this.state;

    return (
      <div className="box-wallpaper">
        <div className="box-wallpaper__name">{wallpaper.name}</div>
        <div className="box-wallpaper__image-wrapper">
          <img
            className="box-wallpaper__image"
            alt={wallpaper.name}
            src={wallpaper.image}
          />
        </div>
      </div>
    );
  }
}

export default BoxWallpaper;
