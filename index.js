const attendee = {
  attendeeId: 'T001',
  name: 'Alice Smith',
  event: 'JavaScript Conference',
  ticketType: 'VIP',
  ticketPrice: 150.00
};

function logAttendeeName(person) {
  console.log(person.name);
}

function logTicketPrice(person) {
  console.log(person.ticketPrice);
}

function updateTicketType(person, newType) {
  person.ticketType = newType;
}

function updateTicketPrice(person, newPrice) {
  person.ticketPrice = newPrice;
}

function removeEventProperty(person) {
  delete person.event;
}

function addCheckedInProperty(person) {
  person.checkedIn = true;
}

// Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};