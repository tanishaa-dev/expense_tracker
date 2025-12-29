const balance = document.getElementById("balance");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = [];

form.addEventListener("submit", function(e){
    e.preventDefault();

    let data = {
        text: text.value,
        amount: Number(amount.value)
    };

    transactions.push(data);
    updateUI();
    text.value = "";
    amount.value = "";
});

function updateUI() {
    list.innerHTML = "";
    let total = 0;

    transactions.forEach(item => {
        total += item.amount;
        let li = document.createElement("li");
        li.innerText = item.text + " : ₹" + item.amount;
        list.appendChild(li);
    });

    balance.innerText = "₹" + total;
}
