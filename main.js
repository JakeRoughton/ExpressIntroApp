//https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4
const films = [
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "890,617",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      "Title": "I Am Legend",
      "Year": "2007",
      "Rated": "PG-13",
      "Released": "14 Dec 2007",
      "Runtime": "101 min",
      "Genre": "Drama, Horror, Sci-Fi",
      "Director": "Francis Lawrence",
      "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
      "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
      "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      "Language": "English",
      "Country": "USA",
      "Awards": "9 wins & 21 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
      "Metascore": "65",
      "imdbRating": "7.2",
      "imdbVotes": "533,874",
      "imdbID": "tt0480249",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
      ]
    },
    {
      "Title": "300",
      "Year": "2006",
      "Rated": "R",
      "Released": "09 Mar 2007",
      "Runtime": "117 min",
      "Genre": "Action, Drama, Fantasy",
      "Director": "Zack Snyder",
      "Writer": "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
      "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
      "Plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      "Language": "English",
      "Country": "USA",
      "Awards": "16 wins & 42 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
      "Metascore": "52",
      "imdbRating": "7.7",
      "imdbVotes": "611,046",
      "imdbID": "tt0416449",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
      ]
    },
    {
      "Title": "The Avengers",
      "Year": "2012",
      "Rated": "PG-13",
      "Released": "04 May 2012",
      "Runtime": "143 min",
      "Genre": "Action, Sci-Fi, Thriller",
      "Director": "Joss Whedon",
      "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
      "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      "Language": "English, Russian",
      "Country": "USA",
      "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
      "Metascore": "69",
      "imdbRating": "8.1",
      "imdbVotes": "1,003,301",
      "imdbID": "tt0848228",
      "Type": "movie",
      "Response": "True",
       "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
      ]
    },
    {
      "Title": "The Wolf of Wall Street",
      "Year": "2013",
      "Rated": "R",
      "Released": "25 Dec 2013",
      "Runtime": "180 min",
      "Genre": "Biography, Comedy, Crime",
      "Director": "Martin Scorsese",
      "Writer": "Terence Winter (screenplay), Jordan Belfort (book)",
      "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
      "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      "Language": "English, French",
      "Country": "USA",
      "Awards": "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      "Metascore": "75",
      "imdbRating": "8.2",
      "imdbVotes": "786,985",
      "imdbID": "tt0993846",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
      ]
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "937,412",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      "Title": "Game of Thrones",
      "Year": "2011–",
      "Rated": "TV-MA",
      "Released": "17 Apr 2011",
      "Runtime": "56 min",
      "Genre": "Adventure, Drama, Fantasy",
      "Director": "N/A",
      "Writer": "David Benioff, D.B. Weiss",
      "Actors": "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
      "Plot": "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
      "Metascore": "N/A",
      "imdbRating": "9.5",
      "imdbVotes": "1,046,830",
      "imdbID": "tt0944947",
      "Type": "series",
      "totalSeasons": "7",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
      ]
    },
    {
      "Title": "Vikings",
      "Year": "2013–",
      "Rated": "TV-14",
      "Released": "03 Mar 2013",
      "Runtime": "44 min",
      "Genre": "Action, Drama, History",
      "Director": "N/A",
      "Writer": "Michael Hirst",
      "Actors": "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
      "Plot": "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
      "Language": "English, Old English, Norse, Old, Latin",
      "Country": "Ireland, Canada",
      "Awards": "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
      "Metascore": "N/A",
      "imdbRating": "8.6",
      "imdbVotes": "198,041",
      "imdbID": "tt2306299",
      "Type": "series",
      "totalSeasons": "5",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg"
      ]
    },
    {
      "Title": "Gotham",
      "Year": "2014–",
      "Rated": "TV-14",
      "Released": "01 Aug 2014",
      "Runtime": "42 min",
      "Genre": "Action, Crime, Drama",
      "Director": "N/A",
      "Writer": "Bruno Heller",
      "Actors": "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
      "Plot": "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
      "Language": "English",
      "Country": "USA",
      "Awards": "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
      "Metascore": "N/A",
      "imdbRating": "8.0",
      "imdbVotes": "133,375",
      "imdbID": "tt3749900",
      "Type": "series",
      "totalSeasons": "3",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg"
      ]
    },
    {
      "Title": "Power",
      "Year": "2014–",
      "Rated": "TV-MA",
      "Released": "N/A",
      "Runtime": "50 min",
      "Genre": "Crime, Drama",
      "Director": "N/A",
      "Writer": "Courtney Kemp Agboh",
      "Actors": "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
      "Plot": "James \"Ghost\" St. Patrick, a wealthy New York night club owner who has it all, catering for the city's elite and dreaming big, lives a double life as a drug kingpin.",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 win & 6 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
      "Metascore": "N/A",
      "imdbRating": "8.0",
      "imdbVotes": "14,770",
      "imdbID": "tt3281796",
      "Type": "series",
      "totalSeasons": "3",
      "Response": "True",
       "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg"
      ]
    },
    {
      "Title": "Narcos",
      "Year": "2015–",
      "Rated": "TV-MA",
      "Released": "28 Aug 2015",
      "Runtime": "49 min",
      "Genre": "Biography, Crime, Drama",
      "Director": "N/A",
      "Writer": "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
      "Actors": "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
      "Plot": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
      "Language": "English, Spanish",
      "Country": "USA",
      "Awards": "Nominated for 2 Golden Globes. Another 4 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
      "Metascore": "N/A",
      "imdbRating": "8.9",
      "imdbVotes": "118,680",
      "imdbID": "tt2707408",
      "Type": "series",
      "totalSeasons": "2",
      "Response": "True",
       "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      "Title": "Breaking Bad",
      "Year": "2008–2013",
      "Rated": "TV-14",
      "Released": "20 Jan 2008",
      "Runtime": "49 min",
      "Genre": "Crime, Drama, Thriller",
      "Director": "N/A",
      "Writer": "Vince Gilligan",
      "Actors": "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
      "Plot": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
      "Language": "English, Spanish",
      "Country": "USA",
      "Awards": "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
      "Metascore": "N/A",
      "imdbRating": "9.5",
      "imdbVotes": "889,883",
      "imdbID": "tt0903747",
      "Type": "series",
      "totalSeasons": "5",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15BbWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      "ComingSoon": true,
      "Title": "Doctor Strange",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "04 Nov 2016",
      "Runtime": "N/A",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "Scott Derrickson",
      "Writer": "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
      "Actors": "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
      "Plot": "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
      "Metascore": "N/A",
      "imdbRating": "N/A",
      "imdbVotes": "N/A",
      "imdbID": "tt1211837",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg"
      ]
    },
    {
      "ComingSoon": true,
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "16 Dec 2016",
      "Runtime": "N/A",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Gareth Edwards",
      "Writer": "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
      "Actors": "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
      "Plot": "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 nomination.",
      "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "Metascore": "N/A",
      "imdbRating": "N/A",
      "imdbVotes": "N/A",
      "imdbID": "tt3748528",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg"
      ]
    },
    {
      "ComingSoon": true,
      "Title": "Assassin's Creed",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "21 Dec 2016",
      "Runtime": "N/A",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "Justin Kurzel",
      "Writer": "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
      "Actors": "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
      "Plot": "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
      "Language": "English",
      "Country": "UK, France, USA, Hong Kong",
      "Awards": "N/A",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
      "Metascore": "N/A",
      "imdbRating": "N/A",
      "imdbVotes": "N/A",
      "imdbID": "tt2094766",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg"
      ]
    },
    {
      "ComingSoon": true,
      "Title": "Luke Cage",
      "Year": "2016–",
      "Rated": "TV-MA",
      "Released": "30 Sep 2016",
      "Runtime": "55 min",
      "Genre": "Action, Crime, Drama",
      "Director": "N/A",
      "Writer": "Cheo Hodari Coker",
      "Actors": "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
      "Plot": "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
      "Metascore": "N/A",
      "imdbRating": "N/A",
      "imdbVotes": "N/A",
      "imdbID": "tt3322314",
      "Type": "series",
      "totalSeasons": "1",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg"
      ]
    }
  ]
  
  // Write a function findByTitle that takes in a single parameter called title. It should use the .find() method to iterate through the films array and return the film object whose title matches the title parameter.
  
  function findByTitle(Title){
    let findTitle = films.find((film) => {
        return film.Title === Title
    })
    return findTitle
}
  console.log(findByTitle("300"))
  console.log(findByTitle("Vikings"))
  console.log(findByTitle("Narcos"))
  
  // Write a function findById that takes in a single parameter called id. It should use the .find() method to iterate through the films array and return the film object whose imdbID matches the id parameter.
  
  function findById(id){
    let findId = films.find((films)=>{
        return films.imdbID === id
    })
    return findId
  }
  
  console.log(findById("tt0499549"))
  console.log(findById("tt0848228"))
  console.log(findById("tt2094766"))
  
  // Write a function findIndexByTitle that takes in a single parameter called title. It should use the .findIndex() method to iterate through the films array and return the index of the film object whose title matches the title parameter.
  
  function findIndexByTitle(Title){
    let foundTitle = films.findIndex((films)=>{
        return films.Title === Title
    })
    return foundTitle
  }
  
  console.log(findIndexByTitle("Breaking Bad")) // 11
  console.log(findIndexByTitle("Luke Cage")) // 15
  console.log(findIndexByTitle("Doctor Strange")) // 12
  
  // Write a function addShortSummary that in a single parameter called film which is one of the films in the films array. Use the spread operator and the string literal to add a field called shortSummary to the film and return it. The field shortSummary should be the movie title, year, and release date all in one string separated by dashes.


  function addShortSummary(film){
return{
    ...film,
    shortSummary: `${film.title}`
}
  }
  

  // console.log(addShortSummary(films[1]))
  /* 
  {
    Title: 'I Am Legend',
    Year: '2007',
    Rated: 'PG-13',
    Released: '14 Dec 2007',
    Runtime: '101 min',
    Genre: 'Drama, Horror, Sci-Fi',
    Director: 'Francis Lawrence',
    Writer: 'Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington',
    Actors: 'Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield',
    Plot: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
    Language: 'English',
    Country: 'USA',
    Awards: '9 wins & 21 nominations.',
    Poster: 'http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg',
    Metascore: '65',
    imdbRating: '7.2',
    imdbVotes: '533,874',
    imdbID: 'tt0480249',
    Type: 'movie',
    Response: 'True',
    Images: [
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg',
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg'
    ],
    shortSummary: 'I Am Legend-2007-14 Dec 2007'
  }
  */
  
  // Write a function getAllDirectors that uses .forEach to produce an array containing all directors in all the films and return it. If a film does not have a director (I.E. the Director is "N/A"), that film should be skipped.
  
  function getAllDirectors(Director){
    const filteredDirectors = []
    films.forEach((films)=>{
        if(films.Director === Director){
            filteredDirectors.push(Director)
        }
    })
    return filteredDirectors
  }
  
  console.log(getAllDirectors())

  /* [
    'James Cameron',
    'Francis Lawrence',
    'Zack Snyder',
    'Joss Whedon',
    'Martin Scorsese',
    'Christopher Nolan',
    'Scott Derrickson',
    'Gareth Edwards',
    'Justin Kurzel'
  ] */
  
  // Write a function filterByType that takes in a single parameter called type that is either the string "series" or "movie". If type is "series", it should return all films that have a type equal to "series". If type is "movie", it should return all films that have a type equal to "movie".
  function filterByType(type){
    const filteredType = films.filter((films)=>{
        if(films.Type === 'movie' || 'series'){
        }
        return true
    }).flat(2)
    return filteredType
  }
  
  console.log(filterByType("movie").length) //9
  console.log(filterByType("series").length) //7
  
  // Write a function filterByGenre that takes in a single parameter called genres that is an array of genre strings. It should return all movies that have a genre included in the genres array. Possible genres include: ["Action", "Adventure", "Fantasy", "Drama", "Horror", "Sci-Fi", "Thriller", "Biography", "Comedy", "Crime", "History"]


  function filterByGenre(genres){
    const filteredGenre = films.filter((film)=>{
        let isInGenres = false;
        genres.forEach((genre)=>{
            const filmIncludesGenre = film.Genre.includes(genre)
            if (filmIncludesGenre){
                isInGenres = true
            }
        })
        return isInGenres
    })
}
  
//   console.log(filterByGenre(["Adventure", "Crime", "Thriller"]).length) //13
//   console.log(filterByGenre(["Comedy", "Horror", "Biography", "Sci-Fi"]).length) //6
//   console.log(filterByGenre(["Action", "Drama"]).length) //15
  

  // Write a function getActorsList that returns an array containing all the actors for all films. Hint: Use .map() and .split() to produce an array of actor strings for every film. This will create an array of arrays, which can then be flattened into a single array of strings using the .flat() method.
  function getActorsList(){
    const actors = []
    films.forEach((film)=>{
        const filmActors = film.Actors.split(",")
        console.log(filmActors)
        allActors = [...allActors, ...filmActors]
        console.log(allActors)
    })
  }
  
  console.log(getActorsList())
  /* 
  [
    'Sam Worthington',
    'Zoe Saldana',
    'Sigourney Weaver',
    'Stephen Lang',
    'Will Smith',
    'Alice Braga',
    'Charlie Tahan',
    'Salli Richardson-Whitfield',
    'Gerard Butler',
    'Lena Headey',
    'Dominic West',
    'David Wenham',
    'Robert Downey Jr.',
    'Chris Evans',
    'Mark Ruffalo',
    'Chris Hemsworth',
    'Leonardo DiCaprio',
    'Jonah Hill',
    'Margot Robbie',
    'Matthew McConaughey',
    'Ellen Burstyn',
    'Matthew McConaughey',
    'Mackenzie Foy',
    'John Lithgow',
    'Peter Dinklage',
    'Lena Headey',
    'Emilia Clarke',
    'Kit Harington',
    'Travis Fimmel',
    'Clive Standen',
    'Gustaf Skarsgård',
    'Katheryn Winnick',
    'Ben McKenzie',
    'Donal Logue',
    'David Mazouz',
    'Sean Pertwee',
    'Omari Hardwick',
    'Joseph Sikora',
    'Andy Bean',
    'Lela Loren',
    'Wagner Moura',
    'Boyd Holbrook',
    'Pedro Pascal',
    'Joanna Christie',
    'Bryan Cranston',
    'Anna Gunn',
    'Aaron Paul',
    'Dean Norris',
    'Rachel McAdams',
    'Benedict Cumberbatch',
    'Mads Mikkelsen',
    'Tilda Swinton',
    'Felicity Jones',
    'Riz Ahmed',
    'Mads Mikkelsen',
    'Ben Mendelsohn',
    'Michael Fassbender',
    'Michael Kenneth Williams',
    'Marion Cotillard',
    'Jeremy Irons',
    'Mahershala Ali',
    'Mike Colter',
    'Frankie Faison',
    'Erik LaRay Harvey'
  ]
  */
  
  // Write a function filmsUnderAnHour that uses .forEach and the array spread operator to produce an array containing all film titles with a Runtime under an hour. Hint: The parseInt() function is a native Javascript function that can be used to convert a number in string format to number format.

  function filmsUnderAnHour(){
    const filteredFilms = []
    films.forEach((films)=>{
        if(films.Runtime < 60){
            filteredFilms.push(parseInt(Runtime))
        }
    })
    return filteredFilms
  }
  
  console.log(filmsUnderAnHour())
  /* 
  [
    'Game of Thrones',
    'Vikings',
    'Gotham',
    'Power',
    'Narcos',
    'Breaking Bad',
    'Luke Cage'
  ]
  */
  
  // Write a function filterByImdbRating that takes in a single parameter called targetRating that is either a number or "N/A". If targetRating is a number, it should filter out all films with an imdbRating below that number including "N/A" and return the remaining films. If targetRating is "N/A", it should filter out all films that do not have a targetRating of "N/A". Hint: When parsing a number with a decimal, use parseFloat() instead of parseInt(). In computer programming, the integer is a data type that does not support decimal places while the float data type does.
  function filterByImdbRating(targetRating){

  }
  
  // console.log(filterByImdbRating(8).length) //9
  // console.log(filterByImdbRating(8.5).length) //5
  // console.log(filterByImdbRating(9).length) //2
  // console.log(filterByImdbRating("N/A").length) //12
  
  // Write a function getMovieProperties that takes in a single parameter called properties that is an array of property strings. It should return an array of objects which contain only the properties listed in the properties array. I.E. if properties contains ["Title", "Year", "Type"], then getMovieProperties should return an array of object with only the "Title", "Year" and "Type" properties on them.
  function getMovieProperties(properties){
    const mappedMovies = films.map((film)=>{
        const mappedFilm = {}
        properties.forEach((property)=>{
            mappedFilm[property] = film[property]
        })
        return mappedFilm
    })
    return mappedMovies
}
  console.log(getMovieProperties(["Title", "Year", "Type"]))

  /* 
  [
    { Title: 'Avatar', Year: '2009', Type: 'movie' },
    { Title: 'I Am Legend', Year: '2007', Type: 'movie' },
    { Title: '300', Year: '2006', Type: 'movie' },
    { Title: 'The Avengers', Year: '2012', Type: 'movie' },
    { Title: 'The Wolf of Wall Street', Year: '2013', Type: 'movie' },
    { Title: 'Interstellar', Year: '2014', Type: 'movie' },
    { Title: 'Game of Thrones', Year: '2011–', Type: 'series' },
    { Title: 'Vikings', Year: '2013–', Type: 'series' },
    { Title: 'Gotham', Year: '2014–', Type: 'series' },
    { Title: 'Power', Year: '2014–', Type: 'series' },
    { Title: 'Narcos', Year: '2015–', Type: 'series' },
    { Title: 'Breaking Bad', Year: '2008–2013', Type: 'series' },
    { Title: 'Doctor Strange', Year: '2016', Type: 'movie' },
    {
      Title: 'Rogue One: A Star Wars Story',
      Year: '2016',
      Type: 'movie'
    },
    { Title: "Assassin's Creed", Year: '2016', Type: 'movie' },
    { Title: 'Luke Cage', Year: '2016–', Type: 'series' }
  ]
  */
  // console.log(getMovieProperties(["Title", "Released", "Language", "Country", "Metascore"]))
  /* 
  [
    {
      Title: 'Avatar',
      Released: '18 Dec 2009',
      Language: 'English, Spanish',
      Country: 'USA, UK',
      Metascore: '83'
    },
    {
      Title: 'I Am Legend',
      Released: '14 Dec 2007',
      Language: 'English',
      Country: 'USA',
      Metascore: '65'
    },
    {
      Title: '300',
      Released: '09 Mar 2007',
      Language: 'English',
      Country: 'USA',
      Metascore: '52'
    },
    {
      Title: 'The Avengers',
      Released: '04 May 2012',
      Language: 'English, Russian',
      Country: 'USA',
      Metascore: '69'
    },
    {
      Title: 'The Wolf of Wall Street',
      Released: '25 Dec 2013',
      Language: 'English, French',
      Country: 'USA',
      Metascore: '75'
    },
    {
      Title: 'Interstellar',
      Released: '07 Nov 2014',
      Language: 'English',
      Country: 'USA, UK',
      Metascore: '74'
    },
    {
      Title: 'Game of Thrones',
      Released: '17 Apr 2011',
      Language: 'English',
      Country: 'USA, UK',
      Metascore: 'N/A'
    },
    {
      Title: 'Vikings',
      Released: '03 Mar 2013',
      Language: 'English, Old English, Norse, Old, Latin',
      Country: 'Ireland, Canada',
      Metascore: 'N/A'
    },
    {
      Title: 'Gotham',
      Released: '01 Aug 2014',
      Language: 'English',
      Country: 'USA',
      Metascore: 'N/A'
    },
    {
      Title: 'Power',
      Released: 'N/A',
      Language: 'English',
      Country: 'USA',
      Metascore: 'N/A'
    },
    {
      Title: 'Narcos',
      Released: '28 Aug 2015',
      Language: 'English, Spanish',
      Country: 'USA',
      Metascore: 'N/A'
    },
    {
      Title: 'Breaking Bad',
      Released: '20 Jan 2008',
      Language: 'English, Spanish',
      Country: 'USA',
      Metascore: 'N/A'
    },
    {
      Title: 'Doctor Strange',
      Released: '04 Nov 2016',
      Language: 'English',
      Country: 'USA',
      Metascore: 'N/A'
    },
    {
      Title: 'Rogue One: A Star Wars Story',
      Released: '16 Dec 2016',
      Language: 'English',
      Country: 'USA',
      Metascore: 'N/A'
    },
    {
      Title: "Assassin's Creed",
      Released: '21 Dec 2016',
      Language: 'English',
      Country: 'UK, France, USA, Hong Kong',
      Metascore: 'N/A'
    },
    {
      Title: 'Luke Cage',
      Released: '30 Sep 2016',
      Language: 'English',
      Country: 'USA',
      Metascore: 'N/A'
    }
  ]
  */
  
  // Write a function getMovieAwards that uses .map, .filter and the string literal to produce an array of strings containing the movie title and the awards separated by a colon (":"). This function should also filter out any movie that does not have an award (I.E. it should filter out all movies that have an Awards value of "N/A")
  function getMovieAwards(){
    const movieAwards = films.filter((film)=>{
        if(film.Awards !== 'N/A'){
            return true
        } else {
            return false
        }
    })
  }
  
  // console.log(getMovieAwards())
  /* 
  [
    'Avatar:Won 3 Oscars. Another 80 wins & 121 nominations.',
    'I Am Legend:9 wins & 21 nominations.',
    '300:16 wins & 42 nominations.',
    'The Avengers:Nominated for 1 Oscar. Another 34 wins & 75 nominations.',
    'The Wolf of Wall Street:Nominated for 5 Oscars. Another 35 wins & 154 nominations.',
    'Interstellar:Won 1 Oscar. Another 39 wins & 134 nominations.',
    'Game of Thrones:Won 1 Golden Globe. Another 185 wins & 334 nominations.',
    'Vikings:Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.',
    'Gotham:Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.',
    'Power:1 win & 6 nominations.',
    'Narcos:Nominated for 2 Golden Globes. Another 4 nominations.',
    'Breaking Bad:Won 2 Golden Globes. Another 132 wins & 218 nominations.',
    'Rogue One: A Star Wars Story:1 nomination.'
  ]
  */
  
  // Write a function getAllImages that uses .forEach() and the array spread operator to return an array of all images in the films list.
  
  function getAllImages(){
    const allImages = []
        films.forEach((Images)=>{
            Images = [
                ...allImages,films.Images
            ]
        })
        return allImages
  }  

  getAllImages()