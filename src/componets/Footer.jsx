import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Links />
        <SocialLinks />
        <Address />
      </div>
    );
  }
}

export default Footer;

function Links() {
  return <div className="links"></div>;
}

function SocialLinks() {
  return <div className="social"></div>;
}
function Address() {
  return <div className="address"></div>;
}
