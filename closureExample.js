function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },

    withdraw: function(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    }
  };
}

const account = bankAccount(1000);

account.deposit(500);   // Balance: 1500
account.withdraw(200);  // Balance: 1300
account.deposit(340);
account.deposit(34434);
account.withdraw(43435);