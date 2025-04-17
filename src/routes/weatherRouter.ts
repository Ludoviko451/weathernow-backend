import { Router } from 'express'; 
import { getWeathernow } from '../controllers/weatherController';

const router: Router = Router();

router.get('/weather', getWeathernow);

export default router; 
