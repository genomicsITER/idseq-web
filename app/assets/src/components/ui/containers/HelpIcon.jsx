import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import BasicPopup from "~/components/BasicPopup";
import InfoIconSmall from "~ui/icons/InfoIconSmall";
import cs from "./help_icon.scss";

class HelpIcon extends React.Component {
  render() {
    return (
      <BasicPopup
        trigger={
          <div className={this.props.className}>
            <InfoIconSmall className={cx(cs.helpIcon)} />
          </div>
        }
        hoverable
        inverted={false}
        basic={false}
        size="small"
        position="top center"
        content={<div className={cs.tooltip}>{this.props.text}</div>}
      />
    );
  }
}

HelpIcon.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default HelpIcon;
