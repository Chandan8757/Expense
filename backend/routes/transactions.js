import {
  addExpense,
  deleteExpense,
  getExpense,
} from "../controllers/expense.js";
import { addIncome, deleteIncome, getIncomes } from "../controllers/income.js";
import express from "express";

// const router = require('express').Router();
const router = express.Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .delete("/delete-expense/:id", deleteExpense);

export default router;
