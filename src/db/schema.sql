
CREATE TABLE `Instructors`(
    `id` CHAR(36) PRIMARY KEY NOT NULL,
    `first_name` CHAR(255) NOT NULL,
    `last_name` CHAR(255) NOT NULL,
    `phone_number` VARCHAR(255) NULL
)

CREATE TABLE `Event_Types`(
    `id` CHAR(36) PRIMARY KEY NOT NULL,
    `label` CHAR(255) NOT NULL
)

CREATE TABLE `Groups`(
    `id` CHAR(36) PRIMARY KEY NOT NULL,
    `instructor_id` CHAR(36) NULL,
    `group_name` CHAR(255) NOT NULL
)

CREATE TABLE `Events`(
    `id` CHAR(36) PRIMARY KEY NOT NULL,
    `group_id` CHAR(36) NULL,
    `type_id` CHAR(36) NULL,
    `event_date` DATETIME NOT NULL
)

CREATE TABLE `Students`(
    `id` CHAR(36) PRIMARY KEY NOT NULL,
    `group_id` CHAR(36) NULL,
    `first_name` CHAR(255) NOT NULL,
    `last_name` CHAR(255) NULL,
    `phone_number` VARCHAR(255) NULL
)

CREATE TABLE `Messages`(
    `id` CHAR(36) PRIMARY KEY NOT NULL,
    `message_content` VARCHAR(255) NOT NULL,
    `date_time_sent` DATETIME NOT NULL,
    `sent_to_group` CHAR(36) NULL,
    `sent_to_event` CHAR(36) NULL
)

CREATE TABLE `message_connectors`(
    `id` CHAR(36) PRIMARY KEY NOT NULL,
    `message_id` CHAR(36) NOT NULL,
    `student_id` CHAR(36) NOT NULL
);
