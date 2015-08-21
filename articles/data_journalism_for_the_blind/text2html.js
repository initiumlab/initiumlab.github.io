var fs = require('fs');
var text = fs.readFileSync('./data_journalism_for_the_blind.txt', 'utf-8');

text = text.split('\n');

text = text.map(function(line){
  if (line) {
    return '<p>\n' + '  ' + line + '\n</p>';
  } else {
    return ''
  }
});

text = text.reduce(function(s1, s2){
  return s1+'\n'+s2;
});

fs.writeFileSync('./data_journalism_for_the_blind.html', text);

