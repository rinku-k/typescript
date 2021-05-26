// POINT:
// In TS -> list of labels that are binded with numbers
// This number is increment number starting 0 by default
// Each key can be overridden with another number

// POINT: BAD
// const ADMIN = 1;
// const TEACHER = 2;
// const STUDENT = 3;

// POINT: GOOD
enum DefaultSeriesRole {
  ADMIN,
  TEACHER,
  STUDENT,
}

// Changing Starting value of the series
enum StartingOneRole {
  ADMIN = 1,
  TEACHER,
  STUDENT,
}

enum RandomRole {
  ADMIN = 1,
  TEACHER = 5,
  STUDENT,
}

// POINT: BAD (need number initializer)
// enum RandomMixRole {
//   ADMIN = 'ADMIN',
//   TEACHER,
//   STUDENT,
// }

// POINT: BAD (No object allowed)
// enum WrongRole {
//   ADMIN = 'ADMIN',
//   TEACHER = {},
//   STUDENT,
// }

enum Role {
  ADMIN = "ADMIN",
  TEACHER = 100,
  STUDENT,
}

const role = Role.ADMIN;

if (role === Role.ADMIN) {
  console.log("is Admin");
}
