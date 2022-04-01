# NyTimeArticle:

This Application is about to interact with NyTimes API endpoint to get the most popular article and to show those list of articles for the period of last 7 days.
Application look like below

![image](https://user-images.githubusercontent.com/77061534/161213141-e861a269-2615-49c3-a48f-5a9720001145.png)

 
# Run and Test:
* To run this application just clone the repo into your local system and make sure to install the required dependencies based on the package.json file and then get into the client folder and do run command ‘npm run dev’ to view the application. 
* Also make sure npm package is installed already , if not need to install the node package from https://nodejs.org/en/download/ .
* Once the application is loaded into your localhost:3000 just click the ‘load’ button this will bring and display the list of NYTimes most popular articles in the   webpage. 
* To see the detail of each articles just tap/click on the each listed article item. Also along with this listed articles showing the available image related to that news article.
* Additionally there a 'Refresh' button which is used to refresh the page and this will help us to reload the article by clicking the 'Load' button.
* In the detail section you see the published date and source as well, by clicking the source it will take to the respective news website and to the relevant article section, but need to make sure we have login credentials have been set up to review those article. Also this is responsive app so it can view in the multiple screen.
* There is test script to test the api call fetching status whether it returns the data or not. To test this get into client/test folder and then run ‘npm run test’ this will return the assertion by using mocha and chai assertion. 

