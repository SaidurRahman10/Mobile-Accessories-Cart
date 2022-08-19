function updatePhoneNumber(isIncrease) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);
  let newPhoneNumber;
  if (isIncrease === true) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  const phoneTotal = document.getElementById("phone-total");
  phoneTotal.innerText = phoneTotalPrice;
}
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementTotal = parseInt(elementString);
  return elementTotal;
}

function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}
function calculateSubTotal() {
  // calculate total
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);

  //calculate tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseInt(taxAmountString);

  setTextElementValueById("text-amount", taxAmount);

  // final amount

  const finalAmount = currentSubTotal + taxAmount;

  setTextElementValueById("final-total", finalAmount);
}
