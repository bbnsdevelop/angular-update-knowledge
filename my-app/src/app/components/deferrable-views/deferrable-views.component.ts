import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewComponent } from '../new/new.component';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent implements OnInit{
  public data!: Observable<string[]>;


  ngOnInit(): void {
    this.loadData();
  }

  public show: boolean = false;


  private loadData(): void{
   this.data = of(['data1', 'data2', 'data3']).pipe(delay(2000));

  }

}
