function deposit() {
    let amount = document.getElementById('amount').value;

    if (amount == "") {
        alert("ჩაწერეთ თანხის რაოდენობა რათა შეავსოთ ბალანსი ");
        return;
    }

    let currentBalance = parseInt(document.getElementById('balance').innerText);
    let newBalance = currentBalance + parseInt(amount);

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('amount').value = "";
}

function withdraw() {
    let amount = document.getElementById('amount').value;

    if (amount == "") {
        alert("ჩაწერეთ თანხის რაოდენობა რათა გაიტანოთ თანხა");
        return;
    }

    let currentBalance = parseInt(document.getElementById('balance').innerText);
    let newBalance = currentBalance - parseInt(amount);

    if (newBalance < 0) {
        alert("შეტანილი რიცხვი აღემატება ბალანს ");
        return;
    }

    document.getElementById('balance').innerText = newBalance;
    document.getElementById('amount').value = "";
}