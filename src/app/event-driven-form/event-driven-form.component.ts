import { Component } from '@angular/core';

@Component({
  selector: 'app-event-driven-form',
  imports: [],
  templateUrl: './event-driven-form.component.html',
  styleUrl: './event-driven-form.component.css'
})
export class EventDrivenFormComponent {
  abc(obj:any){
    obj.preventDefault();
    console.log("Event Driven Object");
    console.log(obj.target.elements[0].value);
    console.log(obj.target.elements[1].value);
  }
}
