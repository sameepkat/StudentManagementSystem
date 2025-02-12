import { Model, DataTypes, ModelAttributes } from "sequelize";
import { sequelize } from "../db/connectSQL";

const studentInfoFields = {
  Roll: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  ExamRollNo: {
    type: DataTypes.INTEGER,
  },
  Name: {
    type: DataTypes.STRING,
  },
};

const subjectFields = {
  Basic_Eng_Drawing: {
    type: DataTypes.SMALLINT,
  },
  Calculus_I: {
    type: DataTypes.SMALLINT,
  },
  Digital_Logic: {
    type: DataTypes.SMALLINT,
  },
  Discrete_Struct: {
    type: DataTypes.SMALLINT,
  },
  PST: {
    type: DataTypes.SMALLINT,
  },
  Prog_C: {
    type: DataTypes.SMALLINT,
  },
  Comp_Workshop: {
    type: DataTypes.SMALLINT,
  },
};

type AdditionalFields = {
  sgpa?: { type: typeof DataTypes.FLOAT };
  puRegNo?: { type: typeof DataTypes.INTEGER };
};

const createSemesterModel = (semester: string, type: "Internal" | "Final") => {
  const tableName = `${type}Result${semester}Sem`;

  const additionalFields: AdditionalFields =
    type === "Final"
      ? { sgpa: { type: DataTypes.FLOAT } }
      : { puRegNo: { type: DataTypes.INTEGER } };
  return sequelize.define(
    `${semester}${type}`,
    {
      ...studentInfoFields,
      ...subjectFields,
      ...additionalFields,
    } as ModelAttributes<Model<any, any>, any>,
    { tableName }
  );
};

const firstInternal = createSemesterModel("1st", "Internal");
const firstFinal = createSemesterModel("1st", "Final");

export { firstInternal, firstFinal };
