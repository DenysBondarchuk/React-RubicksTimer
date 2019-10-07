import React, { Component } from 'react';

import Information from './Information';


class MoreInfo extends Component {
  state = {
    open: false,
  }

  openInformation = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  render() {
    const { open } = this.state;

    return (
      <div className="information">
        <div className="information__top">
          <span
            className={`information__title${open ? ' active' : ''}`}
            role="button"
            onClick={this.openInformation}
          >
            More info
          </span>
        </div>
        {open && <Information />}
      </div>
    );
  }
}


export default MoreInfo;
