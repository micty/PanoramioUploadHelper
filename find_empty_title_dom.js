

/**
* 把未标题的节点背景色标红
*/

//先去掉所有已标红的
$('.upload_successful')
    .parent()
    .parent()
    .find('.title input')
    .css('background', '#fff');

$('.upload_successful')
    .parent()
    .parent()
    .find('.title .empty_value')
    .css('background', 'red');

    
