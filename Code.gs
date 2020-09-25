function ADDLET(input) {
  if (input.slice(-1) >= '0' && input.slice(-1) <= '9')
  return ADDLET(input.slice(0, -1)) + input.slice(-1);
  if (input === "Z")
    return "AA";
  if (input.slice(-1) === "Z")
    return ADDLET(input.slice(0, -1)) + "A";
  return input.slice(0, -1) + nextChar(input.slice(-1));
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
nextChar('a');

function INCCOL(input, num) {
  for (i = 0; i < num; i++){
   input = ADDLET(input);
  }
  return input;
}

function SUMTEST(input){
  return SUM(input);
}