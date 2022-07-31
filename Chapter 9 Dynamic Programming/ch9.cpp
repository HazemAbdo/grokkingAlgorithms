#include <iostream>
using namespace std;
// Dynamic programming starts by solving subproblems and builds up to solving the big problem
// With the dynamic-programming solution, you either take the item or not. There’s no way for it
// to figure out that you should take half an item.
// for fractional knapsack, you can use greedy algorithm to solve the problem
//------------------------------------------------------------------------------------------------
//• Dynamic programming is useful when you’re trying to //*optimize something given a constraint.
// In the knapsack problem, you had to maximize the value of the goods you stole, constrained by the size of
// the knapsack.
//• You can use dynamic programming when the problem can be broken into//* discrete sub-problems,
// and they don’t depend on each other.
//------------------------------------------------------------------------------------------------
// It can be hard to come up with a dynamic-programming solution.Some general tips follow:
//• Every dynamic-programming solution involves a //*grid.
//• ((The values in the cells)) are usually what you’re trying to optimize. For the knapsack problem,
// the values were the value of the goods.
//• Each cell is a subproblem, so think about how you can divide your problem into sub-problems.
// That will help you figure out what the axes are
//------------------------------------------------------------------------------------------------
// 0-1 knapsack problem
// Given weights and values of n items, put these items in a knapsack of capacity W to get
// the maximum total value in the knapsack.You cannot break an item, either pick the complete item or don’t pick it
int max(int a, int b)
{
    return (a > b) ? a : b;
}
int knapSack(int wt[], int val[], int n, int maxWeight)
{
    int **dp = new int *[n];
    for (int i = 0; i < n; i++)
    {
        // each array is array of zeros
        dp[i] = new int[maxWeight];
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < maxWeight; j++)
        {
            dp[i][j] = 0;
        }
    }
    int remainder = 0;
    int above = 0;
    int maxAvailWeight = 0;
    int chosenElement = 0;
    for (int i = 0; i < n; i++)
    {
        chosenElement = i;
        for (int j = 0; j < maxWeight; j++)
        {
            maxAvailWeight = j + 1;
            if (wt[chosenElement] <= maxAvailWeight)
            {
                dp[chosenElement][j] = val[chosenElement];
            }

            if (chosenElement > 0)
            {
                above = dp[chosenElement - 1][j];
                if (maxAvailWeight - wt[chosenElement] > 0)
                    remainder = dp[chosenElement - 1][maxAvailWeight - wt[chosenElement] - 1];
                else
                    remainder = 0;
            }
            else
                above = 0;

            dp[chosenElement][j] = max(above, dp[chosenElement][j] + remainder);
        }
        // print the row
        for (int k = 0; k < maxWeight; k++)
        {
            cout << dp[chosenElement][k] << " ";
        }
        cout << endl;
    }
    return dp[n - 1][maxWeight - 1];
}
// int main()
// {
//     int val[] = {1500, 1000, 2000, 4500, 3000, 7000, 4500};
//     int wt[] = {1, 1, 1, 3, 3, 4, 5};
//     int W = 7;
//     int n = sizeof(val) / sizeof(val[0]);
//     cout << knapSack(wt, val, n, W);
//     return 0;
// }
//------------------------------------------------------------------------------------------------
// longest common subsequence
// AG(G)(T)(A)(B)(z)(z)
//(G)X(T)X(A)Y(B)(z)(z)
int matrixMax(int **matrix, int row, int col)
{
    int max = 0;
    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            if (matrix[i][j] > max)
                max = matrix[i][j];
        }
    }
    return max;
}
int longestCommonSubsequence(string x, string y, int m, int n)
{
    int **dp = new int *[m];
    for (int i = 0; i < m; i++)
    {
        // each array is array of zeros
        dp[i] = new int[n];
    }
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            dp[i][j] = 0;
        }
    }
    int firstStringChar = 0;
    int secondStringChar = 0;
    int topLeft = 0;
    int top = 0;
    int left = 0;

    for (int i = 0; i < m; i++)
    {
        firstStringChar = i;
        for (int j = 0; j < n; j++)
        {
            secondStringChar = j;
            if (firstStringChar > 0)
            {
                top = dp[firstStringChar - 1][secondStringChar];
                if (secondStringChar > 0)
                {
                    left = dp[firstStringChar][secondStringChar - 1];
                    topLeft = dp[firstStringChar - 1][secondStringChar - 1];
                }
            }
            if (x[firstStringChar] == y[secondStringChar])
            {
                dp[firstStringChar][secondStringChar] = topLeft + 1;
            }
            else
            {
                // we remember our sequence even if a cut is made
                dp[firstStringChar][secondStringChar] = max(top, left);
            }
        }
    }
    return matrixMax(dp, m, n);
}
// int main()
// {
//     string X = "AGGTABzz";
//     string Y = "GXTXAYBzz";
//     int m = X.length();
//     int n = Y.length();
//     cout << "Length of LCS is " << longestCommonSubsequence(X, Y, m, n);
//     return 0;
// }
//------------------------------------------------------------------------------------------------
// longest common substring TTTAAA--->TTTAAA
int longestCommonSubstring(string x, string y, int m, int n)
{
    int **dp = new int *[m];
    for (int i = 0; i < m; i++)
    {
        // each array is array of zeros
        dp[i] = new int[n];
    }
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            dp[i][j] = 0;
        }
    }
    int firstStringChar = 0;
    int secondStringChar = 0;
    int topLeft = 0;
    int top = 0;
    int left = 0;

    for (int i = 0; i < m; i++)
    {
        firstStringChar = i;
        for (int j = 0; j < n; j++)
        {
            secondStringChar = j;
            if (firstStringChar > 0)
            {
                top = dp[firstStringChar - 1][secondStringChar];
                if (secondStringChar > 0)
                {
                    left = dp[firstStringChar][secondStringChar - 1];
                    topLeft = dp[firstStringChar - 1][secondStringChar - 1];
                }
            }
            if (x[firstStringChar] == y[secondStringChar])
            {
                dp[firstStringChar][secondStringChar] = topLeft + 1;
            }
            else
            {
                // any cut in the sequence will make the substring 0
                dp[firstStringChar][secondStringChar] = 0;
            }
        }
    }
    return matrixMax(dp, m, n);
}
int main()
{
    string X = "AGGTABzz";
    string Y = "GXTXAYBzz";
    int m = X.length();
    int n = Y.length();
    cout << "Length of LCS is " << longestCommonSubstring(X, Y, m, n);
    return 0;
}