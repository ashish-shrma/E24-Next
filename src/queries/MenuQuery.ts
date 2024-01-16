export const MENU_QUERY = `
  query MenuQuery {
    menus(where: { location: HEADER_API }) {
      edges {
        node {
          menuItems(where: { parentDatabaseId: 0 }) {
            edges {
              node {
                path
                id
                label
                order
                uri
                childItems {
                  edges {
                    node {
                      path
                      id
                      label
                      order
                      uri
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
