function createUCTDate(date, time) {
  const [month, day, year] = date.split("-");
  const [hours, seconds] = time.split(":");
  const newDate = new Date(year, month - 1, day, hours, seconds);
  return newDate;
}

function convertUTCDateToLocalDate(date) {
  const newDate = new Date(date);
  newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return newDate;
}

function convertDateToISOString(date) {
  const newDate = date.toISOString();
  return newDate;
}

function getCurrentUCTDate() {
  const date = new Date();
  return date;
}

function getTimeFromDate(ISODateStr) {
  return ISODateStr.substr(11, 5);
}

function todayLocaleDateString() {
  const d = new Date();
  return d.toLocaleDateString();
}

function cleanDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const cleanedDateArray = date.substr(0, 10).split("/");
  const [day, month, year] = cleanedDateArray;
  return `${day} ${months[Number(month) - 1]} ${year}`;
}

function getYearMonthDayFromDate(date) {
  return date.substr(0, 10);
}

function convertISOStringToDate(date) {
  const newDate = new Date(date);
  return newDate;
}

module.exports = {
  createUCTDate,
  convertUTCDateToLocalDate,
  convertDateToISOString,
  getCurrentUCTDate,
  getTimeFromDate,
  todayLocaleDateString,
  cleanDate,
  getYearMonthDayFromDate,
  convertISOStringToDate,
};
