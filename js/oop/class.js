// Parent class: BankAccount
class BankAccount {
  // The constructor is used to initialize properties for new instances
  constructor(owner, balance) {
    this.owner = owner; // Property 'owner' is assigned
    this.balance = balance; // Property 'balance' is assigned
  }

  // Method to deposit an amount into the balance
  deposit(amount) {
    this.balance += amount; // Add the deposit amount to the balance
    console.log(
      `${this.owner} deposited ${amount}. New balance: ${this.balance}`
    );
  }

  // Method to withdraw an amount from the balance
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient funds for ${this.owner}.`); // Not enough funds
    } else {
      this.balance -= amount; // Deduct the amount from the balance
      console.log(
        `${this.owner} withdrew ${amount}. New balance: ${this.balance}`
      );
    }
  }
}

// Child class: SavingsAccount extends BankAccount
class SavingsAccount extends BankAccount {
  // The constructor method is used to initialize both parent and child properties
  constructor(owner, balance, interestRate) {
    // super() calls the parent class's constructor to inherit 'owner' and 'balance' properties
    super(owner, balance);

    // Property specific to SavingsAccount
    this.interestRate = interestRate; // Adds an interestRate property
  }

  // Method specific to SavingsAccount
  addInterest() {
    const interest = this.balance * (this.interestRate / 100); // Calculate interest
    this.balance += interest; // Add interest to the balance
    console.log(
      `${this.owner} earned interest of ${interest}. New balance: ${this.balance}`
    );
  }
}

// Creating instances (objects) of BankAccount and SavingsAccount
const johnAccount = new BankAccount("John", 1000); // Creates a new BankAccount for John
const aliceSavings = new SavingsAccount("Alice", 2000, 5); // Creates a new SavingsAccount for Alice

// Testing BankAccount methods
johnAccount.deposit(200); // Output: John deposited 200. New balance: 1200
johnAccount.withdraw(500); // Output: John withdrew 500. New balance: 700

// Testing SavingsAccount methods (inherited + specific)
aliceSavings.deposit(300); // Output: Alice deposited 300. New balance: 2300 (inherited from BankAccount)
aliceSavings.addInterest(); // Output: Alice earned interest of 115. New balance: 2415 (specific to SavingsAccount)
