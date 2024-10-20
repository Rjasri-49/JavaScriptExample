function calculateInterest() {
    let principal = document.getElementById("principal").value;
    let tenure = document.getElementById("tenure").value;
    let rate = document.getElementById("rate").value;

    if (principal && tenure && rate) {
        let interest = (principal * tenure * rate) / 100;
        let totalAmount = parseFloat(principal) + interest;

        document.getElementById("result").innerHTML = `
            Simple Interest: Rs. ${interest} <br>
            Total Amount (Principal + Interest): Rs. ${totalAmount}
        `;
    } else {
        document.getElementById("result").innerHTML = "Please fill all fields.";
    }
}

