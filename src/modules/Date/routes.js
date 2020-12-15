import router from 'core/Routes/router';
import Date from 'modules/Date/components';
import Gardian from 'core/middlewares/Gardian';

const requireAuth = false;
router.add('Date', Date, [Gardian], requireAuth);
