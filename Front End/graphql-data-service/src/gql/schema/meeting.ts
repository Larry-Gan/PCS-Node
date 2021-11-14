import { gql } from 'apollo-server-express';

export const meetingTypeDefs = gql`
  type MeetingLocation {
    virtual: String!
    address: Address!
  }

  type MeetingSchedule {
    timezone: Int!
    time: Time!
    week: Int!
    day: Int!
    frequency: Int!
    firstDate: Float!
  }

  type Meeting {
    geoid: String!
    website: String!
    location: MeetingLocation!
    schedule: [MeetingSchedule]!
  }
`;
