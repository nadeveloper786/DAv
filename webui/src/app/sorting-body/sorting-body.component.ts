import { Component, OnInit } from '@angular/core';
import {ColumnObject} from '../classes/column-object';
import { MenuServiceService } from '../services/menu-service.service';
import { min } from 'rxjs/operators';
//import { Observable } from 'rxjs';


@Component({
  selector: 'app-sorting-body',
  templateUrl: './sorting-body.component.html',
  styleUrls: ['./sorting-body.component.css']
})
export class SortingBodyComponent implements OnInit {
  constructor(private menuService:MenuServiceService) {

   }
   public columns:ColumnObject[]=[];

  ngOnInit(): void {
    let loopNumber = 300;
    for(var i = 0;i<loopNumber;i++){
      this.columns.push(new ColumnObject(Math.floor(Math.random()*200),
      this.colorName[Math.floor(Math.random()*100)],
      90/loopNumber, 1)); //by default opacity set to 1 = full color
    }
    console.log(this.columns);
  }

  changeSizeButton():void{
    this.columns[0].height = Math.floor(Math.random()*200);
  }

  sleep(milliseconds):void {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  timeoutFunc(start, end):void{
    //don't lose element 0 height
    
    let temp_height = this.columns[end].height;

    //assign opacity
    this.columns[start].opacity = 0.5;
    this.columns[start + 1].opacity = 0.5;

    //execute time out
   //try 1: window.setTimeout(function blank(){alert('hello')},10000);
    //try 2:
    //  this.sleep(3000);
      debugger;
      console.log('sleep worked');
    //finish swap
    this.columns[end].height = this.columns[start].height;
    this.columns[start].height = temp_height;
  }

  selectionSort():void{
    let minimum = 0;
    let current = 0;
    let temp_height =0;
    for(var i = 0; i< this.columns.length;i++){
        current = i;
        minimum = i;
        for(var j = i+1;j<this.columns.length;j++){
          if(this.columns[j].height<this.columns[minimum].height){
            minimum = j;
          }
        }
        if(current != minimum){
          //temp_height =  this.columns[current].height;
          //this.timeoutFunc(current,minimum);
          this.timeoutFunc(current,minimum);
          //this.columns[current].height = this.columns[minimum].height;
         // this.columns[minimum].height = temp_height;


        }
    }

  }

 

  testHttp():void{
    this.menuService.getMenuItems().subscribe(data=>{
      console.log("data from dataList! ",data);
  });
  }

  private colorName = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];

}
