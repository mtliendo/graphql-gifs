// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGifs = `query GetGifs($searchTerm: String) {
  getGifs(searchTerm: $searchTerm) {
    id
    slug
    description
    images {
      original {
        url
        width
        height
      }
      fixed_width {
        url
        width
        height
      }
    }
  }
}
`;
