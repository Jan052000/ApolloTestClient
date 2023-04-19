import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

import { DataCardComponent } from './data-card.component';
import { DataNode } from '../Classes/data-node';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TreeNode } from '../Classes/tree-node';
import { By } from '@angular/platform-browser';

describe('DataCardComponent', () => {
  let component: DataCardComponent;
  let fixture: ComponentFixture<DataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataCardComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardComponent);
    component = fixture.componentInstance;
    component.cardContent = {
      name: 'name',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if is name', () => {
    expect(component.isName(7)).toBeTrue();
    expect(component.isName('JJJJ')).toBeTrue();
    expect(component.isName(null)).toBeFalse();
    expect(component.isName(undefined)).toBeFalse();
  });

  it('should check if is number', () => {
    expect(component.isNumber(7)).toBeTrue();
    expect(component.isNumber('T')).toBeFalse();
    expect(component.isNumber(null)).toBeFalse();
    expect(component.isNumber(undefined)).toBeFalse();
  });

  it('should parse object to data node', () => {
    let node = {
      name: 'Test',
      test: 1,
      isTesting: true,
    };
    let nodeResult: DataNode = {
      displayText: 'Test',
      children: [
        {
          displayText: 'name',
          children: [],
          value: 'Test',
          dataPath: ['Test', 'name'],
        },
        {
          displayText: 'test',
          value: 1,
          children: [],
          dataPath: ['Test', 'test'],
        },
        {
          displayText: 'isTesting',
          value: true,
          children: [],
          dataPath: ['Test', 'isTesting'],
        },
      ],
      dataPath: [node.name],
    };
    expect(component.parseObjectToNode(node.name, node, [node.name])).toEqual(
      nodeResult
    );
  });

  it('should register new FormControl', () => {
    let nodeResult: DataNode = {
      displayText: 'Test',
      children: [
        {
          displayText: 'name',
          children: [],
          value: 'Test',
          dataPath: ['Test', 'name'],
        },
        {
          displayText: 'test',
          value: 1,
          children: [],
          dataPath: ['Test', 'test'],
        },
        {
          displayText: 'isTesting',
          value: true,
          children: [],
          dataPath: ['Test', 'isTesting'],
        },
      ],
      dataPath: ['Test'],
    };
    component['inputControls'] = [];
    component.registerFormControl(nodeResult);
    expect(component['inputControls'].length).toBeGreaterThan(0);
    expect(component['inputControls'][0].node).toEqual(nodeResult);
  });

  it('should edit an object', () => {
    component.DataService = {
      DataObservable: new Observable<TreeNode[]>(),
      MutateValue() {
        return;
      },
      MutationChangeLocation() {
        return '';
      },
      MutationData(input: any) {
        return { data: {}, name: 'Test1' };
      },
      readOnlyKeys: [],
      SelectionChangeLocation() {
        return 'Test1';
      },
      UpdateValues() {
        return;
      },
    };
    component.cardContent = {
      name: 'Test',
      data: {
        test: 1,
        name: 'Test',
        isTesting: true,
      },
    };
    component.registerFormControl(component.cardData);
    component.cardData.children.forEach((child) =>
      component.registerFormControl(child)
    );
    //Start edit
    component.editButtonPressed();
    let changes: { node: DataNode; control: FormControl } | undefined =
      component.inputControls.find(
        (nfcPair) => nfcPair.node === component.cardData.children[0]
      );
    expect(changes).toBeTruthy();
    if (changes) {
      changes.control.setValue('Test1', { onlySelf: true, emitEvent: true });
    }
    changes!.control.markAsDirty();
    //End edit
    component.editButtonPressed();
    expect(component.cardData.children[0].value).toBe('Test1');
  });

  it('should change icon of edit button', () => {
    component.cardContent = {
      name: 'Test',
      data: {
        test: 1,
        name: 'Test',
        isTesting: true,
      },
    };
    let dButton = fixture.debugElement.query(By.css('.sticky'));
    expect(dButton).toBeTruthy();

    let button: HTMLElement = fixture.nativeElement.querySelector('button');

    expect(component.readonly).toBeTrue();
    expect(button.children.length).toBe(1);
    expect(button.children[0].innerHTML).toBe('edit');
    // dButton.triggerEventHandler('click', {});
    button.dispatchEvent(new Event('click'));

    expect(component.readonly).toBeFalse();
    expect(button.children.length).toBe(1);
    expect(button.children[0].innerHTML).toBe('save');
    // dButton.triggerEventHandler('click', {});
    button.dispatchEvent(new Event('click'));

    expect(component.readonly).toBeTrue();
    expect(button.children.length).toBe(1);
    expect(button.children[0].innerHTML).toBe('edit');
  });
});
