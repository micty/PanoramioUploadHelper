

/**
* 从上传页面的 DOM 节点中获取上传成功的文件名列表。
* DOM 节点中的文件名必须是原始的，即没有手动去更改了其标题的。
* 打开所在的上传页面的控制台，运行以下代码，即可从控制台中看到输出结果。
*/
(function () {

    var a =
        $('.upload_successful')
        .parent()
        .parent()
        .find('.title .empty_value');

    a = a.map(function (index) {
        return $(this).val();
    }).toArray()

    var json = JSON.stringify(a, null, 4);
    console.log(json);
    console.log(a.length);

    
})();