import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

import "./BoxWallpaper.css";

class BoxWallpaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallpaper: {},
      comment: "",
    };
  }

  componentDidMount() {
    this.getWallpapers();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  addComment = () => {
    axios
      .post("/wallpapers/comments/", {
        body: this.state.comment,
        wallpaper: this.props.params.id,
      })
      .then((res) => {})
      .catch((res) => console.log(res));
  };

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
        {wallpaper?.comments &&
          wallpaper?.comments.map((comment, key) => (
            <div className="box-wallpaper__comment" key={key}>
              <div> {comment.owner}</div>
              <div>{comment.body}</div>
            </div>
          ))}
        <form onSubmit={this.addComment}>
          <input
            type="text"
            placeholder="Komentarz"
            id="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            required
          />
          <Button block color="warning" type="submit">
            Dodaj komentarz
          </Button>
        </form>
      </div>
    );
  }
}

export default BoxWallpaper;
