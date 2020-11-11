/**
{
  "api": 1,
  "name": "Liberty XOR decode",
  "description": "Decode a password using Liberty XOR algorithm",
  "author": "crshnburn",
  "icon": "metamorphose",
  "tags": "liberty,password,xor"
}
**/

const { decode } = require('@boop/base64')

function main(input) {
  var encoded = input.text
  
  if (encoded.toUpperCase().substring(0, 5) == "{XOR}") {
    encoded = encoded.substr(5);
  }

  encoded = decode(encoded);

  var decoded = '';
  for (i = 0; i < encoded.length; i++) {
    decoded += String.fromCharCode(encoded.charCodeAt(i) ^ 0x5F);
  }

  input.text = decoded;
}