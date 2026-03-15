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

// In this example, the `bankAccount` function creates a closure that encapsulates the `balance` variable. The returned object has two methods, `deposit` and `withdraw`, which can access and modify the `balance` variable even after the `bankAccount` function has finished executing. This allows us to maintain the state of the bank account across multiple operations.