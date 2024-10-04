import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardwaretab',
  templateUrl: './hardwaretab.component.html',
  styleUrls: ['./hardwaretab.component.css']
})
export class HardwaretabComponent implements OnInit {

  selectedButton: number = 1; // Button 1 is selected by default


  constructor() { }

  ngOnInit(): void {
  }

  selectButton(buttonNumber: number) {
    this.selectedButton = buttonNumber; // Update selected button number
  }


}
