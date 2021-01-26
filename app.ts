let bio:string = '나는 문자열이다';
let score:number = 233;
let go: boolean = true;
let year: number = 2021;

let score1 = {
  bio:'바꿔보자 정보를',
  score:12,
  year: 2021,
  go: false
};

interface Point {
  readonly bio:string;
  score:number;
  year?: number;
  go: boolean;
  addComment?: (comment:string) => string;
}

function getInfomation(score: number): Point 
{
  return {
    bio:'바꿔보자 정보를',
    score:12,
    go: false
  }  
}

function saveScore(saveScore: Point): void {
 
}

saveScore(score1);