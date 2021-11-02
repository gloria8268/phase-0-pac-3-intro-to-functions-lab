function shout(string) {
  return string.toUpperCase();
}
shout("hello");

function whisper(string) {
  return string.toLowerCase();
}
whisper("HELLO");

function logShout(string) {
  console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper("hello");

function sayHiToGrandma(string) {
  let lowerAnswer = "I can't hear you!";
  let upperAnswer = "YES INDEED!";
  let loveYou = "I love you, too.";
  if (string === string.toLowerCase()) {
    return lowerAnswer;
  } else if (string === string.toUpperCase()) {
    return upperAnswer;
  } else if (string === "I love you, Grandma.") {
    return loveYou;
  }
}

console.log(sayHiToGrandma("I love you, Grandma."));

