import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
// import DropdownButton from "@mui/material/DropdownButton";

import useSWR from "swr";
import { useQuestionsContext } from "../questions-context";
import QuestionCard from "./QuestionCard";
import OverflowNews from "./stack-overflow-news";

function Home() {
  // // const [questions, setQuestions] = useState([]);
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // //   const questions = useQuestionsContext();

  // // const fetchData = () => {
  // const base = "https://api.stackexchange.com/";
  // const pathURL = "2.3/questions?order=desc&sort=activity&site=stackoverflow";
  // const { data: questions, error, isLoading } = useSWR<any>(
  //   base + pathURL,
  //   fetcher
  // );
  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  // console.log(questions);
  // // };

  // useEffect(() => {
  // const base = "https://api.stackexchange.com/";
  // const pathURL = "2.3/questions?order=desc&sort=activity&site=stackoverflow";
  // const fetchQuestions = async () => {
  //   const res = await fetch(base + pathURL);
  //   const data = await res.json();
  //   setQuestions(data);
  // };
  // fetchQuestions();
  // }, []);

  return (
    <div className="main-container row space-between">
      <div className="main column">
        <div className="column main-header-container">
          <div className="row align-items-center space-between">
            <h2 className="logo">Top Questions</h2>
            <Button variant="contained" color="primary" className="regular-btn">
              Ask Question
            </Button>
          </div>
          <div className="row end">
            {/* <ButtonGroup>
              <Button>Newest</Button>
              <Button>Active</Button>

              <DropdownButton
                as={ButtonGroup}
                title="More"
                id="bg-nested-dropdown"
              >
                <Dropdown.Item eventKey="1">Bountied</Dropdown.Item>
                <Dropdown.Item eventKey="2">Unanswered</Dropdown.Item>
                <Dropdown.Item eventKey="2">Frequent</Dropdown.Item>
                <Dropdown.Item eventKey="2">Score</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup> */}
            <Button variant="outlined" color="primary">
              Filter
            </Button>
          </div>
        </div>
        {/* {questions?.items?.map((question: any, index: number) => (
          <QuestionCard key={index} question={question} />
        ))} */}
      </div>
      <OverflowNews />
    </div>
  );
}

export default Home;
