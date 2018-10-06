import { async, TestBed } from '@angular/core/testing';
import { ClientSetupModule } from './client-setup.module';

describe('ClientSetupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClientSetupModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClientSetupModule).toBeDefined();
  });
});
