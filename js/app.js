let user = Number(prompt("To'plagan balingizni kiriting"));

let value = 3000;
let value1 = 2000;

if(user <= 80){
    alert("Uzur siz o'qishga kira olmadingiz");
}
if(user >=80 && user <= 100){
    alert(`Siz super kontrakt asosida o'qishga qabul qilindingiz. Kontrakt miqdori ${value} dollor. Sizda qancha pul bor.`)
}
if(user >100 && user <= 150){
    alert(`Siz super kontrakt asosida o'qishga qabul qilindingiz. Kontrakt miqdori ${value1} dollor. Sizda qancha pul bor.`)
}
if(user >150 && user <= 180){
    alert("Tabriklaymiz siz davlat giranti asosida o'qishga qabul qilindingiz")
}

