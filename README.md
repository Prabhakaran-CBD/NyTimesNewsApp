# NyTimeArticle:

This Application is about to interact with NyTimes API endpoint to get the most popular article and to show those list of articles for the period of selected(ex: 7) days. Application look like below

![image](https://user-images.githubusercontent.com/77061534/161289673-16c5c6c3-1c24-45df-8946-34ec81b2e004.png)


 
# Run and Test:
* This application is hosted in netlify, so by clicking the following link it will take to the application https://ny-times-article-app.netlify.app/
* Once the application is loaded just enter the period of articles that you interested to view and then click the search icon,based on the given period the applciation will fetch the most popular articles for that given period of days.
* To see the detail of each articles just tap/click on the each listed article item, this will show the details of that article including with puhlised date and source link of that article. Also along with this listed articles showing the available image related to that news article.
* Additionally there a 'Refresh' button which is used to refresh the page and this will help us to reload the article again by selecting for the different period.
* In the detail section you can see the published date and source as well, by clicking the source it will take to the respective news website and to the relevant article section, but need to make sure we have login credentials have been set up to review those article. Also this is responsive app so it can view in the multiple screen.
* To run this application in locally, just clone the repo into your local system and make sure to install the required dependencies based on the package.json file and then get into the client folder and do run command ‘npm run dev’ to view the application and follow the same above steps to run and view the application.
* Also make sure npm package is installed already , if not need to install the node package from https://nodejs.org/en/download/ .
* To run the build run the 'npm run build' command this will generate the build uner 'dist' folder.
* There is test script to test the api call fetching status whether it returns the data or not. To test this get into client/test folder and then run ‘npm run test’ this will return the assertion by using mocha and chai assertion. 
