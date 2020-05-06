function dateValid(text) {
  const pattern = /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/]\d{4}$/;
  return pattern.test(text);
}

function validateData(destination, date) {
  // check what text was put into the form field
  if (!destination || !date) {
      alert('* Please enter both place and depart date!')
      return false;
  } else if (!dateValid(date)) {
      alert('* Please enter date in the correct format!')
      return false;
  } else if (getTimeFromDate(date) < Date.now()) {
      alert('* Please enter a date in the future!')
      return false;
  }
  return true;
}

function getTimeFromDate(date) {
  let parts = date.split('/');
  let mydate = new Date(parts[2], parts[0] - 1, parts[1]); 
  return mydate.getTime();
}

function days_between(date1, date2) {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const differenceMs = Math.abs(date1 - date2);
  return Math.round(differenceMs / ONE_DAY);

}

export {dateValid,
  getTimeFromDate,
  validateData,
  days_between}