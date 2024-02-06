import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultPipe();
    expect(pipe).toBeTruthy();
  });

  it('should multiply the value by the parameter', () => {
    const result = new MyMultPipe().transform(10, '5');
    expect(result).toEqual(50);
  });
});
