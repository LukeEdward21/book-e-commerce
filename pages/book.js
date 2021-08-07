import React from 'react'
import {Container} from 'reactstrap'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Menu from '../components/Menu'

import 'bootstrap/dist/css/bootstrap.min.css'

function Book() {
    const router = useRouter()
    return(
        <div className="section-book">
            <Head>
                <title>Book city - {router.query.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu/>
            <Container className="book-datas">
                <Container className="book-image">
                    <h1>{router.query.name}</h1>
                    <div className="cape_container">
                        <img src={router.query.image} className="cape-card"/>
                    </div>
                </Container>
                <Container className="book-buy">
                    <Container className="book-buy-panel">
                        <input type="number" placeholder="Calcular frete"/>
                        <button type="button" className="btn btn-info">Calcular</button><br />
                        <button type="button" className="btn btn-success">Comprar</button>
                    </Container>
                </Container>
                <Container className="book-detail">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="2">Especificações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Número de páginas</th>
                                <td>{router.query.pages}</td>
                            </tr>
                            <tr>
                                <th scope="row">Sinopse</th>
                                <td>{router.query.synopsis}</td>
                            </tr>
                            <tr>
                                <th scope="row">Edição</th>
                                <td>{router.query.edition}</td>
                            </tr>
                            <tr>
                                <th scope="row">Idioma</th>
                                <td>{router.query.language}</td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
            </Container>
        </div>
    )
}

export default Book