import { Component, inject, model } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';

import { Router } from 'express';
import { ManufacturerService } from '../manufacturer.service';
import { Manufacturer } from '../manufacturer';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {FormsModule} from '@angular/forms'
import { MAT_DIALOG_DATA,MatDialog,MatDialogActions,MatDialogClose,MatDialogContent,MatDialogRef,MatDialogTitle, } from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ModelService } from '../model.service';
import { stringify } from 'querystring';
import { CarService } from '../car.service';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatSelect, MatSelectModule } from '@angular/material/select';

/*
*
* CarManufacturersComponent: First main layer of content. 
* This component is shown when the user is at the landing page. 
* The component allows you to add and delete Manufactuers at will.
* Deleting manufacturers also deletes it's cars and models.
* 
*/

@Component({
  selector: 'app-car-manufacturer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule, RouterModule],
  templateUrl: './car-manufacturer.component.html',
  styleUrl: './car-manufacturer.component.css'
})
export class CarManufacturersComponent {
  manufacturerService: ManufacturerService = inject(ManufacturerService)
  modelService: ModelService = inject(ModelService)
  carService: CarService = inject(CarService)
  manufacturerList: Manufacturer[] = []
  dialog = inject(MatDialog)
  name: string = ''
  photo: string = ''

  constructor(){
    this.manufacturerList = this.manufacturerService.getAllManufacturers();
    
  }

  //Dialog handler for adding a manufacturer to the service.
  openAddDialog(){
    const dialogRef = this.dialog.open(AddManufacturerDialogOverview, {
      data: {name: this.name, photo: this.photo}
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if(result && result.name != undefined){
        this.manufacturerList.push({name: result.name, photo: result.photo})
        this.modelService.pushManufacturer(result.name)
        console.log(this.modelService.modelsMap)
      }
    })
  }

  //Dialog for deleting a manufacturer from the service
  openDeleteDialog(){
    const dialogRef = this.dialog.open(DeleteManufacturerDialogOverview, {
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe((result) =>{
        console.log(result)
        const index = this.manufacturerList.findIndex(manufacturer => manufacturer.name === result.name)
        console.log(index)
        if(index > -1){
          const models = this.modelService.getModelsFromManufacturer(result.name)
          this.manufacturerList.splice(index, 1)
          
          console.log(models)
          this.modelService.modelsMap.delete(result.name)
        } 
        console.log(this.manufacturerList)
    })
  }
  

}

/*
*
* DeleteManufacturerDialogOverview: Component for handling 
* the delete dialog when the user wishes to remove a manufacturer
* from the table.
* 
*/

@Component({
  selector: 'delete-manufacturer-dialog-overview',
  templateUrl: 'delete-manufacturer-dialog-overview.html',
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
export class DeleteManufacturerDialogOverview{
  dialogRef = inject(MatDialogRef<DeleteManufacturerDialogOverview>);
  manufacturers = inject<Manufacturer[]>(MAT_DIALOG_DATA);
  selectedManufacturer: Manufacturer | null = null;
  manufacturerService: ManufacturerService = inject(ManufacturerService)

  constructor(){
    this.manufacturers = this.manufacturerService.getAllManufacturers()

  }
  onNoClick(){
    this.dialogRef.close();
  }

  onDeleteClick(){
    this.dialogRef.close(this.selectedManufacturer)
  }
}

/*
*
* AddManufacturerDialogOverview: Component for handling
* the add dialog when the user wishes to add a new 
* manufacturer to the table. Photo URL needs to lead
* to an image.
*
*/

@Component({
  selector: 'add-manufacturer-dialog-overview',
  templateUrl: 'manufacturer-dialog-overview.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class AddManufacturerDialogOverview{
  dialogRef = inject(MatDialogRef<AddManufacturerDialogOverview>);
  data = inject<Manufacturer>(MAT_DIALOG_DATA)
  name: string = this.data.name
  photo: string = this.data.photo

  onNoClick(){
    this.dialogRef.close();
  }
}
