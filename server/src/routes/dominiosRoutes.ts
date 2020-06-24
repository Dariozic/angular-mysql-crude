import { Router } from 'express';

class DominiosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('dominios'));
    }
}

const dominiosRoutes = new DominiosRoutes();
export default dominiosRoutes.router;