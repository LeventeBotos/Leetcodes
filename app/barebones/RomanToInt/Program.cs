// See https://aka.ms/new-console-template for more information
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
Solution sol = new Solution();
Console.WriteLine(sol.RomanToInt("MCMXCIV"));

public class Solution
{
    public int RomanToInt(string s)
    {

        string[] values = new string[s.Length];
        int[] valuesi = new int[s.Length];
        values[0] = s[0].ToString();
        switch (values[0])
        {
            case "I":
                valuesi[0] = 1;
                break;
            case "V":
                valuesi[0] = 5;
                break;
            case "X":
                valuesi[0] = 10;
                break;
            case "L":
                valuesi[0] = 50;
                break;
            case "C":
                valuesi[0] = 100;
                break;
            case "D":
                valuesi[0] = 500;
                break;
            case "M":
                valuesi[0] = 1000;
                break;
        }
        int res = valuesi[0];

        for (int i = 1; i < s.Length; i++)
        {
            values[i] = s[i].ToString();
            switch (values[i])
            {
                case "I":
                    valuesi[i] = 1;
                    break;
                case "V":
                    valuesi[i] = 5;
                    break;
                case "X":
                    valuesi[i] = 10;
                    break;
                case "L":
                    valuesi[i] = 50;
                    break;
                case "C":
                    valuesi[i] = 100;
                    break;
                case "D":
                    valuesi[i] = 500;
                    break;
                case "M":
                    valuesi[i] = 1000;
                    break;
            }

            if (valuesi[i - 1] < valuesi[i])
            {
                res -= valuesi[i - 1] * 2;
            }
            res += valuesi[i];
        }
        return res;
    }
}