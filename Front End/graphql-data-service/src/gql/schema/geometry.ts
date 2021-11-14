import { gql } from 'apollo-server-express';

export const geometryTypeDefs = gql`
  type Geometry {
    layer: String!
    title: String!
    shapefile: String!
    geoid: String!
    offices: [OfficePreview]!
    meetings: [Meeting]!
  }
`;
