import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './temp-binding.component.html',
  styleUrl: './temp-binding.component.scss'
})
export class TempBindingComponent implements OnInit{

  public name = 'Jhon';
  public age = 27;
  public isAdult: boolean = false;

  ngOnInit(): void {
    this.checkIsAdult();
  }

  public save(): void {
    console.log('saved');
  }

  public sum(): void {
    this.age++;
    this.checkIsAdult();
  }

  public sub(): void {
    this.age--;
    this.checkIsAdult();
  }

  private checkIsAdult(): void {
     this.isAdult = !(this.age >= 18);
  }

  public onKeyDown(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    console.log(keyboardEvent);
  }

  public onMouseMove(event: Event): void {
    const mouse = event as MouseEvent;
    const div = event.target as HTMLElement;
    const x = mouse.clientX - div.getBoundingClientRect().left;
    const y = mouse.clientY - div.getBoundingClientRect().top;
    console.log(`Mouse coordinates: ${x}, ${y}`);
  }

}
