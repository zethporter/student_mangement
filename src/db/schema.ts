import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

/**
 * TODO: Need to add table for message history.
 * TODO: Need table for notes??
 */
 
export const students = sqliteTable('students', {
    id: integer('id').primaryKey(),
    groupId: integer('groupId').references(() => groups.id),
    firstName: text('firstName'),
    lastName: text('lastName'),
    phoneNumber: text('phoneNumber')
  }, (students) => ({
    phoneNumberIdx: uniqueIndex('phoneNumberIdx').on(students.phoneNumber),
  })
);

export const insertStudentSchema = createInsertSchema(students);
 
export const instructors = sqliteTable('cities', {
  id: integer('id').primaryKey(),
  firstName: text('firstName'),
  lastName: text('lastName'),
  phoneNumber: text('phoneNumber'),
});

export const insertInstructorSchema = createInsertSchema(instructors);


export const groups = sqliteTable('cities', {
  id: integer('id').primaryKey(),
  groupName: text('groupName'),
  instructorId: integer('instructorId').references(() => instructors.id),
});
 
export const insertGroupSchema = createInsertSchema(groups);


export const events = sqliteTable('cities', {
  id: integer('id').primaryKey(),
  groupId: integer('groupId').references(() => groups.id),
  typeId: integer('typeId').references(() => eventTypes.id),
  eventDate: text('eventDate')
});

export const insertEventSchema = createInsertSchema(events);

export const eventTypes = sqliteTable('cities', {
  id: integer('id').primaryKey(),
  name: text('name'),
});

export const insertEventTypeSchema = createInsertSchema(eventTypes);
