/* ===================
   閲覧数をカウントする。
   =================== */

function UserCount() {

  // 閲覧数(同じユーザーはカウントしない)
  const users = sheet.getRange(2, 2, lastRow, 1).getValues().flat(); // ログシートのユーザー情報

  // スプレットシートの重複するユーザーは削除し、新たに [userList] に格納する。
  const userList = users.filter( (value, index, self) => { return users.indexOf(value) === index;});

  // 閲覧数
  const viewCount = userList.length - 1;

  return viewCount;
}

