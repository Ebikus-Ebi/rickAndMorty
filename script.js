fetch("https://rickandmortyapi.com/api/character").then(response=>{
	return response.json()
console.log("Before")
}).then(data=>{
	//console.log(data[0].id)
	data.forEach(item=>{
		console.log(item.id)
	})
})
console.log("after function")


axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })