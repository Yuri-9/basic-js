const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameDreameTeam;
  if (!Array.isArray(members)) {
    return false;
  } else {
    nameDreameTeam = nameDreameTeam = members
      .map((item) =>
        (typeof item == "string" ? item.trim().slice(0, 1) : "").toUpperCase()
      )
      .sort()
      .join("");
  }
  return nameDreameTeam;
};
