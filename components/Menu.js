import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Container,
  Button
} from 'reactstrap';
import FormGroup from 'react-bootstrap/FormGroup';
import {Input, Form} from 'reactstrap';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Link from 'next/link';

class Menu extends Component {
    /*const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);*/

    state = {
      book_search: '',
      searchSucess: false
    }

    onChangeInput = (field, ev) => {
      this.setState({[field]: ev.target.value})
    }
    

    render() {
      return (
        <div>
          <Navbar color="secondary" dark expand="md">
            <Container>
              <NavbarBrand href="/">Book City</NavbarBrand>
                <Nav className="mr-auto" navbar>

                  <Form inline className="form-search">
                    <Input type="text" placeholder="Search" className="mr-sm-2" name="book_search" onChange={(ev) => this.onChangeInput("book_search", ev)}/>
                    <Link href={{
                      pathname: '/search',
                      query: {
                        book: this.state.book_search
                      }
                    }} as={`/search/${this.state.book_search}`}>
                      <Button variant="outline-info" className="btn-search">
                        <FontAwesomeIcon icon={faSearch} className="btn-icon"/>
                      </Button>
                    </Link>
                  </Form>

                  <div className="user-area">
                    <Button variant="outline-info" className="user-icon">
                      <FontAwesomeIcon icon={faUser} className="btn-icon"/>
                    </Button>
                    <Button variant="outline-info" className="shopping-cart">
                      <FontAwesomeIcon icon={faShoppingCart} className="btn-icon"/>
                    </Button>
                  </div>
                </Nav>
            </Container>
          </Navbar>
        </div>
      );
    }
}

export default Menu