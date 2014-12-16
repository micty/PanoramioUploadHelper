

/**
* 从上传页面的 DOM 节点中移除所有上传失败的记录。
*/
$('.error_message').each(function (index) {

    if (this.innerHTML.length == 0) { //这是成功的
        return;
    }

    var tr = this.parentNode.parentNode.parentNode;

    $(tr).find('.cancel_button').trigger('click');

});


