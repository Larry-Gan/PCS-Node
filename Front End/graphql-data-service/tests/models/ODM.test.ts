import { ODM } from 'src/models';
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

jest.mock('node-fetch', () => jest.fn());

describe('ODM model', () => {
  const odm = new ODM();

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
    const res = await odm.fetchODM<{ testParam: string }>('/test', {
      testParam: 'test',
    });

    // Check results
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
    await expect(
      odm.fetchODM<{ testParam: string }>('/test', {
        testParam: 'test',
      })
    ).rejects.toThrow(Error);
  });
});
