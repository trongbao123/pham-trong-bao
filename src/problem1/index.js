/**
* # Task
*Provide 3 unique implementations of the following function in JavaScript.
*Input**: `n` - any integer
*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
*Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
*/

var sum_to_n_a = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function (n) {
    return (n * (n + 1)) / 2;
};

var sum_to_n_c = function (n) {
    if (n === 1) {
        return 1;
    }
    return n + sum_to_n_c(n - 1);
};

function calculateSum() {
    const inputNumber = parseInt(document.getElementById("input-number").value);
    const resultElement = document.getElementById("result");

    if (isNaN(inputNumber)) {
        resultElement.textContent = "Please enter a valid number.";
    } else {
        const sumA = sum_to_n_a(inputNumber);
        const sumB = sum_to_n_b(inputNumber);
        const sumC = sum_to_n_c(inputNumber);

        resultElement.innerHTML = `
        <p style="color: red;">Sum to fucntion A: ${sumA}</p>
        <p style="color: blue;">Sum to function B: ${sumB}</p>
        <p style="color: green;">Sum to function C: ${sumC}</p>
    `;
    }
}