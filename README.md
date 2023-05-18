# Project Name

<br>



## Description

Tracker for voyages/countries visited with a slot for fun facts, cities, rating and description.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and see what the website is about, log in and sign up. 
- **sign up** - As a user I want to sign up on the web page so that I can keep track of my journeys and update them along the way.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want reccomendations based on the countries I've visited.(bonus)



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `POST`     | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/add-countries`                   | Renders `add-countries` view.                                |                                                          |
| `POST`     | `/add-countries`                   | Sends info to the server and creates a new visited country in the DB. |                                                 |
| `GET`      | `/edit-countries`                  | Renders `edit-countries` view for the particular country.    |                                                          |
| `POST`     | `/edit-countries`                  | Sends info to the server and edits an existing visited country in the DB. |                                             |


delete




## Models

User model

```javascript
{
  name: String, 
  email: String,
  password: String,
}

```

Country model

```javascript
{
  name: String,
  rating: Number,
  cities: Array,
  funFacts: String,
  description: String,
}
```


<br>

## API's

https://restcountries.com/

https://documenter.getpostman.com/view/1134062/T1LJjU52#89ad7ab2-e3e1-4d8a-b99d-44e1c149e788

https://flagpedia.net/download/api

https://rapidapi.com/ajayakv/api/rest-countries/details

<br>


## Packages



<br>




<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()



<br>



### Slides

The url to your presentation slides


### Contributors
FirstName LastName - [`<github-username>`](https://github.com/person1-username) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person1-username)

FirstName LastName - [`<github-username>`](https://github.com/person2-username) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person2-username)
