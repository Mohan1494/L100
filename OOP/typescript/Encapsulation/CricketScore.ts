// CricketScore.ts
class CricketScore {
    // Private variables (data hiding)
    private runs!: number;
    private wickets!: number;

    // Public setter
    public setRuns(runs: number): void {
        if (runs >= 0) {
            this.runs = runs;
        }
    }

    // Public getter
    public getRuns(): number {
        return this.runs;
    }

    // Public setter
    public setWickets(wickets: number): void {
        if (wickets >= 0 && wickets <= 10) {
            this.wickets = wickets;
        }
    }

    // Public getter
    public getWickets(): number {
        return this.wickets;
    }
}

// Main file (Cricket.ts)
const score = new CricketScore(); // default constructor

score.setRuns(120);
score.setWickets(3);

console.log("Runs:", score.getRuns());
console.log("Wickets:", score.getWickets());
