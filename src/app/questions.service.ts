import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Quiz, Question } from './quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  // public getJSON(fileId: string) {
  //   return this.http.get(`./assets/${fileId}.json`) as Observable<any>;
  // }

  public getQuizzes() {
    return this.http.get(`./assets/quiz-list.json`).pipe(
      map((result: any[]) => {
        return result.map(
          (r) => new Quiz(r.label, r.name, r.description, r.fileName)
        );
      })
    );
  }

  public getQuestions(filename: String) {
    return this.http.get(`./assets/${filename}`).pipe(
      map((result: any[]) => {
        return result.map((r) => new Question(r.label, r.choices));
      })
    );
  }
}
