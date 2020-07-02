import { Component, OnInit } from '@angular/core';
import { ComicServiceService } from '../comic-service.service';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  all_data:any;
  name_search:any='';
  offset_value = 1;
  total_page:any;
  currentpage_result: any;
  current_offset: any;
  final_url:any;
  page_previous_class: string;
  page_next_class: string;
  items =[];

  constructor(private service:ComicServiceService) { }

  ngOnInit(): void {
    this.serviceLilstCall();
  }
  serviceLilstCall(){
    if(this.name_search =='' || this.name_search == undefined || this.name_search == null){
      this.final_url = '&limit=4&offset='+this.offset_value+'&sort=date_last_updated:desc';
    }else{
      this.final_url='&limit=4&offset='+this.offset_value+'&sort=date_last_updated:desc&filter=name:'+this.name_search;
    }
    this.service.getListCharaters(this.final_url).then(res=>{
      let value = res;
      this.all_data = value.results;
      this.total_page = value.number_of_total_results;
      this.currentpage_result = value.number_of_page_results;
      this.current_offset = value.offset;
      if(this.current_offset == 1){
        this.page_previous_class = 'disabled';
      }else{
        this.page_previous_class = '';
      }
      if(this.current_offset == 138529){
        this.page_next_class = 'disabled';
      }else{
        this.page_next_class = '';
      }
      // console.log(this.all_data);
    });
  }
  previous_page(value){
    if(value == 1){

    }else{
      this.offset_value = value - 1;
      this.serviceLilstCall();
    }
  }
  next_page(value){
    if(value == 138529){

    }else{
      this.offset_value = value + 1;
      this.serviceLilstCall();
    }
  }
  onChangePage(event){

  }



}
