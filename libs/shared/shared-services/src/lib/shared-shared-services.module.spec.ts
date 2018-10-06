import { async, TestBed } from '@angular/core/testing';
import { SharedSharedServicesModule } from './shared-shared-services.module';

describe('SharedSharedServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedSharedServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedSharedServicesModule).toBeDefined();
  });
});
