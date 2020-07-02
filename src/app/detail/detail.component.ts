import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ComicServiceService } from '../comic-service.service';
declare var $: any;
//import { Http, Response ,Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  final_url: string;
  all_detail: any;
  detail_url: any;
  name: any;
  screen_large_url: any;
  real_name: any;
  date_last_updated: any;
  gender: any;
  birth: any;
  origin: any;
  powers: any;
  team_enemies: any;
  team_friends: any;
  first_appeared_in_issue: any;
  deck: any;

  constructor(private router:Router,private route:ActivatedRoute,private service:ComicServiceService) { }

  id:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.serviceLilstCall();
    // this.activatedRoute.snapshot.queryParams.type;
  }

  serviceLilstCall(){
      this.final_url='&filter=id:'+this.id;
    this.service.getListCharaters(this.final_url).then(res=>{
      let value = res.results[0];
      this.detail_url = value.api_detail_url;
      this.detaillist(this.detail_url); 
    });
  }
  detaillist(val){
    let data= val+'?api_key=c45d7aa182afe1396ca799ec772e411255121346&format=json';
    this.service.getcharacterdetail(data).then(res=>{
      let value = res;
      this.all_detail = value.results;
      this.name = this.all_detail.name;
      this.deck = this.all_detail.deck;
      this.screen_large_url = this.all_detail.image.screen_large_url;
      this.real_name = this.all_detail.real_name;
      this.date_last_updated = this.all_detail.date_last_updated;
      this.gender = this.all_detail.gender;
      this.birth = this.all_detail.birth;
      this.origin = this.all_detail.origin.name;
      let powers = this.all_detail.powers;
      let finalpower = powers.map(function(a) {return a["name"];});
      this.powers = finalpower.join(' | ');      
      let team_enemies = this.all_detail.character_enemies;
      let finalenemies = team_enemies.map(function(a) {return a["name"];});
      this.team_enemies = finalenemies.join(' , ');
      let team_friends = this.all_detail.character_friends;
      let finalfriends = team_friends.map(function(a) {return a["name"];});
      this.team_friends = finalfriends.join(' , ');
      this.first_appeared_in_issue = this.all_detail.first_appeared_in_issue.name;
    });
    }

}
