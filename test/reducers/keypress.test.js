

import { expect } from 'chai';
import keypress from '../../app/reducers/keypress';

let run = function(what) {
  var state = keypress(undefined, {});

  for (var i=0; i<what.length; i++) {
    var key = Array.isArray(what)?what[i]:what.substring(i, i+1);
    state = keypress(state, {
      'type': 'KEYPRESS',
      'key': key
    })
  }

  return state.displayed;
}

describe('keypress reducer', () => {

  it('should return the initial state', () => {
    expect(keypress(undefined, {}).displayed).to.equals("0")
  });
  it('test 12345', () => {
    expect(run("12345")).to.equals("12345")
  });

  it('test max 8 chiffres', () => {
    expect(run("123456789")).to.equals("12345678")
  });
  it('test max 8 chiffres resultat', () => {
    expect(run("12345678*10=")).to.equals("12345678")
  });
  it('test reset', () => {
    expect(run("2*2=3*3=")).to.equals("9")
  });
  it('test = et op', () => {
    expect(run("2*2=*3=")).to.equals("12")
  });

  // Adition
  it('test 1+1', () => {
    expect(run("1+1=")).to.equals("2")
  });
  it('test 1+1+2', () => {
    expect(run("1+1=+2=")).to.equals("4")
  });

  // Multiplication
  it('test 5*3', () => {
    expect(run("5*3=")).to.equals("15")
  });
  it('test 2*2*3', () => {
    expect(run("2*2*3=")).to.equals("12")
  });
  it('test 2.5*2', () => {
    expect(run("2.5*2=")).to.equals("5")
  });

  // Soustraction
  it('test 5-3', () => {
    expect(run("5-3=")).to.equals("2")
  });
  it('test 3-5', () => {
    expect(run("3-5=")).to.equals("-2")
  });

  // Division
  it('test 10/2', () => {
    expect(run("10/2=")).to.equals("5")
  });
  it('test 10/4', () => {
    expect(run("10/4=")).to.equals("2.5")
  });
  it('test 2.5/5', () => {
    expect(run("2.5/5=")).to.equals("0.5")
  });

  // Memoires
  it('Par defaut, 0', () => {
    expect(run(["MR"])).to.equals("0")
  });

  it('M+/MR', () => {
    expect(run(["3", "M+", "5", "MR"])).to.equals("3")
  });

  it('M+', () => {
    expect(run(["3", "+", "5", "=", "M+", "5", "M+", "MR"])).to.equals("13")
  });

  it('MC', () => {
    expect(run(["3", "M+", "MC", "MR"])).to.equals("0")
  });

});
