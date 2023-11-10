import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
// import DropdownButton from "@mui/material/DropdownButton";

import useSWR from "swr";
import { useQuestionsContext } from "../questions-context";
import { QuestionCard, QuestionProps } from "./question-card";
import OverflowNews from "./stack-overflow-news";

export const questionsList = async () => {
  const base = "https://api.stackexchange.com/";
  const pathURL = "2.3/questions?order=desc&sort=activity&site=stackoverflow";
  const { items } = await fetch(base + pathURL).then((res) => res.json());
  return items;
};

export default function Questions() {
  const questions = useLoaderData() as QuestionProps[];

  // Fetch data with useEffect

  // const [questions, setQuestions] = useState<QuestionProps[]>([]);
  // useEffect(() => {
  //   const base = "https://api.stackexchange.com/";
  //   const pathURL = "2.3/questions?order=desc&sort=activity&site=stackoverflow";
  //   const fetchQuestions = async () => {
  //     const res = await fetch(base + pathURL);
  //     const data = await res.json();
  //     setQuestions(data);
  //   };
  //   fetchQuestions();
  // }, []);

  return (
    <div className="main-container row space-between">
      <div className="main column">
        <div className="column main-header-container">
          <div className="row align-items-center space-between">
            <h2 className="logo">All Questions</h2>
            <Button variant="contained" color="primary" className="regular-btn">
              Ask Question
            </Button>
          </div>
          <div className="row space-between">
            <p>{questions?.length} questions</p>
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
        {questions?.map((question: QuestionProps, index: number) => {
          return <QuestionCard key={index} {...question} />;
        })}
      </div>
      <div className="padding">
        <OverflowNews />
      </div>
    </div>
  );
}
