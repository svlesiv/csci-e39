import React from 'react'
import PropTypes from 'prop-types'

class Ad extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    window.location = this.props.siteUrl;
    return false;
  }

  render() {
    const {image, mobileImage, alt, text} = this.props;

    return <div className="ad">
      <picture className="ad">
        <source media="(max-width: 767px)" srcSet={mobileImage} />
        <source media="(max-width: 768px)" srcSet={image} />
        <img src={image} alt={alt} />
      </picture>
      <button onClick={this.clickHandler}>{text}</button>
    </div>
  };
}

export default Ad