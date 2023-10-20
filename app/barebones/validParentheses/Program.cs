Solution sol = new Solution();
Console.WriteLine(sol.IsValid("([)"));

public class Solution
{
    public bool IsValid(string s)
    {
        var stack = new Stack<char>();
        foreach (char c in s)
        {
            if (c == '(' || c == '[' || c == '{')
            {
                stack.Push(c);
            }
            else if (c == ')' || c == ']' || c == '}')
            {
                if (stack.Count == 0)
                {
                    return false;
                }
                char top = stack.Pop();
                if (c == ')' && top != '(')
                {
                    return false;
                }
                if (c == ']' && top != '[')
                {
                    return false;
                }
                if (c == '}' && top != '{')
                {
                    return false;
                }
            }
        }
        return stack.Count == 0;
    }
}


// public class Solution
// {
//     public bool IsValid(string s)
//     {
//         string str = s.ToString();
//         bool one = false;
//         bool two = false;
//         bool three = false;
//         int onen = 0;
//         int twon = 0;
//         int threen = 0;

//         for (int i = 0; i < s.Length; i++)
//         {

//             switch (str[i].ToString())
//             {
//                 case "(":
//                     one = !one;
//                     onen = i;
//                     break;
//                 case ")":
//                     one = !one;
//                     if (i - onen % 2 != 1)
//                     {
//                         return false;
//                     }
//                     break;
//                 case "{":
//                     two = !two;
//                     twon = i;
//                     break;
//                 case "}":
//                     two = !two;
//                     if (i - twon % 2 != 1)
//                     {
//                         return false;
//                     }
//                     break;
//                 case "[":
//                     three = !three;
//                     threen = i;
//                     break;
//                 case "]":
//                     three = !three;
//                     if (i - threen % 2 != 1)
//                     {
//                         return false;
//                     }
//                     break;
//             }
//         }
//         if (one == false && two == false && three == false)
//         { return true; }
//         else
//         { return false; }
//     }
// }

// public class Solution
// {
//     public bool IsValid(string s)
//     {
//         string str = s.ToString();
//         // string prev = s[0].ToString();
//         // string now = s[0].ToString();


//         for (int i = 0; i < s.Length; i++)
//         {
//             switch (str[i].ToString())
//             {
//                 case "(":
//                     if (")" != str[i + 1].ToString())
//                     {
//                         Console.WriteLine("uncorrect");
//                         return false;
//                     }
//                     break;
//                 case "{":
//                     if ("}" != str[i + 1].ToString())
//                     {
//                         Console.WriteLine("uncorrect");
//                         return false;
//                     }
//                     break;
//                 case "[":
//                     if ("]" != str[i + 1].ToString())
//                     {
//                         Console.WriteLine("uncorrect");
//                         return false;
//                     }
//                     break;
//             }

//             // Console.WriteLine(s[i]);
//             // Console.WriteLine("hi");
//         }
//         return true;
//     }
// }