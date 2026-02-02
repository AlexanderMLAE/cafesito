import axios from "axios"
import { useEffect, useState } from "react"

function Dashboard() {
	const url = 'https://dummyjson.com/quotes'
	// HOOKS
	const [quotes, setQuotes] = useState([])
	const [loading, setLoading] = useState(true)
	// INVOCAR EL SERVICIO
	const getQuotes = async () => {
		try {
			const result = await axios.get(url)
			console.log(result.data.quotes)
			setQuotes(result.data.quotes)
			setLoading(false)
		}
		catch (error) {
			console.error("Error al solicitar los datos", error)
			setLoading(true)

		}
	}
	useEffect(() => {
		getQuotes()
	}, [])

	return (
		<>
			<h1>Dashboard</h1>
			{loading ? <img src="https://www.drupal.org/files/issues/throbber_12.gif" /> : (
				<>
					<p>Mostrando datos</p>
					{
						quotes.map(
							item => (
								<p> {item.quote} - {item.author} </p>
							)
						)
					}
				</>
			)
			}
		</>
	)
}

export default Dashboard
