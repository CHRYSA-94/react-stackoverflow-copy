import { useQuestionsContext } from "../questions-context";

function QuestionCard({ question }) {
  return (
    <div className="question-card row">
      <div className="metrics-container column align-items-end">
        <p className="card-metric">
          <span>{question.score}</span> votes
        </p>
        <p className="card-metric">
          <span>{question.answer_count}</span> answers
        </p>
        <p className="card-metric">
          <span>{question.view_count}</span> views
        </p>
      </div>

      <div>
        <h3 className="question-preview-title">{question.title}</h3>
        <div className="row">
          {question.tags?.map((tag, tagIndex) => (
            <div key={tagIndex} className="tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
