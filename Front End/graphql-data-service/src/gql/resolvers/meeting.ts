import {
  Resolver,
  Geometry,
  Meeting,
  QueryMeetingsArgs,
} from 'src/generated/graphql';
import { ResolverContext } from 'src/gql/types';

const meetingsFromQuery: Resolver<
  Meeting[],
  Record<string, never>,
  ResolverContext,
  QueryMeetingsArgs
> = async (_parent, { geoid }, { dataSources }) => {
  const { odmSource } = dataSources;
  return odmSource.getMeetingsByGeoid(geoid);
};

const meetingsFromGeometry: Resolver<
  Meeting[],
  Geometry,
  ResolverContext,
  Record<string, never>
> = async ({ geoid }, _args, { dataSources }) => {
  const { odmSource } = dataSources;
  return odmSource.getMeetingsByGeoid(geoid);
};

export const meetingResolver = {
  Query: {
    meetings: meetingsFromQuery,
  },
  Geometry: {
    meetings: meetingsFromGeometry,
  },
};
