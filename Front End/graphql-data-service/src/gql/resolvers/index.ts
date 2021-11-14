import { mergeResolvers } from '@graphql-tools/merge';
import { officeResolver } from './office';
import { locationResolver } from './location';
import { meetingResolver } from './meeting';

const rootResolver = [officeResolver, locationResolver, meetingResolver];

export default mergeResolvers(rootResolver);
