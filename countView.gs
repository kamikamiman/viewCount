// https://script.google.com/macros/s/AKfycbwNJuBRQfFkZrdoBKiVEBxP6V3Lt7FioHUbsygUo8UCNjoKsvFk/exec

// スプレットシートを取得　　
const sheetId    = "1cSCEH3YHRQsRxrN1T_rKTS3CY5R49nDM0-1ItlTWeh0";              // 情報を書込むスプレットシートID
const sheet      = SpreadsheetApp.openById(sheetId).getSheetByName("ログ");      // シート名 ログの情報を取得
const sheetWeek  = SpreadsheetApp.openById(sheetId).getSheetByName("ログ（週）");   // シート名 ログ（週）の情報を取得
const sheetMonth = SpreadsheetApp.openById(sheetId).getSheetByName("ログ（月）");   // シート名 ログ（月）の情報を取得
const sheetTotal = SpreadsheetApp.openById(sheetId).getSheetByName("ログ（合計）"); // シート名 ログ（年）の情報を取得

// シートの最終行を取得
const _lastRow  = sheet.getRange("A:A").getValues(); // ログシートの最終行(空白を含む)を取得
const lastRow   = _lastRow.filter(String).length;    // ログシートの空白の要素を除いた長さを取得
const t = HtmlService.createTemplateFromFile('index');

// googleサイトが開かれた時に実行
function doGet() {    
  
  // 閲覧数
  let viewCount;
  if ( lastRow !== 1 ) {
    viewCount = lastRow;
  } else {
    viewCount = 1;
  }
    
  // 閲覧数をhtmlに渡す
  t.count = viewCount;
  
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