import router from 'core/Routes/router';
import Home from 'modules/Home/components';
import ReverseGardian from 'core/middlewares/ReverseGardian';

const requireAuth = false;
router.add('Home', Home, [ReverseGardian], requireAuth);
