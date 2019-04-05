import { Router } from 'express';
import auth from './auth/auth.route';
import namespace from './namespace/namespace.route';
import transaction from './transaction/transaction.route';
import users from './users/user.route';
import wallet from './wallet/wallet.route';
import mosaic from './mosaic/mosaic.route';

const router: Router = Router();

router.use('/', auth);
router.use('/users', users);

router.use('/wallets', wallet);

router.use('/transactions', transaction);
router.use('/namespace', namespace);
router.use('/mosaics', mosaic);

export default router;
