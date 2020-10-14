/* ================================== 
   ログ(週)シートのデータをログ(月)シートにコピー後、
   ログ(週)シートのデータを削除               
   ================================ */

function ViewMonth() {

  // ログ(週)シートのデータを取得
  const _getData = sheetWeek.getRange(2, 1, lastRowWeek, 6);
  const getData = _getData.getValues();
  
  // ログ(月)シートに取得したデータを書込
  const _setData = sheetMonth.getRange(lastRowMonth + 1, 1, lastRowWeek, 6);
  const setData = _setData.setValues(getData);
  
  // ログシートに記入された情報を削除
  _getData.clear();
  
}
