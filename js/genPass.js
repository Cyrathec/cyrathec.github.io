async function GenPassword({type = false, length = 16, ucl = false, lcl = false, num = false, spe = false, cus = false, cusVal = "", dup = false})
{
    if(CheckParams(type, length, ucl, lcl, num, spe, cus, cusVal, dup))
    {
        console.error("Wrong parameters in GenPassword");
        return;
    }

    var result = "";
    const charUpp = ucl ? "KAMIVDXHLOWRZQJBSEUPFTGCNY" : "";
    const charLow = lcl ? "sxeypiftcdmgzoanrhjulbkvqw" : "";
    const charNum = num ? "2480516397" : "";
    const charSpe = spe ? "}!.@~/+[{#=\\*?_-$],%^:" : "";
    const charCus = cus ? cusVal : "";
    const charAll = charUpp + charLow + charNum + charSpe + charCus
    const charset = dup ? DupCheck(charAll) : charAll;
    const randset = await GetRandom(type, length, charset.length)

    for (let i = 0; i < length; i++)
    {
        result += charset.charAt(randset[i]);
    }

    return result;
}

function CheckParams(type, length, ucl, lcl, num, spe, cus, cusVal, dup)
{
    if(typeof type != "boolean" || typeof length != "number" || typeof ucl != "boolean" || typeof lcl != "boolean" || typeof num != "boolean"
        || typeof spe != "boolean" || typeof cus != "boolean" || typeof cusVal != "string" || typeof dup != "boolean")
    {
        return true;
    }

    return false;
}

function DupCheck(str)
{
    return [...new Set((str).split(""))].join("");
}

function GetRandom(type, length, max)
{
    return new Promise(function (resolve, reject)
    {
        if(type)
        {
            var request = new XMLHttpRequest();
            request.open("GET", "https://www.random.org/integers/?num=" + length + "&min=0&max=" + (max - 1) + "&col=1&base=10&format=plain&rnd=new");
    
            request.onload = function()
            {
                if (this.status == 200)
                {
                    var res = request.responseText.split("\n")
                    res.pop()

                    for (let index = 0; index < res.length; index++)
                    {
                        res[index] = parseInt(res[index]);
                    }

                    resolve(res);
                }
                else
                {
                    reject(
                    {
                        status: this.status,
                        statusText: request.statusText
                    });
                }
            };
    
            request.onerror = function()
            {
                reject(
                {
                    status: this.status,
                    statusText: request.statusText
                });
            };
    
            request.send();
        }
        else
        {
            var res = []
            for (let index = 0; index < length; index++)
            {
                res.push(Math.floor(Math.random() * max))
            }
            resolve(res)
        }
    });
}