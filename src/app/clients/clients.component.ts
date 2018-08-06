import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'afs-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: {
    tagLine: string,
    title: string,
    description: string
  }; 

  constructor(private _configService: ConfigService) { }

  ngOnInit() {
    this.clients = this._configService.getContent().clients;
  }

}
