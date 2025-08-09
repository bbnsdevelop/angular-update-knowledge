import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-temp-variable',
  standalone: true,
  imports: [],
  templateUrl: './temp-variable.component.html',
  styleUrl: './temp-variable.component.scss'
})
export class TempVariableComponent implements AfterViewInit {

  @ViewChild('nameInput') nameInput!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
  }

}
