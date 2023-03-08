import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { PostData } from '../Classes/CustomQueryClasses';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomQueryService {

  /**URL to Apollo server */
  private configURI = "http://localhost:4000";

  constructor(private httpClient: HttpClient) { }

  /**
   * Sends a post request
   * @param input data to be posted to server
   * @param subject subject to push the result to
   */
  public SendPostRequest<T>(input: PostData, subject: Subject<T>){
    (<Observable<T>> this.httpClient.post(this.configURI, JSON.stringify(input), httpOptions)).subscribe({
      next(value) {
        subject.next(value);
      },
    });
  }
}
