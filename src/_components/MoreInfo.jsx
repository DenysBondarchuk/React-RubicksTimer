import React, { Component } from 'react';

import Information from './Information';


class MoreInfo extends Component {

  state = {
    open: false,
  }

  openInformation = () => {
    this.setState({
      open: !this.state.open,
    })
  };

  render() {
    const { open } = this.state;
    return (
      <div className="information">
        <div className="information__top">
          <p 
            className= {"information__title" + (open ? ' active' : '') }
            onClick={this.openInformation}

          >More info</p>
        </div>
        { open && <Information />}
      </div>
    );
  }
}


export default MoreInfo;