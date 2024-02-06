import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAddPipe();
    expect(pipe).toBeTruthy();
  });

  it('should add the parameter to the value', () => {
    const result = new MyAddPipe().transform(10, '5');
    expect(result).toEqual(15);
  });
});
