import { Router } from 'express';

import Controller from './namespace.controller';

const namespace: Router = Router();
const controller = new Controller();

// Retrieve all getTransactions
namespace.post('/', controller.getNamespace);


export default namespace;
