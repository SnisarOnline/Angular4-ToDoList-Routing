import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import {
//   MatSidenavModule, MatSlideToggleModule, MatSelectModule, MatDividerModule,
//   MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatTooltipModule,
//   MatTabsModule, MatStepperModule, MatDialogModule, MatIconModule,
// } from '@angular/material';

import { ApiService } from './services/_api.service';
import { EventService } from './services/_event.service';
import { LocalStorageService } from './services/_localStorage.service';
import { TodoServiceService } from './services/todo-service.service';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule,
  ],
  declarations: [],
  exports: [],
  entryComponents: [],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DecimalPipe,
        ApiService,
        EventService,
        LocalStorageService,
        TodoServiceService
      ],
    };
  }

}
