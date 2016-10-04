"use strict";
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
 * Created by shubhangisheel on 2016-10-03.
 */
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var ListOfHeroes = (function () {
    function ListOfHeroes() {
        this.title = "Tour of Heroes";
        this.heroes = [
            new hero_1.Hero('Shubee'),
            new hero_1.Hero('Astu'),
            new hero_1.Hero('Mithu'),
            new hero_1.Hero('Shubuu', 4)
        ];
        this.myHero = this.heroes[0].name;
    }
    ListOfHeroes.prototype.addHero = function (name) {
        this.heroes.push(new hero_1.Hero(name));
    };
    ListOfHeroes = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-of-heroes',
            templateUrl: 'app.list-of-heroes.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ListOfHeroes);
    return ListOfHeroes;
}());
exports.ListOfHeroes = ListOfHeroes;
//# sourceMappingURL=app.list-of-heroes.component.js.map