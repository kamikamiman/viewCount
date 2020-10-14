/* ================================== 
   ログ(月)シートのデータをログ(合計)シートにコピー後、
   ログ(月)シートのデータを削除               
   ================================ */

function ViewTotal() {

  // ログ(月)シートのデータを取得
  const _getData = sheetMonth.getRange(2, 1, lastRowMonth, 6);
  const getData = _getData.getValues();
  
  // ログ(合計)シートに取得したデータを書込
  const _setData = sheetTotal.getRange(lastRowTotal + 1, 1, lastRowMonth, 6);
  const setData = _setData.setValues(getData);
  
  // ログシートに記入された情報を削除
  _getData.clear();
}
