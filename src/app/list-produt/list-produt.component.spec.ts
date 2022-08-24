import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdutComponent } from './list-produt.component';

describe('ListProdutComponent', () => {
  let component: ListProdutComponent;
  let fixture: ComponentFixture<ListProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProdutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
