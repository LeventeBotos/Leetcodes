// See https://aka.ms/new-console-template for more information

Solution sol = new Solution();
Console.WriteLine("Give me a number");
int inp = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(sol.IsPalindrome(inp));

public class Solution
{
    public bool IsPalindrome(int x)
    {
        string chars = x.ToString();
        int len = chars.Length;

        if (len % 2 == 0)
        {

            for (int j = 0; j < len / 2; j++)
            {

                if (chars[j] != chars[len - 1 - j])
                {
                    return false;

                }

            }
            return true;
        }
        else
        {

            for (int j = 0; j < (len - 1) / 2; j++)
            {

                if (chars[j] != chars[len - 1 - j])
                {
                    return false;

                }

            }
            return true;
        }

    }
}

// public class Solution
// {
//     public bool IsPalindrome(int x)
//     {
//         string chars = x.ToString();
//         // Console.WriteLine(chars[0]);
//         // Console.WriteLine(chars.Length);

//         // for (int i = 0; i < x.ToString().Length; i++)
//         // {
//         //     //maps chars to array
//         //     // chars[i] = x.ToString();
//         //     // Console.WriteLine("hiu");
//         //     Console.WriteLine(x.ToString()[i]);
//         // }

//         // for (int i = 0; i < chars.Length; i++)
//         // {
//         if (chars.Length % 2 == 0)
//         {
//             // Console.WriteLine("Even");
//             // int n = chars.Length / 2;
//             for (int j = 0; j < chars.Length / 2; j++)
//             {

//                 if (chars[j] != chars[chars.Length - 1 - j])
//                 {
//                     return false;

//                 }
//                 // Console.WriteLine(j);

//             }
//             return true;
//         }
//         else
//         {
//             // Console.WriteLine("Odd");
//             // int n = (chars.Length - 1) / 2;
//             for (int j = 0; j < (chars.Length - 1) / 2; j++)
//             {

//                 if (chars[j] != chars[chars.Length - 1 - j])
//                 {
//                     return false;

//                 }
//                 // Console.WriteLine(j);

//             }
//             return true;
//         }
//         // }
//         //reads the same forward as backwards
//         return false;
//     }
// }