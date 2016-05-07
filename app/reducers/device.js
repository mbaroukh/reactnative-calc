"use strict"

const device = (state = {
  portrait: true
 }, action) => {
  switch(action.type) {
    case 'LAYOUT': {
        return {
          portrait: action.portrait
      };
    }
  }
  return state;
}


export default device;
