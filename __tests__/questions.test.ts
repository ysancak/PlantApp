import { getQuestions } from "@app/services/api";
import { IQuestion } from "@app/store/slices/questions";

test('getQuestions should return questions', async () => {
    const questions = await getQuestions();
    expect(Array.isArray(questions)).toBe(true);
    expect(questions.length).toBeGreaterThan(0);
});

test('getQuestions should return questions with IQuestion interface', async () => {
    const questions = await getQuestions();
    questions.forEach((question: IQuestion) => {
        expect(question).toMatchObject<IQuestion>({
          id: expect.any(Number),
          title: expect.any(String),
          subtitle: expect.any(String),
          image_uri: expect.any(String),
          uri: expect.any(String),
          order: expect.any(Number),
        });
    });
});