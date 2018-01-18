![Logo](/src/images/take-a-paws.svg)

A social networking website that brings together dog owners, who do not have enough time for their dogs, with dog lovers who always wanted a dog friend, but can’t afford one or can only dedicate a limited time to it.

Take a Paws could be used for dog walking, taking care of the dog while the owner is on holiday, finding a dog for therapy or just find new friends who have dogs, all free of charge.

 [Setup](#Setup) | [Technologies](#Technologies) | [Approach](#Approach) | [Contributors](#Contributors) |

 # Setup
 - $ git clone https://github.com/majdeddine/take-a-paws
 - $ cd take-a-paws
 - $ npm install
 - $ createdb take-a-paws-dev
 - $ createdb take-a-paws-test
 - $ sequelize db:migrate:all
 - $ set up .env file with your cloudinary.com details
     NODE_ENV='development'
     cloud_name=
     api_key=
     api_secret=
 - $ npm start  & npm run paws
 - $ sequelize db:migrate --env test
 - $ npm test -> for running the tests

 # Full Stack Javascript Technologies
 - React
 - Node
 - Socket.io for the chat
 - Mocha and Chai for testing

 # Approach
 Our Minimum Viable Product

 ```
 As a dog lover,
 So that I can find dog friends,
 I would like an website that would show me a list of dogs.

 As a dog owner,
 So that I can find friends for my dog,
 I would like to list a dog.

 As a dog owner,
 So that people how lovely my dog is,
 I would like to be able to upload a picture of my dog.

 As a user,
 So that I can see and list dogs,
 I would like to sign up in the website.

 As a user,
 So that I can see and list dogs,
 I would like to sign in the website.

 As a user,
 So that my cat not to use my account,
 I would like to log out from the website.
 ```
 Features implemented beyond MPV
 
  ```
 As a user,
 So that I can show my love for dogs,
 I would like to be able to "paw" the dog I like.
 
 As a dog owner,
 So that I can show my enthusiasm to dog lovers,
 I would like to be able to accept their "paw" requests.
 
 As a user,
 So that I know which dogs lovers contact me,
 I would like to see the paws requests in my account page.
 
 As a user,
 So that I know which dogs lovers contact me,
 I would like to see the paws requests in my account page.
 
 As a user,
 So that I can dog lovers better,
 I would like to able to chat.
  ```
 
 # Contributors
- Gabriela Budeanu [@gabrielabud](https://github.com/gabrielabud)
- Andrew Davey [@ajdavey8](https://github.com/ajdavey8)
- Majdeddine Jebri [@majdeddine](https://github.com/majdeddine)
- Ignacio Panebianco [@IPbianco](https://github.com/IPbianco)
