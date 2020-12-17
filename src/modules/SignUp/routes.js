import router from 'core/Routes/router';
import SignUp from 'modules/SignUp/components';
import ReverseGardian from 'core/middlewares/ReverseGardian';

const requireAuth = false;
router.add('SignUp', SignUp, [ReverseGardian], requireAuth);
