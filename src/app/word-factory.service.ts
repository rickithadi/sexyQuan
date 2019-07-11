import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WordFactoryService {

  constructor() {}

  check(cert: string) {
    console.log('checking', cert);
  }
}
