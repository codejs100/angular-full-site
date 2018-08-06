import { Injectable } from '@angular/core';
import { configuration } from './configuration';

@Injectable()
export class ConfigService {

  constructor() { }

  getContent() {
    return configuration;
  }

}
