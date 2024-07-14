const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const url2= 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '918ab0f5abmshd7e7b590aab2234p188518jsn696cd22471bf',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars () {
    const options = {
    method: 'GET', 
   headers : {
        'x-rapidapi-key': '918ab0f5abmshd7e7b590aab2234p188518jsn696cd22471bf',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }  
  }
    

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}