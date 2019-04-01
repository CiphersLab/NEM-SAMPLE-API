import { Request, Response } from 'express';
//import { async } from 'rxjs/internal/scheduler/async';
import { getAccountTransaction } from './transaction.service';
// const fs = require('fs');
// const path = require('path');

export default class TransactionController {

  public getTransactions = async (req: Request, res: Response): Promise<any> => {
    try {
      const accountAddress = req.body.accountAddress;
      const accountTransactions = await getAccountTransaction(accountAddress);
      return res.status(200).send({
        success: true,
        message: 'Account Transactions are successfully loaded',
        data: accountTransactions
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };
}
