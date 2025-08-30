// Q1. Remove Duplicate Emails
function removeDuplicateEmails(emails) {
  let writeIndex = 1;
  for (let readIndex = 1; readIndex < emails.length; readIndex++) {
    if (emails[readIndex] !== emails[readIndex - 1]) {
      emails[writeIndex] = emails[readIndex];
      writeIndex++;
    }
  }
  emails.splice(writeIndex);
  return emails;
}

let emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"];
console.log(removeDuplicateEmails(emails)); 

// Q2. Playlist Duration Matcher
function findSongPair(songs, targetDuration) {
  songs.sort((a, b) => a - b);
  let left = 0;
  let right = songs.length - 1;

  while (left < right) {
    let sum = songs[left] + songs[right];
    if (sum === targetDuration) {
      return [songs[left], songs[right]];
    } else if (sum < targetDuration) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

let songs = [3, 5, 8, 2, 7, 4];
let targetDuration = 10;
console.log(findSongPair(songs, targetDuration)); 

