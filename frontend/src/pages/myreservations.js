import React, {useState, useEffect} from 'react';
import axios from 'axios'

function MyReservations() {
	const [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("http://localhost:5000/home").then(function(response) {
			setHome(response.data)
		})
	}, [])

	return (
		<div 
    className="App"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }}>
			<h1>{home}</h1>
		</div>
	)
}

export default MyReservations;