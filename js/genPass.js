function GenPassword(length = 16, ucl = false, lcl = false, num = false, spe = false, cus = false, cusVal = "", dup = false)
{
    CheckParams();

    var result = "";
    const charUpp = ucl ? "KAMIVDXHLOWRZQJBSEUPFTGCNY" : "";
    const charLow = lcl ? "sxeypiftcdmgzoanrhjulbkvqw" : "";
    const charNum = num ? "2480516397" : "";
    const charSpe = spe ? "}!.@~/+[{#=\\*?_-$],%^:" : "";
    const charCus = cus ? cusVal : "";
    const charAll = charUpp + charLow + charNum + charSpe + charCus
    const charset = dup ? DupCheck(charAll) : charAll;

    for (let i = 0; i < length; i++)
    {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return result;
}

function CheckParams()
{
    
}

function DupCheck(str)
{
    return [...new Set((str).split(""))].join("");
}