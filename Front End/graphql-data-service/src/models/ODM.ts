import fetch, { Response } from 'node-fetch';

export type SingleOfficePreview = {
  title: string;
  officeId: string;
  geoid: string;
  officeholder: {
    name: {
      first: string;
      last: string;
    };
  };
};

export type SingleOffice = {
  title: string;
  website: string;
  timestamp: number;
  state: string;
  filingWindow: {
    start: number;
    end: number;
  };
  term: {
    start: number;
    end: number;
  };
  contact: {
    email: string;
    phone: {
      country: string;
      area: string;
      office: string;
      line: string;
    };
  };
  officeholder: {
    gender: string;
    termEnd: string;
    name: {
      first: string;
      last: string;
    };
    socialMedia: {
      facebook: string;
      twitter: string;
      instagram: string;
    };
  };
};

export type Meeting = {
  geoid: string;
  website: string;
  location: {
    virtual: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  };
  schedule: {
    timezone: number;
    time: {
      hour: number;
      minute: number;
    };
    week: number;
    day: number;
    frequency: number;
    firstDate: number;
  }[];
};

const BASE_URL = 'http://office-data-manager:8080/api/v1';

export class ODM {
  async fetchODM<T>(relativeURL: string, body: T): Promise<Response> {
    const url = `${BASE_URL}${relativeURL}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log(
        `Status code ${response.status} when fetching from office data manager`,
        response.statusText,
        url
      );

      throw new Error(response.statusText);
    }

    return response;
  }

  async getOfficesByGeoids(
    geoids: readonly string[]
  ): Promise<SingleOfficePreview[][]> {
    // Fetch results and convert to list of SingleOfficePreview lists
    return this.fetchODM(`/offices/geoids`, { geoids })
      .then((response) =>
        response.json().then((data) => data.offices as SingleOfficePreview[][])
      )
      .catch(() => []);
  }

  async getOfficesByOfficeIDs(
    officeIds: readonly string[]
  ): Promise<SingleOffice[]> {
    // Fetch results and convert to SingleOffice list
    return this.fetchODM(`/offices/office_ids`, { office_ids: officeIds })
      .then((response) =>
        response.json().then((data) => data.offices as SingleOffice[])
      )
      .catch(() => []);
  }

  async getMeetingsByGeoids(geoids: readonly string[]): Promise<Meeting[][]> {
    // Fetch results and convert to list of Meetings lists
    return this.fetchODM(`/meetings/geoids`, { geoids })
      .then((response) =>
        response.json().then((data) => data.meetings as Meeting[][])
      )
      .catch(() => []);
  }
}
