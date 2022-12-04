function createUCTDate(date, time) {
  const [month, day, year] = date.split("-");
  const [hours, seconds] = time.split(":");
  const newDate = new Date(year, month - 1, day, hours, seconds);
  return newDate;
}

module.exports = { createUCTDate };
