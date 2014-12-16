


/**
* 目录工具
*/
module.exports = (function () {

    
    var FS = require('fs');
    var Path = require('path');


    /**
    * 递归地创建目录及子目录。
    */
    function create(path) {

        var dir = path.slice(-1) == '/' ? path.slice(0, -1) :
                Path.dirname(path);

        if (FS.existsSync(dir)) { //已经存在该目录
            return;
        }

        var parent = Path.dirname(dir) + '/';

        if (!FS.existsSync(parent)) {
            create(parent);
        }

        FS.mkdirSync(dir);

    }


    return {
        create: create
    };



})();






