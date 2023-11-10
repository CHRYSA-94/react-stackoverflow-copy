import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home, { latestQuestionsList } from "./assets/components/home-layout";
import Questions, { questionsList } from "./assets/components/questions-layout";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
        loader: latestQuestionsList,
        errorElement: <div>There is an error.</div>,
      },
      {
        path: "questions",
        element: <Questions />,
        loader: questionsList,
        errorElement: <div>There is an error.</div>,
      },
    ],
  },
]);
