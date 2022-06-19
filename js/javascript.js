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

$("#btn-gen")[0].onclick = () =>
{
    const {type, length, ucl, lcl, num, spe, cus, cusVal, dup} = GetParams()
    $("#result")[0].children[0].value = GenPassword(type, length, ucl, lcl, num, spe, cus, cusVal, dup);
}

$("#btn-copy")[0].onclick = () =>
{
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
}