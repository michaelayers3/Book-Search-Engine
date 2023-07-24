import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
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
`;

// export const QUERY_USERS = gql`
//     query users {
//         users {
//             _id
//             username
//             email
//             password
//             bookCount
//             savedBooks {
//                 bookId
//                 authors
//                 title
//                 description
//                 image
//                 link
//             }
//         }
//     `;

// export const QUERY_USER = gql`
//     query user($username: String!) {
//         user(username: $username) {
//             _id
//             username
//             email
//             password
//             bookCount
//             savedBooks {
//                 bookId
//                 authors
//                 title
//                 description
//                 image
//                 link
//             }
//         }
//     }
// `;
