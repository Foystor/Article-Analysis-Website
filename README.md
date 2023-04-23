# Article Analysis Website

Real-world project from [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) at Udacity.

A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

We will make use of an external API called MeaningCloud that will perform a detailed multilingual sentiment analysis of texts from different sources. The text provided is analyzed to determine if it expresses a positive/negative/neutral sentiment.

## Demo



## Goals

The goal of this project is to give us practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external URLs

The motive of this project is to have us a taste of the environment and tools we will most likely come across in a front end role. Our focus should be to understand the role every tool and technology is playing in the overall architecture.

## Usage

1. [Sign up for an API key](https://www.meaningcloud.com/developer/sentiment-analysis)

2. In the `root` directory:
```
$ git clone https://github.com/Foystor/Article-Analysis-Website.git
```
3. Get to the `evaluate-news-nlp` directory:
```
$ cd evaluate-news-nlp
```
4. Install packages:
```
$ npm install
```
5. Create a new `.env` file and fill it with your API key:
```
API_KEY=**************************
```
6. Start the server:
```
$ npm run start
```
7. Build the project in production mode:
```
$ npm run build-prod
```
8. Navigate to http://localhost:8081/

## Built With

- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
- External script for offline functionality - Service Worker
- External API - MeaningCloud Sentiment Analysis API
- Testing framework - Jest

## License

[MIT License](LICENSE)