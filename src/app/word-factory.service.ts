import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WordFactoryService {
  cert: string;

  constructor(private http: HttpClient) {}

  check(cert: string) {
    console.log('checking', cert);
  }
}
