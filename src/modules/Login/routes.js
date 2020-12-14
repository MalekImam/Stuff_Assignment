import router from 'core/Routes/router';
import Login from 'modules/Login/components';
import ReverseGardian from 'core/middlewares/ReverseGardian';

const requireAuth = false;
router.add('Login', Login, [ReverseGardian], requireAuth);
