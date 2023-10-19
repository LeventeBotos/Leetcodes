Solution sol = new Solution();
Console.WriteLine(sol.IsValid("()"));

public class Solution
{
    public bool IsValid(string s)
    {
        string str = s.ToString();
        // string prev = s[0].ToString();
        // string now = s[0].ToString();


        for (int i = 0; i < s.Length; i++)
        {
            switch (str[i].ToString())
            {
                case "(":
                    if (")" != str[i + 1].ToString())
                    {
                        Console.WriteLine("uncorrect");
                        return false;
                    }
                    break;
                case "{":
                    if ("}" != str[i + 1].ToString())
                    {
                        Console.WriteLine("uncorrect");
                        return false;
                    }
                    break;
                case "[":
                    if ("]" != str[i + 1].ToString())
                    {
                        Console.WriteLine("uncorrect");
                        return false;
                    }
                    break;
            }

            // Console.WriteLine(s[i]);
            // Console.WriteLine("hi");
        }
        return true;
    }
}