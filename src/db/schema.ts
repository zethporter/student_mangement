import { mysqlTable, char } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const students = mysqlTable("Students", {
  id: char("id", { length: 36 }).primaryKey(),
  group_id: char("group_id", { length: 36 }),
  first_name: char("first_name", { length: 255 }),
  last_name: char("last_name", { length: 255 }),
  phone_number: char("phone_number", { length: 255 }),
  user_id: char("user_id", { length: 36 }),
});

export const insertStudentSchema = createInsertSchema(students);
export const selectStudentSchema = createSelectSchema(students);

export const instructors = mysqlTable("Instructors", {
  id: char("id", { length: 36 }).primaryKey(),
  first_name: char("first_name", { length: 255 }),
  last_name: char("last_name", { length: 255 }),
  phone_number: char("phone_number", { length: 255 }),
  user_id: char("user_id", { length: 36 }),
});

export const insertInstructorSchema = createInsertSchema(instructors);
export const selectInstructorSchema = createSelectSchema(instructors);

export const groups = mysqlTable("Groups", {
  id: char("id", { length: 36 }).primaryKey(),
  group_name: char("group_name", { length: 255 }),
  instructor_id: char("instructor_id", { length: 36 }),
  user_id: char("user_id", { length: 36 }),
});

export const insertGroupSchema = createInsertSchema(groups);
export const selectGroupSchema = createSelectSchema(groups);

export const events = mysqlTable("Events", {
  id: char("id", { length: 36 }).primaryKey(),
  group_id: char("group_id", { length: 36 }),
  type_id: char("type_id", { length: 36 }),
  event_date: char("event_date", { length: 255 }),
  user_id: char("user_id", { length: 36 }),
});

export const insertEventSchema = createInsertSchema(events);
export const selectEventSchema = createSelectSchema(events);

export const eventTypes = mysqlTable("Event_Types", {
  id: char("id", { length: 36 }).primaryKey(),
  name: char("name", { length: 255 }),
  user_id: char("user_id", { length: 36 }),
});

export const insertEventTypeSchema = createInsertSchema(eventTypes);
export const selectEventTypeSchema = createSelectSchema(eventTypes);

export const messages = mysqlTable("Messages", {
  id: char("id", { length: 36 }).primaryKey(),
  message_content: char("message_content", { length: 255 }),
  date_time_sent: char("date_time_sent", { length: 255 }),
  sent_to_event: char("sent_to_event", { length: 36 }),
  sent_to_group: char("sent_to_group", { length: 36 }),
  user_id: char("user_id", { length: 36 }),
});

export const insertMessagesSchema = createInsertSchema(messages);
export const selectMessagesSchema = createSelectSchema(messages);

export const messageConnectors = mysqlTable("message_connectors", {
  id: char("id", { length: 36 }).primaryKey(),
  message_id: char("message_id", { length: 36 }),
  student_id: char("student_id", { length: 36 }),
  user_id: char("user_id", { length: 36 }),
});

export const insertNoteTagsSchema = createInsertSchema(messageConnectors);
export const selectNoteTagsSchema = createSelectSchema(messageConnectors);

export const users = mysqlTable("users", {
  id: char("id", { length: 36 }).primaryKey(),
  first_name: char("first_name", { length: 255 }),
  last_name: char("last_name", { length: 255 }),
  email: char("email", { length: 255 }),
});

export const insertUsersSchema = createInsertSchema(users);
export const selectUsersSchema = createSelectSchema(users);
