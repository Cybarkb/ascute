import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// fullMenu = [{
  //     name: "Sort Products",
  //     childs: [{
  //       name: " By Price",
  //       childs: [{
  //         name: "Home-level-2"
  //       }]
  //     }]
  //   }, {
  //     name: "About Us"
  //   },{
  //     name: "Shop",
  //     childs: [{
  //       name: "registerLevel-1",
  //       childs: [{
  //         name: "registerLevel-2"
  //       }]
  //     }]
  //   }];
}
