Personal Project :

# Movie Info site :

This project is a simple web application that allows users to search for movie information using the OMDB API. The application provides details about the movie, including the poster, rating, plot, cast, director, and links to watch the movie on various OTT platforms. Additionally, it includes a dark mode toggle feature for better user experience.

## Features

- Search for movie information by entering the movie name.
- Display movie details such as poster, rating, plot, cast, and director.
- Provide links to watch the movie on Netflix, Amazon Prime, and Hulu.
- Include links to watch the movie trailer and interviews on YouTube.
- Toggle between light and dark mode for better readability.

## Technologies Used

- HTML
- CSS
- JavaScript
- OMDB API

## How to Use

1. Clone the repository to your local machine.
2. Open the project folder in your code editor.
3. Open the `index.html` file in your browser to view the application.
4. Enter the name of the movie you want to search for in the input field and click the "Search" button.
5. The movie details will be displayed on the page.
6. Use the "Switch to Dark Mode" button to toggle between light and dark mode.

## Project Structure

```
movieinfo project1/
├── index.html
├── style.css
├── index.js
├── key.js
└── README.md
```

## API Key

To use the OMDB API, you need to obtain an API key from [OMDB API](http://www.omdbapi.com/apikey.aspx). Once you have the API key, create a `key.js` file in the project folder and add the following code:

```javascript
// filepath: c:\Users\admin\.vscode\extensions\ritwickdey.liveserver-5.7.9\movieinfo project1\key.js
const key = 'YOUR_OMDB_API_KEY';
```

Replace `'YOUR_OMDB_API_KEY'` with your actual API key.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
