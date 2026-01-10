package Encapsulation;
class CricketScore {

    // Private variables (data hiding)
    private int runs;
    private int wickets;

    // Public setter 
    public void setRuns(int runs) {
        if (runs >= 0) {
            this.runs = runs;
        }
    }

    // Public getter
    public int getRuns() {
        return runs;
    }

    // Public setter 
    public void setWickets(int wickets) {
        if (wickets >= 0 && wickets <= 10) {
            this.wickets = wickets;
        }
    }

    // Public getter
    public int getWickets() {
        return wickets;
    }
}

public class Cricket {
    public static void main(String[] args) {

        CricketScore score = new CricketScore(); 

        score.setRuns(120);
        score.setWickets(3);

        System.out.println("Runs: " + score.getRuns());
        System.out.println("Wickets: " + score.getWickets());
    }
}
