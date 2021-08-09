# YouTube-Search-App

Single page frontend application from the course "Modern React With Redux" on Udemy by Stephen Grider.
This app allows users to search for videos on YouTube and choose a video to play from a list of 5 options.

## Images

> #### Search Page

> ![homepage](https://user-images.githubusercontent.com/75185644/128669036-9b12a64d-8c9a-4adc-bf88-1348c590ec41.PNG))

## Functionalities

- Users have the ability to use a search bar to query the YouTube API.

- Search results display up to 5 videos for the user to select from. The video chosen by the user is then played on a larger container.

## Technologies Used

### Frontend

- Javascript
- React
- HTML5
- CSS3

## Getting Started

This app contains a YouTube API Key which has been hidden in a .json configuration file for security purposes, so the app cannot be run with all of its features on your local machine without this variable. However, feel free to clone this repository, then create a .json configuration file within a config folder and add a value to the following variable:

```
{
    "youTubeKey": ""
}
```

### Clone or download this repository

```sh
git clone https://github.com/dev382/YouTube-Search-App.git
```

### Install dependencies

In the directory of the folder named YelpCamp, which containing the files of the repositiory, run the following command from your terminal:

```sh
npm install
```

or

```sh
yarn install
```

### Run the app from your terminal

Once installation is complete, run the following command from your terminal:

```sh
npm start
```

### Launch the app from your web browser

Open your web browser and navigate to:

```sh
localhost:3000
```

The app should now be running.
