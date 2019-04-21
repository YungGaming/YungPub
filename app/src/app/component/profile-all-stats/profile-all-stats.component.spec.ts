import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAllStatsComponent } from './profile-all-stats.component';

describe('ProfileAllStatsComponent', () => {
  let component: ProfileAllStatsComponent;
  let fixture: ComponentFixture<ProfileAllStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAllStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAllStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
