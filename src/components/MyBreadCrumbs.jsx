import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class MyBreadCrumbs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <Breadcrumb>
        <Breadcrumb.Item>
          Food
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Snacks
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Potato Chips
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default MyBreadCrumbs;