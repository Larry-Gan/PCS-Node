import { Resolver, QueryLocationArgs } from 'src/generated/graphql';
import { ResolverContext } from 'src/gql/types';

const location: Resolver<
  { geoid: string; layer: string; title: string; shapefile: string }[],
  Record<string, never>,
  ResolverContext,
  QueryLocationArgs
> = async (_parent, { address }, { dataSources }) => {
  const { geoinfoproviderSource } = dataSources;
  const geometries = await geoinfoproviderSource.getGeometriesByAddress(
    address
  );

  // Flatten nested fields in geometries to convert each item from type SingleGeometry to
  // type { geoid: string; layer: string; title: string; shapefile: string }
  return geometries.flatMap(({ name: layer, shapefiles }) =>
    shapefiles.flatMap(({ shapefile, geometries }) =>
      geometries.map(({ name: title, geoid }) => ({
        geoid,
        layer,
        title,
        shapefile,
      }))
    )
  );
};

export const locationResolver = {
  Query: {
    location,
  },
};
