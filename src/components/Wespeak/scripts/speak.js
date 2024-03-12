export const convertSpeaking = (speaking, usrInput) => {
    let speakingConversion = ""
    const speakingLength = speaking.length
        for (let i = 0; i < speakingLength; i++) {
            let charCode = speaking.charCodeAt(i)
            let modifiedCharCode = charCode + usrInput.length //modify this line, maybe add another parameter
            if (modifiedCharCode == 92) {
                modifiedCharCode = 32
                speakingConversion += String.fromCharCode(modifiedCharCode)
            } 
            // else if (modifiedCharCode == 34) {
            //     speakingConversion += "\\"
            //     speakingConversion += String.fromCharCode(modifiedCharCode)
            // }
            else {
                speakingConversion += String.fromCharCode(modifiedCharCode)
            }
        }
    return speakingConversion
}

// module.exports = {
//     convertSpeaking
// }