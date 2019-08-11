/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGifs = `query GetGifs($searchTerm: String, $limit: Int) {
  getGifs(searchTerm: $searchTerm, limit: $limit) {
    id
    slug
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
