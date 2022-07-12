// POINT: Alias defination
type SNType = string | number;
type StringLiteralType = "as-number" | "as-text";

const joinWithAlias = (
  n1: SNType,
  n2: SNType,
  conversion: StringLiteralType
) => {
  if (conversion === "as-number") {
    return +n1 + +n2;
  } else {
    return n1.toString() + n2.toString();
  }
};

type Person = {
  first: string;
  last?: string;
};

type PersonName = "Rinku" | "Sameer";
