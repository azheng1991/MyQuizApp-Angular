import { Component, Input } from '@angular/core';
import { Answers } from '../quiz.model';

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
      return '';
    }
    if (incorrectNum <= 1) {
      return '';
    }
    if (incorrectNum <= 3) {
      return '';
    }
    if (incorrectNum >= 4) return '';
  }
}
