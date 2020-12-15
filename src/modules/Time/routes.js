import router from 'core/Routes/router';
import Time from 'modules/Time/components';
import Gardian from 'core/middlewares/Gardian';

const requireAuth = false;
router.add('Time', Time, [Gardian], requireAuth);
