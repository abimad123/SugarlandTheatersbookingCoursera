const confirmBtn = document.getElementById('confirm-btn');

confirmBtn.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    if (selectedSeats.length > 0) {
        const selectedSeatNames = [...selectedSeats].map(seat => seat.textContent).join(', ');
        alert(`Your ticket has been confirmed! Seats booked: ${selectedSeatNames}`);
    } else {
        alert('Please select at least one seat before confirming.');
    }
});


const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.sold)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const selectedSeatsDisplay = document.getElementById('selected-seats');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

movieSelect.addEventListener('change', (e) => {
ticketPrice = +e.target.value;
updateSelectedCount();
});

container.addEventListener('click', (e) => {
if (e.target.classList.contains('seat') && !e.target.classList.contains('sold')) {
  e.target.classList.toggle('selected');
  updateSelectedCount();
}
});

function updateSelectedCount() {
const selectedSeats = document.querySelectorAll('.row .seat.selected');
const selectedSeatsCount = selectedSeats.length;
const selectedSeatNames = [...selectedSeats].map(seat => seat.textContent).join(', ') || 'None';

count.innerText = selectedSeatsCount;
total.innerText = selectedSeatsCount * ticketPrice;
selectedSeatsDisplay.innerText = selectedSeatNames;
}

updateSelectedCount();