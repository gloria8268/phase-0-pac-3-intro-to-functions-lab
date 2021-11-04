function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

const logShout = function (string) {
  console.log(shout(string));
};
logShout("hello");

const logWhisper = (string) => console.log(whisper(string));
logWhisper("HELLO");

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return "I can't hear you!";
  } else if (string === shout(string)) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}

console.log(sayHiToGrandma("I love you, Grandma."));
