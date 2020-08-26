"use strict";

function duplicateCount(text) {
  if (text == "" || text == undefined) {
    console.log(0);
  } else {
    var res = text.toLowerCase().split('').sort().join('').match(/(.)\1+/g);

    if (res === null || res == undefined) {
      console.log(0);
    } else {
      console.log(res.length);
    }
  }
}