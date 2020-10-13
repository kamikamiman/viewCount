/* ================================== 
   ログ(月)シートのデータをログ(月)シートにコピー後、
   ログ(合計)シートのデータを削除               
   ================================ */

function ViewTotal() {
  
  // ログ(月)シートの最終行を取得
  const lastRow = sheetMonth.getRange("A:A").getValues().filter(String).length;

  // ログシートのデータを取得
  const date = sheetMonth.getRange(2, 1, lastRow, 6);
  const logDate = date.getValues();
  
  // ログ（週）シートの最終行に取得した情報を書込
  logDate.forEach( el => {
    sheetTotal.appendRow(el);
  });

  // ログシートに記入された情報を削除する。
  date.clear();
}
