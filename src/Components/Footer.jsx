import React from 'react'
import '../Components-css/Footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Component from './alogo.png'
import Button from 'react-bootstrap/Button'
import Componentpdf from './ArshadResume.pdf'

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col sm className="p-4">
                        {/* <h3 className='full'>I'm a Full Stack Web Developer, based in India. I am currently working as a software developer in Panicle Tech, Haryana.</h3> */}
                        <hr />
                        <Row>
                            <Col sm>
                                <img src={Component} alt="" className='dal' width='60%' height='80%' />
                                <h4 className='hello'>👋  Hello, From Arshad</h4>
                            </Col>
                            <Col sm className='ulist'>
                                <ul>
                                    <li> <a href="#home"> Home</a></li>
                                    <li> <a href="#about"> About</a></li>
                                    <li> <a href="#work">Work experience</a> </li>
                                    <li> <a href="#projects">Projects</a> </li>
                                    <li> <a href="#education">Education</a> </li>
                                </ul>
                            </Col>
                            <Col sm>
                                <p>Follow me on:</p>
                                <a href="https://www.linkedin.com/in/md-arshad-ali-06279a1b2/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt='' /></a>
                                <a href="https://github.com/arshali471">  <img src="https://img.icons8.com/ios-filled/48/000000/github.png" alt='' /></a>
                                <Button variant="outline-warning" className='m-4 bu' > <a href={Componentpdf}>Download Resume</a> </Button>
                            </Col>
                            <Col sm>
                                <h3>Contact me:</h3>
                                <h4> <a href="mailto:arshali471@gmail.com">arshali471@gmail.com</a> </h4>
                            </Col>
                            <hr />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
