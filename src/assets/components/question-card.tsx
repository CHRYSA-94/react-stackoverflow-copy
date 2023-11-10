import { useQuestionsContext } from "../questions-context";

export interface QuestionProps {
  accepted_answer_id?: number;
  answer_count: number;
  closed_date?: number;
  closed_reason?: string;
  content_license?: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  last_edit_date?: number;
  link: string;
  owner: Owner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
}

interface Owner {
  accept_rate?: number;
  account_id: number;
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
}

export const QuestionCard: React.FC<QuestionProps> = (
  question: QuestionProps
) => {
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

      <div className="max-width">
        <h3 className="question-preview-title">{question.title}</h3>
        <div className="row space-between">
          <div className="row">
            {question.tags?.map((tag: any, tagIndex: number) => (
              <div key={tagIndex} className="tag">
                {tag}
              </div>
            ))}
          </div>
          <div>{question.owner.display_name}</div>
        </div>
      </div>
    </div>
  );
};
