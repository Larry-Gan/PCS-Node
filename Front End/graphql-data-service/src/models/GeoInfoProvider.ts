import fetch, { Response } from 'node-fetch';

export type SingleGeometry = {
  name: string;
  shapefiles: {
    shapefile: string;
    geometries: {
      geoid: string;
      name: string;
    }[];
  }[];
};

const BASE_URL = 'http://geo-info-provider:8081/api/v1';

export class GeoInfoProvider {
  async fetchGeoInfoProvider(relativeURL: string): Promise<Response> {
    const url = `${BASE_URL}${relativeURL}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      console.log(
        `Status code ${response.status} when fetching from geo info provider`,
        response.statusText,
        url
      );

      throw new Error(response.statusText);
    }

    return response;
  }

  async getGeometriesByAddress(address: string): Promise<SingleGeometry[]> {
    // Fetch results and convert to SingleGeometry list
    return this.fetchGeoInfoProvider(`/geometries/?address=${address}`)
      .then((response) =>
        response.json().then((data) => data.layers as SingleGeometry[])
      )
      .catch(() => []);
  }
}
