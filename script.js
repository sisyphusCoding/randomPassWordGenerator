//front button
const generate = document.querySelector('.generate')


//output Display

const genPass = document.getElementById('genPass')

//limit

const pLimit = document.getElementById('pLimit')


//app flip
const app = document.querySelector('#app')


//copy back
const copyPass = document.querySelector('#copyPass')



const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')


const upperWrap = document.querySelector('.uppercase')
const lowerWrap = document.querySelector('.lowercase')
const numbWrap = document.querySelector('.number')
const symWrap = document.querySelector('.symbol')


//back button , just to flip the card
const reGenerate = document.querySelector('.reGenerate')


// checkboxes



reGenerate.addEventListener('click', () =>{
	
	app.classList.toggle('flip')
	
		var checkboxes = document.querySelectorAll('input[type="checkbox"]')
		
		checkboxes.forEach(el  => {
		
		el.checked = false
		
	})
	
})

//donw with the back button


generate.addEventListener('click', () =>{
	
//check if atleast one checkbox is selected

	var checkboxes = document.querySelectorAll('input[type="checkbox"]')
	var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked)
	
	console.log(checkedOne)
	
	if(!checkedOne){
		
		setTimeout(() => {
			upperWrap.classList.toggle('alert')
		lowerWrap.classList.toggle('alert')
		numbWrap.classList.toggle('alert')
		symWrap.classList.toggle('alert')
		},500)
		upperWrap.classList.toggle('alert')
		lowerWrap.classList.toggle('alert')
		numbWrap.classList.toggle('alert')
		symWrap.classList.toggle('alert')
	
		
	}else {
		app.classList.toggle('flip')
				
	}
	
	
})


const empty = ""

const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lCase = "abcdefghijklmnopqrstuvwxyz"
const numberArray = "0123456789"
const symbolArray = "!@#%^&*_+|"



// length from Slider


//GENERATE RANDOM CHARS FROM THE INITIAL PASSWORD AFTER THE GENREATE BUTTON IS TRIGGERED 

const generatePassword = (l,initialPass) => {
	
	let pass= " "
	
	for(let i=0; i < l; i++){
		pass += initialPass.charAt(Math.floor(Math.random() * initialPass.length))
	}
	
	return pass
	
}

//only front button generatres the password

generate.addEventListener('click' , () => {
	
	let initialPass = empty
	
	// condition true? doThis else: doThat
	
	uppercase.checked ? (initialPass += uCase) : "";
	lowercase.checked ? (initialPass += lCase) : "";
	number.checked ? (initialPass += numberArray) : "";
	symbol.checked ? (initialPass += symbolArray) : "";
	
	
	genPass.value = generatePassword(pLimit.value,initialPass)
	
})


//copy the password


//copyAlert

const alertDone		= document.querySelector('.alertDone')


copyPass.addEventListener('click' , () => {
	
	genPass.select()
	
	document.execCommand("copy")
	
	setTimeout(()=>{
		
		alertDone.classList.toggle("copyAlert")
		
	},1000)
	
	alertDone.classList.toggle("copyAlert")
	
})