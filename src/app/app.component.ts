import { Component , OnInit, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'Tekizma Dashboard';
  BarChart : any;
  litracyRateTableData : any[] = [
    {
      "state": "Karantaka",
      "maleLitracyRate": 40,
      "femaleLitracyRate": 55
    },
    {
      "state": "Kerela",
      "maleLitracyRate": 95,
      "femaleLitracyRate": 99
    },
    {
      "state": "Rajasthan",
      "maleLitracyRate": 56,
      "femaleLitracyRate": 89
    },
    {
      "state": "Tamil Nadu",
      "maleLitracyRate": 88,
      "femaleLitracyRate": 78
    },
    {
      "state": "Goa",
      "maleLitracyRate": 89,
      "femaleLitracyRate": 79
    }
  ];

  constructor(private ref: ChangeDetectorRef){};

  ngOnInit(){   
  }

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4','Sales Q5','Sales Q6','Sales Q7'];
  public pieChartData = [60, 80, 40, 10, 40, 120, 20];
  public pieChartType = 'pie';

  public radarChartType = 'radar';
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'},
    {data: [129, 140, 340, 67], label: '2018'},
    {data: [310, 423, 298, 142], label: '2018'}
  ];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData= [{
     data: [65, 59, 80, 81, 56, 55, 40], 
     label: 'Series A'
    }];
  
  getRandomNumber() : number{
    return Math.random()*100;
  }

  getRandomGraph() : void {

    this.barChartData= [{
      data: [this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber()], 
      label: 'Series A'
     }];

     this.pieChartData = [this.getRandomNumber(),
      this.getRandomNumber(),
      this.getRandomNumber(),
      this.getRandomNumber(),
      this.getRandomNumber(),
      this.getRandomNumber(),
      this.getRandomNumber()]
  
    this.radarChartData = [
    {
      data: [
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber()
      ],
      label: '2017'
    },
    {
      data: [
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber()
      ],
      label: '2018'
    },
    {
      data: [
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber()
      ],
      label: '2019'
    },
    {
      data: [
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber(),
        this.getRandomNumber()
      ],
      label: '2020'
    }
  ];

  this.litracyRateTableData = [
    {
      "state": "Karantaka",
      "maleLitracyRate": this.getRandomNumber(),
      "femaleLitracyRate": this.getRandomNumber()
    },
    {
      "state": "Kerela",
      "maleLitracyRate": this.getRandomNumber(),
      "femaleLitracyRate": this.getRandomNumber()
    },
    {
      "state": "Rajasthan",
      "maleLitracyRate": this.getRandomNumber(),
      "femaleLitracyRate": this.getRandomNumber()
    },
    {
      "state": "Tamil Nadu",
      "maleLitracyRate": this.getRandomNumber(),
      "femaleLitracyRate": this.getRandomNumber()
    },
    {
      "state": "Goa",
      "maleLitracyRate": this.getRandomNumber(),
      "femaleLitracyRate": this.getRandomNumber()
    }
  ];
}
};
