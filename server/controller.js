module.exports = {
   getAll: async(req, res) => {
   // getAll: (req, res) => {
      const db = req.app.get('db');
      // res.status(200).json(await db.get_all_houses())
      const allHouses = await db.get_all_houses();
      res.status(200).json(allHouses);
   },
   addHouse: async(req, res) => {
      const {name, address, city, state, zipcode} = req.body;
      const db = req.app.get('db');
      const houseAdded = await db.add_house(name, address, city, state, zipcode)
      res.status(200).json(houseAdded);
   },
   deleteHouse: async(req, res) => {
      const {id} = req.params;
      const db = req.app.get('db');
      const houseRemoved = await db.delete_house(id);
      res.status(200).json(houseRemoved);
   }
}