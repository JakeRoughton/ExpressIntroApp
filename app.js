		// Bring in Express code
		const express = require('express')

		const app = express()
		const port = 3000

		app.use(express.json()) // This line is necessary for Express to be able to parse JSON in request body's

		const favoriteMovieList = [{
			title: "Star Wars",
			starRating: 5,
			isRecommended: true,
			createdAt: new Date(),
			lastModified: new Date()
		}, {
			title: "The Avengers",
			starRating: 4,
			isRecommended: true,
			createdAt: new Date(),
			lastModified: new Date()
		}];

		app.get('/all-movies', (req, res) =>{
			res.json({
				success: true,
				favoriteMovieList
			})
		})

		app.get('/single-movie/:titleToFind', (req,res)=>{
			const foundTitle = favoriteMovieList.find((movie.title === req.params.titleToFind)=>{
				return title
			})
			if(req.body.title === undefined || typeof(req.body.title ) !== "string") {
				res.json({
					success:true,
					foundTitle: foundTitle
			})
		}
	})
	
	

		app.post('/new-movie', (req,res)=>{
			if (req.body.title === undefined || typeof(req.body.title) !== "string") {
				res.json({
					success: false,
					message: "movie title is required and must be a string"
				})
				return
			}

			if (req.body.starRating === undefined || typeof(req.body.starRating) !== 'string'){
				res.json({
					success: false,
					message: "movie star rating is required and must be a string"
				})
				return
			}

			if (req.body.isRecommended === undefined || typeof(req.body.isRecommended) !== "boolean"){
				res.json({
					success: false,
					message: "movie recommendation is required and must be a boolean"
				})
				return
			}

			const newMovie = {}
			newMovie.title = req.body.title
			newMovie.starRating = req.body.starRating
			newMovie.isRecommended = req.body.isRecommended
			newMovie.createdAt = new Date()
			newMovie.lastModified = new Date()

			favoriteMovieList.push(newMovie)

			res.json({
				success: true,
				newMovie: newMovie
			})
		})

		app.put('/update-movie/:name', (req, res)=>{
			const titleToFind = req.params.title

			const originalMovie = favoriteMovieList.find((favoriteMovieList)=>{
				return favoriteMovieList.title === titleToFind
			})
			const originalMovieIndex = favoriteMovieList.findIndex((favoriteMovieList)=>{
				return favoriteMovieList.title ===titleToFind
			})

			if (req.body.title === undefined || typeof(req.body.title) !== "string") {
				res.json({
					success: false,
					message: "movie title is required and must be a string"
				})
				return
			}

			if(!originalMovie){
				res.json({
					success: false,
					message: "Could not find movie in list"
				})
				return
			}

			const updatedMovie = {}
			if (req.body.title !== undefined){
				updatedMovie.title = req.body.title
			}
		
			favoriteMovieList[originalMovieIndex] = updatedMovie
		
			res.json({
				success: true
			})
		})

		app.delete('/delete-movie/:name', (req, res)=>{
			const movieNameToDelete = req.params.title
			const indexOfTitle = favoriteMovieList.findIndex((favoriteMovieList)=>{
				return favoriteMovieList.title === movieNameToDelete
			})
			favoriteMovieList.splice(indexOfTitle, 1)

			res.json({
				success: true
			})
		})


		app.get('/', (req, res) => {
			res.send('My second server.Wicked neat man')
		})

		app.listen(port, () => {
			console.log(`App listening on port ${port}`)
		})
