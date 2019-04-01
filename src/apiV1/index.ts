import { Router } from 'express';
import auth from './auth/auth.route';
import transaction from './transaction/transaction.route';
import users from './users/user.route';
import wallet from './wallet/wallet.route';

const router: Router = Router();

router.use('/', auth);
router.use('/users', users);

router.use('/wallets', wallet);

router.use('/transactions', transaction);
export default router;
