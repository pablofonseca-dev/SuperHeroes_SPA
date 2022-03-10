import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { WhiteContainerComponent } from './components/white-container/white-container.component';
import { WhiteContainerSpinnerComponent } from './components/white-container-spinner/white-container-spinner.component';

@NgModule({
    declarations: [SpinnerComponent, WhiteContainerComponent, WhiteContainerSpinnerComponent], 
    imports: [MaterialModule, CommonModule], 
    exports: [SpinnerComponent, WhiteContainerComponent, WhiteContainerSpinnerComponent]
})
export class SharedModule {}
