import {
  Resolver,
  QueryOfficeArgs,
  Geometry,
  Office,
  OfficePreview,
} from 'src/generated/graphql';
import { ResolverContext } from 'src/gql/types';
import { SingleOfficePreview } from 'src/models';

const officeFromQuery: Resolver<
  Office,
  Record<string, never>,
  ResolverContext,
  QueryOfficeArgs
> = async (_parent, { id }, { dataSources }) => {
  const { odmSource } = dataSources;
  return odmSource.getOfficeByOfficeID(id).then(
    (office) =>
      ({
        ...office,
        id,
      } as Office)
  );
};

const officeFromPreview: Resolver<
  Office,
  OfficePreview,
  ResolverContext,
  Record<string, never>
> = async ({ officeId }, _args, { dataSources }) => {
  const { odmSource } = dataSources;
  return odmSource.getOfficeByOfficeID(officeId).then(
    (office) =>
      ({
        ...office,
        id: officeId,
      } as Office)
  );
};

const officePreviewFromGeometry: Resolver<
  SingleOfficePreview[],
  Geometry,
  ResolverContext,
  Record<string, never>
> = async ({ geoid }, _args, { dataSources }) => {
  const { odmSource } = dataSources;
  return odmSource.getOfficesByGeoid(geoid);
};

export const officeResolver = {
  Query: {
    office: officeFromQuery,
  },
  OfficePreview: {
    full: officeFromPreview,
  },
  Geometry: {
    offices: officePreviewFromGeometry,
  },
};
