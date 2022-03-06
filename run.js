function sleep(fn,second) { setTimeout(fn, second*1000)};
function fngo() { console.log('GO')}
// sleep(func,1);




function sleep1(second) { setInterval({}, second*1000)};


//all list hardcoded

var listusrah = `
<b>(A) USRAH NUQABA'</b>
Usrah Gabungan Majlis Nuqaba' PAS Pusat
Usrah Majlis Nuqaba' Dewan Pemuda PAS Malaysia (DPPM)
Usrah Majlis Naqibat Dewan Muslimat PAS Malaysia (DMPM)
Usrah Majlis Nuqaba' PAS Negeri
Usrah Majlis Nuqaba' DPPN
Usrah Majlis Naqibat DMPN (Naqibatun Naqibat)
Usrah Majlis Nuqaba' PAS Kawasan
Usrah Majlis Naqibat DMPK
<b>(B) USRAH QIYADI</b>
Usrah Qiyadi PAS Pusat
Usrah Qiyadi Dewan Ulama PAS Pusat
Usrah Qiyadi Dewan Pemuda PAS Malaysia
Usrah Qiyadi Dewan Muslimat PAS Malaysia
Usrah Qiyadi Badan Perhubungan PAS Negeri/WP
Usrah Qiyadi Dewan Ulama PAS Negeri
Usrah Qiyadi Dewan Pemuda PAS Negeri
Usrah Qiyadi Dewan Muslimat PAS Negeri
Usrah Qiyadi PAS Kawasan
Usrah Qiyadi Dewan Ulama PAS Kawasan
Usrah Qiyadi Dewan Pemuda PAS Kawasan
Usrah Qiyadi Dewan Muslimat PAS Kawasan
Usrah Qiyadi PAS Cawangan
Usrah Qiyadi Pemuda Cawangan
Usrah Qiyadi Muslimat PAS Cawangan
<b>(C) USRAH AHLI</b>
Usrah Ahli PAS Cawangan
Usrah Ahli Pemuda PAS Cawangan
Usrah Ahli Muslimat Cawangan
Usrah Alumni
Usrah NGO
Usrah Artis
Lain-lain Usrah Ahli
`

var listrujukan =`
TAARIF 1
TAARIF 2
TAKWIN 1
TAKWIN 2
TANFIZ 1
TANFIZ 2
NUQABA
`

var listnegeri = `
Johor
Kedah
Kelantan
Malaka
Negeri Sembilan
Pahang
Penang
Perak
Perlis
Sabah
Sarawak
Selangor
Terengganu
Wilayah Persekutuan
`

var listkawasan = `
Alor Gajah
Alor Setar
Ampang
Arau
Ayer Hitam
Bachok
Bagan
Bagan Datuk
Bagan Serai
Bakri
Balik Pulau
Baling
Bandar Kuching
Bandar Tun Razak
Bangi
Baram
Batang Lupar
Batang Sadong
Batu
Batu Gajah
Batu Kawan
Batu Pahat
Batu Sapi
Bayan Baru
Beaufort
Beluran
Bentong
Bera
Beruas
Besut
Betong
Bintulu
Bukit Bendera
Bukit Bintang
Bukit Gantang
Bukit Gelugor
Bukit Mertajam
Cameron Highlands
Cheras
Damansara
Dungun
Gerik
Gombak
Gopeng
Gua Musang
Hang Tuah Jaya
Hulu Langat
Hulu Rajang
Hulu Selangor
Hulu Terengganu
Igan
Indera Mahkota
Ipoh Barat
Ipoh Timor
Iskandar Puteri
Jasin
Jelebu
Jeli
Jelutong
Jempol
Jerai
Jerantut
Jerlun
Johor Bahru
Julau
Kalabakan
Kampar
Kangar
Kanowit
Kapar
Kapit
Kemaman
Keningau
Kepala Batas
Kepong
Ketereh
Kimanis
Kinabatangan
Klang
Kluang
Kota Belud
Kota Bharu
Kota Kinabalu
Kota Marudu
Kota Melaka
Kota Raja
Kota Samarahan
Kota Tinggi
Kuala Kangsar
Kuala Kedah
Kuala Krai
Kuala Krau
Kuala Langat
Kuala Nerus
Kuala Pilah
Kuala Selangor
Kuala Terengganu
Kuantan
Kubang Kerian
Kubang Pasu
Kudat
Kulai
Kulim-Bandar Baharu
Labis
Labuan
Lanang
Langkawi
Larut
Lawas
Ledang
Lembah Pantai
Lenggong
Libaran
Limbang
Lipis
Lubok Antu
Lumut
Machang
Maran
Marang
Mas Gading
Masjid Tanah
Merbok
Mersing
Miri
Muar
Mukah
Nibong Tebal
Padang Besar
Padang Rengas
Padang Serai
Padang Terap
Pagoh
Pandan
Papar
Parit
Parit Buntar
Parit Sulong
Pasir Gudang
Pasir Mas
Pasir Puteh
Pasir Salak
Paya Besar
Pekan
Pembangkang
Penampang
Pendang
Pengerang
Pengkalan Chepa
Pensiangan
Permatang Pauh
Petaling Jaya
Petra Jaya
Pokok Sena
Pontian
Port Dickson
Puchong
Pulai
Puncak Borneo
Putatan
Putrajaya
Ranau
Rantau Panjang
Rasah
Raub
Rembau
Rompin
Sabak Bernam
Sandakan
Santubong
Saratok
Sarikei
Segamat
Segambut
Sekijang
Selangau
Selayang
Sembrong
Semporna
Sepang
Sepanggar
Seputeh
Seremban
Serian
Setiawangsa
Setiu
Shah Alam
Sibu
Sibuti
Sik
Silam
Simpang Renggam
Sipitang
Sri Aman
Sri Gading
Stampin
Subang
Sungai Besar
Sungai Buloh
Sungai Petani
Sungai Siput
Taiping
Tambun
Tampin
Tanah Merah
Tangga Batu
Tanjong
Tanjong Karang
Tanjong Malim
Tanjong Manis
Tanjung Piai
Tapah
Tasek Gelugor
Tawau
Teluk Intan
Temerloh
Tenggara
Tenom
Titiwangsa
Tuaran
Tumpat
Wangsa Maju
`

var list_usrah = listusrah.replace(/^\s+|\s+$/gm,'').split(/\n/);
var list_rujukan = listrujukan.replace(/^\s+|\s+$/gm,'').split(/\n/);
var list_negeri = listnegeri.replace(/^\s+|\s+$/gm,'').split(/\n/);
var list_kawasan = listkawasan.replace(/^\s+|\s+$/gm,'').split(/\n/);


//run script everytime body clicked
const bodyEl = document.querySelector('body');
// bodyEl.setAttribute("onchange","addevent()")
bodyEl.setAttribute("onclick","addevent()")

// const backbutton = bodyEl.querySelectorAll('[ng-click="uActNaviBack()"]')
// backbutton.setAttribute("onclick","back()")




function addevent(){

    sleep(runall,0.1)
    sleep(runall,0.3)

    
};


//run all function
function runall(){

    const exEl = document.getElementById("external_html");
    const ketU = '[ng-model="recoEdit.desc"]';
    const ketUEl = document.querySelector(ketU);
    const placeholder = "(tahun) | (Naqib:nama)";
    // fngo();

    //run if only the exEl not exist
    if(exEl==null){
        //new element to Body element as last child
        addnewEl();
// add style sheet
        addstyle();
    
    }

        

    //run if only the sreen is kumpulan usrah page
    if (ketUEl!==null && ketUEl.placeholder !== placeholder )
    {        


//warp user field input in kumulan usrah page
        wrap('[ng-model="recoEdit.name"]','kumpU',1);
        wrap('[ng-model="recoEdit.refr"]','rujU',2);
        wrap('[ng-model="recoEdit.sgroup"]','negU',3);
        wrap('[ng-model="recoEdit.agroup"]','kawU',4);
        ketUEl.setAttribute("placeholder", placeholder);

        // fngo();


    }



// else{console.log("dd")}
}



//new element to body element as last child
function addnewEl(){
    if (document.getElementById('external_html')!==null){
        // document.getElementById('external_html').remove();
        // console.log("rm external_html")
    }

    const nw_node = document.createElement("div");
    nw_node.id = "external_html";
    nw_node.innerHTML = '<div id="list_usrah"></div><div id="list_rujukan"></div><div id="list_kawasan"></div><div id="list_negeri"></div>'

    // document.getElementById("main").insertAdjacentElement("afterend",nw_node);
    document.getElementsByTagName("body")[0].appendChild(nw_node);

    // console.log("add external_html")


    //convert list to radio list and add to addnewEl
    radio_list(list_usrah,"list_usrah");
    radio_list(list_rujukan,"list_rujukan");
    radio_list(list_negeri,"list_negeri");
    radio_list(list_kawasan,"list_kawasan");


    addinput("kawU",3);
    addinput("negU",4);
    addinput("rujU",2);
    addinput("kumpU",1);

    } 
   

//convert list to radio list
function radio_list (thelist,listname){
    
    // const lb_el = document.createElement("label");
    // lb_el.setAttribute("for",listname)
    // const el_deployPR = document.getElementById(listname)
    // el_deployPR.appendChild(lb_el); 

    // const el_deploy = el_deployPR.childNodes[0] 
    const el_deploy = document.getElementById(listname)
    // el_deploy.setAttribute("","")
    for (i = 0; i < thelist.length; i++) {
        const list_value = thelist[i]
        // console.log(thelist.length);
        // const el_deploy = document.getElementById(listname)
        if (list_value.includes("<b>")){
            // console.log(list_value);
            const list_bold = document.createElement("p");
            list_bold.innerHTML = list_value//.replace("<b>","");
            // console.log(el_deploy)
            el_deploy.appendChild(list_bold);

        } else{
            const list_input = document.createElement("input");
            list_input.type = "radio";
            list_input.name = listname;
            list_input.id = listname + i;
            list_input.value = list_value;
          
            const list_label = document.createElement("label");
            list_label.setAttribute('for', listname + i);
            // list_label.textContent = list_value;
            
            const list_br = document.createElement("br");
            const div_el = document.createElement("div");
            div_el.textContent = list_value;

            // el_deploy.appendChild(list_input);
            // el_deploy.appendChild(list_label);
            // el_deploy.appendChild(list_br);

            div_el.appendChild(list_input);
            list_label.appendChild(div_el);
            el_deploy.appendChild(list_label);
            // el_deploy.appendChild(list_br);
        }

      }



    }


//warp user field input in kumulan usrah page
function wrap(selector,labelfor,position){
        
        
        // console.log(position-1)
        // const inputEl = document.querySelectorAll("#external_html > div > label")[position-1]
        // inputEl.setAttribute("for", labelfor);            
        const wrapper = document.createElement('label');
        wrapper.setAttribute("for",labelfor);
        wrapper.className = labelfor;

        const el = document.querySelector(selector);

        //insert label
        el.parentNode.insertBefore(wrapper, el);
        const labelforClass = "."+ labelfor;

        //add onclick attribute to el
        // const checkonclick = "document.querySelector('"+ labelforClass +"').checked = true;"
        // el.setAttribute("onclick",checkonclick)

        //move el to wrapper 
        const wrapEl = document.querySelector(labelforClass);
        wrapEl.appendChild(el)

        // // const labelfor = "kumpU"
        // const radioSel = "input#" + labelfor;
        // const radioEl = document.querySelector(radioSel);
        // // document.querySelector("input#kumpU")
        // // const radioEl = document.getElementById(labelfor);


        // if (radioEl===null){
            
        //     const createEl = document.createElement('input');
        //     createEl.id = labelfor;
        //     createEl.type = "checkbox";
        //     document.getElementById('external_html').insertAdjacentElement("afterbegin",createEl)

        // }
    
        

    }

function addinput(labelfor,position){

    // console.log(position-1)
    const inputEl = document.querySelectorAll("#external_html > div ")[position-1]
    // const clickcheck = 'checked("' + labelfor+ '")'
    const clickcheck = "checked('" + labelfor+ "', this.id)"
    // console.log(clickcheck);
    inputEl.setAttribute("onclick", clickcheck);            



    const radioSel = "input#" + labelfor;
    const radioEl = document.querySelector(radioSel);
    
    if (radioEl===null){
            
        const createEl = document.createElement('input');
        createEl.id = labelfor;
        createEl.type = "checkbox";
        // document.getElementById('external_html').insertAdjacentElement("afterbegin",createEl)
        inputEl.insertAdjacentElement("beforebegin",createEl)

    }


}


function checked(id, this_id) {
    document.getElementById(id).checked = false;

    //clicked div > input source
    const selector1 = "#external_html div#" + this_id + " input:checked";
    //label > input target
    const selector2 = "label." + id + " input";
    
    // console.log(selector1)
    // console.log(selector2)
    // console.log(document.querySelector(selector1).value)
    document.querySelector(selector2).value = document.querySelector(selector1).value;
}

function back() {
    document.querySelector("div#external_html > input:check").checked = false;
}



// add style sheet
function addstyle(){
    const nw_node = document.createElement("style");
    nw_node.innerHTML = `


        
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }

    div#external_html * {
        transition: 0.3s;
    }

    div#external_html > input:checked + div {
        opacity: 0.97;
        visibility: visible;
    }

    div#external_html > input:checked + div::before {
        content: " X ";
        position: absolute;
        top: 1em;
        right: 15px;
        font-weight: 900;
    }

    div#external_html > input + div {
        position: absolute;
        z-index: 99;
        visibility: hidden;
        opacity: 0;
        left: 0vw;
        top: 0;
        height: 100vh;
        width: 100vw;
        background: white;
        overflow-y: scroll;
        padding: 50px 10px;
    }


    div#external_html > input + div > label > div {
        padding: 15px;
    }
    div#external_html > input + div > label > div:hover {
        background: #00ca80;
        color: white;
        font-weight: bold;
        border-radius: 10px;
    }

    div#external_html > input + div input {
        display :none;
    }

    
    div#external_html p {
        margin: 10px 0;
    }
    

    div#external_html > input:checked + div {
        text-align: center;
    }

    div#external_html > input:checked + div label {
        cursor: pointer;
    }









    
    `

    document.getElementById("external_html").appendChild(nw_node)



}


