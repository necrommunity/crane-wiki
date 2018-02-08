// Handlebar helpers
Handlebars.registerHelper('well', function(options) {
  return '<div class="well">' + options.fn(this) + '</div>';
});

Handlebars.registerHelper('well-sm', function(options) {
  return '<div class="well well-sm">' + options.fn(this) + '</div>';
});

Handlebars.registerHelper('well-lg', function(options) {
  return '<div class="well well-lg">' + options.fn(this) + '</div>';
});

Handlebars.registerHelper('makeLink', function(str) {
  str = str.replace(/\s+/g, '-').toLowerCase();
  return str;
});

Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {

    if (arguments.length < 3)
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

    var operator = options.hash.operator || "==";

    var operators = {
        '==':       function(l,r) { return l == r; },
        '===':      function(l,r) { return l === r; },
        '!=':       function(l,r) { return l != r; },
        '<':        function(l,r) { return l < r; },
        '>':        function(l,r) { return l > r; },
        '<=':       function(l,r) { return l <= r; },
        '>=':       function(l,r) { return l >= r; },
        'typeof':   function(l,r) { return typeof l == r; }
    }

    if (!operators[operator])
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);

    var result = operators[operator](lvalue,rvalue);

    if( result ) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});

Handlebars.registerHelper('anchor', function(title) {
//creates an anchor point for jumping, with id 'title'.
//Usage syntax: {{{anchor "section"}}} for an id of 'section'
   title = Handlebars.escapeExpression(title);
   return new Handlebars.SafeString("<a id='" + title +"'></a>");
});

Handlebars.registerHelper('jump',function(text, title) {
//creates a jump link to a defined anchor (see helper 'anchor').
//Syntax: {{{jump "insert phrase here" "section"}}} for a link that displays as 'insert phrase here' and jumps to id 'section'
   title = Handlebars.escapeExpression(title);
   text = Handlebars.escapeExpression(text);
   return new Handlebars.SafeString("<a href='#" + title + "'>" + text + "</a>");
   });

