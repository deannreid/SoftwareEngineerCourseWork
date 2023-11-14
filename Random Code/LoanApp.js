const loanAlice = {
    amount: 1000,
    score: 700, 
    income: 40_000
};

const loanEve = {
    amount: 1000,
    score: 700, 
    income: 40_000
};

const loanBob = {
    amount: 1000,
    score: 700, 
    income: 40_000
};

class LoanApp {
    constructor(a, s, i) {
        this.amount = a;
        this.score = s;
        this.income = i;
    }
    isApproved() {
        return ((this.amount / this.income) < 0.15) && (this.score >550);
}

const alice = new LoanApp(1000, 700, 40_000);
const eve   = new LoanApp(2000, 600, 40_000);
const bob   = new LoanApp(3000, 500, 40_000);