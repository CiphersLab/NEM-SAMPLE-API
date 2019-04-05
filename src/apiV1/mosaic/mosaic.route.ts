import { Router } from 'express';

import Controller from './mosaic.controller';

const mosaic: Router = Router();
const controller = new Controller();

// Retrieve all getTransactions
mosaic.post('/', controller.getMosaic);


export default mosaic;
