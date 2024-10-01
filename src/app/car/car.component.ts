import { Component, inject } from '@angular/core';
import { CarService } from '../car.service';
import Car from '../car';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Manufacturer } from '../manufacturer';
import { ManufacturerService } from '../manufacturer.service';

/*
*
* CarComponent: Component for displaying the car's information.
* Uses car info from the carService found in car.service.ts.
* CarComponent allows users to view and edit the car's information
* at will. Information is displayed in a card. The card's content
* includes the model's name, car image, and details.
* 
*/

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  carService : CarService = inject(CarService)
  carDetail: Car | undefined = undefined
  route: ActivatedRoute = inject(ActivatedRoute)
  dialog = inject(MatDialog)
  
  constructor(){
    const carName = this.route.snapshot.params['name']
    this.carDetail = this.carService.getCarFromModel(carName)
  }

  //Dialog for handling edit clicks
  editDialog(){
    const dialogRef = this.dialog.open(EditCarDialogOverview, {
      data: {
        car: this.carDetail,
        carName: this.route.snapshot.params['name']
      }
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if(result && result.name != undefined){
        
      }
    })
  }

}

/*
*
* EditCarDialogData: Interface for passing the car and carName
* to the EditCarDialogOverview component
* 
*/

export interface EditCarDialogData {
  car: Car | undefined; 
  carName: string; 
}

/*
*
* EditCarDialogOverview: Component for showing the form dialog
* for the user. User will fill out the information and hit either
* save or cancel. 
* 
*/

@Component({
  selector: 'edit-car-dialog-overview',
  templateUrl: 'edit-car-dialog-overview.html',
  styleUrl: 'edit-car-dialog-overview.css',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatOptionModule,
    MatSelectModule

  ],
})
export class EditCarDialogOverview{
  dialogRef = inject(MatDialogRef<EditCarDialogOverview>);
  data = inject<EditCarDialogData>(MAT_DIALOG_DATA);
  carService : CarService = inject(CarService)
  carName: string;
  car: Car | undefined;

  constructor(){
    console.log(this.data)
    this.carName = this.data.carName
    this.car = this.data.car
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
