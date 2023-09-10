import { mysqlTable, char } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const students = mysqlTable("Students", {
  id: char("id", { length: 36 }).primaryKey(),
  groupId: char("group_id", { length: 36 }),
  firstName: char("first_name", { length: 255 }),
  lastName: char("last_name", { length: 255 }),
  phoneNumber: char("phone_number", { length: 255 }),
});

export const insertStudentSchema = createInsertSchema(students);
export const selectStudentSchema = createSelectSchema(students);

export const instructors = mysqlTable("Instructors", {
  id: char("id", { length: 36 }).primaryKey(),
  firstName: char("first_name", { length: 255 }),
  lastName: char("last_name", { length: 255 }),
  phoneNumber: char("phone_number", { length: 255 }),
});

export const insertInstructorSchema = createInsertSchema(instructors);
export const selectInstructorSchema = createSelectSchema(instructors);

export const groups = mysqlTable("Groups", {
  id: char("id", { length: 36 }).primaryKey(),
  groupName: char("group_name", { length: 255 }),
  instructorId: char("instructor_id", { length: 36 }),
});

export const insertGroupSchema = createInsertSchema(groups);
export const selectGroupSchema = createSelectSchema(groups);

export const events = mysqlTable("Events", {
  id: char("id", { length: 36 }).primaryKey(),
  groupId: char("group_id", { length: 36 }),
  typeId: char("type_id", { length: 36 }),
  eventDate: char("event_date", { length: 255 }),
});

export const insertEventSchema = createInsertSchema(events);
export const selectEventSchema = createSelectSchema(events);

export const eventTypes = mysqlTable("Event_Types", {
  id: char("id", { length: 36 }).primaryKey(),
  name: char("name", { length: 255 }),
});

export const insertEventTypeSchema = createInsertSchema(eventTypes);
export const selectEventTypeSchema = createSelectSchema(eventTypes);

export const messages = mysqlTable("Messages", {
  id: char("id", { length: 36 }).primaryKey(),
  messageContent: char("message_content", { length: 255 }),
  dateTimeSent: char("date_time_sent", { length: 255 }),
  sentToEvent: char("sent_to_event", { length: 36 }),
  sentToGroup: char("sent_to_group", { length: 36 }),
});

export const insertMessagesSchema = createInsertSchema(messages);
export const selectMessagesSchema = createSelectSchema(messages);

export const messageConnectors = mysqlTable("message_connectors", {
  id: char("id", { length: 36 }).primaryKey(),
  messageId: char("message_id", { length: 36 }),
  studentId: char("student_id", { length: 36 }),
});

export const insertNoteTagsSchema = createInsertSchema(messageConnectors);
export const selectNoteTagsSchema = createSelectSchema(messageConnectors);
