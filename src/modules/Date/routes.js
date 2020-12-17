import router from 'core/Routes/router';
import Date from 'modules/Date/components';
import Gardian from 'core/middlewares/Gardian';

const requireAuth = true;
router.add('Date', Date, [Gardian], requireAuth);
