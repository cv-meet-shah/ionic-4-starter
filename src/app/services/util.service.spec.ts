import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service).toBeTruthy();
  });

  const keyName = 'unitTesting';
  const data = 'testing';
  it('should store the data to localStorage', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service.setLocalStorage(keyName, data)).toBeFalsy();
    expect(service.getLocalStorage(keyName)).toEqual(data);
  });

  it('should fetch the data from localStorage', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service.getLocalStorage(keyName)).toEqual(data);
  });
});
