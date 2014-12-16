




var $ = require('./MiniQuery');
var Directory = require('./Directory');
var File = require('./File');

var Colors = require('colors/safe');



function add(text) {


    var args = [].slice.call(arguments, 0);

    var ts = $.Date.format(new Date(), 'HH:mm:ss');
    ts = Colors.grey(ts);

    text = $.String.format.apply(null, args);
    text = ts + ' ' + text;

    console.log(text);


}




[
    'black', 
    'red', 
    'green', 
    'yellow', 
    'blue', 
    'magenta', 
    'cyan', 
    'white', 
    'gray', 
    'grey',

].forEach(function (item, index) {

    exports[item] = function () {

        var args = [].slice.call(arguments, 0);
        var s = $.String.format.apply(null, args);
        s = Colors[item](s);

        add(s);

    };
});



exports.add = add;




