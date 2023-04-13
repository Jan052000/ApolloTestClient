import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeComponent } from './tree.component';
import { FamilyService } from '../services/family.service';
import { TreeNode } from '../Classes/tree-node';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    component.dataService = new FamilyService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if node has children', () => {
    expect(component.hasChild(0, {
      name: 't',
      children: [{name: 'c'}]
    })).toBeTrue();
    expect(component.hasChild(0, {
      name: 'p',
      children: []
    })).toBeFalse();
    expect(component.hasChild(-1, {name: 'p'})).toBeFalse();
  });

  it('should change selected node', () => {
    let oldNode = {
      name: 'original'
    };
    component.selectedNode = oldNode;
    let newNode: TreeNode = {
      name: 'new'
    }
    component.select(newNode, true, null)
    expect(component.selectedNode).toEqual(newNode);
    component.select(oldNode, false, undefined);
  });
});
