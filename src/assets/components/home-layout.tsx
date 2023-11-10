import Button from "@material-ui/core/Button";
import { useLoaderData } from "react-router-dom";
import { QuestionCard, QuestionProps } from "./question-card";
import OverflowNews from "./stack-overflow-news";

export const latestQuestionsList = async () => {
  const base = "https://api.stackexchange.com/";
  const pathURL =
    "2.3/questions?order=desc&sort=activity&site=stackoverflow&filter=!9UisIz23d";
  const { items } = await fetch(base + pathURL).then((res) => res.json());
  return items;
};

export default function Home() {
  const questions = useLoaderData() as QuestionProps[];

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
          <div className="row end"></div>
        </div>
        {questions.map((question: QuestionProps, index: number) => {
          return <QuestionCard key={index} {...question} />;
        })}
      </div>
      <OverflowNews />
    </div>
  );
}
