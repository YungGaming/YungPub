import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGunStatsComponent } from './profile-gun-stats.component';

describe('ProfileGunStatsComponent', () => {
  let component: ProfileGunStatsComponent;
  let fixture: ComponentFixture<ProfileGunStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGunStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGunStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
