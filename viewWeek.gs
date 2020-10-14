/* ================================== 
   ログシートのデータをログ(週)シートにコピー後、
   ログシートのデータを削除               
   ================================ */

function ViewWeek() {

  // ログシートのデータを取得
  const _getData = sheet.getRange(2, 1, lastRow, 6);
  const getData = _getData.getValues();
  
  // ログ(週)シートに取得したデータを書込
  const _setData = sheetWeek.getRange(lastRowWeek + 1, 1, lastRow, 6);
  const setData = _setData.setValues(getData);
  
  // ログシートに記入された情報を削除
  _getData.clear();
  
}
