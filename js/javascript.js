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
const planetsOverlay = document.querySelector('.planets-container');

async function getBodies(API_KEY){    
    let secondResponse = await fetch('https://fathomless-shelf-54969.herokuapp.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': `${API_KEY}`}});
    const bodies = await secondResponse.json()

    addEventListener('click', (event) =>{
        if (event.target.id === 'sun'){            
            let data = bodies.bodies[0]
            displayData(data)
        }

        if (event.target.id === 'mercury'){            
            let data = bodies.bodies[1]
            displayData(data)
        }

        if (event.target.id === 'venus'){            
            let data = bodies.bodies[2]
            displayData(data)
        }

        if (event.target.id === 'earth'){            
            let data = bodies.bodies[3]
            displayData(data)
        }

        if (event.target.id === 'mars'){            
            let data = bodies.bodies[4]
            displayData(data)
        }

        if (event.target.id === 'jupiter'){            
            let data = bodies.bodies[5]
            displayData(data)
        }

        if (event.target.id === 'saturn'){            
            let data = bodies.bodies[6]
            displayData(data)
        }

        if (event.target.id === 'uranus'){            
            let data = bodies.bodies[7]
            displayData(data)
        }

        if (event.target.id === 'neptune'){            
            let data = bodies.bodies[8]
            displayData(data)
        }
        
        
        


    }
    
    )

    

      
    
    
};

async function getApi(){
    let response = await fetch(`${BASE_URL}keys`, {
    method: 'POST'});
    const dataKey = await response.json()
    let API_KEY = dataKey.key   
    getBodies(API_KEY)  
}






function displayData(data){ 

    const temp = data.temp
    const moons = data.moons
    nameElem.textContent = data.name
    latinElem.textContent = data.latinName
    descElem.textContent = data.desc
    circElem.textContent = data.circumference
    distElem.textContent = data.distance
    dayElem.textContent = temp.day
    nigthElem.textContent = temp.night
    moonElem.textContent = moons
}


getApi()



addEventListener('click', () =>{
displayOverlay.classList.toggle('hide') 
planetsOverlay.classList.toggle('hide')   

});

