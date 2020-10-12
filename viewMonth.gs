/* ================================== 
   ログ(週)シートのデータをログ(月)シートにコピー後、
   ログ(週)シートのデータを削除               
   ================================ */

function ViewMonth() {
  
  // ログ(週)シートの最終行を取得
  const lastRowWeek = sheetWeek.getRange("A:A").getValues().filter(String).length;

  // ログシートのデータを取得
  const date = sheetWeek.getRange(2, 1, lastRowWeek, 6);
  const logDate = date.getValues();
  
  // ログ（週）シートの最終行に取得した情報を書込
  logDate.forEach( el => {
    sheetMonth.appendRow(el);
  });

  // ログシートに記入された情報を削除する。
  date.clear();
  
}
