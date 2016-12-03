# Tetris AI 
*To Run the Game Tetris AI [click here](https://tetris-artificial-intelligence.github.io)*

This project is based on Tetris game with an AI algotithm that looks for pattersn in which lines can be cleard.


**Game Goal**

goal is to clear as many lines as possible, and therefore, to make as many moves as possible.

To meet this goal, our AI will decide the best move for a given Tetris piece by trying out all the possible moves (rotation and position). It computes a score for each possible move (together with the lookahead piece), and selects the one with the best score as its next move.

The score for each move is computed by assessing the grid the move would result in. This assessment is based on four heuristics: aggregate height, complete lines, holes, and bumpiness, each of which the AI will try to either minimize or maximize.


**Completed Lines**

This is probably the most intuitive heuristic among the four. It is simply the the number of complete lines in a grid. We’ll want to maximize the number of complete lines, because clearing lines is the goal of the AI, and clearing lines will give us more space for more pieces.

![Completed Lines](/images/complete_lines.png)

- - - -

**Agregate Heigth**

This heuristic tells us how “high” a grid is. To compute the aggregate height, we take the sum of the height of each column (the distance from the highest tile in each column to the bottom of the grid). We’ll want to minimize this value, because a lower aggregate height means that we can drop more pieces into the grid before hitting the top of the grid.

![Aggregate Height](/images/aggregate_height.png)

- - - -

**Bumpiness**

 Consider a case where we get a deep “well” in our grid that makes it undesirable: The presence of these wells indicate that lines that can be cleared easily are not cleared. If a well were to be covered, all the rows which the well spans will be hard to clear. To generalize the idea of a “well”, we define a heuristic which I shall name “bumpiness”.

The bumpiness of a grid tells us the variation of its column heights. It is computed by summing up the absolute differences between all two adjacent columns.

![Bumpiness 1](/images/bumpiness1.png) ![Bumpiness 2](/images/bumpiness2.png)

- - - -

**Holes**

A hole is defined as an empty space such that there is at least one tile in the same column above it. A hole is harder to clear, because we’ll have to clear all the lines above it before we can reach the hole and fill it up. So we’ll have to minimize these holes.

![Number Holes](/images/number_holes.png)

- - - -

**Conclusion**

some other heuristics such as the highest column height and the number of consecutive holes.

It turns out that some of them were redundant, and some of them were replaced by better heuristics (for example, the highest column height heuristic was replaced by the aggregate height), since this produces better results.

I would also like to stress that this AI was tuned for a specific set of rules (I defined them in the first few sections of this article). The results may or may not be the same for a different set of rules.

For example, using a naive random piece generator instead may result in an obscenely long sequence of “S” or “Z” tiles which will increase the difficulty of the AI. Allowing more lookaheads will also allow the AI to make more complex moves, in which case it will probably perform better (if properly tuned).

As such, when comparing between the results of different Tetris AIs, much attention should be placed on the set of rules used for a fair comparison to be made.

* Original work by Lee Yiyuan. 
* Reanalyzed and implemented by Isaac Lino, Angel Gonzales, Kevin Ortega and Marco Rubio

