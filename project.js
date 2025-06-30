const day = [2,3,2,1,1,0.5];
const week = [32,10,4,4,5,2];
const month = [78,32,25,34,19,18];
const lastday = [3,4,2,1,4,5];
const lastweek = [36,8,7,5,10,2];
const lastmonth = [70,42,34,21,18,16];

  function change(period) {
    let arr, lastArr;
    if (period === 'daily') {
      arr = day; lastArr = lastday;
    } else if (period === 'weekly') {
      arr = week; lastArr = lastweek;
    } else if (period === 'monthly') {
      arr = month; lastArr = lastmonth;
    } else return;

    for (let i = 0; i < 6; i++) {
      document.querySelector(`.hours${i}`).innerText = `${arr[i]}hrs`;
      document.querySelector(`.lastweek${i}`).innerText = `Last ${period} – ${lastArr[i]}hrs`;
    }
  }

 
  






