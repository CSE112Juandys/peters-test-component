import React, { Component } from 'react';
import { Container, Row, Col, Form, Label, Input } from 'reactstrap';
import { GithubPicker } from 'react-color';
import PetersComponent from './PetersComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        color : '#000',
        times : 1
    }
  }

  handleChange = (color) => {
    console.log(color);
    this.setState({ color : color.hex });
  }

  handleTimeChange = (event) => {
    const times = event.target.value;
    console.log(times);
    if (!isNaN(times) && times > 0) {
      this.setState({ times : event.target.value });
    }
  }

  render() {
    return (
        <Container>
            <Row>
                <Col>
                  <Form>
                    <Label for="colorPicker"> Color of text </Label>
                    <GithubPicker id="colorPicker" color={this.state.color} onChange={this.handleChange}/>
                    <Label for="timesSelector"> Number of times to print text </Label>
                    <Input id="timesSelector" type="textarea" onChange={this.handleTimeChange}/>
                  </Form>
                </Col>
                <Col>
                    <PetersComponent color={this.state.color} times={this.state.times}/>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
