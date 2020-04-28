import { fruits } from './../fruits';
import { fruitInterface } from './../fruitInterface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {

  fruits: fruitInterface[];
  public value: number;
  todaycalory:number=0;
  newFruit: any = {};

  constructor() { }

  ngOnInit(): void {
    this.newFruit=fruits;
    for(var i=0;i<this.newFruit.length;i++){
      this.todaycalory+=this.newFruit[i]['calory'];
    }
  }

  calculateCalory(value){
    // console.log('calory is: '+parseInt(number1));
    this.value=value;
    console.log(value*2);
  }

  addFruit(newFruit){
    newFruit['name']=this.newFruit.name;
    newFruit['calory']=this.newFruit.calory;
    newFruit['image']=this.newFruit.image;
    fruits.push(newFruit);
    console.log(Object.keys(this.newFruit).length);
    console.log(this.newFruit.length);
    this.todaycalory=0;
    for(var i=0;i<this.newFruit.length;i++){
      this.todaycalory+=this.newFruit[i]['calory'];
    }
    //console.log(this.todaycalory); //for inspection
  }

}
