export const getProductsQuery = gql`
  query Products($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          images(first: 1) {
            edges {
              node {
                src
              }
            }
          }
          title
          description
          handle
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
