function GetParams()
{
    const type = $("#tr")[0].checked;
    const length = (parseInt($("#length")[0].value) > 0) ? parseInt($("#length")[0].value) : 16;
    const ucl = $("#ucl")[0].checked || false;
    const lcl = $("#lcl")[0].checked || false;
    const num = $("#num")[0].checked || false;
    const spe = $("#spe")[0].checked || false;
    const cus = $("#cus")[0].checked || false;
    const cusVal = $("#cus_val")[0].value || "";
    const dup = $("#dup")[0].checked || false;

    return {type, length, ucl, lcl, num, spe, cus, cusVal, dup};
}

$("#btn-gen")[0].onclick = async function()
{
    $("#result")[0].children[0].value = await GenPassword(GetParams());
    $("#password-quality")[0].innerText = PasswordQualityCalculator($("#result")[0].children[0].value);
    $("#password-quality")[0].parentElement.hidden = false;
}

$("#btn-copy")[0].onclick = function()
{
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
}