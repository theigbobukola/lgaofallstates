var choices=["abia", "adamawa", "akwa ibom", "anambra", "bauchi", "bayelsa","benue","borno", "cross rivers",  "delta", 
"ebonyi", "edo", "ekiti", "enugu", "gombe", "imo", "jigawa", "kaduna","kano", "katsina", "kebbi", "kogi", "kwara", "lagos",
 "nasarawa", "niger", "ogun", "ondo", "osun", "oyo", "plateau", "rivers", "sokoto", "taraba", "yobe", "zamfara"]; 
 var st=document.querySelector("select");
 var opt;
 var fname;
 var lname;
 var state, lgarea;
 var gender;
 var qualify=[];
  var lg;
 for (var i=0; i<choices.length; i++){
     opt= document.createElement("option");
     opt.setAttribute("value", choices[i]);
     opt.appendChild(document.createTextNode(choices[i]));
     st.appendChild(opt);
 }

 function lga(state){
     for(var i=0;i<state.length;i++){
     lg=document.createElement("option");
     lg.setAttribute("value", state[i]);
     lg.appendChild(document.createTextNode(state[i]));
     document.querySelector("#lga").appendChild(lg);
 
     }
 
 }
var abia_lga=["Isiala Ngwa North","Isiala Ngwa South","Isuikwuato","Aba North","Aba South","Obi Ngwa","Arochukwu","Bende","Isiala Ngwa North","Ikwuano","Isiala Ngwa South","Obi Ngwa","Umuahia North","Umuahia South","Umu Nneochi","Ukwa East","Ukwa West","Ugwunagbo","Osisioma","Ohafia",""];
var adamawa_lga=["Jada","Lamurde","Madagali","Hong","Maiha","Mayo Belwa","Michika","Yola North","Yola South","Toungo","Song","Shelleng","Demsa","Fufure","Ganye","Numan","Mubi North", "Mubi South"];
var akwa_ibom_lga=["Ini","Itu","Ika","Abak","Mbo","Obot Akara","Ibeno","Ikono","Mkpat-Enin","Ibiono-Ibom","Ibesikpo Asutan","Ibesikpo Asutan","Eket","Etim Ekpo","Etinan","Ibiono-Ibom","Eastern Obolo","Ika","Ikono","Ikot Abasi","Ikot Ekpene","Esit Eket","Essien Udim","Obot Akara","Oron","Uyo","Uruan","Urue-Offong/Oruko","Ukanafun","Udung-Uko","Oruk Anam","Onna","Okobo","Nsit-Ubium","Nsit-Ibom","Nsit-Atai"];
var anambra_lga=["Ihiala","Anambra East","Njikoka","Anambra West","Aguata","Anaocha","Ayamelum","Awka North","Awka South","Dunukofia","Ekwusigo","Idemili North","Idemili South","Nnewi North","Nnewi South","Oyi","Orumba North","Orumba South","Onitsha North","Onitsha south","Ogbaru"];
var bauchi_lga=["Itas/Gadau","Jama'are","Katagum","Kirfi","Alkaleri","Misau","Gamawa","Ganjuwa","Zaki","Warji","Tofa","Tafawa Balewa","Ningi","Shira","Bauchi","Bogoro","Damban","Darazo","Dass",""];
var bayelsa_lga=["Kolokuma/Opokuma","Yenagoa","Southern Ijaw","Sagbama","Ogbia","Brass","Ekeremor","Nembe"];
var benue_lga=["Guma","Gwer East","Gwer West","Katsina-Ala","Konshisha","Kwande","Logo","Makurdi","Apa","Ado","Obi","Vandeikya","Ushongo","Ukum","Tarka","Oturkpo","Okpokwu","Oju","Ohimini","Ogbadibo","Agatu","Buruku"];
var borno_lga=["Guzamala","Gwoza","Hawul","Jere","Kaga","Kala/Balge","Konduga","Kukawa","Kwaya Kusar","Mafa","Magumeri","Maiduguri","Marte","Shani","Mobbar","Monguno","Abadam","Askira/Uba","Bama","Bayo","Biu","Chibok","Damboa","Dikwa","Ngala","Nganzai"];
var cross_rivers_lga=["Ikom","Abi","Obubra","Obudu","Obanliku","Akpabuyo","Odukpani","Akamkpa","Biase","Bakassi","Etung","Obubra","Yala","Yakuur","Ogoja","Bekwarra","Boki","Calabar Municipal","Calabar South",""];
var delta_lga=["Aniocha North","Aniocha South","Bomadi","Burutu","Bomadi","Burutu","Ethiope East","Ethiope West","Ika North East","Ika South","Isoko North","Isoko South","Ndokwa East","Ndokwa West","Oshimili-North","Oshimili-South","Warri North","Warri South","Uvwie","Ukwuani","Ughelli North","Ughelli South","Udu","Sapele","Patani","Okpe","Isoko North","Isoko South"];  
var ebonyi_lga=["Ikwo","Ishielu","Ivo","Izzi","Abakaliki","Afikpo North","Afikpo South (Edda)","Onicha","Ohaozara","Ohaukwu","ebonyi","Ezza North","Ezza South"];
var edo_lga=["Ikpoba Okha","Akoko-Edo","Igueben","Esan Central","Esan North-East","Esan South-East","Esan West","Etsako Central","Etsako East","Etsako West","Egor","Igueben","Uhunmwonde","Ovia North-East","Ovia South-West","Owan East","Owan West","Oredo","Orhionmwon",""];
var ekiti_lga=["Ido Osi","Ikere","Ikole","Ilejemeje","Ise/Orun","Ado Ekiti","Ekiti East","Ijero","Moba","Ekiti South-West","Ekiti West","Emure","Irepodun/Ifelodun","Ise/Orun","Oye","Efon"];
var enugu_lga=["Isi Uzo","Nsukka","Aninri","Awgu","Igbo Etiti","Nkanu East","Nkanu West","Enugu East","Enugu North","Enugu South","Ezeagu","Igbo Eze North","Igbo Eze South","Oji River","Uzo-Uwani","Udenu","Udi",""];
var gombe_lga=["Kaltungo","Kwami","Akko","Shongom","Yamaltu/Deba","Balanga","Billiri","Dukku","Funakaye","Nafada"];
var imo_lga=["Ikeduru","Isiala Mbano","Isu","Mbaitoli","Aboh Mbaise","Ahiazu Mbaise","Obowo","Ehime Mbano","Ngor Okpala","Njaba","Nkwerre","Nwangele","Ezinihitte","Obowo","Unuimo","Ihitte/Uboma","Owerri Municipal","Owerri North","Owerri West","Oru West","Oru East","Orsu","Orlu","Okigwe","Ohaji/Egbema","Oguta","Ideato North","Ideato South"];
var jigawa_lga=["Gumel","Guri","Gwaram","Gwiwa","Hadejia","Jahun","Kafin Hausa","Kazaure","Kiri Kasama","Kiyawa","Kaugama","Maigatari","Malam Madori","Miga","Biriniwa","Garki","Gagarawa","Yankwashi","Taura","Sule Tankarkar","Roni","Ringim","Auyo","Babura","Birnin Kudu","Buji","Dutse",""];
var kaduna_lga=["Igabi","Ikara","Jaba","Jema'a","Kagarko","Kajuru","Kaura","Kauru","Kubau","Kudan","Lere","Zangon Kataf","Zaria","Soba","Sanga","Sabon Gari","Birnin Gwari","Chikun","Makarfi","Kachia","Kaduna North","Kaduna South"];
var kano_lga=["Gwale","Gwarzo","Kabo","Kano Municipal","Karaye","Kibiya","Kiru","Kumbotso","Kunchi","Kura","Madobi","Makoda","Nasarawa","Fagge","Garko","Minjibir","Garun Mallam","Gabasawa","Bunkure","Albasu","Wudil","Bebeji","Bagwai","Bichi","Doguwa","Dawakin Kudu","Dawakin Tofa","Dambatta","Dala","Warawa","Ungogo","Tofa","Tudun Wada","Tsanyawa","Tarauni","Takai","Sumaila","Shanono","Rogo","Rimin Gado","Rano","Ajingi"];
var katsina_lga=["Ingawa","Jibia","Kafur","Kaita","Kankara","Kankia","Katsina","Kurfi","Kusada","Mai'Adua","Malumfashi","Mani","Mashi","Matazu","Funtua","Faskari","Zango","Sandamu","Musawa","Sabuwa","Safana","Rimi","Bakori","Batagarawa","Batsari","Baure","Bindawa","Daura","Charanchi","Dandume","Dutsi","Dutsin Ma","Danja","Dan Musa"];
var kebbi_lga=["Gwandu","Jega","Kalgo","Koko/Besse","Maiyama","Aleiro","Arewa Dandi","Argungu","Augie","Ngaski","Birnin Kebbi","Bunza","Bagudo","Dandi","Fakai","Zuru","Yauri","Wasagu/Danko","Suru","Shanga","Sakaba",""];  
var kogi_lga=["Idah","Ijumu","Kabba/Bunu","Kogi","Lokoja","Adavi","Ajaokuta","Ankpa","Ibaji","Igalamela Odolu","Bassa","Dekina","Mopa Muro","Yagba East","Yagba West","Omala","Olamaboro","Okehi","Okene","Ogori/Magongo","Ofu",""];
var kwara_lga=["Ilorin East","Ilorin South","Ilorin West","Isin","Kaiama","Asa","Baruten","Edu","Ekiti","Ifelodun","Moro","Ilorin East","Ilorin South","Ilorin West","Irepodun","Isin","Pategi","Oyun","Oke Ero","Offa"];
var lagos_lga=["Ifako-Ijaiye","Kosofe","Lagos Island","Lagos Mainland","Ikeja","Alimosho","Amuwo-Odofin","Apapa","Eti Osa","Badagry","Ibeju-Lekki","Mushin","Ikorodu","Shomolu","Surulere","Oshodi-Isolo","Ojo","Agege","Ajeromi-Ifelodun","Epe"];
var nasarawa_lga=["Karu","Keana","Keffi","Kokona","Obi","Wamba","Toto","Akwanga","Awe","Doma","Nasarawa","Nasarawa Egon","Lafia"];
var niger_lga=["Gurara","Katcha","Kontagora","Lapai","Lavun","Magama","Mariga","Mashegu","Shiroro","Wushishi","Mokwa","Tafa","Suleja","Rijau","Rafi","Paikoro","Moya","Agaie","Agwara","Bida","Borgu","Bosso","Chanchaga","Edati"];
var ogun_lga=["Imeko Afon","Ipokia","Ikenne","Ifo","Ewekoro","Odeda","Obafemi Owode","Ado-Odo/Ota","Odogbolu","Abeokuta North","abeokuta South","Akoko North-East","Akoko North-West","Akoko South-West","Akoko South-East", "Yewa North","Yewa South","Ijebu East","Ijebu North","Ijebu North East","Ijebu Ode","Ipokia","Shagamu","Remo North","Ogun Waterside","Yewa North","Yewa South"];
var ondo_lga=["Idanre","Ifedore","Ilaje","Ile Oluji/Okeigbo","Irele","Akoko North-East","Odigbo","Akoko North-West","Akoko South-West","Akoko South-East","Akure North","Akure South","Owo","Ose","Ondo East", "Ondo West","Okitipupa","Ese Odo"];
var osun_lga=["Ifedayo","Ilesa West","Ilesa East","Irewole","Isokan","Iwo","Atakunmosa East","Boluwaduro","Odo Otin","Obokun","Atakunmosa West","Aiyedaade","Aiyedire","Boripe","Ila","Ede North","Ede South","Egbedore","Ejigbo","Ifelodun","Ife Central","Ife East","Ife North","Ife South","Ila","Ilesa East","Ilesa West","Irepodun","Isokan","Obokun","Osogbo","Orolu","Oriade","Ola Oluwa","Olorunda"];
var oyo_lga=["Irepo","Iseyin","Itesiwaju","Iwajowa","Kajola","Lagelu","Ido","Afijio","Akinyele","Atiba","Atisbo","Egbeda","Ibadan North","Ibadan North-East","Ibadan North-West","Ibadan South-East","Ibadan South-West","Ibarapa Central","Ibarapa East","Ibarapa North","Irepo","Iseyin","Surulere","Saki East","Saki West","Oyo","Oyo East","Ori Ire","Orelope","Ona Ara","Oluyole","Olorunsogo","Ogo Oluwa","Ogbomosho North","Ogbomosho South"];
var plateau_lga=["Jos East","Jos North","Jos South","Kanam","Kanke","Barkin Ladi","Bassa","Wase","Shendam","Riyom","Qua'an Pan","Pankshin","Bokkos","Mikang","Mangu","Langtang North","Langtang South"];
var rivers_lga=["Ikwerre","Khana","Abua/Odual","Asari-Toru","Akuku-Toru","Ahoada East","Ahoada West","Bonny","Degema","Etche","","Obio/Akpor","Tai","Eleme","Emuoha","port harcourt","Oyigbo","Opobo/Nkoro","Omuma","Okrika","Ogu/Bolo","Ogba/Egbema/Ndoni","Andoni"];
var sokoto_lga=["Gudu","Gwadabawa","Illela","Isa","Kebbe","Kware","Binji","Bodinga","Dange Shuni","Yabo","Gada","Wurno","Wamako","Tureta","Tambuwal","Tangaza","Sokoto North","Sokoto South","Silame","Shagari","Sabon Birni","Rabah",""];
var taraba_lga=["Jalingo","Karim Lamido","Kumi","Ardo Kola","Gashaka","Gassol","Zurmi","Yorro","Wukari","Ussa","Takum","Sardauna","Bali","Donga","Ibi","Lau"];
var yobe_lga=["Gujba","Gulani","Jakusko","Karasuwa","FIka","Yunusari","Yusufari","Tarmuwa","Potiskum","Bade","Bursari","Damaturu","Fune","Nangere","Nguru","Machina"];
var zamfara_lga=["Gummi","Gusau","Kaura Namoda","Maradun","Anka","Zurmi","Chafe","Talata Mafara","Shinkafi","Bakura","Birnin Magaji/Kiyaw","Bukkuyum","Bungudu","Maru"];
var FCT_lga=["Abaji","Gwagwalada","Bwari","Municipal Area Council","Kwali","Kuje"];


 
 function findLGA(){
  document.getElementById("lga").options.length=1;
 switch(state){
     case 'abia':lga(abia_lga);
     break;
     case 'adamawa':lga(adamawa_lga);
     break;
     case 'akwa ibom':lga(akwa_ibom_lga);
         break;
     case 'ogun':lga(ogun_lga);
         break;
     case 'anambra':lga(anambra_lga);
         break;
     case 'akwa':lga(akwa_lga);
         break;
     case 'bauchi':lga(bauchi_lga);
         break;
     case 'bayelsa':lga(bayelsa_lga);
         break;
     case 'benue':lga(benue_lga);
         break;
     case 'borno':lga(borno_lga);
         break;
     case 'cross rivers':lga(cross_rivers_lga);
         break;
     case 'delta':lga(delta_lga);
         break;
     case 'ebonyi':lga(ebonyi_lga);
         break;
     case 'edo':lga(edo_lga);
         break;
     case 'ekiti':lga(ekiti_lga);
         break;
     case 'enugu':lga(enugu_lga);
         break;
     case 'gombe':lga(gombe_lga);
         break;
     case 'imo':lga(imo_lga);
         break;
     case 'jigawa':lga(jigawa_lga);
         break;
     case 'kaduna':lga(kaduna_lga);
         break;
     case 'kano':lga(kano_lga);
         break;
     case 'katsina':lga(katsina_lga);
         break;
     case 'kebbi':lga(kebbi_lga);
         break;
     case 'kogi':lga(kogi_lga);
         break;
     case 'kwara':lga(kwara_lga);
         break;
     case 'lagos':lga(lagos_lga);
         break;
     case 'nasarawa':lga(nasarawa_lga);
         break;
     case 'niger':lga(niger_lga);
         break;
     case 'ogun':lga(ogun_lga);
         break;
     case 'ondo':lga(ondo_lga);
         break;
     case 'osun':lga(osun_lga);
         break;
     case 'oyo':lga(oyo_lga);
         break;
     case 'plateau':lga(plateau_lga);
         break;
     case 'rivers':lga(rivers_lga);
         break;
     case 'sokoto':lga(sokoto_lga);
         break;
     case 'taraba':lga(taraba_lga);
         break;
     case 'yobe':lga(yobe_lga);
         break;
     case 'zamfara':lga(zamfara_lga);
         break;
     case 'FCT':lga(FCT_lga);
         break;
     default:
         ;
 }
} 
var sv=document.getElementById("state");
 document.getElementById("state").onchange=function(){
 
     state=sv.options[sv.selectedIndex].value;
   
     findLGA();
 };
 
 function validate(){
      var fn=document.getElementById("fn");
     if(fn.value==="" || fn.value.length>29 || fn.value.length <3 || !isNaN(fn.value)  || /\d/.test(fn.value)){
         alert("Invalid input for first name");
         fn.style.background="pink";
         fn.focus();
         
         return false;
     }
     else{
         fn.style.background="#fff";
     }
      var ln=document.getElementById("ln");
     if(ln.value==="" || ln.value.length>29 || ln.value.length <3 || !isNaN(ln.value)  || /\d/.test(ln.value)){
         alert("Invalid input for last name");
         return false;
     }
     state=document.getElementById("state");
     state=state.options[state.selectedIndex].value;
     if (state==="0"){
         alert("Please select a state");
     return false;
         }
     lgarea=document.getElementById("lga");
     lgarea=lgarea.options[lgarea.selectedIndex].value;
     if (lgarea==="0"){
         alert("Please select a local govt.");
     return false;
     }
         if(!document.getElementById("m").checked && !document.getElementById("f").checked ){
             alert("Please indicate your gender");
     return false;    
     }
     if(document.getElementById("m").checked){
         gender="male";
     }
     if(document.getElementById("f").checked){
         gender="female";
     }
     var fields=document.getElementsByTagName("input");
     for(var i=0; i<fields.length; i++){
         if(fields[i].type=='checkbox' && fields[i].checked==true){
             qualify.push(fields[i].value);
         }
     }
     //alert(qualify.toString());
     return true;
 }
 document.getElementById("add").onclick=function () {
    if (validate()){
       //alert("Success");
       fname=document.getElementById("fn").value;
       lname=document.getElementById("ln").value;
       createTable();
       qualify=[];
    }
 };  
    var tb, tr, td0, td1, td2, td3,td4,td5,td6;
    //td1 is for fname, td2 is for lname, td3 is for state, td4 is for gender td5 is for qualification, td6 is for lga
    var index=1;
    function createTable(){
        
        td0=document.createElement("td");
        td0.appendChild(document.createTextNode(index));
        td1=document.createElement("td");
        td1.appendChild(document.createTextNode(fname));
        
        td2=document.createElement("td");
        td2.appendChild(document.createTextNode(lname));
        
        tr=document.createElement("tr");

      td3=document.createElement("td");
      td3.appendChild(document.createTextNode(state));
     
      td4=document.createElement("td");
      td4.appendChild(document.createTextNode(gender));
      td5=document.createElement("td");
      td5.appendChild(document.createTextNode(qualify.toString()));
      td6=document.createElement("td");
      td6.appendChild(document.createTextNode(lgarea));
   
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
         tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tb=document.querySelector("table");
        tb.appendChild(tr);
        index++;
    }