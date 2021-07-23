import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useEffect, useState, useRef } from 'react'
import '../Components-css/Nav.css'
import Component from './alogo.png'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navb() {
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <Navbar expand="lg" collapseOnSelect style={{ transition: '1s ease',
       background: navBackground ? "url('https://i.pinimg.com/736x/06/8e/4a/068e4a8e677857976f4e743b8c2b8b43.jpg')" : 'transparent', }} fixed="top" variant="light" className="">
        <Container>
          <Navbar.Brand href="#home" className="p-4">
            <img alt="not found" src={Component} height="80" />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='p-4' >Home</Nav.Link>
              <Nav.Link href="#about" className='p-4' >About</Nav.Link>
              <Nav.Link href="#work" className='p-4' >Work Experience</Nav.Link>
              <Nav.Link href="#projects" className='p-4' >Projects</Nav.Link>
              <Nav.Link href="#education" className='p-4' >Education</Nav.Link>
              <Nav.Link href="mailto:arshali471@gmail.com" className='p-4' >Fire me a Email</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Header />
    </>
  )
}

export default Navb

