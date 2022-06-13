class Medico{
  constructor(name,year,unavailableDays,room){
    this.name = name;
    this.year = year;
    this.unavailableDays = unavailableDays;
    this.room = room;
    this.onCallDays= 0;
  }
  giveOnCallDay =()=>{
    this.onCallDays++;
  }
}
class Day{
  constructor(number){
    this.number = number;
    this.r1 = []
    this.r2 = []
    this.r3 = []
  }
  addR1(medic){
    this.r1.push(medic)
  }
  addR2(medic){
    this.r3.push(medic)
  }
  addR3(medic){
    this.r3.push(medic)
  }
}

const showMedic = ()=>{
  let medic = new Medico(document.getElementById("name").value,document.getElementById("year").value,document.getElementById("day").value,document.getElementById("room").value);
  console.log(medic);
}
let tablita = `<div id="table warp"> 
<table class="table table-bordered text-center">
    <thead>
        <tr>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
            <th>Domingo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
        </tr>
        <tr>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
        </tr>
        <tr>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
        </tr>
        <tr>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
        </tr>
        <tr>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
            <td>Doctor</td>
        </tr>
    </tbody>
</table>
</div>`
let formSelectMonthYear =`<div class="text-center py-3">
<div class="item">
  <p>Ingrese el mes en el que se distribuira la guardia</p>
  <select id="selectedMonth">
    <option selected value="-1" disabled selected></option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>
</div>
<div class="item">
  <p>Ingrese el mes en el que se distribuira la guardia</p>
  <select id="selectedYear">
    <option selected value="-1" disabled selected></option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
    <option value="2025">2025</option>
  </select>
</div>
<button id="continueBtn">Continuar</button> 
</div>`

let formFrontPage =`
<div >
    <div class="text-center py-3">
        <h3>Bienvenidos al armador de guardias automatico</h3>
        <p>por ahora veran las cosas en la consola</p>
    </div>
    <div>
      <div class="testbox">
        <form action="/">
          <div class="item">
            <label for="MedicsTotal">Ingrese cantidad total entre R2 y R3<span>*</span></label>
            <input id="MedicsTotal" type="text" name="MedicsTotal" required/>
          </div>
        </form>
      </div>
    </div>   
</div>
<button id="continueBtn">Continuar</button>`;

let formCreateMedic = `<form>
<div class="banner">
  <h1>Cargar Medico</h1>
</div>
<div class="item">
  <label for="name">Nombre<span>*</span></label>
  <input id="name" type="text" name="name" required/>
</div>
<div class="item">
    <p>Anio</p>
    <select id="year">
      <option selected value="" disabled selected></option>
      <option value="R1" > R1 </option>
      <option value="R2"> R2 </option>
      <option value="R3"> R3 </option>
    </select>
  </div>
  <div id="unavailableDaysForm" class="item">
    <p>Si fuera necesario elija que dia no puede tener guardia</p>
    <select id="day">
      <option selected value="" disabled selected></option>
      <option value="1"> 1 </option>
      <option value="2"> 2 </option>
      <option value="3"> 3 </option>
      <option value="4"> 4 </option>
      <option value="5"> 5 </option>
      <option value="6"> 6 </option>
      <option value="7"> 7 </option>
      <option value="8"> 8 </option>
      <option value="9"> 9 </option>
      <option value="10"> 10 </option>
      <option value="11"> 11</option>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
      <option value="15"> 15 </option>
      <option value="16"> 16 </option>
      <option value="17"> 17 </option>
      <option value="18"> 18 </option>
      <option value="19"> 19 </option>
      <option value="20"> 20 </option>
      <option value="21"> 21 </option>
      <option value="22"> 22 </option>
      <option value="23"> 23 </option>
      <option value="24"> 24 </option>
      <option value="25"> 25 </option>
      <option value="26"> 26 </option>
      <option value="27"> 27 </option>
      <option value="28"> 28 </option>
      <option value="29"> 29 </option>
      <option value="30"> 30 </option>
      <option value="31"> 31 </option>
    </select>
  </div>
  <div class="item">
    <p>Sala</p>
    <select id="room">
      <option selected value="" disabled selected></option>
      <option value="A" > A </option>
      <option value="B"> B </option>
      <option value="C"> C </option>
    </select>
  </div>
<div class="flax">
  <p>Chequee que los datos cargados son los correctos</p>
</div>
</form>
<button id="saveBtn">Guardar</button>
`;
let formSelectUnavailableDays=`<select id="day">
<option selected value="" disabled selected></option>
<option value="1"> 1 </option>
<option value="2"> 2 </option>
<option value="3"> 3 </option>
<option value="4"> 4 </option>
<option value="5"> 5 </option>
<option value="6"> 6 </option>
<option value="7"> 7 </option>
<option value="8"> 8 </option>
<option value="9"> 9 </option>
<option value="10"> 10 </option>
<option value="11"> 11</option>
<option value="12"> 12 </option>
<option value="13"> 13 </option>
<option value="14"> 14 </option>
<option value="15"> 15 </option>
<option value="16"> 16 </option>
<option value="17"> 17 </option>
<option value="18"> 18 </option>
<option value="19"> 19 </option>
<option value="20"> 20 </option>
<option value="21"> 21 </option>
<option value="22"> 22 </option>
<option value="23"> 23 </option>
<option value="24"> 24 </option>
<option value="25"> 25 </option>
<option value="26"> 26 </option>
<option value="27"> 27 </option>
<option value="28"> 28 </option>
<option value="29"> 29 </option>
<option value="30"> 30 </option>
<option value="31"> 31 </option>
</select>
`;
//fn para generar el mes
let daysInMonth = (month, year)=> {
  return new Date(year, month, 0).getDate();
}

const generateMonth=(selectedMonth,year,Array)=>{
  //obtener mes y dias
  for(i=1;i<daysInMonth(selectedMonth,year)+1;i++){
    Array.push(new Day(i))
  }
}
//

let continueButton = `<button id="continueBtn">Continuar</button>`;
//this fn adds an html element to the specified target
let addHtml= (e,target)=>{
  document.getElementById(target).innerHTML = e;
}


let saveMedic = (medicsArray,total,currentIndex)=>{
  medicsArray.push(new Medico(document.getElementById("name").value,document.getElementById("year").value,document.getElementById("day").value,document.getElementById("room").value));
  createMedics(total,currentIndex+1,medicsArray);
}


const getMedicsTotal = ()=>{
  let total = document.getElementById("MedicsTotal").value;
  let medics= [];
  createMedics(total,1,medics);
}

const getMedicUnavailbleDay= (medicsArray,day)=>{
    return medicsArray.filter(obj =>{
      return obj.Day === day;
    })
}
const darGuardia = (medic,day)=>{
    medic().giveOnCallDay(day);
}

//randomizer fn

const getRandomIntInclusive =(min, max)=>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

const getRandomMedic=(medicsArray)=>{
  let totalR3 = getAllR3(medicsArray).length;
  let totalR2 = getAllR2(medicsArray).length;
  let totalR1 = getAllR1(medicsArray).length;
  // if(){//si... si que? 
  //   getAllR3(medicsArray).findIndex(getRandomIntInclusive(0,totalR3));//me devuelve un medico random del array 
  // }
}
//filtrar el array ppal para tener uno con cada anio
const getAllR3 =(medicsArray)=>{
  let r3 =[]; 
  r3 = medicsArray.filter(obj =>{
    return obj.year === "R3";
  })
  return r3;
}

const getAllR2 =(medicsArray)=>{
  let r2= [];
  r2 = medicsArray.filter(obj =>{
    return obj.year === "R2";
  })
  return r2;
}

const getAllR1 =(medicsArray)=>{
  let r1=[]
  r1 = medicsArray.filter(obj =>{
    return obj.year === "R1";
  })
  return r1;
}
////

const asignMedicToDay=(day,medic)=>{
  if(Medico(medic).year === "R1"){
    Day(day).addR1(medic);
  }
  else if(Medico(medic).year === "R2"){
    Day(day).addR2(medic);
  }
  else if(Medico(medic).year === "R3"){
    Day(day).addR3(medic);
  }
}

//tablas
let tablaXd =`<table id="myTable" class="table table-borderless table-striped table-earning">
<thead>
  <tr>
    <th>Dia</th>
    <th>Medicos</th>
  </tr>
</thead>
<tbody id="testBody"></tbody>
</table>`


function loadTableData(month) {
  //esta fn tendria que crear una tabla con todos los dias y los medicos asignados a cada dia.
  const table = document.getElementById("testBody");
  month.forEach( day => {
    //console.log("XD",day)
    //inserta el numero de dia
    let row = table.insertRow();
    let number = row.insertCell(0);
    number.innerHTML = day.number;
    //inserta los medicos que hay de guardia ese dia
   
    let medic = row.insertCell(1);
    let medicos = ""
    // medicos += day.r1.map((medico) => medico.name); //queda de referencia
    day.r1.forEach(element => {
      medicos += element.name
    });
    medic.innerHTML = medicos//proximamente se creara una columna para cada R
})}
//
//Execute

addHtml(formFrontPage,"indexTarget")
document.getElementById("continueBtn").addEventListener("click",()=>{
  Toastify({
    text: "Se ha guardado la eleccion",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
  getMedicsTotal()
});

const createMedics=(medicsTotal,currentIndex,medicsArray) =>{
  let flag =0;
  if(Number(currentIndex) <= Number(medicsTotal)){
    addHtml(formCreateMedic,"indexTarget");//agrego el form
    document.getElementById("saveBtn").addEventListener("click",()=>{
      saveMedic(medicsArray,medicsTotal,currentIndex);//guardo el medic en el array
      //se notifica al usuario para que sepa que lo que hizo se guardo
      Toastify({
        text: "Se ha guardado el medico ingresado",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    })

  }
  else{
    console.log(medicsArray);
    let allR1 = getAllR1(medicsArray);
    console.log(allR1.at(0));

    //una vez cargados los medicos se pasa a seleccionar el mes
    //se genera el mes como un contenedor de objetos
    addHtml(formSelectMonthYear,"indexTarget");
    let mesSelect = document.getElementById("selectedMonth").value
    let anioSelect =document.getElementById("selectedYear").value
    if(mesSelect === "-1" && anioSelect === "-1"){
        let month =[];
        //cuando se clickea el boton, se pasa a la siguiente pantalla en la que se genera el mes y crea la tabla
        document.getElementById("continueBtn").addEventListener("click",()=>{
          generateMonth(document.getElementById("selectedMonth").value,document.getElementById("selectedYear").value,month)
          month.forEach(day => {
            day.addR1(allR1.at(0))
          });
          Toastify({
            text: "Cambios guardados",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
          console.log(month)
          addHtml(tablaXd,"indexTarget")
          loadTableData(month)
        }
        );
        
        
        
        // if(month.length > 1){
        //   console.log("pepito")
        //   month.forEach(day => {
        //     Day(day).addR1(allR1.at(0))
        //   });
        //   console.log("el mes con medicos es:")
        //   console.log(month)
        // }
    }
  }
    
}
  



    



