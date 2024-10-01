import { Component, inject, model } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { ModelService } from '../model.service';
import { Model } from '../model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CarService } from '../car.service';
import Car from '../car';

/*
*
* CarModelComponent: Component for when the user has clicked
* on a manufacturer card. The manufacturer's car models will show.
* Models are stored in the ModelService in a map. Appearance is similar
* to that of the Manufacturer landing page. Allows to add and remove 
* Models. Removing the model also removes the car.
*
*/

@Component({
  selector: 'app-car-model',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule],
  templateUrl: './car-model.component.html',
  styleUrl: './car-model.component.css'
})
export class CarModelComponent {
  modelService: ModelService = inject(ModelService)
  modelList: Model[] | undefined = []
  route: ActivatedRoute = inject(ActivatedRoute)
  dialog = inject(MatDialog);
  name: string = ''
  photo: string = ''
  carService: CarService = inject(CarService)

  constructor(){
    const manufacturerName = this.route.snapshot.params['name']
    this.modelService.getModelsFromManufacturer(manufacturerName).then((models) => {
      this.modelList = models
    })
  }
  
  //Dialog for handling add button clicks
  openAddDialog(){
    const dialogRef = this.dialog.open(AddModelDialogOverview, {
      data: {name: this.name, photo: this.photo}
    });
    
    dialogRef.afterClosed().subscribe((result: { name: string | undefined; photo: any; }) => {
      if(result && result.name != undefined){
          this.modelService.pushModelToManufacturer(this.route.snapshot.params['name'], new Model(result.name, result.photo))
          this.carService.pushCarToCarsMap(result.name, new Car(this.route.snapshot.params['name'], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, result.photo))
      }
    })
  }

  //Dialog for handling delete button clicks
  openDeleteDialog(){
    const dialogRef = this.dialog.open(DeleteModelDialogOverview, {
      data: {
        models: this.modelList,
        manufacturerName: this.route.snapshot.params['name']
      }
    });

    dialogRef.afterClosed().subscribe((result: { name: string; }) =>{
      this.modelService.deleteModelFromManufacturer(this.route.snapshot.params['name'], result.name)

    })
  }
  

}

/*
*
* DeleteModelDialogData: Interface used in DeleteModelDialogOverview.
* Information is passed to DeleteModelDialogOverview and is injected.
* 
*/
export interface DeleteModelDialogData {
  models: Model[] | undefined; 
  manufacturerName: string; 
}

/*
*
* DeleteModelDialogOverview: Component for handling the delete flow
* for models. User selects a model and removes it. Removing the model
* removes it from cars also.
* 
*/

@Component({
  selector: 'delete-model-dialog-overview',
  templateUrl: 'delete-model-dialog-overview.html',
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
export class DeleteModelDialogOverview{
  dialogRef = inject(MatDialogRef<DeleteModelDialogOverview>);
  data = inject<DeleteModelDialogData>(MAT_DIALOG_DATA)
  selectedModel: Model | null = null;
  modelService: ModelService = inject(ModelService)
  modelList: Model[] | undefined = this.data.models
  manufacturerName: string = this.data.manufacturerName

  constructor(){

  }
  onNoClick(){
    this.dialogRef.close();
  }

  onDeleteClick(){
    this.dialogRef.close(this.selectedModel)
  }
}

/*
*
* AddModelDialogOverview: Component for handling the add flow
* for models. The user is required to fill out the name of the
* model. The image needs to be a URL leading to an image.
*
*/

@Component({
  selector: 'add-model-dialog-overview',
  templateUrl: 'model-dialog-overview.html',
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
export class AddModelDialogOverview{
  dialogRef = inject(MatDialogRef<AddModelDialogOverview>);
  data = inject<Model>(MAT_DIALOG_DATA)
  name: string = this.data.name
  photo: string = this.data.photo

  onNoClick(){
    this.dialogRef.close();
  }
}
