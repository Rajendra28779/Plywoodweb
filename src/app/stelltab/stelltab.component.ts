import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stelltab',
  templateUrl: './stelltab.component.html',
  styleUrls: ['./stelltab.component.css']
})
export class StelltabComponent implements OnInit {

  selectedButton: number = 1; // Button 1 is selected by default


  constructor() { }

  ngOnInit(): void {
  }

  selectButton(buttonNumber: number) {
    this.selectedButton = buttonNumber; // Update selected button number
  }


}
