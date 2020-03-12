import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  private months: Array<string> = [
    "placeholder",
    'januar',
    'februar',
    'mart',
    'april',
    'maj',
    'jun',
    'jul',
    'avgust',
    'septembar',
    'oktobar',
    'novembar',
    'decembar'
  ]

  
  private viewDays: Array<number>;
  private viewYear: number;
  private viewMonth;
  private selectedDate: Date;
  private selectedDay: number;
  private selectedMonth: number;
  private selectedYear: number;

  constructor() {
    this.selectDate(new Date())
    this.initView(this.selectedMonth, this.selectedYear)
   }

   initView(month, year) {
    this.viewMonth = month;
    this.viewYear = year;
    this.daysInMonth(this.viewMonth,this.viewYear);

   }

   selectDate(date: Date) {
    this.selectedDate = date;
    this.selectedDay = this.selectedDate.getDate();
    this.selectedMonth =  this.selectedDate.getMonth() + 1;
    this.selectedYear = this.selectedDate.getFullYear();

    console.log(this.months[this.selectedMonth]);
   }
   
   daysInMonth (month, year) { 
    const numberOfDays = new Date(year, month, 0).getDate(); 
    this.viewDays = Array(numberOfDays).fill(0).map((x,i)=>i+1)
    debugger
 } 

  firstWeekDay(month, year) {
    return new Date(year, month, 1).getDay();
  }

  ngOnInit() {
  }

}
