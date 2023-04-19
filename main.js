var i,liste,secenek;

document.addEventListener("change",pizzaHesapla)

function pizzaHesapla()
{
    // Depişkenler
    let pizzaValue,girilenKod,odenecekTutar;
    const indirimKodu = "PROMO"

    // Pizza değerini alabilmek için
    liste=document.getElementById("listePizza");
    secenek=liste[liste.selectedIndex].value;
    pizzaValue=Number(secenek);

    // Ek malzeme fiyarını alabilmek için
    liste = document.getElementsByName("extra");
    for(i=0;i<liste.length;i++){
        if(liste[i].checked){
            pizzaValue = pizzaValue +2;
        }
    };

    // İndirim Kodu Kontrol
    girilenKod = document.getElementById('txtIndirimKodu').value;
    if(indirimKodu == girilenKod){
     odenecekTutar = pizzaValue - ((pizzaValue*10)/100)
    }else{
        odenecekTutar=pizzaValue;
    };

    document.getElementById('sonuc').innerHTML=odenecekTutar; 
};

// İndirim kodu aktifleştirme
function aktif(){
    document.getElementById("txtIndirimKodu").disabled = false;
}
function pasif(){
    document.getElementById("txtIndirimKodu").disabled = true;
    document.getElementById("txtIndirimKodu").value = " ";
}
