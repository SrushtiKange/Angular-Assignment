import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('create an instance', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return prime number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(11, 'Prime')).toEqual('It is prime number');
  });

  it('should return not prime number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(10, 'Prime')).toEqual('It is not prime number');
  });

  it('should return perfect number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(28, 'Perfect')).toEqual('It is perfect number');
  });

  it('should return not perfect number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(10, 'Perfect')).toEqual('It is not perfect number');
  });

  it('should return even number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(10, 'Even')).toEqual('It is even number');
  });

  it('should return not even number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(11, 'Even')).toEqual('It is not even number');
  });

  it('should return odd number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(11, 'Odd')).toEqual('It is odd number');
  });

  it('should return not odd number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(10, 'Odd')).toEqual('It is not odd number');
  });

  
});
