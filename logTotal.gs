/* ====================================== 
   1日ごとの閲覧数を取得し、ログ集計シートに書込
   ====================================== */

// 
function LogTotal() {
  
  // ログ集計シートの最終行を取得
  const lastRow = sheetLog.getRange("A:A").getValues().filter(String).length;

  // ログ集計シートのデータを取得
  const data = sheetLog.getRange(2, 1, lastRow, 2);
  const logDate = data.getValues();
  
  // 本日の日付を取得
  const date  = new Date();
  const today = Utilities.formatDate(date, 'JST', 'yyyy/M/d');

  // 閲覧数
  const count = UserCount();  // 【関数】UserCount から取得
  
  // ログ集計シートの最終行に本日の日付と閲覧数を書込
  sheetLog.appendRow([today, count]);
    
}


// プロジェクトトリガーで実行
function startTrigger(){
  
  const time = new Date();
  time.setHours(23);
  time.setMinutes(59);
  ScriptApp.newTrigger('LogTotal').timeBased().at(time).create();

}
