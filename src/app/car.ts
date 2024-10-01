/*
*
* Car: Class for cars
*   manufacturer - Name of the manufactuer for the car
*   alsoCalled - Other names of the car
*   production - Start and end time when the care was being made
*   assembly - Where the car gets manufacturered
*   carClass - Type of car
*   bodyStyle - Door style of car
*   layout - Contains information such as where the front engines are,
*   if it is a rear-wheel-drive or a four wheel... etc
*   predecessors - Other variants of the car
*   description -  Long description of the car if not enough information
*   can be fit from the other details 
*   photo - URL photo inherited from Model
* 
*/

export class Car{
    manufacturer: string;
    alsoCalled?: string[] | undefined;
    production: string | undefined;
    assembly: string[] | undefined;
    carClass: string | undefined;
    bodyStyle: string | undefined;
    layout: string | undefined;
    predecessors?: string[] | undefined;
    description: string | undefined;
    photo: string | undefined;
    constructor(
        manufacturer: string,
        alsoCalled?: string[] | undefined,
        production?: string | undefined,
        assembly?: string[] | undefined,
        carClass?: string | undefined,
        bodyStyle?: string | undefined,
        layout?: string | undefined,
        predecessors?: string[] | undefined,
        description?: string | undefined,
        photo?: string
      ){
        this.manufacturer = manufacturer;
        this.alsoCalled = alsoCalled;
        this.production = production;
        this.assembly = assembly;
        this.carClass = carClass;
        this.bodyStyle = bodyStyle;
        this.layout = layout;
        this.predecessors = predecessors;
        this.description = description;
        this.photo = photo
      }
    
}

export default Car