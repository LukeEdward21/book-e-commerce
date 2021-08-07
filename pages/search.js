import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Head from 'next/head'
import {Jumbotron, Container} from 'reactstrap'
import Menu from '../components/Menu'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Search(books) {
  const router = useRouter()
  console.log(books.response)
  return (
    
    <div className="searchpage">  
      <Head>
        <title>Book city - Busca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <Jumbotron fluid className="services">
        <Container className="text-center">
          <h1 className="display-4">Book City</h1>
          <p className="lead">Tenha uma boa leitura.</p>
        </Container>
      </Jumbotron>

      <Container className="text-center">
      <div className="row">
          {
          books.response.map((book) => (
            <div className="col-lg-4" key={book._id}>
              <div className="cape_container">
                <img src={book.image} className="cape-card"/>
              </div>
              <div className="title_container">
                <h2>{book.name}</h2>
              </div>
                <p>
                  <Link href={{
                    pathname: '/book',
                    query: {
                      name: book.name,
                      pages: book.pages,
                      synopsis: book.synopsis,
                      image: book.image,
                      edition: book.edition,
                      language: book.language,
                      avaiable: book.avaiable,
                      price: book.price
                    }
                  }} as={`/book/${book.name}`}>
                    <a className="btn btn-secondary">Ver Detalhes</a>
                  </Link>
                </p>
            </div>
          ))
          }
        </div>      
      </Container>  
    </div>
  )
}

Search.getInitialProps = async({query}) => {
  const {book} = query
  var res = await axios({
    method: "POST",
    url: "http://localhost:8000/search-book",
    data: {
      name: book  
    }
  })
  return {response: res.data}
}
  
export default Search
