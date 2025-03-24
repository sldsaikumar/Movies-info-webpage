Personal Project :

# Movie Info site :

This project is a simple web application that allows users to search for movie information using the OMDB API. The application provides details about the movie, including the poster, rating, plot, cast, director, and links to watch the movie on various OTT platforms. Additionally, it includes a dark mode toggle feature for better user experience.

## Features

- Search for movie information by entering the movie name.
- ![Screenshot 2025-03-24 165210](https://github.com/user-attachments/assets/a6be4b9b-23f3-49c4-a64b-b0aa62459396)

- Display movie details such as poster, rating, plot, cast, and director.
- ![Screenshot 2025-03-24 165256](https://github.com/user-attachments/assets/453966e6-226b-42ad-b5f2-dcd1d3779f89)

- Provide links to watch the movie on Netflix, Amazon Prime, and Hulu.
- Include links to watch the movie trailer and interviews on YouTube.
- ![Screenshot 2025-03-24 165327](https://github.com/user-attachments/assets/1135f54b-3aa1-4ade-b727-d951685234df)


- Toggle between light and dark mode for better readability.
- ![Screenshot 2025-03-24 165654](https://github.com/user-attachments/assets/4c519653-f5f4-4539-8764-94a7542bb318)


- ![Screenshot 2025-03-24 165707](https://github.com/user-attachments/assets/add3baf2-ddd2-45e1-8e4e-f62aa46f4312)


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
