import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  quizzes: Quiz[];

  constructor(public questionsService: QuestionsService) {}

  ngOnInit() {
    this.questionsService.getQuizzes().subscribe((response) => {
      this.quizzes = response;
    });
  }

  reset() {
    this.quizzes = undefined;
  }
}
