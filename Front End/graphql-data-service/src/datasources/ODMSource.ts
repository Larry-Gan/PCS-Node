import { DataSource } from 'apollo-datasource';
import {
  createMeetingLoaderByGeoid,
  createOfficeLoaderByGeoid,
  createOfficeLoaderByOfficeID,
} from 'src/loaders';
import { Meeting, ODM, SingleOffice, SingleOfficePreview } from 'src/models';

export class ODMSource extends DataSource {
  odm: ODM;
  officeGeoidLoader: ReturnType<typeof createOfficeLoaderByGeoid>;
  meetingGeoidLoader: ReturnType<typeof createMeetingLoaderByGeoid>;
  officeIDLoader: ReturnType<typeof createOfficeLoaderByOfficeID>;

  constructor() {
    super();
    this.odm = new ODM();

    // Create a loader for each type of request that uses the same model
    this.officeGeoidLoader = createOfficeLoaderByGeoid(this.odm);
    this.meetingGeoidLoader = createMeetingLoaderByGeoid(this.odm);
    this.officeIDLoader = createOfficeLoaderByOfficeID(this.odm);
  }

  async getOfficesByGeoid(geoid: string): Promise<SingleOfficePreview[]> {
    return this.officeGeoidLoader.load(geoid);
  }

  async getOfficesByGeoids(
    geoids: string[]
  ): Promise<(SingleOfficePreview[] | Error)[]> {
    return this.officeGeoidLoader.loadMany(geoids);
  }

  async getMeetingsByGeoid(geoid: string): Promise<Meeting[]> {
    return this.meetingGeoidLoader.load(geoid);
  }

  async getMeetingsByGeoids(geoids: string[]): Promise<(Meeting[] | Error)[]> {
    return this.meetingGeoidLoader.loadMany(geoids);
  }

  async getOfficeByOfficeID(officeId: string): Promise<SingleOffice> {
    return this.officeIDLoader.load(officeId);
  }

  async getOfficesByOfficeIDs(
    officeIds: string[]
  ): Promise<(SingleOffice | Error)[]> {
    return this.officeIDLoader.loadMany(officeIds);
  }
}
