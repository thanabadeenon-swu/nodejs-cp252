class Expense {
  /**
   * Represents an Expense.
   * @constructor
   * @param {string} date - The date of the expense.
   * @param {number} income - The amount of income.
   * @param {number} expense - The amount of expense.
   * @param {string} detail - The description or detail of the expense.
   */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel to manage a collection of expenses.
 * @class
 */
class ExpenseModel {
  constructor() {
    /**
     * @type {Expense[]}
     */
    this.expenses = [];
  }

  /**
   * Add a new expense object to the list.
   * @param {Expense} expense - An instance of the Expense class.
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * Return all expense objects from the list.
   * @return {Expense[]} An array of Expense objects.
   */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculate the total income from all expenses.
   * @return {number} The sum of all income values.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculate the total expense from all expenses.
   * @return {number} The sum of all expense values.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculate the remaining money (Income - Expense).
   * @return {number} The balance left.
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };