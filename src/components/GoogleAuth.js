import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "164461091066-1q9u9o4e2sb77bt9a16i8rhq2hqj9o5c.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
