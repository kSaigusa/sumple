$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    let options = document.querySelectorAll(`select[name='choices'] option`);

    document.querySelector(`select[name='item']`).addEventListener(`change`, function () {
		console.log(e.selected);
	})

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var name = $('input[name="name"]:checked').val();
        var number = $('input[name="phone-number"]:checked').val();
        var item = $("#select").children("option:selected");
        var itemText = item.text();
        var inumber = $('input[name="items-number"]:checked').val();

        var msg = `受け取り日：${date}\n氏名：${name}\n電話番号：${number}\n注文商品：${itemText}\n個数：${inumber}`;
        sendText(msg);

        return false;
    });
});
