// string[] strs = { "flower", "flow", "flight" };


// string ret = "";
// string ret2 = "";
// for (int i = 0; i < strs[1].Length; i++)
// {
//     if (strs[0][i] == strs[1][i])
//         ret = $"{ret}{strs[0][i]}";
// }

// for (int j = 0; j < strs.Length; j++)
// {
//     for (int i = 0; i < ret.Length; i++)
//     {
//         if (ret[i] == strs[j][i])
//             ret2 = $"{ret2}{strs[j][i]}";
//     }
//     ret = ret2;
//     ret2 = "";
// }
// Console.WriteLine(ret);


Solution sol = new Solution();
Console.WriteLine(sol.LongestCommonPrefix(new string[] { "flower", "flow", "flight" }));

public class Solution
{
    public string LongestCommonPrefix(string[] strs)
    {
        string ret = "";
        string ret2 = "";
        int i = 0;
        if (strs[0] == "")
        {
            return "";
        }
        if (strs.Length == 1)
        {
            return strs[0];
        }
        while (i < strs[1].Length && i < strs[0].Length)
        {
            if (strs[0] != "" && strs[1] != "")
            {
                if (strs[0][i] == strs[1][i])
                    ret = $"{ret}{strs[0][i]}";

                i++;
            }
            else return ret;
        }

        for (int j = 0; j < strs.Length; j++)
        {
            for (int k = 0; k < ret.Length; k++)
            {
                if (strs[j] != "")
                {
                    if (ret[k] == strs[j][k])
                        ret2 = $"{ret2}{strs[j][k]}";
                }
            }
            ret = ret2;
            ret2 = "";
        }

        return ret;
    }

}