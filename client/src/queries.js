//client에서 graphQL을 작성하는 방법, graphQL syntax
import { gql } from "@apollo/client";

export const HOME_PAGE = gql`
  {
    players {
      id
      name
      nationality
      image
      position
    }
  }
`;
