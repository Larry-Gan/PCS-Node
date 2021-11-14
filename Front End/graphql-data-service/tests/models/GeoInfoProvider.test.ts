import { GeoInfoProvider } from 'src/models';
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch', () => jest.fn());

describe('GeoInfoProvider model', () => {
  const geoinfoprovider = new GeoInfoProvider();

  it('returns fetched data', async () => {
    // Initialize variables
    const expectedResult = {
      data: 'test',
    };

    // Create mocks
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
      new Response(JSON.stringify(expectedResult))
    );

    // Call function
    const res = await geoinfoprovider.fetchGeoInfoProvider('/test');

    // Check result
    expect(res.ok).toBe(true);
    expect(res.status).toEqual(200);
    expect(await res.json()).toMatchObject(expectedResult);
  });

  it('raises exception on failed request', async () => {
    // Create mocks
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
      new Response(null, { status: 400 })
    );

    // Call function and check results
    await expect(geoinfoprovider.fetchGeoInfoProvider('/test')).rejects.toThrow(
      Error
    );
  });
});
