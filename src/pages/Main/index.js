/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import {
  FaBook,
  FaPlus,
  FaSpinner,
  FaTrashAlt,
  FaPen,
  FaCheck,
} from 'react-icons/fa';

import api from '../../services/api'

import {
  GeneralBody,
  ContainerBody,
  Form,
  SubmitButton,
  List,
} from './styles';

import Header from '../../components/Header'

export default class Main extends Component {
  state = {
    newBook: '',
    books: [],
    loading: false,
    isEdit: false,
    bookEdit: '',
    nameBookUpdate: ''
  }

  async componentDidMount() {
    const listbook = await api.get('books')

    this.setState({
      books: listbook.data
    })
  }

  handleInputChange = e => {
    this.setState({ newBook: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()

    this.setState({ loading: true })

    const { newBook } = this.state

    await api.post('/books', {
      name: newBook
    })

    const listbook = await api.get('books')

    this.setState({
      newBook: '',
      books: listbook.data,
      loading: false
    })
  }

  async handleDelete(e) {
    await api.delete(`/books/${e._id}`)

    const listbook = await api.get('books')

    this.setState({
      books: listbook.data
    })
  }

  async handleOpenUpdate(e) {
    this.setState({
      isEdit: true,
      bookEdit: e._id,
    })
  }

  handleUpdateChange = e => {
    this.setState({ nameBookUpdate: e.target.value })
  }

  async handleUpdate(e){
    const {nameBookUpdate} = this.state

    if(nameBookUpdate === ''){
      
    }

    await api.put(`/books/${e._id}`, {
      name: nameBookUpdate
    })

    const listbook = await api.get('books')

    this.setState({
      isEdit: false,
      books: listbook.data,
      bookEdit: '',
      nameBookUpdate: ''
    })
  }

  render() {
    const { newBook, books, loading, isEdit, bookEdit, nameBookUpdate } = this.state

    return (
      <>
        <Header/>

        <GeneralBody>
          <img src="https://conteudo.imguol.com.br/c/entretenimento/ab/2019/08/08/livraria-da-travessa-abre-a-primeira-loja-de-rua-da-rede-em-sao-paulo-1565288790507_v2_1920x1279.jpg"/>
          <ContainerBody>
            <h1>
              <FaBook color="#8D815D" size={35}/>
              Livros
            </h1>

            <Form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Adicione um novo livro"
                value={newBook}
                onChange={this.handleInputChange}
              />

              <SubmitButton loading={loading}>
                {loading ? (
                  <FaSpinner color="#fff" size={14} />
                ) : (
                    <FaPlus color="#fff" size={14} />
                  )}
              </SubmitButton>
            </Form>

            <List>
              {isEdit ? (
                books.map(book => (
                  <li key={book._id}>
                    {(bookEdit === book._id) ? (
                      <>
                      <input type="text"
                        placeholder={book.name} 
                        value={nameBookUpdate}
                        onChange={this.handleUpdateChange}  
                      />
                      <button className="buttonSuccess" type="submit" onClick={() => this.handleUpdate(book)}>
                        <FaCheck color="#43C210" size={16} />
                      </button>
                      </>
                    ) : (
                        <>
                          <span>{book.name}</span>
                          <button className="buttonUpdate" type="submit" onClick={() => this.handleOpenUpdate(book)}>
                            <FaPen color="#4684BE" size={16} />
                          </button>
                          <button className="buttonDelete"type="submit" onClick={() => this.handleDelete(book)}>
                            <FaTrashAlt color="#D31815" size={16} />
                          </button>
                        </>
                      )}
                  </li>
                ))
              ) : (
                  books.map(book => (
                    <li key={book._id}>
                      <span>{book.name}</span>
                      <button className="buttonUpdate" type="submit" onClick={() => this.handleOpenUpdate(book)}>
                        <FaPen color="#4684BE" size={16} />
                      </button>
                      <button className="buttonDelete" type="submit" onClick={() => this.handleDelete(book)}>
                        <FaTrashAlt color="#D31815" size={16} />
                      </button>
                    </li>
                  ))
                )}
            </List>
          </ContainerBody>
        </GeneralBody>
      </>
    );
  }
}