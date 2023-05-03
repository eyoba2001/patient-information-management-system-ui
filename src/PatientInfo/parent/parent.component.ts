import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.view.html',
  styleUrls: ['./parent.style.scss']
})
export class ParentComponent {
   firstName:string="";

   onButtonClick():void{
    console.log("Button Clicked!");
   }
}
