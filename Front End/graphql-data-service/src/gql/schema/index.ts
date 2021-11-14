import { gql } from 'apollo-server-express';
import { officeTypeDefs } from './office';
import { geometryTypeDefs } from './geometry';
import { meetingTypeDefs } from './meeting';

export const queryTypeDefs = gql`
  type DateRange {
    start: Float!
    end: Float!
  }

  type PhoneNumber {
    country: String!
    area: String!
    office: String!
    line: String!
  }

  type Address {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Time {
    hour: Int!
    minute: Int!
  }

  type Query {
    office(id: ID!): Office
    location(address: String!): [Geometry]!
    meetings(geoid: String!): [Meeting]!
  }
`;

export const typeDefs = [
  queryTypeDefs,
  officeTypeDefs,
  geometryTypeDefs,
  meetingTypeDefs,
];
