import { DataSource } from 'apollo-datasource';
import { GeoInfoProvider, SingleGeometry } from 'src/models';

export class GeoInfoProviderSource extends DataSource {
  geoinfoprovider: GeoInfoProvider;

  constructor() {
    super();
    this.geoinfoprovider = new GeoInfoProvider();
  }

  async getGeometriesByAddress(address: string): Promise<SingleGeometry[]> {
    return this.geoinfoprovider.getGeometriesByAddress(address);
  }
}
