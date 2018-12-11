import { Component } from "@angular/core";

@Component({
    selector: "mm-custom-list.klasa-rowniez-custom",
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    name = "Hello from List!";
    arr = [1, 2, 3, 4];
    list = [
        "item 1",
        "item 2",
        "item 3"
    ];
}