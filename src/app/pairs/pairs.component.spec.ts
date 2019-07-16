import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CalculateService } from '../services/CalculateService';
import { PairsComponent } from './pairs.component';

describe('PairsComponent', () => {
  let component: PairsComponent;
  let fixture: ComponentFixture<PairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairsComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Pairs component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const localFixture = TestBed.createComponent(PairsComponent);
    localFixture.detectChanges();
    const compiled = localFixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-title').textContent).toContain('Pairs Test (Angular)');
  });

  it('should render submit button with the "CALCULATE" text', () => {
    const localFixture = TestBed.createComponent(PairsComponent);
    localFixture.detectChanges();
    const compiled = localFixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('CALCULATE');
  });

  it('should disable the submit button if input is empty', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it('should enable the submit button if input is not empty', () => {
    component.valuesString = '0, 1, 2, 3, 4, 5';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeFalsy();
  });

  it('should have no "Result" text on the initial start', () => {
    fixture.detectChanges();
    const div = fixture.debugElement.query(By.css('.result'));
    expect(div).toBeFalsy();
  });

  it('should calculate the sum for the values "0, 1, 2, 3, 4, 5" (27)', () => {
    // connect the service
    const service = fixture.debugElement.injector.get(CalculateService);

    // get strings array
    const stringsArray: any[] = '0, 1, 2, 3, 4, 5'.split(',');

    // convert everything to numbers
    const processed: number[] = service.convertToNumbers(stringsArray);

    // get arrays with positive and negative values
    const { positive = [], negative = [] }: { positive: number[], negative: number[] } = service.splitter(processed);

    // get pairs for both of the arrays
    const positivePairs: number[] = service.getPairs(positive);
    const negativePairs: number[] = service.getPairs(negative);

    // calculate final result
    const result = [].concat(positivePairs, negativePairs).reduce((sum, item) => {
      sum += item;
      return sum;
    });
    expect(result).toBe(27);
  });

  it('should calculate the sum for the values "-1, 0, 1" (1)', () => {
    // connect the service
    const service = fixture.debugElement.injector.get(CalculateService);

    // get strings array
    const stringsArray: any[] = '-1, 0, 1'.split(',');

    // convert everything to numbers
    const processed: number[] = service.convertToNumbers(stringsArray);

    // get arrays with positive and negative values
    const { positive = [], negative = [] }: { positive: number[], negative: number[] } = service.splitter(processed);

    // get pairs for both of the arrays
    const positivePairs: number[] = service.getPairs(positive);
    const negativePairs: number[] = service.getPairs(negative);

    // calculate final result
    const result = [].concat(positivePairs, negativePairs).reduce((sum, item) => {
      sum += item;
      return sum;
    });
    expect(result).toBe(1);
  });

  it('should calculate the sum for the values "1, 1" (2)', () => {
    // connect the service
    const service = fixture.debugElement.injector.get(CalculateService);

    // get strings array
    const stringsArray: any[] = '1, 1'.split(',');

    // convert everything to numbers
    const processed: number[] = service.convertToNumbers(stringsArray);

    // get arrays with positive and negative values
    const { positive = [], negative = [] }: { positive: number[], negative: number[] } = service.splitter(processed);

    // get pairs for both of the arrays
    const positivePairs: number[] = service.getPairs(positive);
    const negativePairs: number[] = service.getPairs(negative);

    // calculate final result
    const result = [].concat(positivePairs, negativePairs).reduce((sum, item) => {
      sum += item;
      return sum;
    });
    expect(result).toBe(2);
  });

  it('should calculate the sum for the values "a, 2, 1, -1, 0, cd, 4, 5, 0, -3, -1" (26)', () => {
    // connect the service
    const service = fixture.debugElement.injector.get(CalculateService);

    // get strings array
    const stringsArray: any[] = 'a, 2, 1, -1, 0, cd, 4, 5, 0, -3, -1'.split(',');

    // convert everything to numbers
    const processed: number[] = service.convertToNumbers(stringsArray);

    // get arrays with positive and negative values
    const { positive = [], negative = [] }: { positive: number[], negative: number[] } = service.splitter(processed);

    // get pairs for both of the arrays
    const positivePairs: number[] = service.getPairs(positive);
    const negativePairs: number[] = service.getPairs(negative);

    // calculate final result
    const result = [].concat(positivePairs, negativePairs).reduce((sum, item) => {
      sum += item;
      return sum;
    });
    expect(result).toBe(26);
  });
});
