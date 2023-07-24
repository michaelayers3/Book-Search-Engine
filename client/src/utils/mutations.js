import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
                email
                password
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token 
            user {
                _id
                username
                email 
                password
            }
        }
    }
`;

export const SAVE_BOOK = gql `
 mutation saveBook($authors: [String], $description: String!, $bookId: String!, $image: String!, $link: String!, $title: String!) {
    saveBook (authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
        _id
        username
        email
        password
        bookCount
        savedBooks {
            bookId
            authors
            title
            description
            image
            link
            }
            }
            }
            `;

export const DELETE_BOOK = gql `
mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
        _id
        username
        email
        password
        bookCount
        savedBooks {
            bookId
            authors
            title
            description
            image
            link
            }
            }
            }
            `;
