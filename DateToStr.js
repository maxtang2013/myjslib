
/**
 * @param {string} dateStr something like "09/16/2017 00:00:00"
 * @return {string} something like "Sep 16" 
**/
function formatDateMonthDay(dateStr) {
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var date = new Date(dateStr);
	return months[date.getMonth()] + " " + date.getDate();
}

function timeStampToMonthDay(time) {
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var date = new Date(time);
	return months[date.getMonth()] + " " + date.getDate();
}

var str = "09/16/2017 00:00:00";

console.log(formatDateMonthDay(str));

console.log(new Date(str).getTime());

var a = [];
            for (var cur = 1; cur < 5; cur += 1) {
                a.push(cur);
            }

console.log(a.length);

console.log(1<<31);