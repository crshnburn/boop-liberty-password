/**
{
  "api": 1,
  "name": "Liberty XOR encode",
  "description": "Encode a password using Liberty XOR algorithm",
  "author": "crshnburn",
  "icon": "metamorphose",
  "tags": "liberty,password,xor"
}
**/

const { encode } = require('@boop/base64')

function main(input) {
    // XOR each char to ASCII('_') (underscore is 95)
    var xorstring = '';
    for (i = 0; i < input.text.length; i++) {
        xorstring += String.fromCharCode(input.text.charCodeAt(i) ^ 0x5F);
    }
    input.text = "{xor}" + encode(xorstring);
}