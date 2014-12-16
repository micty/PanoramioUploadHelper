

/**
* 从上传页面的 DOM 节点中获取上传失败的文件名列表。
* DOM 节点中的文件名必须是原始的，即没有手动去更改了其标题的。
* 打开所在的上传页面的控制台，运行以下代码，即可从控制台中看到输出结果。
*/
(function () {

    var a = $('.error_message').map(function (index) {

        if (this.innerHTML.length == 0) { //这是成功的，忽略掉
            return null;
        }

        var tr = this.parentNode.parentNode.parentNode;

        return $(tr).find('.title .empty_value').val();

    }).toArray();

    var json = JSON.stringify(a, null, 4);
    console.log(json);
    console.log(a.length);


})();