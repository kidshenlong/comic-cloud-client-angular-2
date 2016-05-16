/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {SeriesService} from "../series/series.service";
import {Series} from "../series/series.model";
import {SeriesStackComponent} from "../series-stack/series-stack.component";
import {StackComponent} from "../shared/stack/stack.component";

@Component({
    selector: 'library',
    host: {
        'class' : "shelf"
    },
    templateUrl: "/app/library/library.component.html",
    providers: [Title, HTTP_PROVIDERS, SeriesService],
    directives: [SeriesStackComponent, StackComponent]
})

export class LibraryComponent implements OnInit {

    //stackType = "series";//todo consider making stack type a parameter set by component

    series: Series[];

    constructor(private _seriesService: SeriesService, title:Title) {
        //http://stackoverflow.com/questions/34602806/how-to-change-page-title-in-angular2-router
        title.setTitle("Comic Cloud - Library");
    }

    ngOnInit() {
        this.series = this.getSeries();
        console.log(this.getSeries());
    }

    getSeries(){
        console.log("series call");
        //this._seriesService.getAllSeries().subscribe(series => this.series = series);
        return [
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
            new Series("8C3D3E48-155D-11E6-8248-564E36676F51", "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"),
        ];
        //error =>  this.errorMessage = <any>error);
    }
}