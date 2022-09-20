import { gql } from "@apollo/client";

export const GetCountries = gql`
  {
    countries {
      name
      code
      continent {
        name
      }
      emoji
      emojiU
    }
  }
`;
