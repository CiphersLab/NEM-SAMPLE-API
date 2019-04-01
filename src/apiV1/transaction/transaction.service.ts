import { AccountHttp, Address, Transaction } from 'nem-library';

export const  getAccountTransaction =  (accountAddress: string): Promise<Transaction[]> =>{
    return new Promise<Transaction[]>((resolve,reject) => {
        const accountHttp = new AccountHttp()
        accountHttp.allTransactions(new Address(accountAddress)).subscribe(allTransactionsInfo =>{
          resolve(allTransactionsInfo);
        }, err => {
            reject(err);
        });
    });
};




