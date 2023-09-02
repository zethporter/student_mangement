import { mysqlTable, char } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const students = mysqlTable("Students", {
  id: char("id", { length: 36 }).primaryKey(),
  group_id: char("group_id", { length: 36 }),
  first_name: char("first_name", { length: 255 }),
  last_name: char("last_name", { length: 255 }),
  phone_number: char("phone_number", { length: 255 }),
});

export const insertStudentSchema = createInsertSchema(students);
export const selectStudentSchema = createSelectSchema(students);

export const instructors = mysqlTable("instructors", {
  id: char("id", { length: 36 }).primaryKey(),
  firstName: char("firstName", { length: 255 }),
  lastName: char("lastName", { length: 255 }),
  phoneNumber: char("phoneNumber", { length: 255 }),
});

export const insertInstructorSchema = createInsertSchema(instructors);
export const selectInstructorSchema = createSelectSchema(instructors);

export const groups = mysqlTable("groups", {
  id: char("id", { length: 36 }).primaryKey(),
  groupName: char("groupName", { length: 255 }),
  instructorId: char("instructorId", { length: 36 }),
});

export const insertGroupSchema = createInsertSchema(groups);
export const selectGroupSchema = createSelectSchema(groups);

export const events = mysqlTable("events", {
  id: char("id", { length: 36 }).primaryKey(),
  groupId: char("groupId", { length: 36 }),
  typeId: char("typeId", { length: 36 }),
  eventDate: char("eventDate", { length: 255 }),
});

export const insertEventSchema = createInsertSchema(events);
export const selectEventSchema = createSelectSchema(events);

export const eventTypes = mysqlTable("eventTypes", {
  id: char("id", { length: 36 }).primaryKey(),
  name: char("name", { length: 255 }),
});

export const insertEventTypeSchema = createInsertSchema(eventTypes);
export const selectEventTypeSchema = createSelectSchema(eventTypes);

export const messages = mysqlTable("messages", {
  id: char("id", { length: 36 }).primaryKey(),
  messageContent: char("messageContent", { length: 255 }),
  dateTimeSent: char("dateTimeSent", { length: 255 }),
  sentTo: char("sentTo", { length: 255 }),
  sentToEvent: char("sentToEvent", { length: 36 }),
  sentToGroup: char("sentToGroup", { length: 36 }),
});

export const insertMessagesSchema = createInsertSchema(messages);
export const selectMessagesSchema = createSelectSchema(messages);

export const notes = mysqlTable("notes", {
  id: char("id", { length: 36 }).primaryKey(),
  noteDate: char("noteDate", { length: 255 }),
  noteContent: char("noteContent", { length: 255 }),
  relatedEvent: char("relatedEvent", { length: 36 }),
  relatedGroup: char("relatedGroup", { length: 36 }),
});

export const insertNotesSchema = createInsertSchema(notes);
export const selectNotesSchema = createSelectSchema(notes);

export const tags = mysqlTable("tags", {
  id: char("id", { length: 36 }).primaryKey(),
  tagName: char("tagName", { length: 255 }),
});

export const insertTagsSchema = createInsertSchema(tags);
export const selectTagsSchema = createSelectSchema(tags);

export const noteTags = mysqlTable("noteTags", {
  id: char("id", { length: 36 }).primaryKey(),
  noteId: char("noteId", { length: 36 }),
  tagId: char("tagId", { length: 36 }),
});

export const insertNoteTagsSchema = createInsertSchema(noteTags);
export const selectNoteTagsSchema = createSelectSchema(noteTags);
