import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { EventDrivenFormComponent } from "./event-driven-form/event-driven-form.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateDrivenComponent, ReactiveFormsComponent, EventDrivenFormComponent, RegistrationFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms-demo';
}
