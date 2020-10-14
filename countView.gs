// https://script.google.com/macros/s/AKfycbwNJuBRQfFkZrdoBKiVEBxP6V3Lt7FioHUbsygUo8UCNjoKsvFk/exec

// スプレットシートを取得　　
const sheetId    = "1cSCEH3YHRQsRxrN1T_rKTS3CY5R49nDM0-1ItlTWeh0";                // 情報を書込むスプレットシートID
const sheet      = SpreadsheetApp.openById(sheetId).getSheetByName("ログ");        // シート名 ログの情報を取得
const sheetWeek  = SpreadsheetApp.openById(sheetId).getSheetByName("ログ（週）");   // シート名 ログ（週）の情報を取得
const sheetMonth = SpreadsheetApp.openById(sheetId).getSheetByName("ログ（月）");   // シート名 ログ（月）の情報を取得
const sheetTotal = SpreadsheetApp.openById(sheetId).getSheetByName("ログ（合計）"); // シート名 ログ（年）の情報を取得
const sheetLog   = SpreadsheetApp.openById(sheetId).getSheetByName("ログ集計");    // シート名 ログ集計 の情報を取得

// シートの最終行を取得
const lastRow      = sheet.getRange("A:A").getValues().filter(String).length;       // ログシートの最終行(空白を含む)を取得
const lastRowWeek  = sheetWeek.getRange("A:A").getValues().filter(String).length;   // ログ(週)シートの最終行を取得
const lastRowMonth = sheetMonth.getRange("A:A").getValues().filter(String).length;  // ログ(月)シートの最終行を取得
const lastRowTotal = sheetTotal.getRange("A:A").getValues().filter(String).length;  // ログ(合計)シートの最終行を取得
const lastRowLog   = sheetLog.getRange("A:A").getValues().filter(String).length;    // ログ集計シートの最終行を取得

const t = HtmlService.createTemplateFromFile('index');


// googleサイトが開かれた時に実行
function doGet() {    
      
  t.count = UserCount(); // 閲覧数をhtmlに渡す

  return t.evaluate();
 
}


// アクセス情報を取得し、スプレットシートに情報を書込
function setlog(browser,os,height,width) {
  
  // シートに書込む情報を取得  
  const time  = new Date();              // 閲覧された日時  
  const user  = Session.getActiveUser(); // 閲覧したユーザー
  
  // シートの最終行に情報を書込
  sheet.appendRow( [time, user, browser, os, height, width] );

}