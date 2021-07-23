import React from 'react'
import '../Components-css/Projects.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import plist from './Projectset'

function nlist(val){
    return(
        <Container>
            <Card className='' id='projects'>
                <Card.Body>
                    <Card.Title>{val.name}</Card.Title>
                    <Card.Text>
                   {val.des}
                    </Card.Text>
                    <Button variant="warning" href={val.link}>Visit Project</Button>
                </Card.Body>
            </Card>
            </Container>
    )
}

function Projects() {
    return (
        <div>
            <br />
            <br />
            <h1 className='we'>My Projects</h1>
            {plist.map(nlist)}
        </div>
    )
}

export default Projects
