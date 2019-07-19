import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilService', () => {
  let service: UtilService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(UtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const keyName = 'unitTesting';
  const data = 'testing';
  it('should store the data to localStorage', () => {
    expect(service.setLocalStorage(keyName, data)).toBeFalsy();
    expect(service.getLocalStorage(keyName)).toEqual(data);
  });

  it('should fetch the data from localStorage', () => {
    expect(service.getLocalStorage(keyName)).toEqual(data);
  });

  it('should display the loader on the screen', () => {
    expect(service.showAutoHideLoader()).toBeFalsy();
  });
});
