import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ngOnInit() {
    $('#scroller').click(function(e) {
      $('html, body').animate({ scrollTop: $('.mainDescription').offset().top }, 1000);
    });
  }
}
