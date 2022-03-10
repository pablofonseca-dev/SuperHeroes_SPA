import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { WhiteContainerComponent } from './components/white-container/white-container.component';

@NgModule({
    declarations: [SpinnerComponent, WhiteContainerComponent], 
    imports: [MaterialModule, CommonModule], 
    exports: [SpinnerComponent, WhiteContainerComponent]
})
export class SharedModule {}
