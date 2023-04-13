import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponent } from './main-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TreeNode } from '../Classes/tree-node';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set carddata', () => {
    let temp = component.treeSelectedNode;
    let node: TreeNode = {
      name: 'Test',
      children: [],
      data: {
        test: 'test'
      }
    };
    let node2: TreeNode = {
      name: 'Test2'
    };
    component.setCardData(node2);
    expect(component.treeSelectedNode).toEqual(node2);
    component.setCardData(node);
    expect(component.treeSelectedNode).toEqual(node);
  });
});
