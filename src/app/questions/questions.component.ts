import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { QuestionsService } from '../questions.service';
import { Quiz, Answers, Choice, Question } from '../quiz.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  quiz: Quiz;
  answers: Answers;
  questions: Question[];
  currentQuestionIndex: number;
  currentIncorrect: number;
  showResults = false;

  // inject both the active route and the questions service
  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) {}

  ngOnInit() {
    // read from the dynamic route and load the proper quiz data
    this.questionsService
      .getQuestions(this.route.snapshot.params.quizId)
      .subscribe((questions) => {
        // initialize everything
        this.questions = questions;
        this.answers = new Answers([], []);
        this.currentIncorrect = 0;
        this.currentQuestionIndex = 0;
      });
  }

  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }

  nextOrViewResults() {
    const q = this.questions[this.currentQuestionIndex].choices;
    const correctA = q.find((answer) => answer.correct === true);

    const a = this.answers.values[this.currentQuestionIndex];
    const check = a.correct;

    console.log(correctA);

    if (check === false) {
      const tempArr: any = {
        questionName: this.questions[this.currentQuestionIndex].label,
        choices: this.questions[this.currentQuestionIndex].choices,
        picked: a.value,
        correctAnswer: correctA.value,
      };
      this.answers.incorrect[this.currentIncorrect] = tempArr;
      this.currentIncorrect++;
    }

    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults = true;
      return;
    }

    this.currentQuestionIndex++;
  }

  reset() {
    this.quiz = undefined;
    this.questions = undefined;
    this.answers = undefined;
    this.currentQuestionIndex = undefined;
  }
}
