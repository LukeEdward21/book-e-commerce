import React from 'react';
import { Spinner } from 'reactstrap';

import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';



function Contact() {
    return (
        <div className="contact">
            <Menu />
            Contato com os organizadores
            <div className="d-flex justify-content-center">
                <Spinner color="primary" /> 
            </div>
        </div>
    )
}
  
export default Contact
  