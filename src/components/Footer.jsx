import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center"> Copyright 2022 &copy; Demvic</Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer