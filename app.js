const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btnCheck");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
	hideMessage();
	const bill = Number(billAmount.value);
	const cash = Number(cashGiven.value);
	if (bill > 0 && cash > 0) {
		if (cash >= bill) {
			const amountToReturn = cash - bill;
			calculateChange(amountToReturn);
		} else {
			showErrorMesssage(
				"Cash given should be greater than or equal to bill amount"
			);
		}
	} else {
		showErrorMesssage("Invalid Amount");
	}
});

function calculateChange(amountToReturn) {
	for (let i = 0; i < availableNotes.length; i++) {
		const numberOfNotes = Math.trunc(amountToReturn / availableNotes[i]);

		amountToReturn = amountToReturn % availableNotes[i];

		noOfNotes[i].innerText = numberOfNotes;
	}
}

function hideMessage() {
	errorMessage.style.display = "none";
}

function showErrorMesssage(msg) {
	errorMessage.style.display = "block";
	errorMessage.innerText = msg;
}
