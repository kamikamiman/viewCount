/* ================================== 
   ログシートのデータをログ(週)シートにコピー後、
   ログシートのデータを削除               
   ================================ */

function ViewWeek() {

  // ログシートのデータを取得
  const date = sheet.getRange(2, 1, lastRow, 6);
  const logDate = date.getValues();
  
  // ログ（週）シートの最終行に取得した情報を書込
  logDate.forEach( el => {
    sheetWeek.appendRow(el);
  });

  // ログシートに記入された情報を削除する。
  date.clear();
  
}
