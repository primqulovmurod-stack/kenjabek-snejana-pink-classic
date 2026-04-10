const date = "24 - АПРЕЛЬ - 2026, СУББОТА";
const dateParts = date.split(' - ');
const dayNum = parseInt(dateParts[0]) || 24;
const monthNameRaw = (dateParts[1] || "APREL").split(',')[0].trim();
const yearNum = parseInt(dateParts[2]) || 2026;

const monthMap = {
  "АПРЕЛЬ": 3,
  "APREL": 3
};

const d = new Date(yearNum, monthMap[monthNameRaw.toUpperCase()], dayNum);
const weekDaysRu = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];

console.log('Year:', yearNum);
console.log('Month:', monthNameRaw);
console.log('Day:', dayNum);
console.log('Day index:', d.getDay());
console.log('Result:', weekDaysRu[d.getDay()]);
