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
		<div className="border-1 border-black">
			<div className="grid grid-cols-3 gap-4">
				<div className="border-1 border-red-900">
					<h2>30</h2>
					Capturados
				</div>
				<div className="border-1 border-red-900">
					<h2>20</h2>
					Liberados
				</div>
				<div className="border-1 border-red-900">
					<h2>5</h2>
					Categorias
				</div>
			<div className="grid grid-cols-2 border-red-900">
				<div>
				<form>
					Buscador de Pokemon
					<input type="text" placeholder="Nombre"/>
				</form>
				</div>	
			</div>
			</div>
			{/* quotes start
			<h1>Quotes:</h1>
			{loading ? <img id="foxy" src="src/assets/foxy.gif"
			/> : (
				<>
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
			quotes end */}
		</div>
	)
}

export default Dashboard
