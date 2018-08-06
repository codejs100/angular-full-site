import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'afs-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  content: {
    tagLine: string,
    title: string,
    description: string
  }; 

  constructor(private _configService: ConfigService) { }

  ngOnInit() {
    this.content = this._configService.getContent().testimony;
  }

}
