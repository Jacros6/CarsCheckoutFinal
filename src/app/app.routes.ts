import { Routes } from '@angular/router';
import { CarManufacturersComponent } from './car-manufacturer/car-manufacturer.component';
import { CarModelComponent } from './car-model/car-model.component';
import { CarComponent } from './car/car.component';

/*
*
*   routes: Router for handling page navigation.
*   Uses names of models and manufacturers to create routes.
* 
*/
const routes: Routes = [
    {
        path:'',
        component: CarManufacturersComponent,
        title: 'Manufacturer List'
    },
    {
        path: 'models/:name',
        component: CarModelComponent,
        title: 'Model List'
    },
    {
        path: 'make/:name',
        component: CarComponent,
        title: 'Car Detail'
    }
];

export default routes;
