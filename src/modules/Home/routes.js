import router from 'core/Routes/router';
import Home from 'modules/Home/components';
import Gardian from 'core/middlewares/Gardian';

const requireAuth = true;
router.add('Home', Home, [Gardian], requireAuth);
