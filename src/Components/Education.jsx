import React from 'react'
import '../Components-css/Education.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Education() {
    return (
        <>
            <Container>
                <h1 className="eq" id='education'>Education Qualification</h1>
                <Row className="justify-content-md-center">
                    <Col sm={10}>
                        <Card>
                            <Card.Header as="h3" className='chead'>Bachelor's Of Technlogy</Card.Header>
                            <Card.Body>
                                <Card.Title>Guru Gobind Singh Educational Society's Technical Campus</Card.Title>
                                <Card.Text>
                                    Jharkhand University Of technology (2018-2022)
                                </Card.Text>
                                <Card.Text>
                                    I am currently persuing my Bachelor's in Computer Science.
                                    I have scored 8.24 cgpa (till 4th sem)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header as="h3" className='chead'>Intermediate Of Science</Card.Header>
                            <Card.Body>
                                <Card.Title>Saraswati Vidya Mandir,
                                    Dhanbad, Jharkhand</Card.Title>
                                <Card.Text>
                                    CBSE (2015-2017)
                                </Card.Text>
                                <Card.Text>
                                    I have done my Intermediate with PCM and scored 70.2%
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header as="h3" className='chead'>Matriculation</Card.Header>
                            <Card.Body>
                                <Card.Title>Dhanbad city school,
                                    Dhanbad, Jharkhand</Card.Title>
                                <Card.Text>
                                    CBSE (2014-2015)
                                </Card.Text>
                                <Card.Text>
                                    I have Completed my matriculation with 7.8cgpa.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Education
