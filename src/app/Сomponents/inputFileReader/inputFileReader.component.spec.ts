import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inputFileReaderComponent } from './inputFileReader.component';

describe('InputFileReaderComponent', () => {
  let component: inputFileReaderComponent;
  let fixture: ComponentFixture<inputFileReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inputFileReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inputFileReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
