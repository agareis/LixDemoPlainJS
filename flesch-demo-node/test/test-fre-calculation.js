var computeFRE = require('../readability.js')
var expect = require('chai').expect,
userTextVeryEasy = 'This is a Test.',
userTextEasy = 'To test Lix\'s accuracy, the student calculated indices for \
each title in both French and English. The indices included Björnsson\'s \
recommended procedure of selecting a 2000-word sample (made up of 20 100-word \
samples) and a separate sample of 200 sentences (20 samples each of 110 sentences).',
userTextMedium = 'Lix is not only simple to calculate, avoiding as it does, \
mathematical formulae, it differs from the English readability measures in two \
important ways. Firstly, it bypasses the problem of whether to count \
monosyllabic words, polysyllabic words or total syllables by including only \
words beyond a certain length; that it is a measure which ignores the \
linguistic rules of syllabification suggests that it is potentially useful \
across languages. Secondly, Lix calculates the percentage of long words \
from 100 word samples while sentence length is computed from separate 10 sentence samples.',
userTextDifficult = 'Where the amount of the annuity derived by the taxpayer \
during a year of income is more than, or less than, the amount payable for a \
whole year, the amount to be exclude from the amount so derived is the amount \
which bears to the amount which, but for this sub-section, would be the amount \
to be so, excluded the same proportion as the amount so derived bears to the \
amount payable for the whole year.',
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
  it('userTextMedium should be a String', function () {
    expect(userTextMedium).to.be.a('String');
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
  it('should output a Difficulty Level: Medium', function () {
    expect(computeFRE(userTextMedium)).to.equal('Difficulty: Medium');
  });
  it('should output a Difficulty Level: Difficult', function () {
    expect(computeFRE(userTextDifficult)).to.equal('Difficulty: Difficult');
  });
  it('should output a Difficulty Level: Very Difficult', function () {
    expect(computeFRE(userTextVeryDifficult)).to.equal('Difficulty: Very Difficult');
  });
});
