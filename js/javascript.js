const BASE_URL = `https://fathomless-shelf-54969.herokuapp.com/`



const sunBtn = document.querySelector('#sun')
const mercurisBtn = document.querySelector('#mercuris')
const venusBtn = document.querySelector('#venus')
const earthBtn = document.querySelector('#earth')
const marsBtn = document.querySelector('#mars')
const jupiterBtn = document.querySelector('#jupiter')
const saturnBtn = document.querySelector('#saturn')
const uranusBtn = document.querySelector('#uranus')
const neptuneBtn = document.querySelector('#neptune')

const nameElem = document.querySelector('[data-name]')
const latinElem = document.querySelector('[data-latinName]')
const descElem = document.querySelector('[data-desc]')
const circElem = document.querySelector('[data-circumference]')
const distElem = document.querySelector('[data-distance]')
const dayElem = document.querySelector('[data-day]')
const nigthElem = document.querySelector('[data-night]')
const moonElem = document.querySelector('[data-moons]')

const displayOverlay = document.querySelector('.info--container');




function displayData(data){    

    const temp = data.temp
    const moons = data.moons
    nameElem.textContent = data.name
    latinElem.textContent = data.latinName
    descElem.textContent = data.desc
    circElem.textContent = data.circumference
    distElem.textContent = data .distance
    dayElem.textContent = temp.day
    nigthElem.textContent = temp.night
    moonElem.textContent = moons
}





async function getBodies(API_KEY){    
    let resp = await fetch('https://fathomless-shelf-54969.herokuapp.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': `${API_KEY}`}
});
const bodies = await resp.json()
// choosePlanet(bodies)
clickPlanet(bodies)};


async function getApi(){
    let response = await fetch(`${BASE_URL}keys`, {
        method: 'POST'});
    const dataKey = await response.json()
    let API_KEY = dataKey.key   
    getBodies(API_KEY)  
}

// function clickPlanet(){

//     addEventListener('click', (event) =>{   

//         if (event.target.id === 'sun'){ 
//             displayOverlay.classList.remove('hide')
//             getApi()}
//         })
//     }


function clickPlanet(){   

    addEventListener('click', (event) =>{  
        if (event.target.id == 'sun'){
            let numb = `0` 
        }

              

            displayOverlay.classList.remove('hide')
            getApi()

            
            let data = bodies.bodies[`${numb}`]
            displayData(data) 

            
        }
)



}


    

    // function choosePlanet(bodies){

    //     let data = bodies.bodies[0]
               
    // }
    

    clickPlanet()




  
   
    




