var computeFRE = require('../readability.js')
var expect = require('chai').expect,
userTextVeryEasy = 'This is a Test.',
userTextEasy = 'Use your books and newspapers to write an English text.',
userTextMediumEasy = 'Use existing nodejs to compute the score for an English text.',
userTextMedium = 'Use existing library to compute the score for an English text.',
userTextMediumDifficult = 'Q1: use existing nodejs-library to compute the score \
for an English text. -> I reuse the existing library like last time by copying \
the filesystem into the new folder or do you have something different in mind?',
userTextDifficult = 'To test Lix\'s accuracy, the student calculated indices for \
each title in both French and English. The indices included Björnsson\'s \
recommended procedure of selecting a 2000-word sample (made up of 20 100-word \
samples) and a separate sample of 200 sentences (20 samples each of 110 sentences).',
userTextVeryDifficult = 'Adding the extended calculations to the LIX formula \
and comparing the new results across text types and genres, we found that a \
measure based on additional factors on lexical, syntactic and semantic levels \
contributes strongly to a more correct weighting of text difficulty and \
appropriateness for different readers, Texts adapted to the specific needs of \
an individual reader are valuable assets for various types of applications \
connected to research, education and information, constituting a prerequisite \
for the integration into society of second language learners, language-impaired \
persons and beginning readers';

describe('fre-calculation', function() {
  it('userTextVeryEasy should be a String', function () {
    expect(userTextVeryEasy).to.be.a('String');
  });
  it('userTextEasy should be a String', function () {
    expect(userTextEasy).to.be.a('String');
  });
  it('userTextMediumEasy should be a String', function () {
    expect(userTextMediumEasy).to.be.a('String');
  });
  it('userTextMedium should be a String', function () {
    expect(userTextMedium).to.be.a('String');
  });
  it('userTextMediumDifficult should be a String', function () {
    expect(userTextMediumDifficult).to.be.a('String');
  });
  it('userTextDifficult should be a String', function () {
    expect(userTextDifficult).to.be.a('String');
  });
  it('userTextVeryDifficult should be a String', function () {
    expect(userTextVeryDifficult).to.be.a('String');
  });
  it('should output a Difficulty Level: Very easy', function () {
    expect(computeFRE(userTextVeryEasy)).to.equal('Difficulty: Very Easy');
  });
  it('should output a Difficulty Level: Easy', function () {
    expect(computeFRE(userTextEasy)).to.equal('Difficulty: Easy');
  });
  it('should output a Difficulty Level: Medium Easy', function () {
    expect(computeFRE(userTextMediumEasy)).to.equal('Difficulty: Medium Easy');
  });
  it('should output a Difficulty Level: Medium', function () {
    expect(computeFRE(userTextMedium)).to.equal('Difficulty: Medium');
  });
  it('should output a Difficulty Level: Medium Difficult', function () {
    expect(computeFRE(userTextMediumDifficult)).to.equal('Difficulty: Medium Difficult');
  });
  it('should output a Difficulty Level: Difficult', function () {
    expect(computeFRE(userTextDifficult)).to.equal('Difficulty: Difficult');
  });
  it('should output a Difficulty Level: Very Difficult', function () {
    expect(computeFRE(userTextVeryDifficult)).to.equal('Difficulty: Very Difficult');
  });
});
