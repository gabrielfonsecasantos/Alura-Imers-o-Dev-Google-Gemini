let data = [];
async function iniciarBusca(){
  let response = await fetch("clubs.json");
  data = await response.json();
  console.log(data);
}