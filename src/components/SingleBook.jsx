import { Col, Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
    state = {
        selected: false
    }
    handleToggle = () => {
        this.setState({ selected: !this.state.selected });
    };

    render() {
        return (
            <Col sm={1} md={6} lg={3} key={this.props.asin}>
                <Card className={this.state.selected ? "border border-5 border-danger mt-5" : "mt-5"} onClick={this.handleToggle}>
                    <Card.Img variant="top" src={this.props.img} height="400px" />
                    <Card.Body>
                        <Card.Text>
                            <h3>{this.props.title}</h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default SingleBook