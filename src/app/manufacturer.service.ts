import { Injectable } from '@angular/core'
import { Manufacturer } from './manufacturer'

/*
*
*   ManufacturerService: Service for containing information regarding
*   Manufacturers. The service also can get and add manufacturers to
*   the list. Utilizes the Manufacturer interface.
*
*/

@Injectable({
    providedIn: 'root'
})
export class ManufacturerService{
    
    manufacturerList: Manufacturer[] = [
        { name: 'General Motors (GM)', photo: 'https://images.pexels.com/photos/99435/pexels-photo-99435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Ford Motor Company', photo: 'https://images.pexels.com/photos/18234150/pexels-photo-18234150/free-photo-of-ford-badge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Tesla', photo: 'https://images.pexels.com/photos/258083/pexels-photo-258083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Stellantis', photo: 'https://images.pexels.com/photos/6778802/pexels-photo-6778802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Toyota Motor North America', photo: 'https://images.pexels.com/photos/7071748/pexels-photo-7071748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Honda Motor Co.', photo: 'https://images.pexels.com/photos/5027483/pexels-photo-5027483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Nissan Motor Co.', photo: 'https://images.pexels.com/photos/5049266/pexels-photo-5049266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Hyundai Motor America', photo: 'https://www.pexels.com/photo/steering-wheel-in-a-car-10320382/' },
        { name: 'Kia Motors America', photo: 'https://images.pexels.com/photos/7290407/pexels-photo-7290407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'BMW of North America', photo: 'https://images.pexels.com/photos/3166786/pexels-photo-3166786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Mercedes-Benz USA', photo: 'https://images.pexels.com/photos/3541743/pexels-photo-3541743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Volkswagen', photo: 'https://images.pexels.com/photos/1426968/pexels-photo-1426968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Subaru of America', photo: 'https://images.pexels.com/photos/3778763/pexels-photo-3778763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Mazda', photo: 'https://images.pexels.com/photos/3608541/pexels-photo-3608541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Volvo Cars USA', photo: 'https://images.pexels.com/photos/4501407/pexels-photo-4501407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Audi of America', photo: 'https://images.pexels.com/photos/4914160/pexels-photo-4914160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Porsche Cars North America', photo: 'https://images.pexels.com/photos/2062556/pexels-photo-2062556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Mitsubishi Motors North America', photo: 'https://images.pexels.com/photos/7549104/pexels-photo-7549104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Lucid Motors', photo: 'https://images.pexels.com/photos/5803142/pexels-photo-5803142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { name: 'Rivian Automotive', photo: 'https://images.pexels.com/photos/7476897/pexels-photo-7476897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
    ]

    constructor(){

    }

    //Adds the manufacturer to the list. If the photo is not specified it will be empty.
    addManufacturer(name: string, photo: string | ''){
        this.manufacturerList.push({name: name, photo: photo})
    }

    //Returns all manufacturers.
    getAllManufacturers(): Manufacturer[]{
        return this.manufacturerList
    }
}
