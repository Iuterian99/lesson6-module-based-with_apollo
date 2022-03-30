const { fetch, fetchAll } = require("../../lib/postgres");

const Airports = `
SELECT 
  *
FROM
  airports
`;

const Reyses = `
SELECT 
  *
FROM
  reyses
WHERE
  airport_id = $1
`;

const airports = () => fetchAll(Airports);
const reyses = (airport_id) => fetchAll(Reyses, airport_id);
module.exports = {
  airports,
  reyses,
};
