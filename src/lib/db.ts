import Dexie, { type EntityTable } from 'dexie';
import type { Question, ModelAnswer, UserAttempt } from '../types';

interface OfflineQuestion extends Question {
  synced: boolean;
}

interface OfflineModelAnswer extends ModelAnswer {
  synced: boolean;
}

interface OfflineAttempt extends UserAttempt {
  synced: boolean;
}

const db = new Dexie('PoliticsEssayPlanner') as Dexie & {
  questions: EntityTable<OfflineQuestion, 'id'>;
  modelAnswers: EntityTable<OfflineModelAnswer, 'id'>;
  attempts: EntityTable<OfflineAttempt, 'id'>;
  favorites: EntityTable<{ id: string; question_id: string; created_at: string }, 'id'>;
  drafts: EntityTable<{ id: string; question_id: string; content: string; updated_at: string }, 'id'>;
};

db.version(1).stores({
  questions: 'id, paper, topic, difficulty, source_type, mark_allocation, synced',
  modelAnswers: 'id, question_id, synced',
  attempts: 'id, user_id, question_id, completed_at, synced',
  favorites: 'id, question_id, created_at',
  drafts: 'id, question_id, updated_at'
});

export { db };

export async function cacheQuestions(questions: Question[]): Promise<void> {
  const offlineQuestions: OfflineQuestion[] = questions.map(q => ({
    ...q,
    synced: true
  }));
  await db.questions.bulkPut(offlineQuestions);
}

export async function getCachedQuestions(): Promise<Question[]> {
  return db.questions.toArray();
}

export async function cacheModelAnswers(answers: ModelAnswer[]): Promise<void> {
  const offlineAnswers: OfflineModelAnswer[] = answers.map(a => ({
    ...a,
    synced: true
  }));
  await db.modelAnswers.bulkPut(offlineAnswers);
}

export async function getCachedModelAnswer(questionId: string): Promise<ModelAnswer | undefined> {
  return db.modelAnswers.where('question_id').equals(questionId).first();
}

export async function saveDraft(questionId: string, content: string): Promise<void> {
  await db.drafts.put({
    id: questionId,
    question_id: questionId,
    content,
    updated_at: new Date().toISOString()
  });
}

export async function getDraft(questionId: string): Promise<string | undefined> {
  const draft = await db.drafts.get(questionId);
  return draft?.content;
}

export async function deleteDraft(questionId: string): Promise<void> {
  await db.drafts.delete(questionId);
}

export async function saveOfflineAttempt(attempt: UserAttempt): Promise<void> {
  await db.attempts.put({
    ...attempt,
    synced: false
  });
}

export async function getUnsyncedAttempts(): Promise<UserAttempt[]> {
  return db.attempts.where('synced').equals(0).toArray();
}

export async function markAttemptSynced(id: string): Promise<void> {
  await db.attempts.update(id, { synced: true });
}

export async function addFavorite(questionId: string): Promise<void> {
  await db.favorites.put({
    id: questionId,
    question_id: questionId,
    created_at: new Date().toISOString()
  });
}

export async function removeFavorite(questionId: string): Promise<void> {
  await db.favorites.delete(questionId);
}

export async function getFavorites(): Promise<string[]> {
  const favorites = await db.favorites.toArray();
  return favorites.map(f => f.question_id);
}

export async function isFavorite(questionId: string): Promise<boolean> {
  const favorite = await db.favorites.get(questionId);
  return !!favorite;
}
