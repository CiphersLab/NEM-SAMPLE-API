import { Router } from 'express';

import Controller from './transaction.controller';

const transaction: Router = Router();
const controller = new Controller();

// Retrieve all getTransactions
transaction.post('/', controller.getTransactions);


export default transaction;
