function createUCTDate(date, time) {
  if (date && time) {
    const [month, day, year] = date.split("-");
    const [hours, seconds] = time.split(":");
    const newDate = new Date(year, month - 1, day, hours, seconds);
    return newDate;
  }
}

function convertUTCDateToLocalDate(date) {
  if (date) {
    const newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return newDate;
  }
}

function convertDateToISOString(date) {
  if (date) {
    const newDate = date.toISOString();
    return newDate;
  }
}

function getCurrentUCTDate() {
  const date = new Date();
  return date;
}

function getTimeFromDate(ISODateStr) {
  if (ISODateStr) return ISODateStr.substr(11, 5);
}

function todayLocaleDateString() {
  const date = new Date();
  return date.toLocaleDateString();
}

function cleanDate(date) {
  if (date) {
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
}

function getYearMonthDayFromDate(date) {
  if (date) return date.substr(0, 10);
}

function convertISOStringToDate(date) {
  if (date) {
    const newDate = new Date(date);
    return newDate;
  }
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
