import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

declare var google,places;
/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {
@ViewChild('search') searchElement: ElementRef;
quantity = [1,2,3,4,5,6,7,8,9,10]
 public name = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('name')
    console.log('ionViewDidLoad StorePage');
    console.log(this.name);
  }
  
  buyNow(itemname){

  }
}




@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  public hardware = [
    { image: "assets/imgs/t2.jpg", name: "V-R"},
    { image: "assets/imgs/t3.jpg", name: "Tablet"},
    { image: "assets/imgs/t4.jpg", name: "Solar Power Banks"},
  ]

  public Stories = [
    { image: "assets/imgs/story1.jpg", name: "School Bag"},
    { image: "assets/imgs/story2.jpg", name: "Watch"},
    { image: "assets/imgs/story3.jpg", name: "Foot wear"},
    { image: "assets/imgs/story4.jpg", name: "Handkercheifs"},
    { image: "assets/imgs/story5.jpg", name: "Wrist Band"},
    { image: "assets/imgs/story6.jpg", name: "Socks"}
  ]

  public books = [
    { image: "assets/imgs/book1.jpg", name: "Exercise Books"},
    { image: "assets/imgs/acc6.jpg", name: "Pencil"},
    { image: "assets/imgs/acc8.jpg", name: "Color Pencil"},
    { image: "assets/imgs/acc9.jpg", name: "Eraser"},
  ]


  constructor(public navCtrl: NavController,private popoverCtrl: PopoverController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }
  
  buyNow(itemname){
  //   let popover = this.popoverCtrl.create(BuyPage, {
  //     contentEle: this.content.nativeElement,
  //     textEle: this.text.nativeElement,
  //     name: itemname
  //   });

  //   popover.present({
  //     ev: ev
  //   });
  this.navCtrl.push(BuyPage, {name: itemname})
  }
}
