import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatisticsService } from '../../services/statistics.service';
import { AppState } from '../../app.state'
import { Store } from '@ngrx/store'
import { Statistics } from 'src/app/models/statistics';
import { Observable, of } from 'rxjs';
import { selectUserStatisticsFeature } from 'src/app/store/user/user.selector';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  // @Input() userId: string = '';
  // @Input() genre: string = '';
  // @Input() pages: number = 0;
  // @Input() language: string = '';
  // @Input() author: string = '';

  statistikaObservable: Observable<Statistics[]> = of([]);
  statistika!: Statistics;

  genresData: any;
  pagesData: any;
  languagesData: any;
  authorsData: any;
  view: [number, number] = [700, 400];
  viewNumberCard: [number, number] = [850, 300];
  
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  animations: boolean = true;

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Languages';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Number of books';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  cardColor: string = '#232837';



  ngOnInit(): void {      
      this.store.select(selectUserStatisticsFeature).subscribe(statistika => {
        this.statistika = statistika;
        this.genresData = Object.entries(this.statistika.genres).map(([name, value]) => ({
          name,
          value
        }));
        this.pagesData = Object.entries(this.statistika.pages).map(([name, value]) => ({
          name,
          value
        }));
        this.languagesData = Object.entries(this.statistika.languages).map(([name, value]) => ({
          name,
          value
        }));
        this.authorsData = Object.entries(this.statistika.authors).map(([name, value]) => ({
          name,
          value
        }));
    });    
  }

  constructor(private StatisticsService: StatisticsService, private store: Store<AppState> ) { 
      
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    console.log(this.genresData);
    console.log(this.languagesData);
    console.log(this.pagesData);
    console.log(this.authorsData);
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  labelFormatting(c:any) {
    return `${(c.label)} `;
  }
}

export var stranice = [
  {
    "name": "0-200",
    "value": 3
  },
  {
    "name": "200-400",
    "value": 14
  },
  {
    "name": "400-700",
    "value": 4
  },
    {
    "name": "700+",
    "value": 2
  }
];
