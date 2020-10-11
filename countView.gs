// https://script.google.com/macros/s/AKfycbwNJuBRQfFkZrdoBKiVEBxP6V3Lt7FioHUbsygUo8UCNjoKsvFk/exec

// スプレットシートを取得　　
const sheetId  = "1cSCEH3YHRQsRxrN1T_rKTS3CY5R49nDM0-1ItlTWeh0";      // 情報を書込スプレットシートID
const sheet = SpreadsheetApp.openById(sheetId).getSheetByName("ログ"); // シート名より情報を取得
const t = HtmlService.createTemplateFromFile('index');
const _lastRow = sheet.getRange("A:A").getValues();  // スプレットシートの最終行(空白を含む)を取得
const lastRow = _lastRow.filter(String).length;　　//空白の要素を除いた長さを取得
Logger.log(lastRow);

// googleサイトが開かれた時に実行
function doGet() {    
  
  // 閲覧数
  let viewCount;
  if ( lastRow !== 1 ) {
    viewCount = lastRow;
  } else {
    viewCount = 1;
  }
    
  // 閲覧数をthmlに渡す
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