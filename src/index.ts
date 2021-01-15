import "reflect-metadata";
import './database/connection';

import api from './api/api';

api.listen(3333, () => console.log('Server started!'));