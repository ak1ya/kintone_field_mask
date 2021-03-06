/**************************************************
 * フィールド（フォーム設定のフィールドコード）に対し、下記対応を実施
 * 　閲覧時、* でマスクする
 * 　マウスオーバー時、マスクを解除する
**************************************************/
(function() {
    "use strict";

    // 閲覧時、 フィールド のマスク処理
    kintone.events.on([
        'app.record.detail.show',
    ], function() {

        var targetElement = kintone.app.record.getFieldElement('フォーム設定のフィールドコード');
        // テキストの取得
        var kintone_password = targetElement.innerText;
        // * でマスクする
        targetElement.innerText = maskPassword(targetElement);

        targetElement.addEventListener('mouseover', function(e){
            // マスクを解除する
            e.target.innerText = kintone_password;
        });

        targetElement.addEventListener('mouseout', function(e){
            // * でマスクする
            e.target.innerText = maskPassword(e.target);
        });
    });

    function maskPassword(targetElement){
        var mask = targetElement.innerText.replace(/./g, '*');
        return mask;
    }
})();
