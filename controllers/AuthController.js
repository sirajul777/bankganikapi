const db = require("../config");
function makeid(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
exports.getuser = async (req, res) => {
  try {
    await db.query("SELECT * FROM users", (error, results, fields) => {
      if (error) throw error;
      // connected!
      return res.json(results);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.register = async (req, res) => {
  const { namalengkap, username, password, alamat, jenisrekening, nomerrekening, telepon } = req.body;
  try {
    await db.query(
      "INSERT INTO users SET ?",
      {
        _id: makeid(11),
        namalengkap: namalengkap,
        username: username,
        password: password,
        alamat: alamat,
        tlp: telepon,
        rek_tipe: jenisrekening,
        rek_no: nomerrekening,
      },
      (error, results, fields) => {
        if (error) throw error;
        // connected!
        return res.json(results);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
