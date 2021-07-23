import React from 'react'
import '../Components-css/Work.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Work() {
    return (
        <div> <br /> <br />
            <h1 className='we' id='work'>My work Experience</h1>
            <br />
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={4} className='pt'>
                        <h2> Panicle Tech Pvt. Ltd</h2>
                        <p>Software Developer (Backend)</p>
                        <p>(01/06/2021-present)</p>
                    </Col>
                    <Col sm={4} className='pt1'>
                        <h4>I am Currently working for Panicle Tech Pvt. Ltd, Haryana as a software developer(Backend).</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Work

