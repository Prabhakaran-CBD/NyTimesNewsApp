import React, { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";

//main component
const Welcome = () => {
  const [articleData, setArticleData] = useState([]);
  const [arrticleContent, setArticleContent] = useState([]);
  const [daysOfArticle, setDaysOfArticle] = useState(0);
  //Below function is used to call the nyTimes API to get the article data
  const getArticles = async () => {
    console.log("DaysOfArticle", daysOfArticle);
    if (daysOfArticle != 1 && daysOfArticle != 7 && daysOfArticle != 30) {
      return alert("Please enter period from 1,7 or 30..");
    }
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${daysOfArticle}.json?api-key=MXtNcz88gf8ovwB4vtUEZTJFvNcdTsBm`
    );
    setArticleData(response.data.results);
    if (response.data.results.length > 0) {
      try {
        let content = response.data.results.map((object, index) => (
          <Accordion
            key={index}
            style={{
              background: "transparent",
              marginRight: "1px",
              color: "cyan",
              width: "100%",
              border: "1px",
              borderColor: "black",
              borderStyle: "hidden", //solid
              padding: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {object.media.length > 0 ? (
                <>
                  <img
                    style={{
                      height: "20px",
                      width: "20px",
                      display: "inline-block",
                    }}
                    alt=""
                    src={object.media[0]["media-metadata"][0].url}
                  />
                </>
              ) : (
                ""
              )}

              <div
                style={{
                  display: "inline-block",
                  width: "auto",
                  textAlign: "left",
                  wordBreak: "break-all",
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              >
                {object.title}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: "inline-block",
                  width: "70%",
                  fontSize: "15px",
                }}
              >
                {object.abstract}
              </div>
            </AccordionDetails>

            <div
              style={{
                display: "inline-block",
                width: "50%",
                fontSize: "10px",
                marginLeft: "15px",
              }}
            >
              Published Date : {object.published_date}
              <a
                style={{
                  textDecoration: "none",
                  color: "#00FFE7",
                  marginLeft: "10px",
                }}
                href={`${object.url}`}
                target="blank"
              >
                Source &#8599;
              </a>
            </div>
          </Accordion>
        ));
        setArticleContent(content);
      } catch (err) {
        console.log("No Article found", err.message);
      }
    }
  };
  //below function is used to refresh and reload the page
  const getRefresh = () => {
    window.location.reload();
  };
  //below function is used to receive the number of period and store in the state to fetch articles
  const getDays = (e) => {
    e.preventDefault();
    setDaysOfArticle(e.target.value);
  };
  return (
    <div className="flex w-full justify-left items-center ">
      <div className="flex-auto mf:flex-row flex-col items-start  md:p-5">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl text-white sm:text-5xl text-gradient py-1">
            NY Times <br /> across the world!
          </h1>
          <p className="text-left text-white mt-5 font-light md: w-9/12 w-11/12 text-base">
            Provides services for getting the most popular articles on
            NYTimes.com based on emails, shares, or views..
          </p>
          <div className="flex flex-1 flex-col mf:flex-row items-center justify-between md:p-10 max-w-md mx-auto ">
            <div>
              <div className="p-5 md:w-96 flex flex-col justify-end items-center blue-glassmorphism ">
                <TextField
                  label="search for period (1 ,7 30).."
                  variant="filled"
                  color="primary"
                  style={{ width: "auto", backgroundColor: "darkgrey" }}
                  InputProps={{
                    endAdornment: (
                      <IconButton onClick={getArticles}>
                        <SearchIcon />
                      </IconButton>
                    ),
                  }}
                  onChange={getDays}
                />
                {articleData.length > 0 ? (
                  <>
                    <button
                      type="button"
                      onClick={getRefresh}
                      className=" mx-5 my-1 justify-center items-center  bg-[darkgray] p-1 rounded-xl  cursor-pointer hover:bg-[#2546bd]"
                    >
                      Refresh
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {articleData.length > 0 ? (
            <div className="flex flex-1 flex-col mf:flex-row items-center justify-between md:p-1 max-w-md mx-auto">
              <div
                style={{
                  //marginLeft: "25px",
                  width: "auto",
                  //marginLeft: "auto",
                  //minWidth: "10px",
                  border: "2px solid rgb(115, 115, 115)",
                  height: "auto",
                  borderRadius: "20px",
                  display: "inline-block",
                }}
              >
                {arrticleContent}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
