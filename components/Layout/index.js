import React from 'react';
import { Container } from "react-bootstrap";
import { Navbar } from '../Navbar';


export const Layout = ({ children }) => (
  <>
    <Navbar />
    <Container style={{ marginTop: 63 }} fluid>
      {children}
    </Container>
  </>
);
