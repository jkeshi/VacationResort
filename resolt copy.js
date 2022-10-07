"use strict";

function estumateBtnClicked() {
  const checkInDate = new Date(Document.getElementById("checkInDate").value);
  const numberOfNight = Document.getElementById("numberOfNights").value;

  let roomType = document.querySelector("input[name='roomSelection']:checked").value;
  let currentMonth = checkInDate.getMonth();
  let inSeason = false;
  let price = 0;
  switch (currentMonth) {
    case 5:
    case 6:
    case 7:
      inSeason = true;
      break;
    default:
      inSeason = false;
      break;
  }

  if (inSeason && (roomType == "queen" || roomType == 'king')) {
    price = 250 * numberOfNight;
  } else if (!inSeason && (roomType == "queen" || roomType == "king")) {
    price = 150 * numberOfNight;
  }


}
