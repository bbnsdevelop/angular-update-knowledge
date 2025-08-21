import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  firstName = signal('Miguel ');
  lastName = signal('Lopes');

  fullName =  computed(() =>{
    return this.firstName() + this.lastName();
  });

  array = signal([1]);


  public updateName(): any {
    return this.firstName.set('John ');
  }

  public updateArray(): any {
    return this.array.update((values: Array<number>) =>{

      return [...values, values.length + 1];
    });
  }

}
