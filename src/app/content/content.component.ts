import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'afs-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  content: {
    tagLine: string,
    title: string,
    description: string
  }; 

  constructor(private _configService: ConfigService) { }

  ngOnInit() {
    this.content = this._configService.getContent().services;
  }

}
