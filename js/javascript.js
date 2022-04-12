$("#btn-gen")[0].onclick = () =>
{
    const length = (parseInt($("#length")[0].value) > 0) ? parseInt($("#length")[0].value) : 16;
    const ucl = $("#ucl")[0].checked || false;
    const lcl = $("#lcl")[0].checked || false;
    const num = $("#num")[0].checked || false;
    const spe = $("#spe")[0].checked || false;
    const cus = $("#cus")[0].checked || false;
    const cusVal = $("#cus_val")[0].value || "";
    const dup = $("#dup")[0].checked || false;

    $("#result")[0].children[0].innerText = GenPassword(length, ucl, lcl, num, spe, cus, cusVal, dup);
}

$("#btn-copy")[0].onclick = () =>
{
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
}