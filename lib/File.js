

/**
* 文件工具
*/
module.exports = (function () {

    'use strict';

    var FS = require('fs');
    var Path = require('path');

    var $ = require('./MiniQuery');
    var Directory = require('./Directory');
    var Log = require('./Log');

    

    function write(path, content) {

        Directory.create(path);

        FS.writeFileSync(path, content);
        Log.yellow('写入文件: {0}', path);
    }


    function read(path) {
        return FS.readFileSync(path);
    }


    function exists(path) {
        return FS.existsSync(path);
    }


    function move(from, to, file) {

        Directory.create(to); //创建目标目录


        var src = from + file;
        var dest = to + file;

        if (!exists(src)) {
            Log.red('不存在文件: ' + src);
            return false;
        }

        FS.renameSync(src, dest);
        Log.green('移动文件: ' + file);
        return true
    }

    function readJSON(path) {

        if (exists(path)) {
            var json = read(path);
            json = json.toString();

            return JSON.parse(json);
        }

        return null;
    }


    function writeJSON(path, json, merged) {

        if (typeof json == 'string') { //统一输出格式
            json = JSON.parse(json);
        }

        if (merged) { //指定了要合并原来的
            var obj = readJSON(path);
            if (obj) {
                json = $.Object.extend(obj, json);
            }
        }

        json = JSON.stringify(json, null, 4);

        write(path, json);
    }


    return {
        write: write,
        read: read,
        exists: exists,
        move: move,
        readJSON: readJSON,
        writeJSON: writeJSON,
    };



})();

