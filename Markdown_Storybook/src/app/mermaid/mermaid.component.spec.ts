import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermaidComponent } from './mermaid.component';

describe('MermaidComponent', () => {
  let component: MermaidComponent;
  let fixture: ComponentFixture<MermaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MermaidComponent]
    });
    fixture = TestBed.createComponent(MermaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
