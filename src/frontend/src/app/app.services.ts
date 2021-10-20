import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    numberBet(): Promise<any> {
        return this.http.post<any>('http://localhost:3000/bet', {}).toPromise();
        
    }


}