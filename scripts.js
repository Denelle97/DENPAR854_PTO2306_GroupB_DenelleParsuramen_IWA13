let state = 'idle'   //is the state idle or not
let user = null      //username
let calculated = '1' 

// Only allowed to change below

//fixed variable, changed single quotes on string to double
const logCalc = () => { 
    const isString = typeof calculated === "numerical-string"; //changed equal to(=) to strictly equal to(===) which becomes false/falsy so the Ternary below resolves correctly 
    const calculatedAsNumber = isString ? calculated : parseInt(calculated);//changed to parseInt
    calculated = calculatedAsNumber + 1; //Changed strictly equal to(===) to equal to(=) because we are giving the variable calculated a new value
}

//added parentheses and semicolons and fixed variable 
const calcUser = () => {
  logCalc();             
  if (calculated > 2) user = 'John';
  if (calculated > 2) state = 'requesting';
  if (calculated > 3) state = 'idle';
};

//fixed variable and string from single quote to double quotes and added semicolon for the console to log
const checkUser = () => {
	if (user && state === "requesting") {
		console.log(`User: ${user} (${calculated})`);
	}
};

// Only allowed to change code above

//added semicolon to check function
checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

//this wasn't to complicated didn't struggle or look for other ways this could be resolved also time isn't on my side.