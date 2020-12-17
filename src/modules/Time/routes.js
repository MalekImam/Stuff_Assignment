import router from 'core/Routes/router';
import Time from 'modules/Time/components';
import Gardian from 'core/middlewares/Gardian';

const requireAuth = true;
router.add('Time', Time, [Gardian], requireAuth);
