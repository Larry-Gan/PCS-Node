import { gql } from 'apollo-server-express';

export const officeTypeDefs = gql`
  type OfficeContact {
    email: String!
    phone: PhoneNumber!
  }

  type OfficeHolderName {
    first: String!
    last: String!
  }

  type OfficeHolderSocialMedia {
    facebook: String!
    twitter: String!
    instagram: String!
  }

  type OfficeHolderPreview {
    name: OfficeHolderName!
  }

  type OfficeHolder {
    gender: String!
    termEnd: String!
    name: OfficeHolderName!
    socialMedia: OfficeHolderSocialMedia!
  }

  type Office {
    id: ID!
    title: String!
    website: String!
    timestamp: Float!
    state: String!
    filingWindow: DateRange!
    term: DateRange!
    contact: OfficeContact!
    officeholder: OfficeHolder!
  }

  type OfficePreview {
    officeholder: OfficeHolderPreview!
    geoid: String!
    officeId: ID!
    title: String!
    full: Office!
  }
`;
