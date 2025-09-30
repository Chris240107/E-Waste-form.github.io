// E-waste points mapping
const EWASTE_POINTS = {
    "phones": 2500,
    "Laptop": 7500,
    "Monitor": 9000,
    "CPUs": 12000,
    "Others": 1000
};

// Element references
const ewasteForm = document.getElementById('ewasteForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const wastetypeSelect = document.getElementById('wastetype');
const wastequantityInput = document.getElementById('wastequantity');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');
const messageBoxClose = document.getElementById('messageBoxClose');
const earnedPointsDisplay = document.getElementById('earnedPointsDisplay');

// Show message box
function showMessageBox(message) {
    messageText.textContent = message;
    messageBox.classList.add('visible');
}

// Hide message box
messageBoxClose.addEventListener('click', () => {
    messageBox.classList.remove('visible');
    ewasteForm.reset();
    earnedPointsDisplay.textContent = '';
});

// Form submission handler
ewasteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const wastetype = wastetypeSelect.value;
    const wastequantity = parseInt(wastequantityInput.value);

    if (!username || !email || !wastetype || isNaN(wastequantity) || wastequantity <= 0) {
        earnedPointsDisplay.textContent = '';
        showMessageBox("Please fill in all required fields and ensure quantity is a positive number.");
        return;
    }

    let pointsEarned = EWASTE_POINTS[wastetype] 
        ? EWASTE_POINTS[wastetype] * wastequantity 
        : EWASTE_POINTS["Others"] * wastequantity;

    let confirmationMessage = `Thank you, ${username}! Your submission for ${wastequantity} of ${wastetype} has been recorded.`;

    showMessageBox(confirmationMessage);
    earnedPointsDisplay.textContent = `You earned ${pointsEarned} points!`;
});
