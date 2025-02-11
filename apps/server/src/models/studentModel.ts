import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/connectSQL";

interface StudentLoginInterface extends Model {
  username: string;
  Name: string;
  password: string;
}

interface StudentInfoInterface extends Model {
  RollNo: number;
  Name: string;
  ExamRollNo: number;
  PuRegNo: string;
  email: string;
  address: string;
  PhNo: string;
  Sex: "M" | "F";
}

const StudentLogin = sequelize.define<StudentLoginInterface>(
  "StudentLogin",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "studentLogin",
  }
);

const StudentInfo = sequelize.define<StudentInfoInterface>(
  "StudentInfo",
  {
    RollNo: {
      primaryKey: true,
      type: DataTypes.SMALLINT.UNSIGNED,
    },
    Name: {
      type: DataTypes.STRING,
    },
    ExamRollNo: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    PuRegNo: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Address: {
      type: DataTypes.STRING,
    },
    PhNo: {
      type: DataTypes.BIGINT,
    },
    Sex: {
      type: DataTypes.CHAR,
    },
  },
  {
    tableName: "studentInfo",
  }
);

sequelize.sync();

export { StudentLogin, StudentInfo };
