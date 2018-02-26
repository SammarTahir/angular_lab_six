import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable()
export class LabSixService {

  constructor(public http: HttpClient) { }

GetStudentData(): Observable<any>{
  return this.http.get("https://www.jsonblob.com/api/jsonblob/f179d4be-1b10-11e8-8015-b9092490cc78").map(obs => obs.json());
}
}
