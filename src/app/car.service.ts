import { Injectable, model } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import Car from "./car";


/*
*
*   CarService: Service for handling cars. Cars are stored in a map
*   that contain the model name and then the car. Car class contains
*   lots of information about the vehicle. 
* 
*/

@Injectable({
    providedIn: 'root'
})
export class CarService{

    //Car data. Models are the key, cars are the value.
    carsMap: Map<string, Car> = new Map([
        ['Chevrolet Silverado', 
            new Car(
                'General Motors',
                ['Chevy Silverado'],
                '1999–present',
                ['Fort Wayne, Indiana, USA', 'Oshawa, Ontario, Canada', 'Silao, Mexico'],
                'Full-size pickup truck',
                '2-door regular cab, 4-door crew cab',
                'Front-engine, rear-wheel-drive / four-wheel-drive (FR/AWD layout)',
                ['Chevrolet C/K'],
                'The Chevrolet Silverado is a full-size pickup truck produced by General Motors since 1999. ' +
                'It is known for its rugged performance, durability, and versatility, making it a popular choice for both work and personal use. ' +
                'The Silverado is available in a variety of body styles and configurations, including multiple engine options ranging from a fuel-efficient 2.7L Turbo to a powerful 6.2L V8. ' +
                'With advanced towing capabilities and a high payload capacity, the Silverado is designed to handle tough jobs. ' +
                'It also includes modern tech features like an infotainment system with Apple CarPlay and Android Auto, making it a blend of tradition and innovation.',
                'https://images.pexels.com/photos/9115472/pexels-photo-9115472.jpeg')
        ],
        ['GMC Sierra', 
            new Car(
                'General Motors',
                ['Sierra'],
                '1998–present',
                ['Fort Wayne, Indiana, USA', 'Silao, Mexico'],
                'Full-size pickup truck',
                '2-door regular cab, 4-door crew cab',
                'Front-engine, rear-wheel-drive / four-wheel-drive (FR/AWD layout)',
                ['GMC C/K'],
                'The GMC Sierra is a sibling of the Chevrolet Silverado, both being full-size pickup trucks by General Motors. ' +
                'It is marketed as a premium truck offering more upscale features compared to the Silverado, catering to those looking for luxury and utility in one package. ' +
                'The Sierra offers a variety of powertrains, including efficient diesel and powerful V8 engines. ' +
                'The truck excels in towing and payload capacities and is equipped with advanced technology like multi-pro tailgate features, elevating its practicality.',
                'https://images.pexels.com/photos/18507891/pexels-photo-18507891/free-photo-of-black-gmc-sierra-pick-up-car.jpeg')
        ],
        ['Cadillac Escalade', 
            new Car(
                'General Motors',
                undefined,
                '1998–present',
                ['Arlington, Texas, USA'],
                'Full-size luxury SUV',
                '5-door SUV',
                'Front-engine, rear-wheel-drive / four-wheel-drive (FR/AWD layout)',
                undefined,
                'The Cadillac Escalade is a full-size luxury SUV that has been synonymous with opulence and performance since its debut in 1998. ' +
                'As the flagship SUV of General Motors’ Cadillac division, it is known for its spacious, lavishly appointed interior, ' +
                'top-tier technology features, and strong performance capabilities. The Escalade is popular with families and executives alike for its combination of comfort and power.',
                'https://images.pexels.com/photos/23319054/pexels-photo-23319054/free-photo-of-black-cadillac-escalade-parked-under-trees-in-fire-zone.jpeg')
        ],
        ['Chevrolet Tahoe', 
            new Car(
                'General Motors',
                ['Chevy Tahoe'],
                '1994–present',
                ['Arlington, Texas, USA'],
                'Full-size SUV',
                '5-door SUV',
                'Front-engine, rear-wheel-drive / four-wheel-drive (FR/AWD layout)',
                ['Chevrolet K5 Blazer'],
                'The Chevrolet Tahoe is a full-size SUV that offers impressive versatility, combining powerful performance and a spacious interior with off-road capabilities. ' +
                'It is one of the most popular large SUVs on the market, known for its durability and towing capacity, making it ideal for families, adventurers, or anyone needing substantial cargo space.',
                'https://images.pexels.com/photos/18633031/pexels-photo-18633031/free-photo-of-black-chevrolet-tahoe.png')
        ],
        ['Chevrolet Corvette', 
            new Car(
                'General Motors',
                ['Vette'],
                '1953–present',
                ['Bowling Green, Kentucky, USA'],
                'Sports car',
                '2-door coupe, 2-door convertible',
                'Rear mid-engine, rear-wheel-drive (MR layout)',
                undefined,
                'The Chevrolet Corvette is an American sports car icon known for its high performance and stylish design. ' +
                'It has evolved over several generations, always offering cutting-edge technology and engineering. ' +
                'The Corvette is often referred to as “America’s Sports Car,” competing with some of the world’s best supercars while maintaining a relatively affordable price.',
                'https://images.pexels.com/photos/244412/pexels-photo-244412.jpeg')
        ],
        ['Ford F-150', 
            new Car(
                'Ford Motor Company',
                ['F-Series'],
                '1948–present',
                ['Dearborn, Michigan, USA', 'Kansas City, Missouri, USA'],
                'Full-size pickup truck',
                '2-door regular cab, 4-door SuperCab, 4-door crew cab',
                'Front-engine, rear-wheel-drive / four-wheel-drive (FR/AWD layout)',
                ['Ford F-100'],
                'The Ford F-150 is one of the most popular and best-selling full-size pickup trucks in the United States. ' +
                'Known for its durability, power, and versatility, the F-150 offers a range of configurations to meet different needs, from work trucks to luxury variants. ' +
                'It is available with various engines, including EcoBoost and hybrid options, making it a leader in towing and fuel efficiency. ' +
                'With advanced tech features like Pro Power Onboard, the F-150 is a great mix of modern tech and rugged capability.',
                'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg')
        ],
        ['Ford Mustang', 
            new Car(
                'Ford Motor Company',
                ['Mustang'],
                '1964–present',
                ['Flat Rock, Michigan, USA'],
                'Sports car',
                '2-door coupe, 2-door convertible',
                'Front-engine, rear-wheel-drive (FR layout)',
                undefined,
                'The Ford Mustang is an iconic American muscle car that has captured the imagination of car enthusiasts since its introduction in 1964. ' +
                'Known for its aggressive styling, powerful engines, and rear-wheel-drive layout, the Mustang continues to deliver a thrilling driving experience. ' +
                'It is available in a variety of performance levels, including the high-performance GT and Shelby models, offering a range of V8 engines and track-focused features.',
                'https://images.pexels.com/photos/244412/pexels-photo-244412.jpeg')
        ],
        ['Ford Bronco', 
            new Car(
                'Ford Motor Company',
                undefined,
                '1966–1996, 2021–present',
                ['Wayne, Michigan, USA'],
                'Off-road vehicle / Mid-size SUV',
                '2-door SUV, 4-door SUV',
                'Front-engine, four-wheel-drive (FWD layout)',
                undefined,
                'The Ford Bronco is a legendary off-road SUV that was reintroduced in 2021 after a 25-year hiatus. ' +
                'Designed for adventure, the Bronco features a body-on-frame construction, removable doors and roof, and advanced off-road technologies such as G.O.A.T. (Go Over Any Terrain) modes. ' +
                'It is built to compete with the Jeep Wrangler and offers both 2-door and 4-door configurations for different types of off-road experiences.',
                'https://images.pexels.com/photos/10680864/pexels-photo-10680864.jpeg')
        ],
        ['Ford Explorer', 
            new Car(
                'Ford Motor Company',
                undefined,
                '1990–present',
                ['Chicago, Illinois, USA'],
                'Mid-size SUV',
                '5-door SUV',
                'Front-engine, rear-wheel-drive / four-wheel-drive (FR/AWD layout)',
                ['Ford Bronco II'],
                'The Ford Explorer is a versatile mid-size SUV that has been popular since its introduction in 1990. ' +
                'Known for its spacious interior, advanced safety features, and strong towing capacity, the Explorer is a favorite among families and adventurers. ' +
                'It offers various powertrain options, including a hybrid version, and advanced technologies like Ford Co-Pilot360 for driver assistance.',
                'https://images.pexels.com/photos/189284/pexels-photo-189284.jpeg')
        ],
        ['Ford Escape', 
            new Car(
                'Ford Motor Company',
                undefined,
                '2000–present',
                ['Louisville, Kentucky, USA'],
                'Compact crossover SUV',
                '5-door SUV',
                'Front-engine, front-wheel-drive / all-wheel-drive (FF/AWD layout)',
                undefined,
                'The Ford Escape is a compact crossover SUV that offers a great balance of fuel efficiency, technology, and space. ' +
                'Introduced in 2000, it is ideal for families and urban drivers, providing modern features such as hybrid and plug-in hybrid powertrains, ' +
                'Ford Co-Pilot360 driver-assist technologies, and ample cargo space.',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2021_Ford_Escape_Hybrid_SEL_AWD_in_Oxford_White%2C_front_left.jpg/1920px-2021_Ford_Escape_Hybrid_SEL_AWD_in_Oxford_White%2C_front_left.jpg')
        ]
      ]);


    //Gets the car from a model. Returns undefined if the car is not found.
    getCarFromModel(name: string): Car | undefined{
        return this.carsMap.get(name)
    }

    //Appends the car to the map. Sets the model name as the key, and the car as the value.
    async pushCarToCarsMap(modelName: string, newCar: Car){
        this.carsMap.set(modelName, newCar)
    }    
}