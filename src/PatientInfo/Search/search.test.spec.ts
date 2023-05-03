import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from './search.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SearchComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PatientInformationApp'`, () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.componentInstance;
   // expect(SearchComponent.).toEqual('PatientInformationApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('PatientInformationApp app is running!');
  });
});

