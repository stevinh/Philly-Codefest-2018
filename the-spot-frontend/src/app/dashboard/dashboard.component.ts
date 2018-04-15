import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import {MatSidenav} from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//Fake event data
/*export locations = [
  {"lat": }
]*/

export class DashboardComponent implements OnInit {

  
  @ViewChild('gmap') gmapElement: any;

  @ViewChild('sidenav') sidenav: MatSidenav;
  

  map: google.maps.Map;
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


  constructor(private router: Router, private route: ActivatedRoute) { }

  goToRate(){
    this.router.navigate([`../rate`], { relativeTo: this.route });
  }

  goToEmerg(){
    this.router.navigate([`../siteMap`], { relativeTo: this.route });
  }


  ngOnInit() {
    var myLatLng = {
    codefest:{lat: 39.95670, lng: -75.19067},
    mikes:{lat: 39.960970, lng: -75.196795},
    world:{lat: 39.952159, lng: -75.184960},
    landmark:{lat: 39.955986, lng: -75.190663},
    sabrinas:{lat: 39.960035, lng: -75.190716},    
    };
    
    var mapProp = {
      center: new google.maps.LatLng(39.95670, -75.19067),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    var codefestContent = '<div style = "width: 250px"><button onclick="window.location.href=\'/codefest\'" name="Name" style="color: red; font-weight: bold;font-size:17px"> Philly{CODEFEST} </button>'+
    	'<div name="location"> DASKALAKIS ATHLETIC CENTER\nDREXEL UNIVERSITY, PHILADELPHIA, PA</div>'+
	'<div style = "text-align:left; font-size:15px" name = "rating">'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'4.7/5.0</div>'+
	'<a href="https://typescript-chat.firebaseapp.com/"> Codefest Chat </a></div>';

    var mikesContent = '<div style = "width: 250px"><button onclick="window.location.href=\'/mike\'" name="Name" style="color: red; font-weight: bold;font-size:17px"> Mike\'s House Party </button>'+
    	'<div name="location"> 3741 Baring Street, Philadelphia, PA</div>'+
	'<div style = "text-align:left; font-size:15px" name = "rating">'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'5.0/5.0</div>'+
	'<a href="https://typescript-chat.firebaseapp.com/"> Mike\'s House Party Chat </a></div>';

    var worldContent = '<div style = "width: 250px"><div name="Name" style="color: red; font-weight: bold;font-size:17px"> World Cafe Live </div>'+
    	'<div name="location"> DASKALAKIS ATHLETIC CENTER\nDREXEL UNIVERSITY, PHILADELPHIA, PA</div>'+
	'<div style = "text-align:left; font-size:15px" name = "rating">'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'4.1/5.0</div>'+
	'<a href="https://typescript-chat.firebaseapp.com/"> World Cafe Live Chat </a></div>';

    var landmarkContent = '<div style = "width: 250px"><button onclick="window.location.href=\'/landmark\'" name="Name" style="color: red; font-weight: bold;font-size:17px"> Landmark </button>'+
    	'<div name="location"> DASKALAKIS ATHLETIC CENTER\nDREXEL UNIVERSITY, PHILADELPHIA, PA</div>'+
	'<div style = "text-align:left; font-size:15px" name = "rating">'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'3.4/5.0</div>'+
	'<a href="https://typescript-chat.firebaseapp.com/"> Landmark Chat </a></div>';

    var sabrinasContent = '<div style = "width: 250px"><div name="Name" style="color: red; font-weight: bold;font-size:17px"> Sabrinas\'s </div>'+
    	'<div name="location"> DASKALAKIS ATHLETIC CENTER\nDREXEL UNIVERSITY, PHILADELPHIA, PA</div>'+
	'<div style = "text-align:left; font-size:15px" name = "rating">'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'<img style="width: 15px; height: 15px" src="/assets/star.svg"></img>'+
	'4.5/5.0</div>'+
	'<a href="https://typescript-chat.firebaseapp.com/"> Sabrina\'s Chat </a></div>';

    var infowindows = {codefest: new google.maps.InfoWindow({
    	content: codefestContent,
    }),
    mikes: new google.maps.InfoWindow({
    	content: mikesContent,
    }),
    world: new google.maps.InfoWindow({
    	content: worldContent,
    }),
    landmark: new google.maps.InfoWindow({
    	content: landmarkContent,
    }),
    sabrinas: new google.maps.InfoWindow({
    	content: sabrinasContent,
    }),
    }

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    var markers = {codefest: new google.maps.Marker({
      position: myLatLng.codefest,
      map: this.map ,
      title: 'CodeFest'
    }),
    mikes: new google.maps.Marker({
      position: myLatLng.mikes,
      map: this.map ,
      title: 'Mike\'s'
    }),
    world: new google.maps.Marker({
      position: myLatLng.world,
      map: this.map ,
      title: 'World'
    }),
    landmark: new google.maps.Marker({
      position: myLatLng.landmark,
      map: this.map ,
      title: 'Landmark'
    }),
    sabrinas: new google.maps.Marker({
      position: myLatLng.sabrinas,
      map: this.map ,
      title: 'Sabrina\'s'
    }),
    }

    markers.codefest.addListener('click', x => {infowindows.codefest.open(this.map, markers.codefest)});
    markers.mikes.addListener('click', x => {infowindows.mikes.open(this.map, markers.mikes)});
    markers.world.addListener('click', x => {infowindows.world.open(this.map, markers.world)});
    markers.landmark.addListener('click', x => {infowindows.landmark.open(this.map, markers.landmark)});
    markers.sabrinas.addListener('click', x => {infowindows.sabrinas.open(this.map, markers.sabrinas)});

  }
}
