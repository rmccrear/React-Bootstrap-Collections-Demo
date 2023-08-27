import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


class MyListGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
      <ListGroup>
        <ListGroup.Item>
          Lay's
        </ListGroup.Item>
        <ListGroup.Item>
          Pringles
        </ListGroup.Item>
        <ListGroup.Item>
          Cheetoes
        </ListGroup.Item>

      </ListGroup>
    );
  }
}

export default MyListGroup;