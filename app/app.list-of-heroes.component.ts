/**
 * Created by shubhangisheel on 2016-10-03.
 */
import {Component} from '@angular/core';
import {Hero} from './hero';

@Component({
    moduleId: module.id,
    selector: 'list-of-heroes',
    templateUrl: 'app.list-of-heroes.html'
})
export class ListOfHeroes{
    title = "Tour of Heroes";
    heroes = [
        new Hero('Shubee'),
        new Hero('Astu'),
        new Hero('Mithu'),
        new Hero('Shubuu',4)
    ];
    myHero = this.heroes[0].name;

    addHero(name:string){
        this.heroes.push(new Hero(name));
    }

}