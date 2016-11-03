var PROPS_PATTERN = /\$\{[a-zA-Z]+\}/g;
function string2obj(text, pattern) {
  var props = pattern.match(PROPS_PATTERN);
  var r = pattern.split(PROPS_PATTERN).join('(.+)');
  var values = text.match(r) || [];

  return props.reduce(function(obj, key, i){
    return obj[key.replace(/^\$\{/,'').replace(/\}$/,'')] = values[i+1], obj;
  },{});
}

//string2obj('https://lennon:johnko@domain.com.au', 'https://${user}:${password}@${website}');
//console.log(string2obj('https://lennon:johnko@domain.com.au', 'https://${user}:${password}@${website}:${pes}'));

module.exports = string2obj;
