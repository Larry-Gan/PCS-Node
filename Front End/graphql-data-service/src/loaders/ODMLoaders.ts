import DataLoader, { BatchLoadFn } from 'dataloader';
import { Meeting, ODM, SingleOffice, SingleOfficePreview } from 'src/models';

export const createOfficeLoaderByGeoid = (
  odmSource: ODM
): DataLoader<string, SingleOfficePreview[]> => {
  const batchGeoids: BatchLoadFn<string, SingleOfficePreview[]> = async (
    geoids
  ) => {
    return odmSource.getOfficesByGeoids(geoids);
  };

  return new DataLoader(batchGeoids);
};

export const createOfficeLoaderByOfficeID = (
  odmSource: ODM
): DataLoader<string, SingleOffice> => {
  const batchOfficeIDs: BatchLoadFn<string, SingleOffice> = async (
    officeIds
  ) => {
    return odmSource.getOfficesByOfficeIDs(officeIds);
  };

  return new DataLoader(batchOfficeIDs);
};

export const createMeetingLoaderByGeoid = (
  odmSource: ODM
): DataLoader<string, Meeting[]> => {
  const batchGeoids: BatchLoadFn<string, Meeting[]> = async (geoids) => {
    return odmSource.getMeetingsByGeoids(geoids);
  };

  return new DataLoader(batchGeoids);
};
