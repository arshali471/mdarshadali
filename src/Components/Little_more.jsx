import React from 'react'
import '../Components-css/Little_more.css'
import Component from './arshad1.jpeg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function Little_more() {
    return (
        <>
        <div className="little p-4">
            <Container>
                <Row>
                    <Col sm><img src={Component} alt="" width='100%' height='100%' /></Col>
                    <Col sm> <h2 className='l1'>"I work on Frontend as well as backend Technologies. For frontend I use HTML, CSS, Javascript, Jquery and React-Js and for Backend I use Django. I have also a deep knowledge of Django-Rest-Framework."</h2></Col>
                </Row>
            </Container>
            </div>
        </>
        )
}

export default Little_more
