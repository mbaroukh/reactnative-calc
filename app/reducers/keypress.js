"use strict"

const keypress = (state = {
  value: 0,
  currentOp: "=",
  first: true,
  decimal: false,
  displayed: "0",
  mem: 0
 }, action) => {
  switch(action.type) {
    case 'KEYPRESS': {
      var s = {
        value: state.value,
        currentOp: state.currentOp,
        first: state.first,
        decimal: state.decimal,
        displayed: state.displayed,
        mem: state.mem
      };
      var key=action.key;
      if (key=="MR") {
        s.displayed=s.mem.toString();
      } else
      if (key=="MC") {
        s.mem=0;
      } else
      if (key=="M+") {
        s.mem=s.mem+parseFloat(s.displayed);
      } else
      if (key=="M-") {
        s.mem=s.mem-parseFloat(s.displayed);
      } else
      if (key===".") {
        if (!s.decimal) {
          if (s.first) {
            s.displayed = "0";
            s.first = false;
          }
          s.decimal=true;
        }
      } else
      if (  key==="0" || key==="1" || key==="2" || key==="3"  || key==="4"  ||
            key==="5" || key==="6" || key==="7" || key==="8"  || key==="9" || key==="."
      ) {
        if (s.first) {
          s.displayed=key;
          if (key!=="0") {
            s.first=false;
          }
        } else {
          if (s.decimal && s.displayed.indexOf('.')==-1) {
            s.displayed=s.displayed+".";
          }
          s.displayed=s.displayed+""+key;
        }
      } else
      if (key==="+" || key==="-" || key==="/" || key==="*" || key==="=") {
        var displayedVal = parseFloat(s.displayed);
        if (s.currentOp==="=") {
          s.value=displayedVal;
        } else
        if (s.currentOp==="+") {
          s.value=s.value+displayedVal;
        } else
        if (s.currentOp==="-") {
          s.value=s.value-displayedVal;
        } else
        if (s.currentOp==="*") {
          s.value=s.value*displayedVal;
        } else
        if (s.currentOp==="/") {
          s.value=s.value/displayedVal;
        }
        s.currentOp=key;
        s.first=true;
        s.decimal=false;
        s.displayed=s.value.toString();
      }
      if (s.displayed.length>8) {
        s.displayed=s.displayed.substring(0,8)
      }
      return {
        ...state,
        ...s
      };
    }
  }
  return state;
}


export default keypress;
