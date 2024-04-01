export const convertSpoken = (spoken, usrInput) => {
  let spokenConversion = "";
  const spokenLength = spoken.length;
  for (let i = 0; i < spokenLength; i++) {
    let charCode = spoken.charCodeAt(i);
    if (charCode == 32) {
      charCode = 92;
      let modifiedCharCode = charCode - usrInput.length; //modify this line
      spokenConversion += String.fromCharCode(modifiedCharCode);
    }
    // else if (charCode == 92 && spoken[i+1] == 34) {
    //         spoken.splice(i, 1)
    // }
    else {
      let modifiedCharCode = charCode - usrInput.length;
      spokenConversion += String.fromCharCode(modifiedCharCode);
    }
  }

  return spokenConversion;
};

// module.exports = {
//     convertSpoken
// }
