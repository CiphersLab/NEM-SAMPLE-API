import { Router } from 'express';
import verifyToken from '../../helpers/verifyToken';
import Controller from './wallet.controller';

const wallet: Router = Router();
const controller = new Controller();

// Retrieve all Wallets
wallet.post('/', controller.createWallet);

//Get Balance Of
//wallet.get('/balance/:publicKey',  controller.getBalance);

// // Update a Wallet with Id
// wallet.put('/:id', controller.update);

// // Delete a Wallet with Id
// wallet.delete('/:id', controller.remove);

export default wallet;
