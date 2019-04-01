import { Request, Response } from 'express';
import { Account, Password, SimpleWallet } from 'nem-library';
import Wallet from './wallet.model';
import {createSimpleWallet, MOSAIC_NAME, getAccountBalances} from './wallet.service';
import { log } from 'util';
import { async } from 'rxjs/internal/scheduler/async';
const fs = require('fs');
const path = require('path');

export default class WalletController {

  public createWallet = async (req: Request, res: Response): Promise<any> => {
    try {
      const tempPass = req.body.password;
      const wallet = await createSimpleWallet(tempPass);
      const pass = new Password(tempPass);
      const account = wallet.open(pass);
      const address = account.address.pretty();
      console.log(`${MOSAIC_NAME} wallet successfully created\n`);
      console.log(`You can now start sending and receiving ${MOSAIC_NAME}\n`);
      console.log(`Public Address: ${address}`);
      this.downloadWallet(wallet);
      return res.status(200).send({
        success: true,
        message: 'Wallets is Created',
        data: wallet
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  private downloadWallet = async (wallet: SimpleWallet): Promise<any> => {
    try{
    console.log('\nDownloading wallet for your convenience. \n' +
    'Please store someplace safe. The private key is encrypted by your password.\n'+
    'To load this wallet on a new computer you would simply import the .wlt file into this app and enter your password and you will be able to sign transactions');

    //const stamp = new Date().toISOString();

    let fullPath = `${path.join(__dirname, `../../tempWallets/${MOSAIC_NAME}-wallet.wlt`)}`;
    console.log(fullPath)

    fs.writeFileSync(fullPath, wallet.writeWLTFile());
    const file = fs.createWriteStream(fullPath);
    console.log(`Downloaded wallet to ${fullPath}`);
    }catch (err) {
      console.log({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  }
};
