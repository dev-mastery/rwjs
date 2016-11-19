import hello from '~/';

describe('hello', () => {
  const nameToGreet = 'Real World JS!'
  it('should log "Hello Real World JS!" to the console', () => {
    spyOn(console, 'log').and.callThrough();
    hello(nameToGreet);
    expect(console.log).toHaveBeenCalledWith(`Hello ${nameToGreet}`);
  } )
})
