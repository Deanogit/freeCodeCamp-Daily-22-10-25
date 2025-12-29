// Speak Wisely, You Must
// Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

// Words are separated by a single space.
// Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
// Move all words before and including that word to the end of the sentence and:
// Preserve the order of the words when you move them.
// Make them all lowercase.
// And add a comma and space before them.
// Capitalize the first letter of the new first word of the sentence.
// All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
// Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.
// For example, given "You must speak wisely." return "Speak wisely, you must."

function wiseSpeak(sentence) {
  console.log(sentence);

  // remove punctuation
  const punctuation = sentence.slice(-1);
  let cleanSentence = sentence.slice(0, -1);

  // words array
  const words = ['have', 'must', 'are', 'will', 'can'];
  // split into an array
  const sentArr = cleanSentence.split(' ');
  // find first occurence
  console.log(sentArr);

  // use findIndex()
  const pivotIndex = sentArr.findIndex((word) =>
    words.includes(word.toLowerCase())
  );
  console.log(pivotIndex);

  // Slice array using pivotIndex
  const part1 = sentArr.slice(0, pivotIndex + 1);
  const part2 = sentArr.slice(pivotIndex + 1);

  // lowercase part1
  const lowerPart1 = part1.map((x) => x.toLowerCase());

  console.log(part2, lowerPart1);

  // form return sentence
  const returnSentence = `${part2.join(' ')}, ${lowerPart1.join(
    ' '
  )}${punctuation}`;
  console.log(returnSentence);

  // uppercase first letter
  const firstLetter = returnSentence[0].toUpperCase();
  console.log(firstLetter);

  return `${firstLetter}${returnSentence.slice(1)}`;

  // loop through sentence arr and find a word match
  // for (const [word, i] of sentArr) {
  // this doesn't work as expected!
  //     if (words.includes(word)) {
  // get the index
  //      console.log(i)
  //     }
  // }

  // move all words before & including to end of sentence
  // // preserve order
  // // lowercase
  // // add comma & space before them

  // capitalise the first letter of new sentence

  // Keep punctuation at end of sentence

  // make sure only single space between words
  // return sentence;
}
