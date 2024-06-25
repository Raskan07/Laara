import { pgTable, integer, pgEnum, serial, uniqueIndex, varchar,text } from 'drizzle-orm/pg-core';

export const mokInterview = pgTable('mokInterview', {
    id: serial('id').primaryKey(),
    jsonMokRes: text('jsonMokRes'),
    jobPossition:varchar('jobPossition').notNull(),
    jobDesc:varchar("jobDesc").notNull(),
    jobExperience:varchar("jobExperience").notNull(),
    createdBy:varchar("createdBy").notNull(),
    createdAt:varchar("createdAt"),
    mockId:varchar("mockId").notNull()
  });