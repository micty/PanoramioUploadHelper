

/**
* 重试所有上传失败的记录。
*/
$('.upload_failed').each(function (index) {
    var btn = this;
    if (btn.style.display == 'none') { //
        return;
    }

    var tr = btn.parentNode.parentNode;
    var title = $(tr).find('.title input').val();

    $(btn).trigger('click');
    console.log('retry: ' + title);
});



/**
* 定时重试。
*/
var retry_interval_id = (function () {

    function retry() {

        $('.upload_failed').each(function (index) {
            var btn = this;
            if (btn.style.display == 'none') { //
                return;
            }

            var tr = btn.parentNode.parentNode;
            var title = $(tr).find('.title input').val();

            $(btn).trigger('click');
            console.log('retry: ' + title);
        });
    }

    retry(); //

    return setInterval(retry, 10*1000);

})();

//清空之前的定时器
clearInterval(retry_interval_id);