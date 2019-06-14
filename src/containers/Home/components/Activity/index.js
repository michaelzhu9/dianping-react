import React, { Component } from "react";
import "./style.css";

class Activity extends Component {
  render() {
    return (
      <div className="activity">
        <div className="activity__block">
          <a
            className="activity__content activity__content--pink"
            href="https://h5.dianping.com/app/ziggurat/1005/index.html?activity_tlt=1005&infrom=mzone"
          >
            <div className="activity__title">Up to $88 gift for new customer</div>
            <div className="activity__subTitle activity__subTitle--pink">
            </div>
            <img
              alt=""
              className="activity__pic"
              src="https://op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a3a31fff2e047a907a53d6488877f7fe.png"
            />
          </a>
        </div>
        <div className="activity__block">
          <a
            className="activity__content activity__content--blue"
            href="//h5.dianping.com/app/ziggurat/1361/index.html?notitlebar=1&token=*&latitude=*&longitude=*&activity_tlt=1361&infrom=mzone"
          >
            <div className="activity__title">Free gift</div>
            <div className="activity__subTitle activity__subTitle--blue">
            </div>
            <img
              alt=""
              className="activity__pic"
              src="https://op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a9b8c52c341892600ff7260c89025a59.png"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Activity;
