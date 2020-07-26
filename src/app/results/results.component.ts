import { Component, Input } from '@angular/core';
import { Answers, Question } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  @Input() answers: Answers;
  @Input() questions: Question;

  answersCheck(incorrectNum: number) {
    console.log(this.answers);
    if (incorrectNum === 0) {
      return 'WOW! You really know your killers. Creep.';
    }
    if (incorrectNum <= 1) {
      return 'You\'re almost a Zodiac level with killer trivia!';
    }
    if (incorrectNum <= 3) {
      return 'I wouldn\'t try to get away with murder anytime soon if I were you.';
    }
    if (incorrectNum >= 4) return 'Do you even like true crime?';
  }
}
