import { DataSources } from 'apollo-server-express';
import { ODMSource, GeoInfoProviderSource } from 'src/datasources';

export interface ResolverContext {
  dataSources: {
    odmSource: ODMSource;
    geoinfoproviderSource: GeoInfoProviderSource;
  };
}
