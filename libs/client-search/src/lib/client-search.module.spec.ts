import { async, TestBed } from '@angular/core/testing';
import { ClientSearchModule } from './client-search.module';

describe('ClientSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientSearchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClientSearchModule).toBeDefined();
  });
});
