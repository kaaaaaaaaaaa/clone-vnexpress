import React from "react";
import PropTypes from "prop-types";
import "./StoryItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
const styles = {
  color: "#eee",
};
function StoryItem(props) {
  const { title, description, comment, img } = props;
  return (
    <div className="story-item">
      <h3 className="story-item__title">{title}</h3>
      <div className="story-item__content">
        <img src={img} alt="" />
        <p className="story-item__content__des">
          {description}
          <br />
          <FontAwesomeIcon style={styles} icon={faCommentAlt} />
          <span>{comment}</span>
        </p>
      </div>
    </div>
  );
}

StoryItem.propTypes = {};

export default StoryItem;
