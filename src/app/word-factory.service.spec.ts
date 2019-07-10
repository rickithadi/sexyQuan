import { TestBed } from '@angular/core/testing';

import { WordFactoryService } from './word-factory.service';

describe('WordFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordFactoryService = TestBed.get(WordFactoryService);
    expect(service).toBeTruthy();
  });
});
