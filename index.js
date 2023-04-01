$("#currency").click(async function () {
  const currencySelect = document.getElementById("currency");
  console.log($(this));
  if (currencySelect.options.length === 0) {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const res = await fetch(url)
      .then((response) => response.json())
      .then((result) => {
        for (let curr in result.bpi) {
          let newOp = document.createElement("option");
          newOp.text = curr;
          $("#currency").append(newOp);
        }
      })
      .catch((err) => console.log("cannot get data" + err));
  }
  //console.log(res);
});
//$(".btn").click(async);

$(".btn").click(async function getValue() {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const res = await fetch(url)
    .then((res) => res.json())
    .then((result) => {
      const currencyType = document.getElementById("currency").value;
      console.log(currencyType);
      let price = result.bpi[currencyType].rate;
      console.log(price);
      let updatedAt = `Updated At : ${result.time.updated}`;
      $("#price").text(price + "  " + updatedAt);
    });
});
