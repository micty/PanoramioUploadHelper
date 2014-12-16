

//在命令行窗口运行: node index

var Config = require('./lib/Config');
var File = require('./lib/File');
var Log = require('./lib/Log');



var dones = 0;
var fails = 0;

var config = Config.read();

config.data.forEach(function (item, index) {

    var ok = File.move(config.from, config.to, item);

    if (ok) {
        dones++;
    }
    else {
        fails++;
    }
});

Log.cyan('处理完成!');
Log.green('成功总数: ' + dones);
Log.yellow('失败总数: ' + fails);


