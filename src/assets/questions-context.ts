import { createContext, useContext } from "react";

export const QuestionsContext = createContext<any | undefined>(undefined)

export function useQuestionsContext() {
    const questions = useContext(QuestionsContext);

    if (questions === undefined) {
        throw new Error('useQuestionsContext must be used with QuestionsContext')
    }

    return questions;
}