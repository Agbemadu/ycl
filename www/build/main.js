webpackJsonp([26],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slider_slider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_store__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__investor_investor__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lessons_lessons__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__support_support__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MenuPage = (function () {
    function MenuPage(navCtrl, storage, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */];
        this.currentUser = [];
        this.userPages = [
            // { title: 'Edit Profile', name: 'UsereditPage', component: UsereditPage, tabComponent: UsereditPage,  icon: 'ios-contact' },
            { title: 'Settings', name: 'SettingsPage', component: __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */], icon: 'ios-settings' },
        ];
        this.churchPages = [
            { title: 'Edit Profile', name: 'EditprofilePage', component: __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */], tabComponent: __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */], icon: 'ios-contact' },
            { title: 'View Profile', name: 'ProfilePage', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile__["b" /* ProfilePage */], tabComponent: __WEBPACK_IMPORTED_MODULE_8__profile_profile__["b" /* ProfilePage */], icon: 'ios-person' },
            { title: 'YCL Store', name: 'Events', component: __WEBPACK_IMPORTED_MODULE_9__store_store__["b" /* StorePage */], tabComponent: __WEBPACK_IMPORTED_MODULE_9__store_store__["b" /* StorePage */], icon: 'ios-cart' },
            { title: 'Leader Board', name: '', component: '', tabComponent: '', icon: 'ios-filing-outline' },
            { title: 'Investor', name: 'chatPage', component: __WEBPACK_IMPORTED_MODULE_10__investor_investor__["a" /* InvestorPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_10__investor_investor__["a" /* InvestorPage */], icon: 'logo-usd' },
            { title: 'Questions Factory', name: 'LessonsPage', component: __WEBPACK_IMPORTED_MODULE_11__lessons_lessons__["a" /* LessonsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__lessons_lessons__["a" /* LessonsPage */], icon: 'clipboard' },
            { title: 'FAQs & Support', name: 'Help', component: __WEBPACK_IMPORTED_MODULE_12__support_support__["a" /* SupportPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_12__support_support__["a" /* SupportPage */], icon: 'ios-help-circle' }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        // this.storage.get('ClickChurch').then((ClickChurch) => {
        //     if (ClickChurch) {
        //       this.profileProvider.getChurchProfile().on('value', churchProfileSnapshot => {
        //         this.currentUser = churchProfileSnapshot.val();
        //         console.log(this.currentUser)
        //         let u = document.getElementsByName('churchPages')[0];
        //         u.style.display="block";
        //         let c = document.getElementsByName('userPages')[0];
        //         c.style.display="none";
        //       });
        //     } else {
        //       this.us.getUserProfile().on('value', userProfileSnapshot => {
        //         this.currentUser = userProfileSnapshot.val();
        //         console.log(this.currentUser)
        //       });
        //       let u = document.getElementsByName('churchPages')[0];
        //       u.style.display="none";
        //       let n = document.getElementsByName('userPages')[0];
        //       n.style.display="block"; 
        //   }
        // })
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.openPage = function (page) {
        this.navCtrl.push(page.tabComponent);
    };
    MenuPage.prototype.testfunction = function () {
        var _this = this;
        this.storage.clear();
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().signOut().then(function () {
            console.log("done");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__slider_slider__["a" /* SliderPage */]);
        }).catch(function (error) {
            // An error happened.
        });
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\menu\menu.html"*/'\n<ion-menu [content]="content" >\n  <ion-header>\n    <ion-navbar color="facebook">\n      <ion-title>YCL</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n    <ion-content class="outer-content">\n      <ion-card padding>\n        <div id=\'menu_cover\'style="background-image: url(\'assets/imgs/sidel.jpeg\');">\n        <ion-avatar >\n            <img [src]="currentUser?.profileImage" class="avatar" alt="" *ngIf="currentUser?.profileImage">\n          <img src="assets/imgs/icon.png" class="avatar" alt="" *ngIf="!currentUser?.profileImage">\n        </ion-avatar>\n        <p id = "p">{{currentUser?.name}}</p>\n        <p id = "p">{{currentUser?.email}}</p>\n        </div>\n  <ion-list id="churchPages" name="churchPages">\n    <button menuClose ion-item *ngFor="let t of churchPages" (click)="openPage(t)">\n      <ion-icon item-start [name]="t.icon"></ion-icon>\n      {{t.title}}\n    </button>\n  </ion-list>\n  <ion-list id="userPages" name="userPages">\n  <button menuClose ion-item *ngFor="let p of userPages" (click)="openPage(p)">\n    <ion-icon item-start [name]="p.icon" ></ion-icon>\n    {{p.title}}\n  </button>\n  </ion-list>\n  <ion-list>\n    <button menuClose ion-item (click)="testfunction()">\n    <ion-icon item-start name="ios-log-out-outline"></ion-icon>\n    Logout\n  </button>\n  </ion-list>\n</ion-card>\n  </ion-content>\n  </ion-menu>\n  \n  \n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_all_all__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamsPage = (function () {
    // Doughnut
    function ExamsPage(navCtrl, all, actionsheetCtrl, ap, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.all = all;
        this.actionsheetCtrl = actionsheetCtrl;
        this.ap = ap;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ExamsPage.prototype.ionViewDidLoad = function () {
        this.data = this.navParams.get('name');
    };
    ExamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-exams',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\profile\bookexams.html"*/'<ion-header>\n\n  <ion-navbar color="facebook">\n\n     <ion-title>Book Exams</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n      \n\n<ion-content>\n\n  <form>\n\n    <p padding>{{data}}</p>  \n\n    <div class="row">\n\n      <div class="col s12">\n\n            <label for="it">Location</label>\n\n        <input placeholder="Location" type="text" id="it" class="validate">\n\n     </div>\n\n </div>\n\n <ion-item>\n\n  <ion-label floating>Exams Date</ion-label>\n\n  <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="date" [ngModelOptions]="{standalone: true}"></ion-datetime>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label floating>Time</ion-label>\n\n  <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="time" [ngModelOptions]="{standalone: true}"></ion-datetime>\n\n</ion-item>\n\n<div class="row">\n\n        <div class="col s12">\n\n            <label for="num">Full Name</label>\n\n              <input placeholder="John Doe" id="num" type="text" class="validate">\n\n            </div>\n\n          </div>\n\n  \n\n  <div class="row">\n\n        <form class="col s12">\n\n          <div class="row">\n\n            <div class="input-field col s12">\n\n              <input placeholder="0244 000000" id="num" type="number" class="validate">\n\n           </div>\n\n        </div>\n\n     </form>\n\n</div>\n\n<div class="row">\n\n        <div class="col s12">\n\n            <button ion-button block color = "facebook" (click)="buyNow(image)" color="primary">Book</button>\n\n                </div>\n\n        </div>\n\n</form>\n\n<img src="assets/imgs/momo.jpg" alt="MTN" class="image">\n\n</ion-content>'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\profile\bookexams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_all_all__["a" /* AllProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ExamsPage);
    return ExamsPage;
}());

/************************* */
var ProfilePage = (function () {
    // 
    function ProfilePage(navCtrl, all, actionsheetCtrl, ap, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.all = all;
        this.actionsheetCtrl = actionsheetCtrl;
        this.ap = ap;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        // Doughnut
        this.dd = [
            { name: 'Sign Language', per: '45' },
            { name: 'Maths', per: '25' },
            { name: 'Science', per: '35' },
            { name: 'Social Studies', per: '85' },
            { name: 'I C T', per: '65' },
            { name: 'B D T', per: '45' },
            { name: 'Languages', per: '5' },
            { name: 'R M E', per: '45' }
        ];
        this.doughnutChartLabels = ['Completed', 'Incomplete'];
        this.doughnutChartData = [150, 400];
        this.doughnutChartType = 'pie';
        //Bar
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        // public : Array<any> = [['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Augt', 'Sept', 'Oct', 'Nov', 'Dec'],['2018', '2019', '2020', '2021', '2022']];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartLabels = [];
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 45, 65, 59, 80, 81, 56, 55, 70], label: 'Peack Times' },
        ];
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.name = this.navParams.get('name');
        if (this.name != null) {
            this.username = this.name;
        }
        else {
            this.ap.getUserProfile().on('value', function (userSnapshot) {
                _this.me = userSnapshot.val(),
                    _this.user = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
                _this.username = _this.me.fullname;
            });
            console.log(this.me);
        }
        this.data = "Daily";
        if (this.data == "Daily") {
            this.searchDetails(this.data);
            this.barChartDatas = this.barChartData[0];
        }
        this.lesson_segment = "dashboard";
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.searchDetails = function (details) {
        var _this = this;
        this.all.getReportDetails(details).on('value', function (Snap) {
            _this.barChartLabel = Snap.val();
            _this.barChartLabels = _this.barChartLabel.splice(0, 1);
            // }
            console.log(_this.barChartLabel);
            console.log(_this.barChartLabels);
        });
    };
    // getStudentReport(details){
    //   this.all.getStudentReportDetails(1,details).on('value', Snap =>{
    //     this.barChartData  = Snap.val();
    //     // console.log(this.barChartData)
    //     for(let bar of this.barChartData){
    //     console.log(bar.monday)
    //   }
    //   })
    // }
    ProfilePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ProfilePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ProfilePage.prototype.openOptions = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Activitey Feed',
            cssClass: 'action-sheets-basic-page',
            buttons: [{ text: 'Daily', handler: function () {
                        _this.data = "Daily";
                        _this.searchDetails(_this.data);
                    } },
                { text: 'Monthly', handler: function () {
                        _this.data = "Monthly";
                        // this.barChartLabels = this.barChartLabel[1]
                        _this.searchDetails(_this.data);
                        _this.barChartDatas = _this.barChartData[1];
                    } }, { text: 'Yearly', handler: function () {
                        _this.data = "Yearly";
                        // this.barChartLabels = this.barChartLabel[2]
                        _this.searchDetails(_this.data);
                        _this.barChartDatas = _this.barChartData[2];
                    } },
                { text: 'Cancel', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.openExams = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Exams Type',
            cssClass: 'action-sheets-basic-page',
            buttons: [{ text: 'BECE', handler: function () { _this.book('BECE'); } },
                { text: 'WASSCE', handler: function () { _this.book('WASSCE'); } },
                { text: 'JAMB', handler: function () { _this.book('JAMB'); } }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.book = function (name) {
        this.navCtrl.push(ExamsPage, { name: name });
    };
    /************************* */
    ProfilePage.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n    \n\n<ion-content fullscreen-padding>\n    <div text-center padding class="image">\n        <img src="assets/imgs/image.jpg" class="edit-avatar" alt="" >\n        <p text-center>{{username}}</p>\n        <div class="row">\n          <div class="col s6">\n              <button ion-button (click)="openExams()">Request Exams &nbsp;<ion-icon name="arrow-dropdown"></ion-icon></button>\n          </div>\n          <div class="col s6">\n              <div class="col s6">\n                <button ion-button outline block (click)="randomize()"><ion-icon name="md-print"></ion-icon> </button>\n              </div>\n              <div class="col s6">\n                  <button ion-button outline block (click)="randomize()"><ion-icon name="md-cloud-download"></ion-icon> </button>\n              </div>\n              \n            </div>\n        </div>\n        \n        \n      </div>\n    \n        <div>\n            <ion-segment [(ngModel)]="lesson_segment">\n              <ion-segment-button value="stats">\n                  <ion-icon ios="ios-stats" md="md-stats" item-left></ion-icon>\n                </ion-segment-button>\n                    <ion-segment-button value="dashboard">\n                        <ion-icon ios="ios-pie" md="md-pie" item-left></ion-icon>\n                      </ion-segment-button>\n                      <ion-segment-button value="badges">\n                          <ion-icon ios="ios-ribbon" md="md-ribbon"></ion-icon>\n                        </ion-segment-button>\n            </ion-segment>\n          </div>\n    \n    <div [ngSwitch]="lesson_segment">\n        <ion-list  *ngSwitchCase="\'stats\'">\n          <p text-center>\n            <button ion-button outline (click)="openOptions()"> {{data}} <ion-icon name="arrow-dropdown"></ion-icon></button>\n          </p>\n\n          <ion-card>\n            <div>\n                <div style="display: block">\n                  <canvas baseChart\n                          [datasets]="barChartData"\n                          [labels]="barChartLabel"\n                          [options]="barChartOptions"\n                          [legend]="barChartLegend"\n                          [chartType]="barChartType"\n                          (chartHover)="chartHovered($event)"\n                          (chartClick)="chartClicked($event)"></canvas>\n                </div>\n                \n              </div>\n         </ion-card>\n        </ion-list>\n\n\n        <ion-list *ngSwitchCase="\'dashboard\'">\n          <ion-card >\n            <div class="row" >\n              <div class="col s6" *ngFor = "let c of dd">\n                      <div style="display: block">\n                        <p>{{c.name}}</p>\n                        <ion-note>{{c.per}}% Complete</ion-note>\n                        <canvas baseChart \n                        [data]="doughnutChartData"\n                        [chartType] ="doughnutChartType"\n                        (chartHover)="chartHovered($event)"\n                        (chartClick)="chartClicked($event)"></canvas>\n                      </div>\n          </div>\n        </div>\n      </ion-card>\n    </ion-list>\n\n<!-- [labels]="doughnutChartLabels" -->\n\n    <ion-list *ngSwitchCase="\'badges\'">\n        <ion-item>\n          <div item-left class="circle">\n            <!-- <ion-icon name="ios-medal" class="icons"></ion-icon> -->\n          </div>\n          <p>Social Studies JHS 1</p>\n          <p>Good job! 1st term completed</p>\n        </ion-item>\n        <ion-item>\n            <div item-left class="circles">\n                <!-- <ion-icon name="ios-medal" class="icons"></ion-icon> -->\n            </div>\n            <p>Social Studies JHS 1</p>\n            <p>Good job! 2nd term completed</p>\n          </ion-item>\n          <ion-item>\n              <div item-left class="bcircle">\n                  <!-- <ion-icon name="ios-medal" class="icons"></ion-icon> -->\n              </div>\n              <p>Social Studies JHS 1</p>\n              <p>Good job! 3rd term completed</p>\n            </ion-item>\n            <ion-item>\n                <div item-left class="acircles">\n                    <!-- <ion-icon name="ios-medal" class="icons"></ion-icon> -->\n                </div>\n                <p>Social Studies JHS 2</p>\n                <p>Good job! 1st term completed</p>\n              </ion-item>\n    </ion-list>\n      </div>\n          \n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_all_all__["a" /* AllProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyPage = (function () {
    function BuyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.name = [];
    }
    BuyPage.prototype.ionViewDidLoad = function () {
        this.name = this.navParams.get('name');
        console.log('ionViewDidLoad StorePage');
        console.log(this.name);
    };
    BuyPage.prototype.buyNow = function (itemname) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BuyPage.prototype, "searchElement", void 0);
    BuyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-buy',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\store\buy.html"*/'<ion-header>\n\n\n\n        <ion-navbar color="facebook">\n\n          <ion-title>Complete Details</ion-title>\n\n        </ion-navbar>\n\n      \n\n      </ion-header>\n\n      \n\n<ion-content>\n\n    <img [src]="name.image" alt="item Image" class="image">\n\n    <p padding>{{name.name}}</p>\n\n    <!-- <div class="row">\n\n            <div class="col s12">\n\n                <div class="row">\n\n                    <div class="col s6">\n\n                \n\n                </div>\n\n            </div>\n\n            <div class="row">\n\n                \n\n                        <div class="col s6">\n\n                    <button ion-button block color = "facebook" (click)="buyNow()" color="primary">-</button>\n\n                            </div>\n\n                        <div class="col s6">\n\n                    <button ion-button block color = "facebook" (click)="buyNow()" color="primary">+</button>\n\n                        </div>\n\n                \n\n        </div>\n\n           </div>\n\n       </div>   -->\n\n       \n\n       <div class="row">\n\n          <div class="col s6">\n\n              <label for="m">Quantity</label>\n\n                <input placeholder="1" id="m" type="number" class="validate">\n\n          </div>\n\n          <div class="col s6">\n\n              <div class="col s6">\n\n                <button ion-button outline block (click)="add()"><ion-icon name="md-add"></ion-icon> </button>\n\n              </div>\n\n              <div class="col s6">\n\n                  <button ion-button outline block (click)="sub()"><ion-icon name="md-remove"></ion-icon> </button>\n\n              </div>\n\n              \n\n            </div>\n\n        </div>\n\n    <div class="row">\n\n      <div class="col s12">\n\n            <label for="it">Location</label>\n\n        <input placeholder="Location" type="text" id="it" class="validate">\n\n     </div>\n\n </div>\n\n\n\n<div class="row">\n\n        <div class="col s12">\n\n            <label for="num">Full Name</label>\n\n              <input placeholder="John Doe" id="num" type="text" class="validate">\n\n            </div>\n\n          </div>\n\n   <div class="row">\n\n        <form class="col s12">\n\n          <div class="row">\n\n            <div class="input-field col s12">\n\n              <input placeholder="0244 000000" id="num" type="number" class="validate">\n\n           </div>\n\n        </div>\n\n     </form>\n\n</div>\n\n<div class="row">\n\n        <div class="col s12">\n\n                <div class="col s6">\n\n            <button ion-button clear block color = "facebook" (click)="buyNow(image)" color="primary">Save to Cart</button>\n\n                    </div>\n\n                <div class="col s6">\n\n            <button ion-button block color = "facebook" (click)="buyNow(image)" color="primary">Buy</button>\n\n                </div>\n\n        </div>\n\n</div>\n\n\n\n<img src="assets/imgs/momo.jpg" alt="MTN" class="image">\n\n</ion-content>'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\store\buy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BuyPage);
    return BuyPage;
}());

var StorePage = (function () {
    function StorePage(navCtrl, popoverCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.hardware = [
            { image: "assets/imgs/t2.jpg", name: "V-R" },
            { image: "assets/imgs/t3.jpg", name: "Tablet" },
            { image: "assets/imgs/t4.jpg", name: "Solar Power Banks" },
        ];
        this.Stories = [
            { image: "assets/imgs/story1.jpg", name: "School Bag" },
            { image: "assets/imgs/story2.jpg", name: "Watch" },
            { image: "assets/imgs/story3.jpg", name: "Foot wear" },
            { image: "assets/imgs/story4.jpg", name: "Handkercheifs" },
            { image: "assets/imgs/story5.jpg", name: "Wrist Band" },
            { image: "assets/imgs/story6.jpg", name: "Socks" }
        ];
        this.books = [
            { image: "assets/imgs/book1.jpg", name: "Exercise Books" },
            { image: "assets/imgs/acc6.jpg", name: "Pencil" },
            { image: "assets/imgs/acc8.jpg", name: "Color Pencil" },
            { image: "assets/imgs/acc9.jpg", name: "Eraser" },
        ];
    }
    StorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StorePage');
    };
    StorePage.prototype.buyNow = function (itemname) {
        //   let popover = this.popoverCtrl.create(BuyPage, {
        //     contentEle: this.content.nativeElement,
        //     textEle: this.text.nativeElement,
        //     name: itemname
        //   });
        //   popover.present({
        //     ev: ev
        //   });
        this.navCtrl.push(BuyPage, { name: itemname });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], StorePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popoverText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], StorePage.prototype, "text", void 0);
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-store',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\store\store.html"*/'<!--\n  Generated template for the StorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>My Store</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding #popoverContent>\n  <ion-item-group #popoverText>\n      <ion-item-divider color = "blu">Hardware</ion-item-divider>\n      <ion-grid >\n      <ion-row>\n        <ion-col *ngFor= "let image of hardware">\n            <div> \n              <ion-card>\n              <img [src]="image.image" alt="Store Image">\n              <P>{{image.name}}</P>\n            <ion-note item-right><ion-icon ios="ios-pricetags" md="md-pricetags"></ion-icon>&nbsp;GHC 35.00</ion-note>\n             <button ion-button clear color = "facebook" (click)="buyNow(image)" color="primary" small>\n             <ion-icon ios="ios-cart" md="md-cart"></ion-icon>&nbsp; &nbsp;\n               Shop Now</button>\n          </ion-card>\n         </div>\n     </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-item-group>\n  <ion-item-group>\n    <ion-item-divider color = "blu">Stationary</ion-item-divider>\n    <ion-grid >\n    <ion-row>\n      <ion-col *ngFor= "let image of books">\n          <div> \n            <ion-card>\n            <img [src]="image.image" alt="Store Image">\n            <P>{{image.name}}</P>\n          <ion-note item-right><ion-icon ios="ios-pricetags" md="md-pricetags"></ion-icon>&nbsp;GHC 35.00</ion-note>\n           <button ion-button clear color = "facebook" (click)="buyNow(image)" color="primary" small>\n           <ion-icon ios="ios-cart" md="md-cart"></ion-icon>&nbsp; &nbsp;\n             Shop Now</button>\n        </ion-card>\n       </div>\n   </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-item-group>\n  <ion-item-group>\n      <ion-item-divider color = "bluz">Others</ion-item-divider>\n      <ion-grid >\n      <ion-row>\n        <ion-col *ngFor= "let image of Stories">\n            <div> \n              <ion-card>\n              <img [src]="image.image" alt="Store Image">\n              <P>{{image.name}}</P>\n            <ion-note item-right><ion-icon ios="ios-pricetags" md="md-pricetags"></ion-icon>&nbsp;GHC 5.00</ion-note>\n             <button ion-button clear color = "facebook" (click)="buyNow(image)" color="primary" small>\n             <ion-icon ios="ios-cart" md="md-cart"></ion-icon>&nbsp; &nbsp;\n               Shop Now</button>\n          </ion-card>\n         </div>\n     </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\store\store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pro_pro__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChallangePage = (function () {
    function ChallangePage(navCtrl, toastCtrl, navParams, pro) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.pro = pro;
        this.lesson = [1, 2, 3, 4, 5];
        this.count = 0;
        this.counts = 0;
        this.question = [];
        this.answers = [];
    }
    ChallangePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pro.getMyScore().on('value', function (scoreSnap) {
            _this.score = scoreSnap.val();
        });
        this.key = this.navParams.get('key');
        this.c = this.navParams.get('c');
        if (this.c == 1 || this.c == 0) {
            this.cid = this.navParams.get('cid');
            this.title = "Social Studies";
            this.name = this.navParams.get('chiName');
        }
        else {
            this.id = this.navParams.get('id');
            this.name = this.navParams.get('name');
            this.title = this.navParams.get('title');
        }
        console.log('ionViewDidLoad ChallangePage');
        console.log(this.key);
        this.questionNumber = this.lesson[this.count];
        this.getQuestions(this.questionNumber);
        this.getAnswers(this.questionNumber);
    };
    ChallangePage.prototype.getQuestions = function (number) {
        var _this = this;
        this.pro.getChallengeQuestions(number).on('value', function (questSnap) {
            _this.question = questSnap.val().ques;
            console.log(_this.question);
            return false;
        });
        // })
    };
    ChallangePage.prototype.getAnswers = function (number) {
        var _this = this;
        this.pro.getChallengeAnswers(number).on('value', function (ansSnap) {
            _this.answers = ansSnap.val();
            _this.myanswer = ansSnap.val().correct;
            console.log(_this.myanswer);
        });
        // })
    };
    ChallangePage.prototype.showToastWithCloseButton = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            position: 'buttom',
            duration: 2000,
            closeButtonText: 'ok'
        });
        toast.present();
    };
    ChallangePage.prototype.shuffule = function (number) {
        if (number < 6) {
            console.log(number);
            this.getQuestions(number);
            this.getAnswers(number);
            this.initTimer();
            this.startTimer();
        }
        else {
            this.done(number);
        }
    };
    ChallangePage.prototype.ngOnInit = function () {
        this.initTimer();
    };
    ChallangePage.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    ChallangePage.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 30;
        }
        this.timer = {
            time: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            timeRemaining: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.timeRemaining);
    };
    ChallangePage.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        console.log(sec_num);
        return minutesString + ':' + secondsString;
    };
    ChallangePage.prototype.startTimer = function () {
        var c = document.getElementsByName('compare')[0];
        c.style.display = "none";
        var d = document.getElementsByName('challangepage')[0];
        d.style.display = "block";
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    ChallangePage.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.timeRemaining--;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.timeRemaining);
            if (_this.timer.timeRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.timer.hasFinished = true;
                _this.check();
            }
        }, 1000);
    };
    ChallangePage.prototype.subAns = function (g) {
        this.final = g;
        console.log(g);
    };
    ChallangePage.prototype.check = function () {
        this.questionNumber = this.lesson[++this.count];
        if (this.final == this.myanswer) {
            this.showToastWithCloseButton('correct!!');
            if (this.score != null) {
                this.score = this.score.score + 2;
            }
            else {
                this.score = 2;
            }
            this.pro.saveScore(this.score);
            console.log('Correct');
            ++this.counts;
            this.getQuestions(this.questionNumber);
            this.getAnswers(this.questionNumber);
            this.initTimer();
            this.startTimer();
        }
        else {
            this.showToastWithCloseButton('Wrong!!!');
            this.getQuestions(this.questionNumber);
            this.getAnswers(this.questionNumber);
            this.initTimer();
            this.startTimer();
            --this.counts;
        }
        this.done(this.questionNumber);
        console.log(this.final, this.myanswer);
    };
    ChallangePage.prototype.done = function (num) {
        if (num == 5) {
            if (this.c == 1) {
                console.log(this.cid);
                this.pro.updateChallenges2(this.cid);
            }
            else {
                console.log(this.key);
                this.pro.updateChallenges1(this.key);
            }
            var c = document.getElementsByName('compare')[0];
            c.style.display = "block";
            var d = document.getElementsByName('challangepage')[0];
            d.style.display = "none";
            var a = document.getElementsByName('after')[0];
            a.style.display = "block";
            var b = document.getElementsByName('before')[0];
            b.style.display = "none";
            var f = document.getElementsByName('footer')[0];
            f.style.display = "block";
            this.initTimer();
        }
    };
    ChallangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-challange',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\challange\challange.html"*/'<!--\n  Generated template for the ChallangePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>{{title}} challenge</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding>\n\n<div name="compare">\n  <ion-grid>\n    <ion-row>\n    <ion-col col-5>\n      <ion-avatar>\n      <img src="assets/imgs/image.jpg" alt="">\n    </ion-avatar>\n      <h6 center>You</h6>\n    </ion-col>\n    <ion-col col-2><h1>VS</h1></ion-col>\n    <ion-col col-5>\n      <ion-avatar>\n      <img src="assets/imgs/imagelady.jpg" alt="">\n    </ion-avatar>\n      <h6 center>{{name}}</h6>\n    </ion-col>\n  </ion-row>\n        <p text-center name="before">WINNER GETS</p>\n        <div name="after" class="after">\n          <p text-center >{{counts}} : 0</p>\n          <p text-center>Wait for Opponent</p>\n        </div>\n        <button ion-button block outline color="secondary">10 XP</button>\n  </ion-grid>\n</div>\n\n<div name="challangepage" class="challangepage">\n  <ion-item class="no-bottom-border item">\n  <p text-center class="timer-button timer-text">{{timer?.displayTime}}</p>\n  <ion-grid>\n      <ion-row>\n      <ion-col col-5>\n        <ion-avatar item-left>\n        <img src="assets/imgs/image.jpg" alt="">\n      </ion-avatar>\n        <h6>You</h6>\n      </ion-col>\n      <ion-col col-2><p>{{counts}} : 0</p></ion-col>\n      <ion-col col-5>\n        <ion-avatar item-right>\n        <img src="assets/imgs/imagelady.jpg" alt="">\n      </ion-avatar>\n        <h6 center>{{name}}</h6>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-item>\n\n   <ion-card >\n   <p padding class="card-title">{{question}}</p>\n      <ion-list radio-group >\n    <ion-item >\n      <ion-label>{{answers?.a}}</ion-label>\n      <ion-radio item-left (click)="subAns(answers?.a)"></ion-radio>\n    </ion-item>\n    <ion-item >\n      <ion-label>{{answers?.b}}</ion-label>\n      <ion-radio item-left (click)="subAns(answers?.b)"></ion-radio>\n    </ion-item>\n    <ion-item *ngIf ="answers?.c">\n      <ion-label>{{answers?.c}}</ion-label>\n      <ion-radio item-left (click)="subAns(answers?.c)"></ion-radio>\n    </ion-item>\n    <ion-item *ngIf ="answers?.d">\n      <ion-label>{{answers?.d}}</ion-label>\n      <ion-radio item-left (click)="subAns(answers?.d)"></ion-radio>\n    </ion-item>\n    <ion-buttons end>\n      <button ion-button color="facebook" (click)="check()">Submit</button>\n    </ion-buttons>\n    </ion-list>\n  </ion-card>\n   \n  </div>\n\n\n  <div name="footer" padding>\n    <button ion-button block color="facebook" (click)="startTimer()">START</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\challange\challange.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pro_pro__["a" /* ProProvider */]])
    ], ChallangePage);
    return ChallangePage;
}());

//# sourceMappingURL=challange.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_all_all__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__learn_learn__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SectionPage = (function () {
    // 'The Environment & Environmental Problems',
    // 'Adolescent Reproductive Health'
    function SectionPage(navCtrl, all, navParams) {
        this.navCtrl = navCtrl;
        this.all = all;
        this.navParams = navParams;
        this.topics = [];
    }
    SectionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.sub = this.navParams.get('sub');
        this.cat = this.navParams.get('cat');
        this.title = this.navParams.get('cat');
        console.log('ionViewDidLoad SectionPage');
        this.all.getCourseTitle(this.cat).on('value', function (Snap) {
            _this.topics = Snap.val();
            console.log(_this.topics);
        });
    };
    SectionPage.prototype.ngOnInit = function () {
    };
    SectionPage.prototype.openTopic = function (t) {
        console.log(t);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__learn_learn__["a" /* LearnPage */], { sub: this.sub, cat: this.cat, topic: t });
    };
    SectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-section',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\section\section.html"*/'<!--\n  Generated template for the SectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="facebook">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content fullscreen-padding>\n  <div *ngIf = "! topics" text-center>\n      <div class="preloader-wrapper small active">\n          <div class="spinner-layer spinner-blue-only">\n            <div class="circle-clipper left">\n              <div class="circle"></div>\n            </div><div class="gap-patch">\n              <div class="circle"></div>\n            </div><div class="circle-clipper right">\n              <div class="circle"></div>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class="row" *ngIf = "topics?.a">\n    <div class="col s6">\n    <div class="card">\n                  <div class="card-image" (click)="openTopic(topics.a)">\n                    <img src="assets/imgs/bgg.jpg">\n                    <span class="card-title">{{topics?.a}}</span>\n                    <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="arrow-round-forward"></ion-icon></i></a>\n                  </div>\n                  <div class="card-content">\n                      <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                  </div>\n                </div>\n              </div>\n              <div class="col s6">\n                <div class="card">\n                    <div class="card-image" (click)="openTopic(topics.b)">\n                      <img src="assets/imgs/bgg.jpg">\n                      <span class="card-title">{{topics?.b}}</span>\n                      <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="md-lock"></ion-icon></i></a>\n                    </div>\n                    <div class="card-content">\n                        <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                    </div>\n                  </div>\n              </div>\n            </div>\n\n            <div class="row" >\n                <div class="col s6" *ngIf = "topics?.c">\n                <div class="card">\n                              <div class="card-image" (click)="openTopic(topics.c)">\n                                <img src="assets/imgs/bgg.jpg">\n                                <span class="card-title">{{topics?.c}}</span>\n                                <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="md-lock"></ion-icon></i></a>\n                              </div>\n                              <div class="card-content">\n                                  <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                              </div>\n                            </div>\n                          </div>\n                          <div class="col s6"  *ngIf = "topics?.d">\n                            <div class="card">\n                                <div class="card-image" (click)="openTopic(topics.d)">\n                                  <img src="assets/imgs/bgg.jpg">\n                                  <span class="card-title">{{topics?.d}}</span>\n                                  <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="md-lock"></ion-icon></i></a>\n                                </div>\n                                <div class="card-content">\n                                    <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                                </div>\n                              </div>\n                          </div>\n                        </div>\n\n                        <div class="row" >\n                            <div class="col s6" *ngIf = "topics?.e">\n                            <div class="card">\n                                          <div class="card-image" (click)="openTopic(topics.e)">\n                                            <img src="assets/imgs/bgg.jpg">\n                                            <span class="card-title">{{topics?.e}}</span>\n                                            <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="md-lock"></ion-icon></i></a>\n                                          </div>\n                                          <div class="card-content">\n                                              <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <div class="col s6"  *ngIf = "topics?.f">\n                                        <div class="card">\n                                            <div class="card-image" (click)="openTopic(topics.f)">\n                                              <img src="assets/imgs/bgg.jpg">\n                                              <span class="card-title">{{topics?.f}}</span>\n                                              <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="md-lock"></ion-icon></i></a>\n                                            </div>\n                                            <div class="card-content">\n                                                <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                                            </div>\n                                          </div>\n                                      </div>\n                                    </div>\n            \n\n                                    <div class="row" >\n                                        <div class="col s6" *ngIf = "topics?.g">\n                                        <div class="card">\n                                                      <div class="card-image" (click)="openTopic(topics.g)">\n                                                        <img src="assets/imgs/bgg.jpg">\n                                                        <span class="card-title">{{topics?.g}}</span>\n                                                        <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="md-lock"></ion-icon></i></a>\n                                                      </div>\n                                                      <div class="card-content">\n                                                          <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                  <div class="col s6"  *ngIf = "topics?.h">\n                                                    <div class="card">\n                                                        <div class="card-image" (click)="openTopic(topics.h)">\n                                                          <img src="assets/imgs/bgg.jpg">\n                                                          <span class="card-title">{{topics?.h}}</span>\n                                                          <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="md-lock"></ion-icon></i></a>\n                                                        </div>\n                                                        <div class="card-content">\n                                                            <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                                                        </div>\n                                                      </div>\n                                                  </div>\n                                                </div>\n                        \n                                                <div class="row" >\n                                                    <div class="col s6" *ngIf = "topics?.i">\n                                                    <div class="card">\n                                                                  <div class="card-image" (click)="openTopic(topics.i)">\n                                                                    <img src="assets/imgs/bgg.jpg">\n                                                                    <span class="card-title">{{topics?.i}}</span>\n                                                                    <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="md-lock"></ion-icon></i></a>\n                                                                  </div>\n                                                                  <div class="card-content">\n                                                                      <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                                                                  </div>\n                                                                </div>\n                                                              </div>\n                                                              <div class="col s6"  *ngIf = "topics?.j">\n                                                                <div class="card">\n                                                                    <div class="card-image" (click)="openTopic(topics.j)">\n                                                                      <img src="assets/imgs/bgg.jpg">\n                                                                      <span class="card-title">{{topics?.j}}</span>\n                                                                      <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons"><ion-icon name="md-lock"></ion-icon></i></a>\n                                                                    </div>\n                                                                    <div class="card-content">\n                                                                        <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                                                                    </div>\n                                                                  </div>\n     </div>\n  </div>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\section\section.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_all_all__["a" /* AllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SectionPage);
    return SectionPage;
}());

//# sourceMappingURL=section.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_all_all__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pro_pro__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { AllProvider } from '../../providers/all/all';
/**
 * Generated class for the LearnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LearnPage = (function () {
    function LearnPage(navCtrl, modalCtrl, photoViewer, navParams, actionsheetCtrl, all, alerCtrl, pro, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.photoViewer = photoViewer;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.all = all;
        this.alerCtrl = alerCtrl;
        this.pro = pro;
        this.toastCtrl = toastCtrl;
    }
    LearnPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.language = "English";
        this.pro.getMyScore().on('value', function (scoreSnap) {
            _this.score = scoreSnap.val();
        });
        this.lesson_segment = "learning";
        this.sub = this.navParams.get('sub');
        this.cat = this.navParams.get('cat');
        this.topic = this.navParams.get('topic');
        this.title = this.navParams.get('cat');
        console.log(this.sub, this.cat, this.yr, this.sec, this.topic, this.d, this.title);
        this.all.getTopicQuestion(this.cat, this.topic).on('value', function (courseSnapshot) {
            _this.learns = courseSnapshot.val();
            _this.myanswer = courseSnapshot.val().correct;
            console.log(_this.learns);
        });
        this.all.getTopicQuestionAnswer(this.cat, this.topic).on('value', function (ansSnapshot) {
            _this.answer = ansSnapshot.val();
            console.log(_this.answer);
        });
        this.all.getTopicQuestionWithImages(this.cat, this.topic).on('value', function (imgSnapshot) {
            _this.images = imgSnapshot.val();
            console.log(_this.images);
        });
        // this.transilateEnglish()
    };
    LearnPage.prototype.doMore = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            buttons: [{ text: 'Send Feeback', icon: 'md-paper-plane', handler: function () { _this.sendFeedback(); } },
                { text: 'Font Size', icon: 'logo-yahoo', handler: function () { _this.changeFont(); } },
                { text: "Copy Link", icon: 'ios-link', handler: function () { _this.showToastWithCloseButton(); } },
                { text: 'Cancel', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }]
        });
        actionSheet.present();
    };
    LearnPage.prototype.changeFont = function () {
        var alert = this.alerCtrl.create({
            title: 'Font',
            message: '<ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">' +
                '<ion-icon range-left small name="brush"></ion-icon>' +
                '<ion-icon range-right name="brush"></ion-icon>' +
                '</ion-range>',
            buttons: ['Ok']
        });
        alert.present();
    };
    LearnPage.prototype.sendFeedback = function () {
        var alert = this.alerCtrl.create({
            title: 'Font',
            inputs: [{
                    name: 'feedback',
                    placeholder: 'type feedback here'
                }],
            buttons: ['Ok']
        });
        alert.present();
    };
    LearnPage.prototype.showToastWithCloseButton = function () {
        var toast = this.toastCtrl.create({
            message: 'Link copied successfully',
            showCloseButton: true,
            position: 'buttom',
            duration: 2000,
            closeButtonText: 'ok'
        });
        toast.present();
    };
    LearnPage.prototype.help = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Help',
            cssClass: 'action-sheets-basic-page',
            buttons: [{ text: 'Ask a friend', icon: 'person', handler: function () { } }, { text: "50-50", icon: 'information', handler: function () { } },
                { text: 'Cancel', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }]
        });
        actionSheet.present();
    };
    LearnPage.prototype.takeQuiz = function () { this.lesson_segment = "quiz"; };
    LearnPage.prototype.tryagain = function () {
        this.lesson_segment = "learning";
        var u = document.getElementsByName('note')[0];
        u.style.display = "block";
        var s = document.getElementsByName('alert')[0];
        s.style.display = "none";
    };
    LearnPage.prototype.doOk = function () { this.lesson_segment = "learning"; };
    LearnPage.prototype.openit = function (image) {
        // let modal = this.modalCtrl.create(MorePage, {i: image});
        // modal.present();
        this.photoViewer.show(image, 'Title', { share: true });
    };
    LearnPage.prototype.subAns = function (answer) { this.final = answer; };
    // subAn(a,b,c,d,e){
    //   this.final = []
    //   this.final.push(a,b,c,d,e);
    // }
    LearnPage.prototype.checkthem = function () { console.log(this.final); };
    LearnPage.prototype.check = function () {
        if (this.final == this.myanswer) {
            var u = document.getElementsByName('note')[0];
            u.style.display = "none";
            var s = document.getElementsByName('alert')[0];
            s.style.display = "block";
            var r = document.getElementsByName('right')[0];
            r.style.display = "block";
            var w = document.getElementsByName('wrong')[0];
            w.style.display = "none";
            var t = document.getElementsByName('correct')[0];
            t.innerHTML = "Correct!!!";
            t.style.color = "#76da04";
            if (this.score != null) {
                this.score = this.score.score + 5;
            }
            else {
                this.score = 5;
            }
            this.pro.saveScore(this.score);
            console.log('Correct');
        }
        else {
            var u = document.getElementsByName('note')[0];
            u.style.display = "none";
            var s = document.getElementsByName('alert')[0];
            s.style.display = "block";
            var r = document.getElementsByName('right')[0];
            r.style.display = "none";
            var w = document.getElementsByName('wrong')[0];
            w.style.display = "block";
            var t = document.getElementsByName('correct')[0];
            t.innerHTML = "Wrong!!!";
            t.style.color = "#bd0505";
            console.log('Sorry');
        }
        console.log(this.final, this.myanswer);
    };
    LearnPage.prototype.openLan = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Languages',
            cssClass: 'action-sheets-basic-page',
            buttons: [{ text: 'French', handler: function () { _this.transilateFrench(); } }, { text: 'English', handler: function () { _this.transilateEnglish(); } }, { text: 'Twi', handler: function () { } },
                { text: 'Cancel', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }]
        });
        actionSheet.present();
    };
    LearnPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.ionViewDidLoad();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    LearnPage.prototype.transilateFrench = function () {
        this.language = "French";
        var u = document.getElementsByName('english')[0];
        u.style.display = "none";
        var s = document.getElementsByName('french')[0];
        s.style.display = "block";
    };
    LearnPage.prototype.transilateEnglish = function () {
        this.language = "English";
        var u = document.getElementsByName('english')[0];
        u.style.display = "block";
        var s = document.getElementsByName('french')[0];
        s.style.display = "none";
    };
    LearnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-learn',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\learn\learn.html"*/'<!--\n  Generated template for the LearnPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n      <ion-buttons start right>\n          <button ion-button icon-only (click)="doMore()">\n            <ion-icon name="more"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding >\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n    <div>\n        <ion-segment [(ngModel)]="lesson_segment">\n          <ion-segment-button value="learning">\n              <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value="quiz">\n              <ion-icon ios="ios-help" md="md-help"></ion-icon>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n<div [ngSwitch]="lesson_segment">\n    <ion-list  *ngSwitchCase="\'learning\'">\n  <ion-list >\n    <ion-card  class="card" >\n      <video controls="controls" preload="metadata"  width="100%" height="45%" webkit-playsinline="webkit-playsinline" class="videoPlayer">\n          <source [src]="learns?.video" type="audio/mp4" />\n          </video>\n        <ion-buttons end>\n            <button no-margin no-padding clear color="black" ion-button icon-only style="float: right" >\n            <ion-icon ios="ios-volume-up" md="md-volume-up"></ion-icon>\n          </button>\n          <button no-margin no-padding clear color="black" ion-button icon-only style="float: right" (click)="openLan()">\n            {{language}} &nbsp; <ion-icon ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n          </button>\n        </ion-buttons>\n        <div class="card-content">\n          <p name="english" class="flow-text">{{learns?.lesson}}</p>\n          <p name="french" class="flow-text" id="flow">{{learns?.french}}</p>\n          <div class="slide">\n              <h4>Some images on {{topic}}</h4>\n              <ion-scroll class="story" scrollX="true" >\n                <div class="story_scroll" *ngFor = "let image of images | slice : 1">\n                  <div class="story_img_bg">\n                   <img [src]="image" (click)="openit(image)" class="story_img">\n                  </div>\n                </div>\n              </ion-scroll>\n            </div>\n          </div>\n         <ion-buttons end>\n           <button ion-button (click)="takeQuiz()" color="facebook">Next</button>\n         </ion-buttons>\n        \n  \n      </ion-card>\n     </ion-list>\n    </ion-list>\n  \n    <ion-list *ngSwitchCase="\'quiz\'">\n      <form name ="note">\n       \n        <ion-list radio-group >\n         <ion-card>\n            <p class="card-title" padding>\n            {{learns?.question}}\n          </p>\n        <div class="card-content">\n          <ion-item *ngIf ="answer?.a">\n            <ion-label>{{answer?.a}}</ion-label>\n            <ion-radio item-left (click)="subAns(answer.a)"></ion-radio>\n          </ion-item>\n          <ion-item *ngIf ="answer?.b">\n            <ion-label>{{answer?.b}}</ion-label>\n            <ion-radio item-left (click)="subAns(answer.b)"></ion-radio>\n          </ion-item>\n          <ion-item *ngIf ="answer?.c">\n            <ion-label>{{answer?.c}}</ion-label>\n            <ion-radio item-left (click)="subAns(answer.c)"></ion-radio>\n          </ion-item>\n          <ion-item *ngIf ="answer?.d">\n            <ion-label>{{answer?.d}}</ion-label>\n            <ion-radio item-left (click)="subAns(answer.d)"></ion-radio>\n          </ion-item>\n          <ion-item *ngIf ="answer?.e">\n            <ion-label>{{answer?.e}}</ion-label>\n            <ion-radio item-left (click)="subAns(answer.e)"></ion-radio>\n          </ion-item>\n          <ion-buttons end>\n            <ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>\n            <button ion-button clear color="facebook" (click)="help()">Help</button>\n          </ion-buttons>\n        </div>\n          <ion-buttons end>\n              <button ion-button color="facebook" (click)="check()">Submit</button>\n            </ion-buttons>\n          </ion-card>\n         <!-- <ion-card *ngIf ="answer.e">\n         <ion-item>\n          <ion-label>{{answer?.a}}</ion-label>\n          <ion-checkbox (click)="subAn(answer?.a)"></ion-checkbox>\n         </ion-item>\n         <ion-item>\n          <ion-label>{{answer?.b}}</ion-label>\n          <ion-checkbox (click)="subAn(answer?.b)"></ion-checkbox>\n         </ion-item>\n         <ion-item>\n          <ion-label>{{answer?.c}}</ion-label>\n          <ion-checkbox (click)="subAn(answer?.c)"></ion-checkbox>\n         </ion-item>\n         <ion-item>\n          <ion-label>{{answer?.d}}</ion-label>\n          <ion-checkbox (click)="subAn(answer?.d)"></ion-checkbox>\n         </ion-item>\n         <ion-item>\n          <ion-label>{{answer?.e}}</ion-label>\n          <ion-checkbox (click)="subAn(answer?.e)"></ion-checkbox>\n         </ion-item>\n         <ion-buttons end>\n            <button ion-button color="facebook" (click)="checkthem()">Submit</button>\n          </ion-buttons>\n        </ion-card> -->\n        </ion-list>\n      </form>\n      <div name="alert" class="alert">\n      <p name="correct"></p>\n    <ion-buttons end name= "right">\n      <button ion-button color="facebook" (click)="doOk()">Ok</button>\n    </ion-buttons>\n      <ion-buttons end name= "wrong">\n        <button ion-button color="facebook" (click)="tryagain()">Try Again</button>\n      </ion-buttons>\n  </div>\n </ion-list>\n</div>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\learn\learn.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_all_all__["a" /* AllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_pro_pro__["a" /* ProProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], LearnPage);
    return LearnPage;
}());

//# sourceMappingURL=learn.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_all_all__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pro_pro__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TopicdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicdetailsPage = (function () {
    function TopicdetailsPage(all, navCtrl, navParams, actionsheetCtrl, alerCtrl, pro, toastCtrl) {
        this.all = all;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.alerCtrl = alerCtrl;
        this.pro = pro;
        this.toastCtrl = toastCtrl;
        this.lesson = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        this.count = 0;
    }
    TopicdetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.lesson_segment = this.lesson[this.count];
        this.pro.getMyScore().on('value', function (scoreSnap) {
            _this.score = scoreSnap.val();
        });
        this.title = this.navParams.get('cat');
        this.all.getCourseTitle(this.title).on('value', function (noSnapshot) {
            _this.lang = noSnapshot.val();
        });
        console.log(this.lang);
    };
    TopicdetailsPage.prototype.openDetails = function (d) {
    };
    TopicdetailsPage.prototype.doMore = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            buttons: [{ text: 'Send Feeback', icon: 'md-paper-plane', handler: function () { _this.sendFeedback(); } },
                { text: 'Font Size', icon: 'logo-yahoo', handler: function () { _this.changeFont(); } },
                { text: "Copy Link", icon: 'ios-link', handler: function () { _this.showToastWithCloseButton('Link copied successfully'); } },
                { text: 'Cancel', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }]
        });
        actionSheet.present();
    };
    TopicdetailsPage.prototype.changeFont = function () {
        var alert = this.alerCtrl.create({
            title: 'Font',
            message: '<ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">' +
                '<ion-icon range-left small name="brush"></ion-icon>' +
                '<ion-icon range-right name="brush"></ion-icon>' +
                '</ion-range>',
            buttons: ['Ok']
        });
        alert.present();
    };
    TopicdetailsPage.prototype.sendFeedback = function () {
        var alert = this.alerCtrl.create({
            title: 'Font',
            inputs: [{
                    name: 'feedback',
                    placeholder: 'type feedback here'
                }],
            buttons: ['Ok']
        });
        alert.present();
    };
    TopicdetailsPage.prototype.showToastWithCloseButton = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            position: 'buttom',
            duration: 2000,
            closeButtonText: 'ok'
        });
        toast.present();
    };
    TopicdetailsPage.prototype.help = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Help',
            cssClass: 'action-sheets-basic-page',
            buttons: [{ text: 'Ask a friend', icon: 'person', handler: function () { } }, { text: "50-50", icon: 'information', handler: function () { } },
                { text: 'Cancel', role: 'cancel', handler: function () { console.log('Cancel clicked'); } }]
        });
        actionSheet.present();
    };
    TopicdetailsPage.prototype.takeQuiz = function () { this.lesson_segment = this.lesson[this.count++]; };
    TopicdetailsPage.prototype.tryagain = function () {
        this.lesson_segment = this.lesson[this.count--];
        // let u = document.getElementsByName('note')[0];
        // u.style.display="block";
        // let s = document.getElementsByName('alert')[0];
        // s.style.display="none"
    };
    TopicdetailsPage.prototype.subAns = function (answer, possible) {
        this.final = answer;
        this.myanswer = possible;
    };
    TopicdetailsPage.prototype.checkthem = function () { console.log(this.final, this.myanswer); };
    TopicdetailsPage.prototype.check = function () {
        if (this.final == this.myanswer) {
            //  let u = document.getElementsByName('note')[0];
            //   u.style.display="none";
            //   let s = document.getElementsByName('alert')[0];
            //   s.style.display="block";
            //   let r = document.getElementsByName('right')[0];
            //   r.style.display="block";
            //   let w = document.getElementsByName('wrong')[0];
            //   w.style.display="none";
            //   let t = document.getElementsByName('correct')[0];
            //   t.innerHTML = "Correct!!!";
            //   t.style.color="#76da04";
            this.showToastWithCloseButton('Correct!!!');
            if (this.score != null) {
                this.score = this.score.score + 5;
            }
            else {
                this.score = 5;
            }
            this.pro.saveScore(this.score);
            this.lesson_segment = this.lesson[this.count++];
            console.log('Correct');
        }
        else {
            // let u = document.getElementsByName('note')[0];
            // u.style.display="none";
            // let s = document.getElementsByName('alert')[0];
            // s.style.display="block";
            // let r = document.getElementsByName('right')[0];
            // r.style.display="none";
            // let w = document.getElementsByName('wrong')[0];
            // w.style.display="block";
            // let t = document.getElementsByName('correct')[0];
            // t.innerHTML = "Wrong!!!";
            // t.style.color="#bd0505";
            console.log('Sorry');
            this.showToastWithCloseButton('Wrong!!!');
            // this.lesson_segment = this.lesson[--this.count]
        }
        console.log(this.final, this.myanswer);
    };
    TopicdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-topicdetails',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\topicdetails\topicdetails.html"*/'<!--\n  Generated template for the TopicdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="facebook">\n        <ion-buttons start right>\n            <button ion-button icon-only (click)="doMore()">\n              <ion-icon name="more"></ion-icon>\n            </button>\n          </ion-buttons>\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content fullscreen-padding >\n      <div>\n          <ion-segment [(ngModel)]="lesson_segment">\n            <ion-segment-button value="1">\n                <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="2">\n                <ion-icon ios="ios-help" md="md-help"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="3">\n                <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="4">\n                <ion-icon ios="ios-help" md="md-help"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="5">\n                <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="6">\n                <ion-icon ios="ios-help" md="md-help"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="7">\n                <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="8">\n                <ion-icon ios="ios-help" md="md-help"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="9">\n                <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value="10">\n                <ion-icon ios="ios-help" md="md-help"></ion-icon>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n  \n  <div [ngSwitch]="lesson_segment">\n      <ion-list  *ngSwitchCase="\'1\'">\n      <ion-card  class="card">\n        <div class="row" >\n         <div class="col s6">\n            <img [src]="lang?.a" >          \n        </div>\n        <div class="col s6">\n            <img [src]="lang?.b">              \n        </div>\n      </div>\n      <div class="row" >\n        <div class="col s6">\n            <img [src]="lang?.c">            \n        </div>\n         <div class="col s6">\n             <img [src]="lang?.d">           \n        </div>\n        </div>\n        <div class="row" >\n        <div class="col s6">\n             <img [src]="lang?.e">          \n        </div>\n        <div class="col s6">\n            <img [src]="lang?.f">          \n        </div>\n      </div> \n    <ion-buttons end>\n      <button ion-button (click)="takeQuiz()" color="facebook">Next</button>\n    </ion-buttons> \n  </ion-card>\n</ion-list>\n    \n      <ion-list *ngSwitchCase="\'2\'">\n        <form name ="note">\n         \n          <ion-list radio-group >\n           <ion-card>\n              <p class="card-title" padding>\n              What is the name of the alphabet displayed below?\n            </p> \n            <div class="quizImage" >\n             <img [src]="lang?.e">\n            </div>\n            \n          <div class="card-content">\n            <ion-item>\n              <ion-label>A</ion-label>\n              <ion-radio item-left (click)="subAns(\'a\',\'e\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>B</ion-label>\n              <ion-radio item-left (click)="subAns(\'b\',e)"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>C</ion-label>\n              <ion-radio item-left (click)="subAns(\'e\',\'c\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>D</ion-label>\n              <ion-radio item-left (click)="subAns(\'e\',\'d\')"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>E</ion-label>\n              <ion-radio item-left (click)="subAns(\'e\',\'e\')"></ion-radio>\n            </ion-item>\n            <ion-buttons end>\n              <ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>\n              <button ion-button clear color="facebook" (click)="help()">Help</button>\n            </ion-buttons>\n          </div>\n            <ion-buttons end>\n                <button ion-button color="facebook" (click)="check()">Submit</button>\n              </ion-buttons>\n            </ion-card>\n          </ion-list>\n        </form>\n        <div name="alert" class="alert">\n        <p name="correct"></p>\n      <ion-buttons end name= "right">\n        <button ion-button color="facebook" (click)="doOk()">Ok</button>\n      </ion-buttons>\n        <ion-buttons end name= "wrong">\n          <button ion-button color="facebook" (click)="tryagain()">Try Again</button>\n        </ion-buttons>\n    </div>\n   </ion-list>\n\n   <ion-list  *ngSwitchCase="\'3\'">\n      <ion-card  class="card">\n        <div class="row" >\n         <div class="col s6">\n            <img [src]="lang?.g" >          \n        </div>\n        <div class="col s6">\n            <img [src]="lang?.h">              \n        </div>\n      </div>\n      <div class="row" >\n        <div class="col s6">\n            <img [src]="lang?.i">            \n        </div>\n         <div class="col s6">\n             <img [src]="lang?.j">           \n        </div>\n        </div>\n        <div class="row" >\n        <div class="col s6">\n             <img [src]="lang?.k">          \n        </div>\n        <div class="col s6">\n            <img [src]="lang?.l">          \n        </div>\n      </div> \n    <ion-buttons end>\n      <button ion-button (click)="takeQuiz()" color="facebook">Next</button>\n    </ion-buttons> \n  </ion-card>\n</ion-list>\n    \n      <ion-list *ngSwitchCase="\'4\'">\n        <form name ="note">\n         \n          <ion-list radio-group >\n           <ion-card>\n              <p class="card-title" padding>\n              What is the name of the alphabet displayed below?\n            </p> \n            <div class="quizImage" >\n             <img [src]="lang?.j">\n            </div>\n            \n          <div class="card-content">\n            <ion-item>\n              <ion-label>G</ion-label>\n              <ion-radio item-left (click)="subAns(\'g\',\'j\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>K</ion-label>\n              <ion-radio item-left (click)="subAns(\'k\',\'j\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>I</ion-label>\n              <ion-radio item-left (click)="subAns(\'j\',\'i\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>J</ion-label>\n              <ion-radio item-left (click)="subAns(\'j\',\'j\')"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>H</ion-label>\n              <ion-radio item-left (click)="subAns(\'h\',\'j\')"></ion-radio>\n            </ion-item>\n            <ion-buttons end>\n              <ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>\n              <button ion-button clear color="facebook" (click)="help()">Help</button>\n            </ion-buttons>\n          </div>\n            <ion-buttons end>\n                <button ion-button color="facebook" (click)="check()">Submit</button>\n              </ion-buttons>\n            </ion-card>\n          </ion-list>\n        </form>\n        <div name="alert" class="alert">\n        <p name="correct"></p>\n      <ion-buttons end name= "right">\n        <button ion-button color="facebook" (click)="doOk()">Ok</button>\n      </ion-buttons>\n        <ion-buttons end name= "wrong">\n          <button ion-button color="facebook" (click)="tryagain()">Try Again</button>\n        </ion-buttons>\n    </div>\n   </ion-list>\n\n   <ion-list  *ngSwitchCase="\'5\'">\n      <ion-card  class="card">\n        <div class="row" >\n         <div class="col s6">\n            <img [src]="lang?.m" >          \n        </div>\n        <div class="col s6">\n            <img [src]="lang?.n">              \n        </div>\n      </div>\n      <div class="row" >\n        <div class="col s6">\n            <img [src]="lang?.o">            \n        </div>\n         <div class="col s6">\n             <img [src]="lang?.p">           \n        </div>\n        </div>\n        <div class="row" >\n        <div class="col s6">\n             <img [src]="lang?.q">          \n        </div>\n        <div class="col s6">\n            <img [src]="lang?.r">          \n        </div>\n      </div> \n    <ion-buttons end>\n      <button ion-button (click)="takeQuiz()" color="facebook">Next</button>\n    </ion-buttons> \n  </ion-card>\n</ion-list>\n    \n      <ion-list *ngSwitchCase="\'6\'">\n        <form name ="note">\n         \n          <ion-list radio-group >\n           <ion-card>\n              <p class="card-title" padding>\n              What is the name of the alphabet displayed below?\n            </p> \n            <div class="quizImage" >\n             <img [src]="lang?.m">\n            </div>\n            \n          <div class="card-content">\n            <ion-item>\n              <ion-label>M</ion-label>\n              <ion-radio item-left (click)="subAns(\'m\',\'m\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>N</ion-label>\n              <ion-radio item-left (click)="subAns(\'n\',\'m\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>O</ion-label>\n              <ion-radio item-left (click)="subAns(\'o\',\'m\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>P</ion-label>\n              <ion-radio item-left (click)="subAns(\'p\',\'m\')"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Q</ion-label>\n              <ion-radio item-left (click)="subAns(\'q\',\'m\')"></ion-radio>\n            </ion-item>\n            <ion-buttons end>\n              <ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>\n              <button ion-button clear color="facebook" (click)="help()">Help</button>\n            </ion-buttons>\n          </div>\n            <ion-buttons end>\n                <button ion-button color="facebook" (click)="check()">Submit</button>\n              </ion-buttons>\n            </ion-card>\n          </ion-list>\n        </form>\n        <div name="alert" class="alert">\n        <p name="correct"></p>\n      <ion-buttons end name= "right">\n        <button ion-button color="facebook" (click)="doOk()">Ok</button>\n      </ion-buttons>\n        <ion-buttons end name= "wrong">\n          <button ion-button color="facebook" (click)="tryagain()">Try Again</button>\n        </ion-buttons>\n    </div>\n   </ion-list>\n\n   <ion-list  *ngSwitchCase="\'7\'">\n      <ion-card  class="card">\n        <div class="row" >\n         <div class="col s6">\n            <img [src]="lang?.s" >          \n        </div>\n        <div class="col s6">\n            <img [src]="lang?.t">              \n        </div>\n      </div>\n      <div class="row" >\n        <div class="col s6">\n            <img [src]="lang?.u">            \n        </div>\n         <div class="col s6">\n             <img [src]="lang?.v">           \n        </div>\n        </div>\n        <div class="row" >\n        <div class="col s6">\n             <img [src]="lang?.w">          \n        </div>\n        <div class="col s6">\n            <img [src]="lang?.x">          \n        </div>\n      </div> \n    <ion-buttons end>\n      <button ion-button (click)="takeQuiz()" color="facebook">Next</button>\n    </ion-buttons> \n  </ion-card>\n</ion-list>\n    \n      <ion-list *ngSwitchCase="\'8\'">\n        <form name ="note">\n         \n          <ion-list radio-group >\n           <ion-card>\n              <p class="card-title" padding>\n              What is the name of the alphabet displayed below?\n            </p> \n            <div class="quizImage" >\n             <img [src]="lang?.w">\n            </div>\n            \n          <div class="card-content">\n            <ion-item>\n              <ion-label>S</ion-label>\n              <ion-radio item-left (click)="subAns(\'s\',\'w\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>X</ion-label>\n              <ion-radio item-left (click)="subAns(\'x\',\'w\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>U</ion-label>\n              <ion-radio item-left (click)="subAns(\'w\',\'u\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>V</ion-label>\n              <ion-radio item-left (click)="subAns(\'v\',\'w\')"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>W</ion-label>\n              <ion-radio item-left (click)="subAns(\'w\',\'w\')"></ion-radio>\n            </ion-item>\n            <ion-buttons end>\n              <ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>\n              <button ion-button clear color="facebook" (click)="help()">Help</button>\n            </ion-buttons>\n          </div>\n            <ion-buttons end>\n                <button ion-button color="facebook" (click)="check()">Submit</button>\n              </ion-buttons>\n            </ion-card>\n          </ion-list>\n        </form>\n        <div name="alert" class="alert">\n        <p name="correct"></p>\n\n        <ion-buttons end name= "wrong">\n          <button ion-button color="facebook" (click)="tryagain()">Try Again</button>\n        </ion-buttons>\n    </div>\n   </ion-list>\n\n   <ion-list  *ngSwitchCase="\'9\'">\n      <ion-card  class="card">\n        <div class="row" >\n         <div class="col s6">\n            <img [src]="lang?.y" >          \n        </div>\n        <div class="col s6">\n            <img [src]="lang?.z">              \n        </div>\n      </div>\n    <ion-buttons end>\n      <button ion-button (click)="takeQuiz()" color="facebook">Next</button>\n    </ion-buttons> \n  </ion-card>\n</ion-list>\n    \n      <ion-list *ngSwitchCase="\'10\'">\n        <form name ="note">\n         \n          <ion-list radio-group >\n           <ion-card>\n              <p class="card-title" padding>\n              What alphabet is displayed below?\n            </p> \n            <div class="quizImage" >\n             <img [src]="lang?.y">\n            </div>\n            \n          <div class="card-content">\n            <ion-item >\n              <ion-label>W</ion-label>\n              <ion-radio item-left (click)="subAns(\'w\',\'y\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>Z</ion-label>\n              <ion-radio item-left (click)="subAns(\'z\',\'y\')"></ion-radio>\n            </ion-item>\n            <ion-item >\n              <ion-label>Y</ion-label>\n              <ion-radio item-left (click)="subAns(\'y\',\'y\')"></ion-radio>\n            </ion-item>\n            <ion-buttons end>\n              <ion-icon ios="ios-help-circle" md="md-help-circle"></ion-icon>\n              <button ion-button clear color="facebook" (click)="help()">Help</button>\n            </ion-buttons>\n          </div>\n            <ion-buttons end>\n                <button ion-button color="facebook" (click)="check()">Submit</button>\n              </ion-buttons>\n            </ion-card>\n          </ion-list>\n        </form>\n        <div name="alert" class="alert">\n        <p name="correct"></p>\n      <ion-buttons end name= "right">\n        <button ion-button color="facebook" (click)="doOk()">Ok</button>\n      </ion-buttons>\n        <ion-buttons end name= "wrong">\n          <button ion-button color="facebook" (click)="tryagain()">Try Again</button>\n        </ion-buttons>\n    </div>\n   </ion-list>\n  </div>\n    \n  </ion-content>\n  \n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\topicdetails\topicdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_all_all__["a" /* AllProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_pro_pro__["a" /* ProProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], TopicdetailsPage);
    return TopicdetailsPage;
}());

//# sourceMappingURL=topicdetails.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__completeprofile_completeprofile__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the YearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeginPage = (function () {
    function BeginPage(navCtrl, storage, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.people = [
            { name: 'Student', comment: 'Learn at all times' },
            { name: 'Teacher', comment: 'Learn & Monitor Students' },
            { name: 'Parent', comment: 'Learn & Monitor Kids' },
        ];
    }
    BeginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeginPage');
    };
    BeginPage.prototype.openPeople = function (p) {
        var _this = this;
        console.log(p);
        this.storage.clear();
        this.storage.set(p, 'true').then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__completeprofile_completeprofile__["a" /* CompleteprofilePage */], { person: p });
        });
    };
    BeginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-begin',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\begin\begin.html"*/'<!--\n  Generated template for the YearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Welcome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding>\n<p text-center class="card-title">Join YCL as a</p>\n\n  <div class="row" *ngFor="let p of people">\n    <div class="col s12 m6">\n      <div class="card">\n        <div class="card-image" (click)="openPeople(p.name)">\n          <img src="assets/imgs/bgg1.jpg">\n          <span class="card-title">{{p.name}}</span>\n        </div>\n        <div class="card-content">\n          <p>{{p.comment}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\begin\begin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], BeginPage);
    return BeginPage;
}());

//# sourceMappingURL=begin.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InvestorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvestorPage = (function () {
    function InvestorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InvestorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvestorPage');
    };
    InvestorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-investor',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\investor\investor.html"*/'<ion-header>\n  <ion-navbar color="facebook">\n    <ion-title>Investor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content fullscreen-padding>\n<ion-card class="animated bounceInRight item-remove-animate">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n       <ion-avatar>\n         <img src="assets/imgs/invest.jpg" alt="">\n        </ion-avatar>\n      </ion-col>\n      <ion-col col-6>\n        <div class="card-title">Yaw Thomson</div>\n        <ion-note>Last seen: Today</ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n\n<ion-card class="animated bounceInRight item-remove-animate">\n  <div padding class="card-title">Potential</div>\n  <h3 class="animated tada item-remove-animate" padding>Amount Invested:</h3>\n  <h3 class="animated tada item-remove-animate" padding>Interest Rate:</h3>\n  <h3 class="animated tada item-remove-animate" padding>Amount Earned:</h3>\n  <hr >\n  <h3 class="animated tada item-remove-animate" padding>Total Number of Shares:</h3>\n  <h3 class="animated tada item-remove-animate" padding>Total Installs:</h3>\n  <h3 class="animated tada item-remove-animate" padding>Total Paid Installs:</h3>\n  <hr>\n  <h3 class="animated tada item-remove-animate" padding>Additional Investment:</h3>\n  <h3 class="animated tada item-remove-animate" padding>Potential Value:</h3>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\investor\investor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], InvestorPage);
    return InvestorPage;
}());

//# sourceMappingURL=investor.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_all_all__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newquestion_newquestion__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LessonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LessonsPage = (function () {
    function LessonsPage(navCtrl, navParams, all) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.all = all;
        this.pageItems = [{ name: 'Suggest a Question', icon: 'clipboard', description: 'Get free points for 30 created and approved questions', color: "yello" },
            { name: 'My Submissions', icon: 'md-list-box', description: 'Check the status of your questions', color: "secondary" }];
    }
    LessonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LessonsPage');
    };
    LessonsPage.prototype.openDetails = function (info) {
        console.log(info);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__newquestion_newquestion__["a" /* NewquestionPage */], { info: info });
    };
    LessonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lessons',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\lessons\lessons.html"*/'<!--\n  Generated template for the LessonsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Question Factory</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding>\n   <ion-card *ngFor ="let item of pageItems">\n     <ion-item (click)="openDetails(item.name)">\n      <ion-icon item-left [name]="item.icon" [color]="item.color" style="font-size: 80px;"></ion-icon>\n      <div class="card-title">{{item.name}}</div>\n     </ion-item>\n     <p padding>{{item.description}}</p>\n   </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\lessons\lessons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_all_all__["a" /* AllProvider */]])
    ], LessonsPage);
    return LessonsPage;
}());

//# sourceMappingURL=lessons.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewquestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionpage_questionpage__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewquestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewquestionPage = (function () {
    function NewquestionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pageItems = [];
        this.title = this.navParams.get('info');
    }
    NewquestionPage.prototype.ionViewDidLoad = function () {
        if (this.title == 'Suggest a Question') {
            this.page = 'card';
            this.pageItems = [{ name: 'Multiple Choice', icon: 'clipboard', color: "yello" },
                { name: 'Suggest Answer', icon: 'md-list-box', color: "secondary" },
            ];
        }
        else {
            this.page = 'div';
        }
        console.log('ionViewDidLoad NewquestionPage');
    };
    NewquestionPage.prototype.openDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__questionpage_questionpage__["a" /* QuestionpagePage */], { item: item });
    };
    NewquestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-newquestion',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\newquestion\newquestion.html"*/'<!--\n  Generated template for the NewquestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding [ngSwitch]="page">\n  <div *ngSwitchCase="\'card\'">\n    <ion-card *ngFor ="let item of pageItems" (click)="openDetails(item.name)" padding name="card">\n      <ion-icon item-left [name]="item.icon" [color]="item.color" style="font-size: 50px;">\n      </ion-icon>\n      <div class="card-title">{{item.name}}</div>\n  </ion-card>\n  </div>\n    \n\n\n  <div *ngSwitchCase="\'div\'">\n    <ion-card>\n      <ion-item>\n          <ion-label>\n             Status\n            </ion-label>\n        <ion-select>\n      <ion-option value="All">All</ion-option>\n      <ion-option value="Pending">Pending</ion-option>\n      <ion-option value="Declined">Declined</ion-option>\n      <ion-option value="Approved">Approved</ion-option>\n    </ion-select>\n      </ion-item>\n      \n  </ion-card>\n    \n    <h2 class = "card-title" text-center>No Submissions</h2>\n    <p text-center>You have not submitted a question yet</p>\n    <p padding><button ion-button full color="yello">Create one</button></p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\newquestion\newquestion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NewquestionPage);
    return NewquestionPage;
}());

//# sourceMappingURL=newquestion.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QuestionpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionpagePage = (function () {
    function QuestionpagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pageItems = [{ name: 'Sign Language' },
            { name: 'Maths' },
            { name: 'Science' },
            { name: 'Social Studies' },
            { name: 'I C T' },
            { name: 'B D T' },
            { name: 'Languages' },
            { name: 'R M E' }];
    }
    QuestionpagePage.prototype.ionViewDidLoad = function () {
        this.item = this.navParams.get('item');
        this.checkItem(this.item);
        console.log('ionViewDidLoad QuestionpagePage');
    };
    QuestionpagePage.prototype.checkItem = function (item) {
        if (item == 'Multiple Choice') {
            this.page = 'MCQ';
        }
        else if (item == 'Suggest Answer') {
            this.page = 'SA';
        }
        else {
            this.page = 'FILIN';
        }
    };
    QuestionpagePage.prototype.previewMCQs = function () {
        this.page = 'PREVIEWMCQs';
    };
    QuestionpagePage.prototype.previewSA = function () {
        this.page = 'PREVIEWSAs';
    };
    QuestionpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-questionpage',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\questionpage\questionpage.html"*/'\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>{{item}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding [ngSwitch]="page">\n<ion-card padding>\n   <ion-item>\n            <ion-label>\n               Choose subject\n              </ion-label>\n        <ion-select >\n        <ion-option *ngFor="let c of pageItems" [value]="c.name">{{c.name}}</ion-option>\n       </ion-select>\n        </ion-item>\n</ion-card>\n\n  <div *ngSwitchCase="\'MCQ\'">\n    <ion-card padding>\n       <div class="card-title">Question</div>\n      <ion-item>\n        <ion-input type = "text" [(ngModel)]="question"></ion-input>\n      </ion-item>\n        <hr />\n      <div class="card-title">Answers</div>\n      <small padding>Enter at least two options and check the box(es) for the correct one(c).\n        Each question can have one or multiple correct answers\n      </small>\n\n      <ion-item>\n        <ion-label floating>Option 1</ion-label>\n        <ion-input type = "text" [(ngModel)]="opt1"></ion-input>\n        <!-- <ion-checkbox checked = "false"></ion-checkbox> -->\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Option 2</ion-label>\n        <ion-input type = "text" [(ngModel)]="opt2"></ion-input>\n        <!-- <ion-checkbox ></ion-checkbox> -->\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Option 3</ion-label>\n        <ion-input type = "text" [(ngModel)]="opt3"></ion-input>\n        <!-- <ion-checkbox ></ion-checkbox> -->\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Option 4</ion-label>\n        <ion-input type = "text" [(ngModel)]="opt4"></ion-input>\n        <!-- <ion-checkbox ></ion-checkbox> -->\n      </ion-item>\n\n      <button ion-button (click)="previewMCQs()" color="yello">Preview</button> \n    </ion-card>\n  </div>\n    \n  <div *ngSwitchCase="\'SA\'">\n    <ion-card padding>\n      <div class="card-title">Question</div>\n      <ion-item>\n        <ion-input type = "text" [(ngModel)]="question"></ion-input>\n      </ion-item>\n        <hr />\n\n        <div class="card-title">Answer</div>\n        <ion-item>\n          <ion-input type = "text" [(ngModel)]="opt1" placeholder="Type in correct answer here"></ion-input>\n        </ion-item>\n      <button ion-button (click)="previewSA()" color="yello">Preview</button> \n    </ion-card>\n  </div>\n\n  <div *ngSwitchCase="\'FILIN\'">\n    <ion-card padding>\n      <div class="card-title">Question</div>\n      <ion-item>\n        <ion-input type = "text" [(ngModel)]="question"></ion-input>\n      </ion-item>\n        <hr />\n\n      <button ion-button  color="yello">Preview</button> \n      </ion-card>\n    \n  </div>\n\n\n  <div *ngSwitchCase="\'PREVIEWMCQs\'">\n    <ion-card padding>\n      <div class="card-title">{{question}}</div>\n        <hr />\n        <ion-item>\n          <ion-label>{{opt1}}</ion-label>\n          <ion-checkbox></ion-checkbox>\n         </ion-item>\n         <ion-item>\n          <ion-label>{{opt2}</ion-label>\n          <ion-checkbox></ion-checkbox>\n         </ion-item>\n         <ion-item>\n          <ion-label>{{opt3}}</ion-label>\n          <ion-checkbox></ion-checkbox>\n         </ion-item>\n         <ion-item>\n          <ion-label>{{opt4}}</ion-label>\n          <ion-checkbox></ion-checkbox>\n         </ion-item>\n      </ion-card>\n    \n  </div>\n\n  <div *ngSwitchCase="\'PREVIEWSAs\'">\n    <ion-card padding>\n      <div class="card-title">{{question}}</div>\n        <hr />\n      <p>{{opt1}}</p>\n        \n      </ion-card>\n    \n  </div>\n\n <p padding><button ion-button full  color="facebook">Submit</button> </p> \n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\questionpage\questionpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], QuestionpagePage);
    return QuestionpagePage;
}());

//# sourceMappingURL=questionpage.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupportPage = (function () {
    function SupportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupportPage');
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-support',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\support\support.html"*/'<!--\n  Generated template for the SupportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>FAQs and Support</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding>\n  <ion-card color="facebook" text-center>\n   <ion-icon name="ios-help-buoy" style="font-size: 150px"></ion-icon>\n   <p>YCL Support</p>\n  </ion-card>\n  <p padding-left>Question? You will probable find an answer on our FAQ page.</p>\n  <p padding-left><button ion-button>FAQ</button></p>\n   <hr>\n  <p padding-left>or send us an email and we will get back to you shortly</p>\n  <p padding-left><button ion-button>Contact Us</button></p> \n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\support\support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coursepage_coursepage__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePage = (function () {
    function MorePage(storage, navCtrl, ap, navParams, viewCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.ap = ap;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.members = [];
        this.more = [];
    }
    MorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('More').then(function (more) {
            _this.it = _this.navParams.get('i');
            if (!more) {
                _this.title = 'Class Mates';
                _this.ap.getUserProfiles().on('value', function (userSnap) {
                    _this.members = [];
                    userSnap.forEach(function (snap) {
                        _this.members.push({
                            id: snap.key,
                            fullname: snap.val().fullname,
                            school: snap.val().school
                        });
                        console.log(_this.members);
                        return false;
                    });
                });
            }
            else {
                _this.title = 'More Courses';
                _this.more = ['Nursing', 'Teacher Training', 'Vocational Skills', 'Entrepreneurship', 'Basic Life Support'];
            }
            console.log('ionViewDidLoad MorePage');
        });
    };
    MorePage.prototype.OpenCourse = function (c) {
        console.log(c);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__coursepage_coursepage__["a" /* CoursepagePage */], { c: c });
    };
    MorePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MorePage.prototype.follow = function (f) {
        console.log(f);
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-more',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\more\more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n      <!-- <ion-buttons start left>\n          <button ion-button icon-only (click)="dismiss()">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons> -->\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list *ngFor = "let user of members">\n  <ion-item>\n    <ion-avatar item-left>\n      <img src="assets/imgs/index.jpg" alt="">\n    </ion-avatar>\n    <h3>{{user.fullname}}</h3>\n    <p>{{user.school}}</p>\n    <button ion-button item-right color="facebook" (click)="follow(user.id)"><ion-icon name="person-add"></ion-icon>&nbsp; &nbsp; Follow</button>\n  </ion-item>\n</ion-list>\n\n    <ion-grid >\n        <ion-row>\n            <ion-col col-6 text-center *ngFor="let c of more">\n              <div><div class="circle" (click)="OpenCourse(c)">\n                    </div>\n                    <h4>{{c}}</h4>\n                </div>   \n            </ion-col>\n          </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\more\more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, loadingCtrl, navParams, toastCtrl, contacts, sms) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.contacts = contacts;
        this.sms = sms;
        this.allContact = [];
        this.groupedContacts = [];
        this.presentLoading();
        contacts.find(["displayName", "phoneNumbers"], { multiple: true, hasPhoneNumber: true }).then(function (contacts) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].displayName !== null) {
                    var obj = {};
                    obj["name"] = contacts[i].displayName;
                    obj["number"] = contacts[i].phoneNumbers[0].value;
                    _this.allContact.push(obj); // adding in separate array with keys: name, number
                }
            }
            _this.groupContacts(_this.allContact);
        });
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.groupContacts = function (allContact) {
        var _this = this;
        var sortedContacts = allContact.sort(function (a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
        var currentLetter = false;
        var currentContacts = [];
        sortedContacts.forEach(function (value, index) {
            if (value.name.charAt(0) != currentLetter) {
                currentLetter = value.name.charAt(0);
                var newGroup = {
                    letter: currentLetter,
                    contacts: []
                };
                currentContacts = newGroup.contacts;
                _this.groupedContacts.push(newGroup);
            }
            currentContacts.push(value);
        });
    };
    ContactPage.prototype.SendInvitation = function (number) {
        var _this = this;
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // Opens Default sms app
                // intent: '' // Sends sms without opening default sms app
            }
        };
        var num = number;
        var message = "You Can Learn with me on YCL, join now... http://com.ycl.web.?#gjhgfhsdjf?%74=app";
        this.sms.send(num, message, options).then(function (result) {
            var successToast = _this.toastCtrl.create({
                message: "Text message sent successfully! :)",
                duration: 3000
            });
            successToast.present();
        }, function (error) {
            var errorToast = _this.toastCtrl.create({
                message: "Text message not sent. :(",
                duration: 3000
            });
            errorToast.present();
        });
    };
    ContactPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Loading Contacts...',
            duration: 6000,
            dismissOnPageChange: true
        }).present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Invite Friends</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <ion-item-group *ngFor="let group of groupedContacts">\n    <ion-item-divider color="light">{{group.letter}}</ion-item-divider>\n     <ion-item *ngFor="let contact of group.contacts" class="contactlist">\n       <ion-avatar item-left>\n       <img src="assets/imgs/index.jpg" alt="Image">\n       </ion-avatar>\n       <p>{{contact.name || contact.number}}</p>\n       <button ion-button color="facebook" (click)="SendInvitation(contact.number)" item-right><ion-icon name ="person-add"></ion-icon> &nbsp;&nbsp; Invite</button>\n     </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__["a" /* SMS */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeaponPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__challange_challange__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pro_pro__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WeaponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WeaponPage = (function () {
    function WeaponPage(navCtrl, auth, pp, ap, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.pp = pp;
        this.ap = ap;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    WeaponPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.getUserProfile().on('value', function (user) {
            _this.curnt = user.val().fullname;
        });
        this.title = this.navParams.get('n');
        this.ap.getUserProfiles().on('value', function (userSnap) {
            _this.members = [];
            userSnap.forEach(function (snap) {
                _this.members.push({
                    id: snap.key,
                    fullname: snap.val().fullname,
                    school: snap.val().school
                });
                console.log(_this.members);
                return false;
            });
        });
        console.log('ionViewDidLoad WeaponPage');
        //console.log(this.title);
    };
    WeaponPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    WeaponPage.prototype.openChallange = function (name, id) {
        var _this = this;
        var me = this.pp.userID;
        this.pp.sendchallengeRequest(me, id, name, this.curnt).on('value', function (snap) {
            _this.key = snap.key;
        });
        console.log(this.key);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__challange_challange__["a" /* ChallangePage */], { name: name, title: this.title, id: id, key: this.key });
    };
    WeaponPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-weapon',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\weapon\weapon.html"*/'<!--\n  Generated template for the WeaponPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "facebook">\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <h4>Choose a Player</h4>\n  <ion-list *ngFor = "let user of members">\n      <ion-item (click)="openChallange(user.fullname,user.id)">\n        <ion-avatar item-left>\n          <img src="assets/imgs/index.jpg" alt="">\n        </ion-avatar>\n        <h4>{{user.fullname}}</h4>\n        <p>{{user.school}}</p>\n      </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer padding>\n  <button ion-button block color="facebook" (click)="getRandom()">Random Opponent</button>\n</ion-footer>'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\weapon\weapon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_pro_pro__["a" /* ProProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], WeaponPage);
    return WeaponPage;
}());

//# sourceMappingURL=weapon.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\notification\notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoyouknowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DoyouknowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoyouknowPage = (function () {
    function DoyouknowPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DoyouknowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoyouknowPage');
    };
    DoyouknowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-doyouknow',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\doyouknow\doyouknow.html"*/'<!--\n  Generated template for the DoyouknowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="yello">\n    <ion-title><ion-icon name="sunny"></ion-icon> Did You Know?</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding>\n    <ion-card padding class="animated bounceInRight item-remove-animate">\n      <p padding>What is air polution?</p>\n\n      <div padding class="card-title">Answer</div>\n      <ion-item>\n        <ion-input type = "text" [(ngModel)]="opt1" placeholder="Type in correct answer here"></ion-input>\n      </ion-item>\n    </ion-card>\n    <button ion-button color="yello">Submit</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\doyouknow\doyouknow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DoyouknowPage);
    return DoyouknowPage;
}());

//# sourceMappingURL=doyouknow.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth/auth.module": [
		677,
		25
	],
	"../pages/challange/challange.module": [
		683,
		24
	],
	"../pages/completeprofile/completeprofile.module": [
		678,
		23
	],
	"../pages/contact/contact.module": [
		681,
		22
	],
	"../pages/coursepage/coursepage.module": [
		680,
		21
	],
	"../pages/doyouknow/doyouknow.module": [
		679,
		20
	],
	"../pages/editprofile/editprofile.module": [
		694,
		19
	],
	"../pages/investor/investor.module": [
		682,
		18
	],
	"../pages/learn/learn.module": [
		685,
		17
	],
	"../pages/lessons/lessons.module": [
		684,
		16
	],
	"../pages/login/login.module": [
		696,
		15
	],
	"../pages/look/look.module": [
		687,
		14
	],
	"../pages/menu/menu.module": [
		702,
		13
	],
	"../pages/monitor/monitor.module": [
		686,
		12
	],
	"../pages/more/more.module": [
		689,
		11
	],
	"../pages/newquestion/newquestion.module": [
		688,
		10
	],
	"../pages/notification/notification.module": [
		690,
		9
	],
	"../pages/profile/profile.module": [
		691,
		8
	],
	"../pages/questionpage/questionpage.module": [
		692,
		7
	],
	"../pages/section/section.module": [
		693,
		6
	],
	"../pages/settings/settings.module": [
		701,
		5
	],
	"../pages/slider/slider.module": [
		695,
		4
	],
	"../pages/store/store.module": [
		698,
		3
	],
	"../pages/support/support.module": [
		697,
		2
	],
	"../pages/topicdetails/topicdetails.module": [
		699,
		1
	],
	"../pages/weapon/weapon.module": [
		700,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidEmail: true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_google_cloud_vision_service_google_cloud_vision_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CategoriespagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LookPage = (function () {
    function LookPage(navCtrl, vision, auth, camera, alert, navParams) {
        this.navCtrl = navCtrl;
        this.vision = vision;
        this.auth = auth;
        this.camera = camera;
        this.alert = alert;
        this.navParams = navParams;
    }
    LookPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.getStudentImageAndSay().on('value', function (imageSnap) {
            _this.item = imageSnap.val();
        });
        console.log('ionViewDidLoad CategoriespagePage');
    };
    LookPage.prototype.showAlert = function (message) {
        var alert = this.alert.create({
            title: 'Error',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    LookPage.prototype.selectImage = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: _this.camera.PictureSourceType.CAMERA,
                destinationType: _this.camera.DestinationType.DATA_URL,
                quality: 100,
                targetWidth: 700,
                targetHeight: 700,
                allowEdit: true,
                encodingType: _this.camera.EncodingType.JPEG,
                correctOrientation: true
            };
            _this.camera.getPicture(cameraOptions)
                .then(function (data) {
                _this.image = "data:image/jpeg;base64," + data;
                resolve(_this.image);
                _this.vision.getLabels(_this.image).subscribe(function (result) {
                    _this.auth.saveStudentImageAndSay(_this.image, result);
                }, function (err) {
                    _this.showAlert(err);
                });
            }, function (err) {
                _this.showAlert(err);
            });
        });
    };
    LookPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 500,
            targetWidth: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.vision.getLabels(imageData).subscribe(function (result) {
                _this.auth.saveStudentImageAndSay(imageData, result);
            }, function (err) {
                _this.showAlert(err);
            });
        }, function (err) {
            _this.showAlert(err);
        });
    };
    LookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-look',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\look\look.html"*/'<!--\n  Generated template for the CategoriespagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Capture and Say</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding>\n  <ion-card *ngFor="let it of item">\n    <img [src]="\'data:image/png;base64,\' + it.imageData"/>\n    <ion-card-content>\n      <ion-list no-lines>\n        <ion-list-header>Labels</ion-list-header>\n        <ion-item *ngFor="let label of it.results[0].labelAnnotations">{{label.description}}</ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-fab bottom right>\n    <button ion-fab (click)="takePhoto()">\n      <ion-icon name="camera"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\look\look.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_google_cloud_vision_service_google_cloud_vision_service__["a" /* GoogleCloudVisionServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LookPage);
    return LookPage;
}());

//# sourceMappingURL=look.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCloudVisionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GoogleCloudVisionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GoogleCloudVisionServiceProvider = (function () {
    function GoogleCloudVisionServiceProvider(http) {
        this.http = http;
        this.googleCloudVisionAPIKey = "AIzaSyDDe3ryTS45R-LZnk53C0zVcCtTZ_bA9gE";
        console.log('Hello GoogleCloudVisionServiceProvider Provider');
    }
    GoogleCloudVisionServiceProvider.prototype.getLabels = function (base64Image) {
        var body = {
            "requests": [
                {
                    "image": {
                        "content": base64Image
                    },
                    "features": [
                        {
                            "type": "LABEL_DETECTION"
                        }
                    ]
                }
            ]
        };
        return this.http.post('https://vision.googleapis.com/v1/images:annotate?fields=responses&key=' + this.googleCloudVisionAPIKey, body);
    };
    GoogleCloudVisionServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], GoogleCloudVisionServiceProvider);
    return GoogleCloudVisionServiceProvider;
}());

//# sourceMappingURL=google-cloud-vision-service.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationProvider = (function () {
    function AuthenticationProvider() {
        var _this = this;
        console.log('Hello AuthenticationProvider Provider');
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                //this.userId = firebase.auth().currentUser.uid;
                //console.log(this.userId);
                _this.currentUser = user.uid;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                    .database()
                    .ref("/user/" + _this.currentUser);
            }
        });
    }
    AuthenticationProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthenticationProvider.prototype.logoutUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut().then(function () {
            console.log("done");
        }).catch(function (error) {
            // An error happened.
        });
    };
    AuthenticationProvider.prototype.getUserProfile = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/user/" + this.currentUser);
    };
    AuthenticationProvider.prototype.getUserProfileAddToken = function (token) {
        return this.userProfile.update({ token: token });
    };
    AuthenticationProvider.prototype.getUserProfiles = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/user");
    };
    AuthenticationProvider.prototype.signUpEmail = function (email, password, fullname, country, gender, age, type, exams, school) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                .database()
                .ref("/user/" + newUser.uid)
                .set({ country: country, fullname: fullname, age: age, gender: gender, type: type, exams: exams, email: email, school: school });
        })
            .catch(function (error) { return console.error(error); });
        //this.accountType="";
    };
    AuthenticationProvider.prototype.updateUser = function (country, fullname, age, gender, type, exams, email, school) {
        return this.userProfile.update({ country: country, fullname: fullname, age: age, gender: gender, type: type, exams: exams, email: email, school: school });
    };
    AuthenticationProvider.prototype.sendFollowRequest = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/follow/" + this.currentUser).push({});
    };
    AuthenticationProvider.prototype.saveStudentImageAndSay = function (imageData, responds) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/images/" + this.currentUser).push({ imageData: imageData, responds: responds });
    };
    AuthenticationProvider.prototype.getStudentImageAndSay = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/images/" + this.currentUser);
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AllProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AllProvider = (function () {
    function AllProvider() {
        var _this = this;
        console.log('Hello AllProvider Provider');
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                //this.userId = firebase.auth().currentUser.uid;
                //console.log(this.userId);
                _this.coursesId = user.uid;
                _this.courses = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                    .database()
                    .ref("/data/Social Studies/JHS/JHS 1/SEC 1/The Environment & Environmental Problems/Air Pollution/What is Air Pollution");
            }
        });
    }
    AllProvider.prototype.getTopicQuestionAnswer = function (cat, topic) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("courses/topics/" + cat + "/" + topic + "/answers");
    };
    AllProvider.prototype.getTopicQuestionWithImages = function (cat, topic) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("courses/topics/" + cat + "/" + topic + "/images");
    };
    AllProvider.prototype.getTopicQuestion = function (cat, topic) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("courses/topics/" + cat + "/" + topic);
    };
    AllProvider.prototype.getCourseTitle = function (cat) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("courses/topics/" + cat);
    };
    AllProvider.prototype.gettopics = function (subject) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("courses/" + subject);
    };
    AllProvider.prototype.getTopicsDetailsWIthLesson = function (subject, cat, clas, sec, gen, topic) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("topics/" + subject + "/" + cat + "/" + clas + "/" + sec + "/" + gen + "/" + topic);
    };
    AllProvider.prototype.getReportDetails = function (detail) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("report/" + detail);
    };
    AllProvider.prototype.getStudentReportDetails = function (uid, detail) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("studentreport/mlmf1TKkHLMZfBV3BFXB20U44893/" + detail);
    };
    AllProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AllProvider);
    return AllProvider;
}());

//# sourceMappingURL=all.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__completeprofile_completeprofile__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AuthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AuthPage = (function () {
    function AuthPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AuthPage.prototype.ionViewDidLoad = function () {
        this.type = this.navParams.get('person');
        console.log('ionViewDidLoad AuthPage');
    };
    AuthPage.prototype.Signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__completeprofile_completeprofile__["a" /* CompleteprofilePage */], { person: this.type });
    };
    AuthPage.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AuthPage.prototype.Login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auth',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\auth\auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div padding>\n		<!-- <h5>Sign Up with...</h5> -->\n  		<!--	<button ion-button type="submit" block color="danger">\n  				<ion-icon ios="logo-google" md="logo-google"></ion-icon>\n  				  &nbsp; &nbsp;  Sign Up with Gmail</button>\n  		</div>\n  		<div padding>\n  			<button ion-button type="submit" block color="primary">\n  				<ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n  				  &nbsp; &nbsp;  Sign Up with Facebook</button>\n  		</div>-->\n      <div padding>\n		<button ion-button type="submit" outline block color="facebook" (click)="Signup()">\n			<span><ion-icon ios="ios-create" md="md-create"></ion-icon></span>		\n				  &nbsp; &nbsp;  Create Account</button>\n		</div>\n\n		<!--<div padding>\n				<button ion-button type="submit" outline block color="dark">\n						<ion-icon ios="ios-phone-portrait" md="md-phone-portrait"></ion-icon>\n						&nbsp; &nbsp;  Phone Number</button>\n			</div>-->\n\n\n		<div padding>\n			<p>Already having an account?</p>\n			<button ion-button type="submit" clear block color="primary" (click)="Login()">\n				Login &nbsp; &nbsp;<ion-icon ios="ios-log-in" md="md-log-in"></ion-icon>\n				    </button>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\auth\auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MonitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MonitorPage = (function () {
    function MonitorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MonitorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MonitorPage');
    };
    MonitorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-monitor',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\monitor\monitor.html"*/'<!--\n  Generated template for the MonitorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>monitor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\monitor\monitor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MonitorPage);
    return MonitorPage;
}());

//# sourceMappingURL=monitor.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(483);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_progress_bar__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_photo_viewer__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sms__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_slider_slider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_auth_auth__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_coursepage_coursepage__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_section_section__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_authentication_authentication__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_topicdetails_topicdetails__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_lessons_lessons__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_learn_learn__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_all_all__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_settings_settings__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_pro_pro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_completeprofile_completeprofile__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_more_more__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_editprofile_editprofile__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_contact_contact__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_weapon_weapon__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_store_store__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_notification_notification__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_challange_challange__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_monitor_monitor__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_google_cloud_vision_service_google_cloud_vision_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_http__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_begin_begin__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_look_look__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_investor_investor__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_menu_menu__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_newquestion_newquestion__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_questionpage_questionpage__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_doyouknow_doyouknow__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_support_support__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_coursepage_coursepage__["a" /* CoursepagePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_look_look__["a" /* LookPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_begin_begin__["a" /* BeginPage */], __WEBPACK_IMPORTED_MODULE_48__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_section_section__["a" /* SectionPage */], __WEBPACK_IMPORTED_MODULE_47__pages_doyouknow_doyouknow__["a" /* DoyouknowPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_topicdetails_topicdetails__["a" /* TopicdetailsPage */], __WEBPACK_IMPORTED_MODULE_45__pages_newquestion_newquestion__["a" /* NewquestionPage */], __WEBPACK_IMPORTED_MODULE_46__pages_questionpage_questionpage__["a" /* QuestionpagePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_lessons_lessons__["a" /* LessonsPage */], __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["c" /* SelectWeaponPage */], __WEBPACK_IMPORTED_MODULE_34__pages_store_store__["a" /* BuyPage */], __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__["a" /* ExamsPage */], __WEBPACK_IMPORTED_MODULE_43__pages_investor_investor__["a" /* InvestorPage */], __WEBPACK_IMPORTED_MODULE_44__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_learn_learn__["a" /* LearnPage */], __WEBPACK_IMPORTED_MODULE_32__pages_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_33__pages_weapon_weapon__["a" /* WeaponPage */], __WEBPACK_IMPORTED_MODULE_34__pages_store_store__["b" /* StorePage */], __WEBPACK_IMPORTED_MODULE_36__pages_notification_notification__["a" /* NotificationPage */], __WEBPACK_IMPORTED_MODULE_37__pages_challange_challange__["a" /* ChallangePage */], __WEBPACK_IMPORTED_MODULE_38__pages_monitor_monitor__["a" /* MonitorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["b" /* PopoverPage */], __WEBPACK_IMPORTED_MODULE_26__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__["b" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_29__pages_completeprofile_completeprofile__["a" /* CompleteprofilePage */], __WEBPACK_IMPORTED_MODULE_30__pages_more_more__["a" /* MorePage */], __WEBPACK_IMPORTED_MODULE_31__pages_editprofile_editprofile__["a" /* EditprofilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular_progress_bar__["a" /* ProgressBarModule */], __WEBPACK_IMPORTED_MODULE_40__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_13_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/completeprofile/completeprofile.module#CompleteprofilePageModule', name: 'CompleteprofilePage', segment: 'completeprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doyouknow/doyouknow.module#DoyouknowPageModule', name: 'DoyouknowPage', segment: 'doyouknow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coursepage/coursepage.module#CoursepagePageModule', name: 'CoursepagePage', segment: 'coursepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/investor/investor.module#InvestorPageModule', name: 'InvestorPage', segment: 'investor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/challange/challange.module#ChallangePageModule', name: 'ChallangePage', segment: 'challange', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lessons/lessons.module#LessonsPageModule', name: 'LessonsPage', segment: 'lessons', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/learn/learn.module#LearnPageModule', name: 'LearnPage', segment: 'learn', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/monitor/monitor.module#MonitorPageModule', name: 'MonitorPage', segment: 'monitor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/look/look.module#CategoriespagePageModule', name: 'LookPage', segment: 'look', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newquestion/newquestion.module#NewquestionPageModule', name: 'NewquestionPage', segment: 'newquestion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questionpage/questionpage.module#QuestionpagePageModule', name: 'QuestionpagePage', segment: 'questionpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/section/section.module#SectionPageModule', name: 'SectionPage', segment: 'section', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slider/slider.module#SliderPageModule', name: 'SliderPage', segment: 'slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage', segment: 'support', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/store/store.module#StorePageModule', name: 'StorePage', segment: 'store', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topicdetails/topicdetails.module#TopicdetailsPageModule', name: 'TopicdetailsPage', segment: 'topicdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/weapon/weapon.module#WeaponPageModule', name: 'WeaponPage', segment: 'weapon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_auth_auth__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_48__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_coursepage_coursepage__["a" /* CoursepagePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_look_look__["a" /* LookPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_begin_begin__["a" /* BeginPage */], __WEBPACK_IMPORTED_MODULE_47__pages_doyouknow_doyouknow__["a" /* DoyouknowPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_section_section__["a" /* SectionPage */], __WEBPACK_IMPORTED_MODULE_45__pages_newquestion_newquestion__["a" /* NewquestionPage */], __WEBPACK_IMPORTED_MODULE_46__pages_questionpage_questionpage__["a" /* QuestionpagePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_topicdetails_topicdetails__["a" /* TopicdetailsPage */], __WEBPACK_IMPORTED_MODULE_44__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_lessons_lessons__["a" /* LessonsPage */], __WEBPACK_IMPORTED_MODULE_32__pages_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["c" /* SelectWeaponPage */], __WEBPACK_IMPORTED_MODULE_34__pages_store_store__["a" /* BuyPage */], __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__["a" /* ExamsPage */], __WEBPACK_IMPORTED_MODULE_43__pages_investor_investor__["a" /* InvestorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_learn_learn__["a" /* LearnPage */], __WEBPACK_IMPORTED_MODULE_33__pages_weapon_weapon__["a" /* WeaponPage */], __WEBPACK_IMPORTED_MODULE_34__pages_store_store__["b" /* StorePage */], __WEBPACK_IMPORTED_MODULE_36__pages_notification_notification__["a" /* NotificationPage */], __WEBPACK_IMPORTED_MODULE_37__pages_challange_challange__["a" /* ChallangePage */], __WEBPACK_IMPORTED_MODULE_38__pages_monitor_monitor__["a" /* MonitorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["b" /* PopoverPage */], __WEBPACK_IMPORTED_MODULE_26__pages_settings_settings__["a" /* SettingsPage */], __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__["b" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_29__pages_completeprofile_completeprofile__["a" /* CompleteprofilePage */], __WEBPACK_IMPORTED_MODULE_30__pages_more_more__["a" /* MorePage */], __WEBPACK_IMPORTED_MODULE_31__pages_editprofile_editprofile__["a" /* EditprofilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_authentication_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_all_all__["a" /* AllProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_pro_pro__["a" /* ProProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_google_cloud_vision_service_google_cloud_vision_service__["a" /* GoogleCloudVisionServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProProvider = (function () {
    function ProProvider() {
        var _this = this;
        console.log('Hello AllProvider Provider');
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.userID = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
                //console.log(this.userId);
                _this.leader = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                    .database()
                    .ref("/leaderboard/" + _this.userID);
            }
        });
    }
    ProProvider.prototype.saveScore = function (score) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/leaderboard/" + this.userID).update({ score: score });
    };
    ProProvider.prototype.getMyScore = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/leaderboard/" + this.userID);
    };
    ProProvider.prototype.getProgress = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/leaderboard");
    };
    /**************challenges***************** */
    ProProvider.prototype.getChallengeQuestions = function (number) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/challenge/questions/" + number);
    };
    ProProvider.prototype.getChallengeAnswers = function (number) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/challenge/questions/" + number + "/answers");
    };
    ProProvider.prototype.sendchallengeRequest = function (myID, hisID, hisName, myName) {
        var myDone = false;
        var hisDone = false;
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/challenge").push({ myID: myID, hisID: hisID, myDone: myDone, hisDone: hisDone, hisName: hisName, myName: myName });
    };
    ProProvider.prototype.getChallenges = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/challenge");
    };
    ProProvider.prototype.getChallengeskey = function (key) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/challenge/" + key);
    };
    ProProvider.prototype.updateChallenges1 = function (key) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/challenge/" + key).update({ myDone: true });
    };
    ProProvider.prototype.updateChallenges2 = function (key) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
            .database()
            .ref("/challenge/" + key).update({ hisDone: true });
    };
    ProProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProProvider);
    return ProProvider;
}());

//# sourceMappingURL=pro.js.map

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 334,
	"./af.js": 334,
	"./ar": 335,
	"./ar-dz": 336,
	"./ar-dz.js": 336,
	"./ar-kw": 337,
	"./ar-kw.js": 337,
	"./ar-ly": 338,
	"./ar-ly.js": 338,
	"./ar-ma": 339,
	"./ar-ma.js": 339,
	"./ar-sa": 340,
	"./ar-sa.js": 340,
	"./ar-tn": 341,
	"./ar-tn.js": 341,
	"./ar.js": 335,
	"./az": 342,
	"./az.js": 342,
	"./be": 343,
	"./be.js": 343,
	"./bg": 344,
	"./bg.js": 344,
	"./bm": 345,
	"./bm.js": 345,
	"./bn": 346,
	"./bn.js": 346,
	"./bo": 347,
	"./bo.js": 347,
	"./br": 348,
	"./br.js": 348,
	"./bs": 349,
	"./bs.js": 349,
	"./ca": 350,
	"./ca.js": 350,
	"./cs": 351,
	"./cs.js": 351,
	"./cv": 352,
	"./cv.js": 352,
	"./cy": 353,
	"./cy.js": 353,
	"./da": 354,
	"./da.js": 354,
	"./de": 355,
	"./de-at": 356,
	"./de-at.js": 356,
	"./de-ch": 357,
	"./de-ch.js": 357,
	"./de.js": 355,
	"./dv": 358,
	"./dv.js": 358,
	"./el": 359,
	"./el.js": 359,
	"./en-au": 360,
	"./en-au.js": 360,
	"./en-ca": 361,
	"./en-ca.js": 361,
	"./en-gb": 362,
	"./en-gb.js": 362,
	"./en-ie": 363,
	"./en-ie.js": 363,
	"./en-il": 364,
	"./en-il.js": 364,
	"./en-nz": 365,
	"./en-nz.js": 365,
	"./eo": 366,
	"./eo.js": 366,
	"./es": 367,
	"./es-do": 368,
	"./es-do.js": 368,
	"./es-us": 369,
	"./es-us.js": 369,
	"./es.js": 367,
	"./et": 370,
	"./et.js": 370,
	"./eu": 371,
	"./eu.js": 371,
	"./fa": 372,
	"./fa.js": 372,
	"./fi": 373,
	"./fi.js": 373,
	"./fo": 374,
	"./fo.js": 374,
	"./fr": 375,
	"./fr-ca": 376,
	"./fr-ca.js": 376,
	"./fr-ch": 377,
	"./fr-ch.js": 377,
	"./fr.js": 375,
	"./fy": 378,
	"./fy.js": 378,
	"./gd": 379,
	"./gd.js": 379,
	"./gl": 380,
	"./gl.js": 380,
	"./gom-latn": 381,
	"./gom-latn.js": 381,
	"./gu": 382,
	"./gu.js": 382,
	"./he": 383,
	"./he.js": 383,
	"./hi": 384,
	"./hi.js": 384,
	"./hr": 385,
	"./hr.js": 385,
	"./hu": 386,
	"./hu.js": 386,
	"./hy-am": 387,
	"./hy-am.js": 387,
	"./id": 388,
	"./id.js": 388,
	"./is": 389,
	"./is.js": 389,
	"./it": 390,
	"./it.js": 390,
	"./ja": 391,
	"./ja.js": 391,
	"./jv": 392,
	"./jv.js": 392,
	"./ka": 393,
	"./ka.js": 393,
	"./kk": 394,
	"./kk.js": 394,
	"./km": 395,
	"./km.js": 395,
	"./kn": 396,
	"./kn.js": 396,
	"./ko": 397,
	"./ko.js": 397,
	"./ky": 398,
	"./ky.js": 398,
	"./lb": 399,
	"./lb.js": 399,
	"./lo": 400,
	"./lo.js": 400,
	"./lt": 401,
	"./lt.js": 401,
	"./lv": 402,
	"./lv.js": 402,
	"./me": 403,
	"./me.js": 403,
	"./mi": 404,
	"./mi.js": 404,
	"./mk": 405,
	"./mk.js": 405,
	"./ml": 406,
	"./ml.js": 406,
	"./mn": 407,
	"./mn.js": 407,
	"./mr": 408,
	"./mr.js": 408,
	"./ms": 409,
	"./ms-my": 410,
	"./ms-my.js": 410,
	"./ms.js": 409,
	"./mt": 411,
	"./mt.js": 411,
	"./my": 412,
	"./my.js": 412,
	"./nb": 413,
	"./nb.js": 413,
	"./ne": 414,
	"./ne.js": 414,
	"./nl": 415,
	"./nl-be": 416,
	"./nl-be.js": 416,
	"./nl.js": 415,
	"./nn": 417,
	"./nn.js": 417,
	"./pa-in": 418,
	"./pa-in.js": 418,
	"./pl": 419,
	"./pl.js": 419,
	"./pt": 420,
	"./pt-br": 421,
	"./pt-br.js": 421,
	"./pt.js": 420,
	"./ro": 422,
	"./ro.js": 422,
	"./ru": 423,
	"./ru.js": 423,
	"./sd": 424,
	"./sd.js": 424,
	"./se": 425,
	"./se.js": 425,
	"./si": 426,
	"./si.js": 426,
	"./sk": 427,
	"./sk.js": 427,
	"./sl": 428,
	"./sl.js": 428,
	"./sq": 429,
	"./sq.js": 429,
	"./sr": 430,
	"./sr-cyrl": 431,
	"./sr-cyrl.js": 431,
	"./sr.js": 430,
	"./ss": 432,
	"./ss.js": 432,
	"./sv": 433,
	"./sv.js": 433,
	"./sw": 434,
	"./sw.js": 434,
	"./ta": 435,
	"./ta.js": 435,
	"./te": 436,
	"./te.js": 436,
	"./tet": 437,
	"./tet.js": 437,
	"./tg": 438,
	"./tg.js": 438,
	"./th": 439,
	"./th.js": 439,
	"./tl-ph": 440,
	"./tl-ph.js": 440,
	"./tlh": 441,
	"./tlh.js": 441,
	"./tr": 442,
	"./tr.js": 442,
	"./tzl": 443,
	"./tzl.js": 443,
	"./tzm": 444,
	"./tzm-latn": 445,
	"./tzm-latn.js": 445,
	"./tzm.js": 444,
	"./ug-cn": 446,
	"./ug-cn.js": 446,
	"./uk": 447,
	"./uk.js": 447,
	"./ur": 448,
	"./ur.js": 448,
	"./uz": 449,
	"./uz-latn": 450,
	"./uz-latn.js": 450,
	"./uz.js": 449,
	"./vi": 451,
	"./vi.js": 451,
	"./x-pseudo": 452,
	"./x-pseudo.js": 452,
	"./yo": 453,
	"./yo.js": 453,
	"./zh-cn": 454,
	"./zh-cn.js": 454,
	"./zh-hk": 455,
	"./zh-hk.js": 455,
	"./zh-tw": 456,
	"./zh-tw.js": 456
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 656;

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_slider_slider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.platformReady().then(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* FIREBASE_CREDENTIALS */]);
            var unsubscribe = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
                if (!user) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_slider_slider__["a" /* SliderPage */];
                    unsubscribe();
                }
                else {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */]);
                    unsubscribe();
                }
            });
        });
    }
    MyApp.prototype.platformReady = function () {
        var _this = this;
        return this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\app\app.html"*/'<ion-nav #myNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyA9Eq-YASS0PQih_F4wOn9LC7l2-X3WVZM",
    authDomain: "yclproject-4806d.firebaseapp.com",
    databaseURL: "https://yclproject-4806d.firebaseio.com",
    projectId: "yclproject-4806d",
    storageBucket: "yclproject-4806d.appspot.com",
    messagingSenderId: "751071242676"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__begin_begin__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SliderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SliderPage = (function () {
    function SliderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showSkip = true;
    }
    SliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SliderPage');
    };
    SliderPage.prototype.startNEWApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__begin_begin__["a" /* BeginPage */]).then(function () {
            //this.storage.set('hasSeenSlide', 'true');
        });
    };
    SliderPage.prototype.loginApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]).then(function () {
        });
    };
    SliderPage.prototype.onSlideChangeStart = function (slider) {
        // this.showSkip = !slider.isEnd();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], SliderPage.prototype, "slides", void 0);
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slider',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\slider\slider.html"*/'<!--\n  Generated template for the SliderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n</ion-header>\n\n<ion-content no-bounce style="background-image: url(\'assets/imgs/GIFSAVED.gif\'); background-position: center; background-size: cover">\n     <h2 text-center class="card-title">\n        WELCOME\n      </h2>\n     \n      <ion-buttons>\n        <div class="row">\n          <div class="col s6">\n            <p padding>\n              <button ion-button block (click)= "startNEWApp()" outline  color="neat">Sign Up</button>\n            </p>\n          </div>\n          <div class="col s6">\n            <p padding>\n              <button ion-button block (click)= "loginApp()"   color="neat">Sign in</button>\n            </p>\n            </div>\n        </div>\n        \n         \n        </ion-buttons>\n  <!-- <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n    <ion-slide style="background-image: url(\'assets/imgs/ycl-01C.jpg\'); position: relative; background-size: cover">\n     \n    </ion-slide>\n    <ion-slide style="background-image: url(\'assets/imgs/anything.jpg\'); position: relative; background-size: cover">\n      <h2 class="card-title">\n        You Can Learn\n      </h2>\n      <h1><b>Anything</b></h1>\n      <ion-buttons end *ngIf="showSkip">\n          <p padding><button ion-button block (click)= "startNEWApp()"  color="neat">New to YCL</button></p>\n          <p padding><button ion-button block (click)= "loginApp()" outline  color="neat">Already Using YCL</button></p> \n          </ion-buttons>\n    </ion-slide>\n    <ion-slide style="background-image: url(\'assets/imgs/anytime.jpg\'); position: relative; background-size: cover">\n      <h2 class="card-title">\n        You Can Learn\n      </h2>\n    <h1><b>Anytime</b></h1>\n    <ion-buttons end *ngIf="showSkip">\n        <p padding><button ion-button block (click)= "startNEWApp()"  color="neat">New to YCL</button></p>\n        <p padding><button ion-button block (click)= "loginApp()" outline  color="neat">Already Using YCL</button></p> \n        </ion-buttons>\n    </ion-slide>\n\n    <ion-slide style="background-image: url(\'assets/imgs/anywhere.jpg\'); position: relative; background-size: cover">\n      <h2 class="card-title">\n        You Can Learn\n      </h2>\n      <h1><b>Anywhere</b></h1>\n      <ion-buttons end *ngIf="showSkip">\n          <p padding><button ion-button block (click)= "startNEWApp()"  color="neat">New to YCL</button></p>\n          <p padding><button ion-button block (click)= "loginApp()" outline  color="neat">Already Using YCL</button></p> \n          </ion-buttons>\n    </ion-slide>\n  </ion-slides> -->\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\slider\slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, viewCtrl, formBuilder, loadingCtrl, ap) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.ap = ap;
        this.user_data = {};
        this.editForm = this.formBuilder.group({});
    }
    EditprofilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditprofilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ap.getUserProfile().on('value', function (userSnapshot) {
            _this.user_data = userSnapshot.val(),
                _this.user = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        });
        console.log(this.user_data);
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.updateProfile = function () {
        var _this = this;
        this.displayPreloader();
        var fullname = this.user_data.fullname;
        var school = this.user_data.school;
        var country = this.onChange(this.user_data.country);
        var age = this.user_data.age;
        var gender = this.onChange(this.user_data.gender);
        var type = this.onChange(this.user_data.type);
        var exams = this.user_data.exams;
        var email = this.user_data.email;
        //const password = this.editForm.value.age
        console.log(email, fullname, country, gender, age, type, exams, school);
        this.ap.updateUser(country, fullname, age, gender, type, exams, email, school);
        this.hidePreloader().then(function () {
            _this.navCtrl.pop();
            // this.navCtrl.setRoot(HomePage)
        });
    };
    EditprofilePage.prototype.displayPreloader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Updating Account...'
        });
        this.loading.present();
    };
    EditprofilePage.prototype.hidePreloader = function () {
        return this.loading.dismiss();
    };
    EditprofilePage.prototype.onChange = function (SelectedValue) {
        return SelectedValue;
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-editprofile',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\editprofile\editprofile.html"*/'<ion-header>\n\n    <ion-navbar color="facebook">\n      <ion-buttons start left>\n        <button ion-button icon-only (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Edit Profile</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="updateProfile()">\n          <ion-icon name="checkmark" color="primary"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n  \n    <!-- Profile picture -->\n    <div text-center>\n      <img [src]="user_data.profile_img" class="edit-avatar" alt="" *ngIf="user_data.profile_img">\n      <img src="assets/imgs/index.jpg" class="edit-avatar" alt="" *ngIf="!user_data.profile_img">\n      <p class="change-text">Change Photo</p>\n    </div>\n  \n     <!--Form-->\n    <ion-item>\n      <ion-label> \n        <ion-icon name="clipboard" color="gray"></ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="user_data.school"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label> \n        <ion-icon name="person" color="gray"></ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="user_data.fullname"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label> \n        <ion-icon name="globe" color="gray"></ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="user_data.country"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label> \n            <ion-icon name="school" color="gray"></ion-icon>\n          </ion-label>\n        <ion-select class="custom-select" [(ngModel)]="user_data.type" interface = "action-sheet" (change)="onChange(type)">\n            <ion-option value="BECE">BECE</ion-option>\n            <ion-option value="WASSCE">WASSCE</ion-option>\n            <ion-option value="none">Not Specified</ion-option>\n          </ion-select>\n      </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="quote" color="gray"></ion-icon>\n      </ion-label>\n      <ion-textarea placeholder="" [(ngModel)]="user_data.description"></ion-textarea>\n    </ion-item>\n  \n    <!-- Private information form -->\n    <div margin-top padding-top>\n      <h4 no-margin no-padding class="info-text">Information</h4>\n      <hr class="custom-hr" color="gray">\n    </div>\n    <ion-item>\n        <ion-label> \n            <ion-icon ios="ios-arrow-dropright" md="md-arrow-dropright" color="gray"></ion-icon>\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="user_data.age"></ion-input>\n      </ion-item>\n    <ion-item>\n      <ion-label> \n        <ion-icon name="mail" color="gray"></ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="user_data.email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label> \n        <ion-icon name="phone-portrait" color="gray"></ion-icon>\n      </ion-label>\n      <ion-input type="text" [(ngModel)]="user_data.phone" placeholder="+233 2456..."></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>\n        <ion-icon name="transgender" color="gray"></ion-icon>\n      </ion-label>\n      <ion-select class="custom-select" [(ngModel)]="user_data.gender" interface = "action-sheet" (change)="onChange(gender)">\n        <ion-option value="male">Male</ion-option>\n        <ion-option value="female">Female</ion-option>\n        <ion-option value="none">Not Specified</ion-option>\n      </ion-select>\n    </ion-item>\n \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\editprofile\editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SelectWeaponPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coursepage_coursepage__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_all_all__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__more_more__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_pro_pro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__weapon_weapon__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_store__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_authentication_authentication__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__challange_challange__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__look_look__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__notification_notification__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__doyouknow_doyouknow__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















// import { BeginPage } from '../begin/begin';



/**********PopOver*********************** */
var PopoverPage = (function () {
    function PopoverPage(socialSharing, navParams, modalCtrl, navCtrl, view) {
        this.socialSharing = socialSharing;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.view = view;
    }
    PopoverPage.prototype.ngOnInit = function () {
    };
    PopoverPage.prototype.editprofile = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__["a" /* EditprofilePage */]);
        modal.present();
        this.view.dismiss();
    };
    PopoverPage.prototype.inviteFriends = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__contact_contact__["a" /* ContactPage */]).then(function () {
            _this.view.dismiss();
        });
    };
    PopoverPage.prototype.shareItem = function () {
        var message = "You Can Learn with me on YCL, join now... http://com.ycl.web.?#gjhgfhsdjf?%74=app";
        // this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(message)
            .then(function () {
        })
            .catch(function () {
        });
        this.view.dismiss();
    };
    PopoverPage.prototype.openstore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__store_store__["b" /* StorePage */]);
        this.view.dismiss();
    };
    PopoverPage.prototype.opensettings = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]).then(function () {
            _this.view.dismiss();
        });
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\home\pop.html"*/'<ion-list no-border class="popover-page">\n\n    <!-- <ion-item>\n\n    <ion-icon ios="ios-person" md="md-person" item-left></ion-icon>\n\n      <p>Leaderboard</p>\n\n    </ion-item> -->\n\n    <ion-item (click)="inviteFriends()">\n\n    <ion-icon ios="ios-person-add" md="md-person-add" item-left></ion-icon>\n\n    <p>Invite Friends</p>\n\n    </ion-item>\n\n    <ion-item (click)="shareItem()">\n\n    <ion-icon ios="ios-share" md="md-share" item-left></ion-icon>\n\n    <p>Share</p>\n\n    </ion-item>\n\n    <!-- <ion-item  (click)="editprofile()">\n\n    <ion-icon ios="ios-create" md="md-create" item-left></ion-icon>\n\n    <p>Edit Profile</p>\n\n    </ion-item>\n\n    <ion-item (click)="opensettings()">\n\n    <ion-icon ios="ios-settings" md="md-settings" item-left></ion-icon>\n\n    <p>Settings</p>\n\n    </ion-item>\n\n    <ion-item  (click)="openstore()">\n\n        <ion-icon ios="ios-cart" md="md-cart" item-left></ion-icon>\n\n        <p>Go to Store</p>\n\n        </ion-item> -->\n\n  </ion-list>'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\home\pop.html"*/,
            selector: 'page-pop',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */]])
    ], PopoverPage);
    return PopoverPage;
}());

/**********End*********************** */
/**********************Weapon Select********************************** */
var SelectWeaponPage = (function () {
    function SelectWeaponPage(navParams, navCtrl, view) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.view = view;
        this.courses = [];
    }
    SelectWeaponPage.prototype.ngOnInit = function () {
    };
    SelectWeaponPage.prototype.ionViewDidLoad = function () {
        this.courses = this.navParams.get('c');
        console.log('ionViewDidLoad SelectWeaponPage');
        console.log(this.courses);
    };
    SelectWeaponPage.prototype.openNext = function (name) {
        var _this = this;
        //console.log(name);
        if (name == 'Social Studies') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__weapon_weapon__["a" /* WeaponPage */], { n: name }).then(function () { _this.view.dismiss(); });
        }
    };
    SelectWeaponPage.prototype.openstore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__store_store__["b" /* StorePage */]);
        this.view.dismiss();
    };
    SelectWeaponPage.prototype.opensettings = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]).then(function () {
            _this.view.dismiss();
        });
    };
    SelectWeaponPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\home\weaponselect.html"*/'\n\n  <ion-list >\n\n    <ion-list-header>Choose Weapon</ion-list-header>\n\n    <div *ngFor ="let cos of courses" >\n\n      <ion-item (click)="openNext(cos.name)">\n\n      <ion-icon [name]="cos.ic_name" item-left [color]="cos.color"></ion-icon>\n\n      <h2>{{cos.name}}</h2>\n\n      </ion-item>\n\n    </div>\n\n    \n\n  </ion-list>'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\home\weaponselect.html"*/,
            selector: 'page-weaponselect',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */]])
    ], SelectWeaponPage);
    return SelectWeaponPage;
}());

/**********End*********************** */
/**********Home*********************** */
var HomePage = (function () {
    function HomePage(storage, navParams, navCtrl, modalCtrl, popoverCtrl, all, pro, actionsheetCtrl, view, auth) {
        this.storage = storage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.all = all;
        this.pro = pro;
        this.actionsheetCtrl = actionsheetCtrl;
        this.view = view;
        this.auth = auth;
        this.myRequest = [];
        this.theirRequest = [];
        this.noRequest = [];
        this.curnt = [];
        this.ourRequest = [];
        this.swipe = 0;
        this.seg = ['challenge', 'home', 'learning'];
        this.courses = [
            { name: 'Sign Language', current: 500 },
            { name: 'Maths', current: 2900 },
            { name: 'Science', current: 3600 },
            { name: 'Social Studies', current: 4000 },
            { name: 'I C T', current: 1750 },
            { name: 'B D T', current: 2550 },
            { name: 'Languages', current: 1920 },
            { name: 'R M E', current: 1470 },
        ];
        this.show = true;
        this.max = 10000;
        this.stroke = 6;
        this.radius = 50;
        this.semicircle = false;
        this.rounded = true;
        this.responsive = false;
        this.clockwise = true;
        this.color = '#45ccce';
        this.background = '#dddbdb';
        this.duration = 800;
        this.animation = 'easeOutCubic';
        this.animationDelay = 10;
        this.animations = [];
        this.gradient = false;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.auth.getUserProfile().on('value', function (userSnapshot) {
            _this.name = userSnapshot.val().fullname;
            _this.person = userSnapshot.val().type;
        });
        this.doUKnow();
        this.storage.get('Parent').then(function (Parent) {
            if (Parent) {
                _this.person = "Parent";
            }
            // else{
            // this.person = "Student"
            // }
        });
        this.storage.get('Teacher').then(function (Teacher) {
            if (Teacher) {
                _this.person = "Teacher";
            }
            // else{
            //   this.person = "Student"
            // }
        });
        this.storage.get('Student').then(function (Student) {
            if (Student) {
                _this.person = "Student";
            }
            // else{
            //   this.person = "Student"
            // }
            _this.pro.getMyScore().on('value', function (score) {
                _this.mycurrent = score.val();
                console.log(_this.mycurrent);
            });
            console.log(_this.person);
        });
        this.auth.getUserProfiles().on('value', function (userSnap) {
            _this.students = [];
            userSnap.forEach(function (snap) {
                if (snap.val().type == "Student") {
                    _this.students.push({
                        id: snap.key,
                        fullname: snap.val().fullname,
                        school: snap.val().school
                    });
                }
                console.log(_this.students);
                return false;
            });
        });
        this.lesson_segment = this.seg[1];
        this.swipe = 1;
        this.auth.getUserProfile().on('value', function (user) {
            _this.curnt = user.val();
        });
        var challengeref = this.pro.getChallenges();
        var me = this.pro.userID;
        challengeref.orderByChild("hisDone").equalTo(false).on('value', function (courseSnapshot) {
            _this.myRequest = [];
            courseSnapshot.forEach(function (snap) {
                var myid = snap.val().myID;
                var mydone = snap.val().myDone;
                if (myid == me && mydone == true) {
                    _this.myRequest.push({
                        id: snap.key,
                        hisName: snap.val().hisName
                    });
                }
                return false;
            });
        });
        challengeref.orderByChild("myDone").equalTo(true).on('value', function (theirSnapshot) {
            _this.theirRequest = [];
            theirSnapshot.forEach(function (snap) {
                var hisid = snap.val().hisID;
                var hisdone = snap.val().hisDone;
                if (hisid == me && hisdone == false) {
                    _this.theirRequest.push({
                        id: snap.key,
                        hisName: snap.val().hisName
                    });
                }
                return false;
            });
            console.log(_this.theirRequest);
        });
        challengeref.orderByChild("myDone").equalTo(true).on('value', function (ourSnapshot) {
            _this.ourRequest = [];
            ourSnapshot.forEach(function (snap) {
                var myid = snap.val().myID;
                var hisid = snap.val().hisID;
                var hisdone = snap.val().hisDone;
                if (myid == me || hisid == me && hisdone == true) {
                    _this.ourRequest.push({
                        id: snap.key,
                        hisName: snap.val().hisName
                    });
                }
                return false;
            });
            console.log(_this.ourRequest);
        });
        challengeref.orderByChild("myDone").equalTo(false).on('value', function (noSnapshot) {
            _this.noRequest = [];
            noSnapshot.forEach(function (snap) {
                var myid = snap.val().myID;
                var hisdone = snap.val().hisDone;
                if (myid == me && hisdone == false) {
                    _this.noRequest.push({
                        id: snap.key,
                        hisName: snap.val().hisName
                    });
                }
                return false;
            });
            console.log(_this.noRequest);
        });
    };
    HomePage.prototype.AddStudents = function () {
    };
    HomePage.prototype.callpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__look_look__["a" /* LookPage */]);
    };
    HomePage.prototype.openstore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__store_store__["b" /* StorePage */]);
    };
    HomePage.prototype.OpenCourse = function (c) {
        console.log(c);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__coursepage_coursepage__["a" /* CoursepagePage */], { c: c });
    };
    HomePage.prototype.finishIt = function (id, hisname) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__challange_challange__["a" /* ChallangePage */], { c: 1, cid: id, chiName: hisname });
    };
    HomePage.prototype.play = function (id, hisname) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__challange_challange__["a" /* ChallangePage */], { c: 0, cid: id, chiName: hisname });
    };
    HomePage.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(PopoverPage, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });
        popover.present({
            ev: ev
        });
    };
    HomePage.prototype.openProfile = function (text) {
        if (text != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["b" /* ProfilePage */], { name: text });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["b" /* ProfilePage */]);
        }
    };
    HomePage.prototype.openNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__notification_notification__["a" /* NotificationPage */]);
    };
    HomePage.prototype.viewClassmates = function () {
        var _this = this;
        this.storage.remove('More').then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__more_more__["a" /* MorePage */]);
        });
    };
    HomePage.prototype.more = function (More) {
        var _this = this;
        this.storage.set('More', 'true').then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__more_more__["a" /* MorePage */], { c: More });
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.ionViewDidLoad();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.openChallenge = function (ev) {
        var popover = this.popoverCtrl.create(SelectWeaponPage, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement,
            c: this.courses
        });
        popover.present({ ev: ev });
        // let modal = this.modalCtrl.create(WeaponPage, {c: this.courses});
        // modal.present();
    };
    HomePage.prototype.doUKnow = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_18__doyouknow_doyouknow__["a" /* DoyouknowPage */], {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement,
            c: this.courses
        });
        popover.present();
    };
    HomePage.prototype.swipeEvent = function (e) {
        if (e.direction === 2) {
            if (this.swipe != 0) {
                this.swipe--;
                this.lesson_segment = this.seg[this.swipe];
            }
        }
        if (e.direction === 1) {
            if (this.swipe != this.seg.length - 1) {
                this.swipe++;
                this.lesson_segment = this.seg[this.swipe];
            }
        }
        console.log('Swiped:' + this.swipe + ' times');
    };
    HomePage.prototype.swipefunction = function () {
        for (var i = 0; i < this.seg.length; i++) {
            if (i == this.seg.length) {
                i = 0;
            }
            else if (i < this.seg.length) {
                i++;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popoverText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "text", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="facebook">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n          </button>\n    <ion-title>\n    </ion-title>\n    \n    <!-- <ion-buttons end ><button ion-button><ion-icon ios="ios-contact" md="md-contact" ></ion-icon></button></ion-buttons> -->\n    <ion-buttons end (click)="openNotification()"><button ion-button><ion-icon ios="ios-notifications" md="md-notifications"></ion-icon><ion-badge color="danger">2</ion-badge></button></ion-buttons>\n    <ion-buttons end (click)="openstore()"><button ion-button><ion-icon ios="ios-cart" md="md-cart" ></ion-icon></button></ion-buttons>\n    <ion-buttons end (click)="presentPopover()" #popoverContent><button ion-button><ion-icon ios="ios-more" md="md-more" #popoverText></ion-icon></button></ion-buttons>\n  </ion-navbar>\n      \n</ion-header>\n\n<ion-content fullscreen-padding class="popover-page" (swipe)="swipeEvent($event)">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          refreshingSpinner="circles">\n        </ion-refresher-content>\n      </ion-refresher>\n  <div>\n  <ion-segment [(ngModel)]="lesson_segment">\n       \n        <ion-segment-button value="learning">\n            <ion-icon ios="ios-school" md="md-school"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="home">\n            <ion-icon ios="ios-home" md="md-home"></ion-icon>\n          </ion-segment-button>\n           <ion-segment-button value="challenge">\n            <ion-icon name="ios-flash"></ion-icon>\n          </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div [ngSwitch]="lesson_segment">\n    <ion-list  *ngSwitchCase="\'learning\'" fullscreen-padding>\n     <ion-card >\n      <ion-grid>\n        <ion-row>\n          <ion-col class="animated rotateIn item-remove-animate" col-6 text-center *ngFor="let c of courses" data-ng-disabled="true">\n          <div class="progress-wrapper">\n              <!-- <div class="current" [ngStyle]="getOverlayStyle()">{{ c.current }}/{{ max }}</div> -->\n            <round-progress [current]="c.current" [max]="max" [stroke]="stroke" [radius]="radius" [semicircle]="semicircle" [rounded]="rounded"\n            [responsive]="responsive" [clockwise]="clockwise" [color]="gradient ? \'url(#gradient)\' : color" [background]="background"\n            [duration]="duration" [animation]="animation" (click)="OpenCourse(c.name)"> \n           </round-progress>\n          </div>\n              <p class="card-title" name = "s">{{c.name}} \n                <!-- <ion-icon [name]="c.ic_name" [color]= "c.color"></ion-icon> -->\n              </p>  \n          </ion-col>\n          <ion-col col-6 text-center>\n            <div class="col" (click)="more(More)">\n              <p class="card-title">More...</p> \n            </div> \n           \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n      <!-- <div class="fixed-action-btn" (click)="callpage()">\n        <a class="btn-floating waves-effect waves-light blue">\n          <i class="large material-icons"><ion-icon name="add"></ion-icon></i>\n        </a>\n      </div> -->\n   </ion-list>\n\n\n\n\n\n\n\n <ion-list *ngSwitchCase="\'challenge\'" padding>\n    <ion-item-group >\n        <ion-item-divider color="blu" >Ongoing</ion-item-divider>\n         <ion-item *ngFor="let not of noRequest" (click)="play(not?.id,not?.hisName)">\n            <ion-avatar item-left>\n                <img src="assets/imgs/index.jpg" alt="Image">\n                </ion-avatar>\n           <p>{{not?.hisName}}</p>\n           <button ion-button clear color="facebook" item-right> &nbsp;&nbsp; Play</button>\n         </ion-item>\n         <ion-item *ngFor="let their of theirRequest" (click)="finishIt(their?.id,their?.hisName)">\n            <ion-avatar item-left>\n                <img src="assets/imgs/index.jpg" alt="Image">\n                </ion-avatar>\n           <p>{{their?.hisName}}</p>\n           <button ion-button color="facebook" clear (click)="SendInvitation(their?.hisName)" item-right> &nbsp;&nbsp; Accept</button>\n              </ion-item>\n              <ion-item *ngFor="let my of myRequest">\n                  <ion-avatar item-left>\n                  <img src="assets/imgs/index.jpg" alt="Image">\n                  </ion-avatar>\n                  <p>{{my?.hisName}}</p>\n                  <button ion-button color="facebook" clear item-right> &nbsp;&nbsp; Waiting</button>\n                </ion-item>\n         </ion-item-group>\n\n         <ion-item-group>\n         <ion-item-divider color="bluz" >Completed</ion-item-divider>\n         <ion-item *ngFor="let our of ourRequest">\n            <ion-avatar item-left>\n                <img src="assets/imgs/index.jpg" alt="Image">\n                </ion-avatar>\n           <p>{{our?.hisName}}</p>\n           <p item-right> 5: 1</p>\n         </ion-item>\n      </ion-item-group>\n        <div class="fixed-action-btn " (click)="openChallenge()">\n            <a class="btn-floating waves-effect waves-light blue">\n              <i class="large material-icons"><ion-icon name="add"></ion-icon></i>\n            </a>\n          </div>\n  \n  </ion-list>\n  \n\n\n\n\n\n      <ion-list *ngSwitchCase="\'home\'" fullscreen-padding>\n        <div [ngSwitch]= "person">\n          \n            <ion-card class="animated bounce item-remove-animate item-avatar">\n                <!-- <div *ngIf="!mycurrent" text-center>\n        \n                    <div class="preloader-wrapper small active">\n                        <div class="spinner-layer spinner-blue-only">\n                          <div class="circle-clipper left">\n                            <div class="circle"></div>\n                          </div><div class="gap-patch">\n                            <div class="circle"></div>\n                          </div><div class="circle-clipper right">\n                            <div class="circle"></div>\n                          </div>\n                        </div>\n                      </div>\n                    </div> -->\n      <ion-grid >\n        <ion-row>\n            <ion-col col-6>\n            <ion-avatar>\n                  <img class="avatar" src="assets/imgs/image.jpg">\n            </ion-avatar>\n          </ion-col>\n            <ion-col col-6 text-left>\n                <round-progress [current]="mycurrent?.score || 0" [max]="max" [stroke]="stroke" [radius]="radius" semicircle ="true" [rounded]="rounded"\n                [responsive]="responsive" [clockwise]="clockwise" [color]="gradient ? \'url(#gradient)\' : color" [background]="background"\n                [duration]="duration" [animation]="animation"></round-progress>\n                <!-- <progress-bar [progress]="35" [color]="gradient ? \'url(#gradient)\' : color">\n                  </progress-bar> -->\n                  <p class="award"><b>{{mycurrent?.score || 0}}</b> points</p>\n                <button small ion-button color = "facebook" small (click)="viewClassmates()">\n               See Classmates\n                </button>\n              </ion-col>\n                \n         </ion-row>\n        </ion-grid>\n      </ion-card>\n\n        <ion-list  *ngSwitchCase="\'Student\'">\n        <div class="row" flip>\n            <div class="col s12 m7">\n              <div class="card">\n                <div class="card-image">\n                  <img src="assets/imgs/pic.jpg">\n                  <span class="card-title">YCL qualifies for round 2 of the MTN App Challenge</span>\n                </div>\n                <div class="card-content">\n                  <p>The management of your beloved ycl app  are in the version 5 of the MTN app challenge,\n                     after an excellent presentation the ycl team got  <b>5 Yes\'s !</b> from the judges and have qualified\n                      for round 2 of the MTN app challenge</p>\n                </div>\n                <div class="card-action">\n                  <a href="#">View More</a>\n                </div>\n              </div>\n            </div>\n          </div>\n      <ion-card>\n       <p>Ethel just completed a challenge with Samuel</p>\n          <ion-grid>\n              <ion-row>\n              <ion-col col-4>\n                <ion-avatar item-left >\n                <img src="assets/imgs/imagelady.jpg" class="circle">\n              </ion-avatar>\n                <h6 text-center>Ethel</h6>\n              </ion-col>\n              <ion-col col-4><p text-center>5 : 1</p></ion-col>\n              <ion-col col-4>\n                <ion-avatar item-right >\n                <img src="assets/imgs/image.jpg" alt="" class="circle">\n              </ion-avatar>\n                <h6 text-center>Samuel</h6>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-note padding>3min ago</ion-note>\n        </ion-card>\n      </ion-list>\n\n<!--Parent-->\n      <ion-list *ngSwitchCase="\'Parent\'">\n          <p text-center>Number of Children: {{students?.length}} </p> \n          <ion-card >\n             <ion-list *ngFor = "let student of students">\n                 <ion-item (click)="openProfile(student.fullname)">\n                   <ion-avatar item-left>\n                     <img src="assets/imgs/index.jpg" alt="">\n                   </ion-avatar>\n                   <h3>{{student.fullname}}</h3>\n                   <ion-note>Last Seen : yesterday</ion-note>\n                   <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n                 </ion-item>\n               </ion-list>\n         </ion-card>\n   \n         <div class="fixed-action-btn " (click)="AddStudents()">\n             <a class="btn-floating waves-effect waves-light blue">\n               <i class="large material-icons"><ion-icon name="add"></ion-icon></i>\n             </a>\n           </div>\n      </ion-list>\n\n<!--Teacher-->\n\n      <ion-list *ngSwitchCase="\'Teacher\'">\n       <p text-center>{{students?.length}} Student(s)</p> \n       <ion-card>\n          <ion-list *ngFor = "let student of students">\n              <ion-item (click)="openProfile(student.fullname)">\n                <ion-avatar item-left>\n                  <img src="assets/imgs/index.jpg" alt="">\n                </ion-avatar>\n                <h3>{{student.fullname}}</h3>\n                <ion-note>Last Seen : yesterday</ion-note>\n                <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n              </ion-item>\n            </ion-list>\n      </ion-card>\n\n      <div class="fixed-action-btn " (click)="AddStudents()">\n          <a class="btn-floating waves-effect waves-light blue">\n            <i class="large material-icons"><ion-icon name="add"></ion-icon></i>\n          </a>\n        </div>\n       </ion-list>\n       </div>\n    </ion-list>\n  \n\n        </div>\n      \n    \n   \n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_all_all__["a" /* AllProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_pro_pro__["a" /* ProProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_14__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_all_all__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_section__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topicdetails_topicdetails__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { YearPage } from '../year/year';



/**
 * Generated class for the CoursepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursepagePage = (function () {
    function CoursepagePage(navCtrl, navParams, all) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.all = all;
    }
    CoursepagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.sub = this.navParams.get('c');
        this.title = this.navParams.get('c');
        this.all.gettopics(this.title).on('value', function (noSnapshot) {
            _this.categories = noSnapshot.val();
        });
        console.log(this.categories);
        console.log('ionViewDidLoad CoursepagePage');
    };
    CoursepagePage.prototype.openCat = function (cat) {
        console.log(cat);
        if (cat == 'Alphabets' || cat == 'Numbers' || cat == 'Things at Home') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topicdetails_topicdetails__["a" /* TopicdetailsPage */], { cat: cat, sub: this.title });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__section_section__["a" /* SectionPage */], { cat: cat, sub: this.title });
        }
    };
    CoursepagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-coursepage',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\coursepage\coursepage.html"*/'<!--\n  Generated template for the CoursepagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content fullscreen-padding >\n    <div *ngIf="!categories" text-center>\n        \n        <div class="preloader-wrapper small active">\n            <div class="spinner-layer spinner-blue-only">\n              <div class="circle-clipper left">\n                <div class="circle"></div>\n              </div><div class="gap-patch">\n                <div class="circle"></div>\n              </div><div class="circle-clipper right">\n                <div class="circle"></div>\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class="row" *ngFor="let cat of categories | slice: 1">\n          <div class="col s12 m6">\n            <div class="card">\n              <div class="card-image" (click)="openCat(cat)">\n                <img src="assets/imgs/bgg.jpg">\n                <span class="card-title">{{cat}}</span>\n              </div>\n              <div class="card-content">\n                <div class="row">\n                      <ion-note>Estimated Time: 15 min</ion-note>\n                     <button ion-button outline block (click)="startApp()">Take Short Cut</button>\n                </div>\n                <div class="col s12 m6">\n                  \n                </div>\n                \n              </div>\n            </div>\n          </div>\n        </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\coursepage\coursepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_all_all__["a" /* AllProvider */]])
    ], CoursepagePage);
    return CoursepagePage;
}());

//# sourceMappingURL=coursepage.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider_slider__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, storage, navParams, ap) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.ap = ap;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.signout = function () {
        var _this = this;
        this.ap.logoutUser().then(function () {
            _this.storage.clear();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__slider_slider__["a" /* SliderPage */]);
        });
    };
    SettingsPage.prototype.editprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-list-header>Account</ion-list-header>\n  <ion-item (click)="editprofile()"><ion-icon ios="ios-create" md="md-create" item-left></ion-icon>Edit Profile</ion-item>\n  <ion-item><ion-icon name="ios-create" item-left></ion-icon>Change Password</ion-item>\n  <ion-item><ion-icon name="ios-link" item-left></ion-icon>Connect Account</ion-item>\n  <ion-item><ion-icon ios="ios-lock" md="md-lock" item-left></ion-icon>Block Account</ion-item>\n  <ion-item><ion-icon ios="ios-build" md="md-build" item-left></ion-icon>Manage Weapon</ion-item>\n</ion-list>\n<ion-list>\n    <ion-list-header>Setting</ion-list-header>\n    <ion-item><ion-icon ios="ios-stats" md="md-stats" item-left></ion-icon>Activity Feed</ion-item>\n    <ion-item><ion-icon ios="ios-notifications" md="md-notifications" item-left></ion-icon>Push Notifications</ion-item>\n    <ion-item><ion-icon ios="ios-moon" md="md-moon" item-left></ion-icon> <ion-label>Night Mode </ion-label><ion-toggle checked="true"></ion-toggle></ion-item>\n    <ion-item><ion-icon name="ios-contract" item-left></ion-icon>Theme</ion-item>\n    <ion-item><ion-icon ios="ios-volume-up" md="md-volume-up" item-left></ion-icon>Sound</ion-item>\n    <ion-item><ion-icon ios="logo-yahoo" md="logo-yahoo" item-left></ion-icon>Language</ion-item>\n    <ion-item (click)="signout()"><ion-icon ios="ios-log-out" md="md-log-out" item-left></ion-icon>Sign Out</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_email__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pro_pro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CompleteprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompleteprofilePage = (function () {
    function CompleteprofilePage(navCtrl, navParams, formBuilder, alertCtrl, ap, loadingCtrl, pro) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.ap = ap;
        this.loadingCtrl = loadingCtrl;
        this.pro = pro;
        this.submitted = false;
        this.churchProfile = {};
        this.current = {};
        this.signupForm = this.formBuilder.group({
            fullname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            school: [''],
            age: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            repassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            exams: [''],
            type: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__validators_email__["a" /* EmailValidator */].isValid])],
        });
    }
    CompleteprofilePage.prototype.ionViewDidLoad = function () {
        this.type = this.navParams.get('person');
        console.log('ionViewDidLoad CompleteprofilePage');
        if (this.type != "Student") {
            var it = document.getElementsByName('exams')[0];
            it.style.display = "none";
        }
        if (this.type == "Parent") {
            var it = document.getElementsByName('school')[0];
            it.style.display = "none";
        }
        //console.log(this.current);
    };
    CompleteprofilePage.prototype.changephoto = function () {
    };
    CompleteprofilePage.prototype.onChange = function (SelectedValue) {
        return SelectedValue;
    };
    CompleteprofilePage.prototype.signupChurchAcount = function () {
        var _this = this;
        var fullname = this.signupForm.value.fullname;
        this.school = this.signupForm.value.school;
        var country = this.onChange(this.signupForm.value.country);
        var age = this.signupForm.value.age;
        var gender = this.onChange(this.signupForm.value.gender);
        var type = this.signupForm.value.type;
        this.exams = this.onChange(this.signupForm.value.exams);
        var email = this.signupForm.value.email;
        var password = this.signupForm.value.password;
        if (this.exams == null) {
            this.exams = "None";
        }
        if (this.school == null) {
            this.school = "None";
        }
        console.log(email, password, fullname, country, gender, age, type, this.exams, this.school);
        this.ap.signUpEmail(email, password, fullname, country, gender, age, type, this.exams, this.school).then(function (user) {
            _this.loading.dismiss().then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */], { person: _this.type });
            });
        }, function (error) {
            _this.loading.dismiss().then(function () {
                var alert = _this.alertCtrl.create({
                    message: error.message,
                    buttons: [{ text: "Ok", role: "cancel" }]
                });
                alert.present();
            });
        });
        this.loading = this.loadingCtrl.create({ content: 'Creating Account...' });
        this.loading.present();
    };
    CompleteprofilePage.prototype.doNexts = function () {
        var a = document.getElementsByName('firsts')[0];
        a.style.display = "none";
        var s = document.getElementsByName('seconds')[0];
        s.style.display = "block";
    };
    CompleteprofilePage.prototype.doPrev = function () {
        var a = document.getElementsByName('seconds')[0];
        a.style.display = "none";
        var s = document.getElementsByName('firsts')[0];
        s.style.display = "block";
    };
    CompleteprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-completeprofile',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\completeprofile\completeprofile.html"*/'<!--\n  Generated template for the CompleteprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen-padding>\n\n<ion-card padding>\n    <form [formGroup]="signupForm">\n     <ion-card-title  class="card-title" text-center>Create an Account</ion-card-title>\n       \n          <div name="firsts" class="firsts">\n            <ion-card-content>\n              <ion-list>\n                  <ion-item>\n                    <ion-label>Country</ion-label>\n                    <ion-select #newSelect [(ngModel)]="country" formControlName="country"   interface="action-sheet" (change)="onChange(country)">\n                      <ion-option value="Ghana">Ghana</ion-option>\n                      <ion-option value="Nigeria">Nigeria</ion-option>\n                      <ion-option value="Togo">Togo</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n              <div class="row">\n                  <div class="input-field col s12">\n                  <i class="material-icons prefix"><ion-icon item-left name="md-contact"></ion-icon></i>\n                   <input  id="fullname" type="text" placeholder="John Doe"  required formControlName="fullname" [(ngModel)]="fullname">\n                  </div>\n                </div>\n                <div class="row" name ="school">\n                    <div class="input-field col s12">\n                    <i class="material-icons prefix"><ion-icon item-left name="md-school"></ion-icon></i>\n                <input  id="school" type="text" placeholder="MySchool International"  required formControlName="school" [(ngModel)]="school">\n               </div>\n          </div>\n            <ion-grid>\n                <ion-row>\n                        <div class="input-field col s6">\n                      <input type="number" placeholder="1" id="age" formControlName="age">\n                        </div>\n                    <div class="input-field col s6">\n                      <ion-item>\n                       <ion-label floating>Gender</ion-label>\n                       <ion-select #newSelect [(ngModel)]="gender" formControlName="gender"   interface="action-sheet" (change)="onChange(gender)">\n                        <ion-option value="Male">Male</ion-option>\n                        <ion-option value="Female">Female</ion-option>\n                      </ion-select>\n                    </ion-item>\n                    </div>\n                </ion-row>\n              </ion-grid>\n              <ion-list>\n                  <div class="input-field col s12">\n                      <label for="type">Type</label>\n                     <input type="text" id="type" [(ngModel)]="type" formControlName="type">\n                      </div>\n                  <!-- <ion-item>\n                      <ion-label>I am a</ion-label>\n                      <ion-select #newSelect  formControlName="type"   interface="action-sheet" (change)="onChange(type)">\n                        <ion-option value="Student">Student</ion-option>\n                        <ion-option value="Teacher">Teacher</ion-option>\n                        <ion-option value="Parent">Parent</ion-option>\n                      </ion-select>\n                    </ion-item> -->\n               \n                 <ion-item  name="exams">\n                  <ion-label>Exams Type</ion-label>\n                  <ion-select #newSelect [(ngModel)]="exams" (change)="onChange(exams)" formControlName="exams"   interface="action-sheet">\n                    <ion-option value="BECE">BECE</ion-option>\n                    <ion-option value="WASSCE">WASSCE</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-list>\n            </ion-card-content>\n            <ion-buttons end>\n                <button ion-button (click)="doNexts()" type="submit" clear>Next</button>\n              </ion-buttons>\n            </div>\n        \n            <div name="seconds" class="seconds">\n                <ion-card-content>\n                <div class="row">\n                    <div class="input-field col s12">\n                    <i class="material-icons prefix"><ion-icon item-left name="md-mail"></ion-icon></i>\n                  <input  id="email" type="email" placeholder="johndoe@example.com" required formControlName="email" [(ngModel)]="email"  [class.invalid]="!signupForm.controls.email.valid && blur">\n                    </div>\n                  </div>\n                  <p class="error-message" *ngIf="!signupForm.controls.email.valid && signupForm.controls.email.dirty">Please enter a valid email address.</p>\n                  \n                  <div class="row">\n                      <div class="input-field col s12">\n                      <i class="material-icons prefix"><ion-icon item-left name="md-lock"></ion-icon></i>\n                  <input  id="password" type="password" placeholder="********" required formControlName="password" [(ngModel)]="password"  [class.invalid]="!signupForm.controls.password.valid && blur">\n                      </div>\n      \n                  <p class="error-message" *ngIf="!signupForm.controls.password.valid && signupForm.controls.password.dirty">Please password must be more than 8 characters</p>\n                 </div>\n        \n                 <div class="row">\n                    <div class="input-field col s12">\n                    <i class="material-icons prefix"><ion-icon item-left name="md-lock"></ion-icon></i>\n                      <input  id="repassword" type="password" placeholder="********"  required formControlName="repassword" [(ngModel)]="repassword"  [class.invalid]="!signupForm.controls.repassword.valid && blur">\n                    </div>\n                      <p class="error-message" *ngIf="!signupForm.controls.repassword.valid && signupForm.controls.repassword.dirty">Please password must be more than 8 characters</p>\n                  </div>\n               </ion-card-content>\n                     <ion-buttons end><button ion-button (click)="doPrev()" type="submit" clear><ion-icon name="ios-undo"></ion-icon>&nbsp;&nbsp; Previous</button>\n                      <button ion-button (click)="  signupChurchAcount()" type="submit" clear>Submit</button>\n                    </ion-buttons>\n                  </div>\n                \n                \n        </form>\n      \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\completeprofile\completeprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pro_pro__["a" /* ProProvider */]])
    ], CompleteprofilePage);
    return CompleteprofilePage;
}());

//# sourceMappingURL=completeprofile.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, ap, formBuilder, loadingCtrl, alt, navParams) {
        this.navCtrl = navCtrl;
        this.ap = ap;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alt = alt;
        this.navParams = navParams;
        this.userForm = this.formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            // username: ['', Validators.required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.presentLoading();
        var email = this.userForm.value.email;
        var password = this.userForm.value.password;
        this.ap.loginUser(email, password).then(function (er) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
        });
    };
    LoginPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 5000,
            dismissOnPageChange: true
        }).present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\agbemadu\YouCanLearn\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="facebook">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen-padding>\n  <ion-card padding>\n    <form  [formGroup]="userForm">\n        <ion-card-title  class="card-title" text-center>Login into Your Account...</ion-card-title>\n    <ion-card-content>\n    <div class="row">\n    <div class="input-field col s12">\n    <i class="material-icons prefix"><ion-icon item-left name="md-contact"></ion-icon></i>\n    <label for="icon_eprefix">Email</label>\n    <input  id="icon_eprefix" type = "email" formControlName="email" [(ngModel)]="email"  [class.invalid]="!userForm.controls.email.valid && blur">\n    </div>\n  </div> \n    <p class="error-message" *ngIf="!userForm.controls.email.valid && userForm.controls.email.dirty">Please enter a valid email address.</p>\n    \n    \n    <div class="row">\n    <div class="input-field col s12">\n    <i class="material-icons prefix"><ion-icon item-left name="md-unlock"></ion-icon></i>\n    <label for="icon_prefix"> Password</label>\n    <input  id="icon_prefix"  type="password"  formControlName="password" [(ngModel)]="password"  [class.invalid]="!userForm.controls.password.valid && blur">\n    </div>\n    <p class="error-message" *ngIf="!userForm.controls.password.valid && userForm.controls.password.dirty">Please password must be more than 8 characters</p>\n  </div>\n  </ion-card-content>\n    <ion-buttons end>\n        <button ion-button [disabled]="!userForm.valid" (click)="loginUser()" type="submit" clear>Login</button>\n      </ion-buttons>\n  </form>\n</ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\agbemadu\YouCanLearn\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[459]);
//# sourceMappingURL=main.js.map