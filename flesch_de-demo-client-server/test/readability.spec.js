var computeFRE = require('../readability.js')
var expect = require('chai').expect,
userTextVeryEasy = 'Das ist ein Test.',
userTextEasy = 'Benutze ein Buch, um einen Text zu schreiben.',
userTextMediumEasy = 'Benutze eine Zeitung, um einen Text zu schreiben.',
userTextMedium = 'Benutze deine Bücher und Zeitungen, um einen Text zu schreiben.',
userTextMediumDifficult = 'Benutze deine Bücher und Zeitungen, um Inspiration \
für einen Text zu finden.',
userTextDifficult = 'Benutze deine Bücher und Zeitungen, um Inspiration \
für einen Text zu finden. Entwerfe ein grobes Skript anhand von Kreativitätsüungen,\
wie Brainstorming.',
userTextVeryDifficult = 'Benutze deine Bücher und Zeitungen, um Inspiration \
für einen Text zu finden. Entwerfe ein grobes Skript anhand von Kreativitätsüungen,\
wie Brainstorming. Entwerfe die Charaktere und erschaffe zunächst das grandiose Ende der Geschichte,\
damit es Dir gelingt die Spannungskurven und Wendepunkte in Deine Handlung einzubauen.\
Folge Deinen Instinkten, um einen stimmingen Geschichtsverlauf aufzubauen, denen \
zwar jeder folgen kann, spiele jedoch nicht zu massiv mit Stereotypen, damit das Ende der \
Handlung nicht sofort durchschaubar wird Die ersten Lesbarkeitsformeln wurden \
für die englische Sprache entwickelt, dass alle Lesbarkeitsformeln sprach- und \
textgenrespezifisch sind, sich also der Flesch-Reading-Ease-Index nicht \
in unveränderter Form auf deutschsprachige Texte anwenden lässt.';

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
