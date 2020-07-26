export class Choice {
  constructor(public value: string, public correct: any) {}
}

export class Question {
  constructor(
    public label: string,
    public choices: Choice[],
    public correct: Choice['correct']
  ) {}
}

export class Quiz {
  constructor(
    public label: string,
    public name: string,
    public description: string,
    public fileName: string,
    public imgUrl: string
  ) {}
}

export class Answers {
  constructor(
    public values: Choice[] = [],
    public incorrect: Choice['correct']
  ) {}
}
