import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<String>();

    onSelect(feature: String){
        this.featureSelected.emit(feature);
    }

    

}