import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationBackgroundComponent } from './authentication-background.component';

describe('AuthenticationBackgroundComponent', () => {
  let component: AuthenticationBackgroundComponent;
  let fixture: ComponentFixture<AuthenticationBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
