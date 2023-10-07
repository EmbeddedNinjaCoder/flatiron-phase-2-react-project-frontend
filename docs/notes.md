## Phase 2 Project Requirements

1. You must make a single page application (only one `index.html` file) using
   `create-react-app`.
2. Your app should use at least 3 components in a way that keeps your code well
   organized.
3. There should be at least 2 client-side routes using [React
   Router][react-router].

   Be sure to include a nav bar or other UI element that
   allows users to navigate between routes. |

4. Use a `json-server` to create a RESTful API for your backend

and make both a `GET` and a `POST` request to the json server.

Use a form to make your post
request,

specifically a controlled form/component.

Additionally, you may choose to incorporate data from an external API but it is not required.

- You should keep your `json-server` data simple: avoid nested data and
  associations. You'll learn how to work with more complex data in the next
  two phases. Focus on the frontend for this project.
- Upon return of json from your POST request, a state update by a setState
  function is required!

  ```JavaScript
  // in App:
  function addMovie(newMovie){
   setMovies([...movies, newMovie]) // Updating movies state.
  }

  //in Form
  const configObj = {
   method: 'POST',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify({title: "Titanic"})
  }

  fetch('http://localhost:3000/movies', configObj)
   .then(res => res.json())
   .then(data => addMovie(data)) //THIS STATE UPDATE IS REQUIRED!!!
   // clear form

  ```

  Remember: responsibility for re-rendering the page to display the updated
  list of movies should belong to the addMovie function; depending on a
  subsequent action to load the new data is not best practice.

5. Add some styling: you're encouraged to write your CSS from scratch, either by
   using [styled components][] or writing CSS files and using id/className to
   style your elements. You can also incorporate a UI framework (like [React
   Bootstrap][react-bootstrap], [Semantic UI][semantic-ui], or [Material
   UI][material-ui]) if you prefer.
