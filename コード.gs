


// googleサイトが開かれた時に実行
function doGet() {    

  const t = HtmlService.createTemplateFromFile("index");
  return t.evaluate();

}


// アクセス者の情報を取得し、スプレットシートに情報を書込
function setlog(browser,os,height,width){
  
  // スプレットシートを取得　　
  const sheetId  = "1X4FcRWsiarXK1yLBQmMHZxcTkz1FEtCME3r4YIryjwM";      // 情報を書込スプレットシートID
  const sheet = SpreadsheetApp.openById(sheetId).getSheetByName("ログ（当日）"); // シート名より情報を取得
  
  // シートに書込む情報を取得  
  const time  = new Date();              // 閲覧された日時  
  const user  = Session.getActiveUser(); // 閲覧したユーザー

  // シートの最終行に情報を書込
  sheet.appendRow( [time, user, browser, os, height, width] );

}


// 閲覧数をカウント
//function ViewCount() {
//
//  const lastRow = sheet.getRange(1, 1).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow();  // スプレットシートの最終行を取得
//  const viewCount = lastRow - 1;  // 閲覧数
//  
//  return viewCount;
//  
//}