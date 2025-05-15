import { gql } from "graphql-tag";

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        name
        type
        dimension
      }
      location {
        name
        type
        dimension
      }
      episode {
        id
        name
        episode
        air_date
      }
      created
    }
  }
`;

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $page: Int
    $name: String
    $status: String
    $gender: String
  ) {
    characters(
      page: $page
      filter: { name: $name, status: $status, gender: $gender }
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
      }
    }
  }
`;
