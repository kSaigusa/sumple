$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var name = $('input[name="name"]:checked').val();
        var number = $('input[name="phone-number"]:checked').val();
        var item = $('input[name="item"]:checked').val();
        var inumber = $('input[name="items-number"]:checked').val();

        var msg = `受け取り日：${date}\n氏名：${name}\n電話番号：${number}\n注文商品：${inumber}`;
        sendText(msg);

        return false;
    });
});
