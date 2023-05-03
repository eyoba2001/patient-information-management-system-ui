import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display a label First name',()=>{
    const label=fixture.debugElement.nativeElement.querySelector('label[for=fname]');
    expect(label). toBeTruthy();
    expect(label.textContent).toContain('First Name');
  });
  it('should display an input box', ()=>{
    const input =fixture.debugElement.nativeElement.querySelector('input[type=text]');
    expect(input).toBeTruthy();
  });

  it('should call a method when the button is clicked',()=>{
    spyOn(component, 'onButtonClick');
    let btn=fixture.nativeElement.querySelector('button');
    btn.click();
    expect(component.onButtonClick).toHaveBeenCalled();

  })
});
