import React from 'react'
import '../Components-css/Nav.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Component from './arshad.png'
import Componentpdf from './ArshadResume.pdf'

// const Downloadpdf = () =>{
//     window.location.href=Componentpdf
// }


function Header() {
    return (
        <div className='header' id='home'>
            <Container>
                <Row>
                    <Col sm>
                        <h1 className='fs pt-4'>
                            Full stack Developer
                        </h1>
                        <h4 className='de'>Hi, I am Md Arshad Ali, seeking for  a carrer in Full Stack Developer.</h4>
                        {/* <Button variant="warning" className='bu1' onClick={Downloadpdf} >Download Resume</Button> */}
                        <Button variant="warning" className='bu1' > <a href={Componentpdf}>Download Resume</a> </Button>
                        <Button variant="warning" className='bu1' > <a href="mailto:arshali471@gmail.com">Let's Chat</a> </Button>
                        <div className='fo'>
                        <p>Follow me on:</p>
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt=''/>
                        <img src="https://img.icons8.com/ios-filled/48/000000/github.png" alt=''/>
                        </div>
                    </Col>
                    <Col sm className=''>
                        <img alt="not found" src={Component} height="" width='100%' className='aimage pt-4' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
