import { Injectable, model } from "@angular/core";
import { Model } from "./model";

/*
*
*   ModelService: Service for Models. Models are stored in a map,
*   where the key is the manufacturer and it's values are the models. 
*   The ModelService uses the Model class.
*
*/

@Injectable({
    providedIn: 'root'
})
export class ModelService{

    modelsMap: Map<string, Promise<Model[] | undefined>> = new Map([
        ['General Motors (GM)', Promise.resolve([
            new Model('Chevrolet Silverado','https://images.pexels.com/photos/9115472/pexels-photo-9115472.jpeg'),
            new Model('GMC Sierra','https://images.pexels.com/photos/18507891/pexels-photo-18507891/free-photo-of-black-gmc-sierra-pick-up-car.jpeg'),
            new Model('Cadillac Escalade','https://images.pexels.com/photos/23319054/pexels-photo-23319054/free-photo-of-black-cadillac-escalade-parked-under-trees-in-fire-zone.jpeg'),
            new Model('Chevrolet Tahoe','https://images.pexels.com/photos/18633031/pexels-photo-18633031/free-photo-of-black-chevrolet-tahoe.png'),
            new Model('Chevrolet Corvette','https://images.pexels.com/photos/244412/pexels-photo-244412.jpeg'),
        ])],
        ['Ford Motor Company', Promise.resolve([
            new Model('Ford F-150', 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg'),
            new Model('Ford Mustang', 'https://images.pexels.com/photos/244412/pexels-photo-244412.jpeg'),
            new Model('Ford Bronco', 'https://images.pexels.com/photos/10680864/pexels-photo-10680864.jpeg'),
            new Model('Ford Explorer', 'https://images.pexels.com/photos/189284/pexels-photo-189284.jpeg'),
            new Model('Ford Escape', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2021_Ford_Escape_Hybrid_SEL_AWD_in_Oxford_White%2C_front_left.jpg/1920px-2021_Ford_Escape_Hybrid_SEL_AWD_in_Oxford_White%2C_front_left.jpg'),
        ])],
        ['Tesla', Promise.resolve([
            new Model('Tesla Model S', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1920px-2018_Tesla_Model_S_75D.jpg'),
            new Model('Tesla Model 3', 'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg'),
            new Model('Tesla Model X', 'https://images.pexels.com/photos/1838586/pexels-photo-1838586.jpeg'),
            new Model('Tesla Model Y', 'https://images.pexels.com/photos/1838586/pexels-photo-1838586.jpeg'),
            new Model('Tesla Cybertruck', 'https://images.pexels.com/photos/1838586/pexels-photo-1838586.jpeg'),
        ])],
        ['Stellantis', Promise.resolve([
            new Model('Jeep Wrangler', 'https://images.pexels.com/photos/1838292/pexels-photo-1838292.jpeg'),
            new Model('Ram 1500', 'https://images.pexels.com/photos/1838292/pexels-photo-1838292.jpeg'),
            new Model('Chrysler Pacifica', 'https://images.pexels.com/photos/1838292/pexels-photo-1838292.jpeg'),
            new Model('Dodge Charger', 'https://images.pexels.com/photos/1838292/pexels-photo-1838292.jpeg'),
            new Model('Jeep Grand Cherokee', 'https://images.pexels.com/photos/1838292/pexels-photo-1838292.jpeg'),
        ])],
        ['Toyota Motor North America', Promise.resolve([
            new Model('Toyota Camry', 'https://images.pexels.com/photos/189582/pexels-photo-189582.jpeg'),
            new Model('Toyota Corolla', 'https://images.pexels.com/photos/190774/pexels-photo-190774.jpeg'),
            new Model('Toyota RAV4', 'https://images.pexels.com/photos/198442/pexels-photo-198442.jpeg'),
            new Model('Toyota Tundra', 'https://images.pexels.com/photos/198434/pexels-photo-198434.jpeg'),
            new Model('Toyota Highlander', 'https://images.pexels.com/photos/198432/pexels-photo-198432.jpeg'),
        ])],
        ['Honda Motor Co.', Promise.resolve([
            new Model('Honda Civic', 'https://images.pexels.com/photos/1574082/pexels-photo-1574082.jpeg'),
            new Model('Honda Accord', 'https://images.pexels.com/photos/2244249/pexels-photo-2244249.jpeg'),
            new Model('Honda CR-V', ''),
            new Model('Honda Pilot', ''),
            new Model('Honda Ridgeline', ''),
        ])],
        ['Nissan Motor Co.', Promise.resolve([
            new Model('Nissan Altima', ''),
            new Model('Nissan Rogue', 'https://images.pexels.com/photos/1265915/pexels-photo-1265915.jpeg'),
            new Model('Nissan Frontier', ''),
            new Model('Nissan Maxima', ''),
            new Model('Nissan Murano', ''),
        ])],
        ['Hyundai Motor America', Promise.resolve([
            new Model('Hyundai Elantra', ''),
            new Model('Hyundai Sonata', ''),
            new Model('Hyundai Tucson', 'https://images.pexels.com/photos/1914191/pexels-photo-1914191.jpeg'),
            new Model('Hyundai Santa Fe', ''),
            new Model('Hyundai Palisade', ''),
        ])],
        ['Kia Motors America', Promise.resolve([
            new Model('Kia Optima', ''),
            new Model('Kia Sorento', ''),
            new Model('Kia Sportage', 'https://images.pexels.com/photos/2181323/pexels-photo-2181323.jpeg'),
            new Model('Kia Telluride', ''),
            new Model('Kia Forte', ''),
        ])],
        ['BMW of North America', Promise.resolve([
            new Model('BMW 3 Series', 'https://images.pexels.com/photos/1454510/pexels-photo-1454510.jpeg'),
            new Model('BMW 5 Series', ''),
            new Model('BMW X5', ''),
            new Model('BMW X3', ''),
            new Model('BMW iX', ''),
        ])],
        ['Mercedes-Benz USA', Promise.resolve([
            new Model('Mercedes-Benz C-Class', ''),
            new Model('Mercedes-Benz E-Class', ''),
            new Model('Mercedes-Benz GLE', 'https://images.pexels.com/photos/1682062/pexels-photo-1682062.jpeg'),
            new Model('Mercedes-Benz GLC', ''),
            new Model('Mercedes-Benz S-Class', ''),
        ])],
        ['Volkswagen', Promise.resolve([
            new Model('Volkswagen Jetta', ''),
            new Model('Volkswagen Passat', ''),
            new Model('Volkswagen Atlas', ''),
            new Model('Volkswagen Golf', ''),
            new Model('Volkswagen Tiguan', ''),
        ])],
        ['Subaru of America', Promise.resolve([
            new Model('Subaru Outback', ''),
            new Model('Subaru Forester', ''),
            new Model('Subaru Crosstrek', ''),
            new Model('Subaru WRX', ''),
            new Model('Subaru Ascent', ''),
        ])],
        ['Mazda', Promise.resolve([
            new Model('Mazda3', ''),
            new Model('Mazda6', ''),
            new Model('Mazda CX-5', ''),
            new Model('Mazda CX-9', ''),
            new Model('Mazda MX-5 Miata', ''),
        ])],
        ['Volvo Cars USA', Promise.resolve([
            new Model('Volvo XC90', ''),
            new Model('Volvo XC60', ''),
            new Model('Volvo S60', ''),
            new Model('Volvo S90', ''),
            new Model('Volvo XC40', ''),
        ])],
        ['Audi of America', Promise.resolve([
            new Model('Audi A4', ''),
            new Model('Audi A6', ''),
            new Model('Audi Q5', ''),
            new Model('Audi Q7', ''),
            new Model('Audi e-tron', ''),
        ])],
        ['Porsche Cars North America', Promise.resolve([
            new Model('Porsche 911', ''),
            new Model('Porsche Cayenne', ''),
            new Model('Porsche Macan', ''),
            new Model('Porsche Panamera', ''),
            new Model('Porsche Taycan', ''),
        ])],
        ['Mitsubishi Motors North America', Promise.resolve([
            new Model('Mitsubishi Outlander', ''),
            new Model('Mitsubishi Eclipse Cross', ''),
            new Model('Mitsubishi Mirage', ''),
            new Model('Mitsubishi Outlander Sport', ''),
            new Model('Mitsubishi Lancer', ''),
        ])],
        ['Lucid Motors', Promise.resolve([
            new Model('Lucid Air', ''),
            new Model('Lucid Air Touring', ''),
            new Model('Lucid Air Grand Touring', ''),
            new Model('Lucid Air Sapphire', ''),
            new Model('Lucid Gravity', ''),
        ])],
        ['Rivian Automotive', Promise.resolve([
            new Model('Rivian R1T', ''),
            new Model('Rivian R1S', ''),
            new Model('Rivian Electric Van', ''),
            new Model('Rivian Adventure Package', ''),
            new Model('Rivian Explore Package', ''),
        ])]
      ]);

    //Returns the models given a manufacturer's name
    async getModelsFromManufacturer(name: string): Promise<Model[] | undefined>{
        return this.modelsMap.get(name)
    }

    //Appends a manufacturer to the map. Utilized when the manufacturer gets added from the Manufacturer landing page.
    async pushManufacturer(name: string){
        this.modelsMap.set(name, Promise.resolve([]))
    }

    //Pushes models to the specified manufacturer in the modelsMap.
    async pushModelToManufacturer(manufacturerName: string, newModel: Model){
        const modelPromise = this.modelsMap.get(manufacturerName)
        if(modelPromise){
            const models = await modelPromise
            if(models){
                models.push(newModel);
                this.modelsMap.set(manufacturerName, Promise.resolve(models))
            }
            else{
                console.log("Undefined model array")
            }
        }
        else{
            console.log("Manufacturer does not exist in map")
        }
    }

    //Deletes the model from the specified manufacturer in the modelsMap
    async deleteModelFromManufacturer(manufacturerName: string, modelName: string){
        const modelPromise = this.modelsMap.get(manufacturerName)

        if(modelPromise){
            modelPromise.then((models) => {
                if(models){
                    const index = models.findIndex(model => model.name == modelName);
                    if(index > -1){
                        models.splice(index, 1);
                        this.modelsMap.set(manufacturerName, Promise.resolve(models));
                    }
                    else{
                        console.log("Model not found for manufacturer")
                    }
                }
                else{
                    console.log("No models found for manufacturer")
                }
            })
        }
        else{
            console.log("The manufacturer does not exist in modelsMap")
        }
    }
}