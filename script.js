// Tax Calculation Logic
function calculateTax(salary) {
    let tax = 0;

    if (salary > 500000) {
        tax += (salary - 500000) * 0.35;
        salary = 500000;
    }
    if (salary > 300000) {
        tax += (salary - 300000) * 0.20;
        salary = 300000;
    }
    if (salary > 100000) {
        tax += (salary - 100000) * 0.10;
    }

    return tax;
}

// Event Listener
document.getElementById("calculateBtn").addEventListener("click", () => {
    const salaryInput = document.getElementById("salary");
    const salary = parseFloat(salaryInput.value);

    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary amount.");
        return;
    }

    const taxAmount = calculateTax(salary);
    document.getElementById("taxAmount").textContent = taxAmount.toFixed(2);
});
