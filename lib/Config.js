


/**
* 配置类工具
*/
module.exports = (function () {

    var File = require('./File');


    function read() {

       
        var config = File.readJSON('./config.json');


        var from = config.from;
        if (from.slice(-1) != '/') {
            from += '/';
        }

        var to = config.to;
        if (to.slice(-1) != '/') {
            to += '/';
        }


        var data = config.data;
        data = File.readJSON('./' + data);


        return {
            data: data,
            from: from,
            to: to
        };


    }


    return {
        read: read
    };



})();






