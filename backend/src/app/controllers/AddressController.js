import Address from '../models/Address';

class AddressController {
  async store(req, res) {
    const { zip_code, street, number, district } = req.body;

    const address = await Address.create(req.body);

    return res.json(address);
  }
}

export default new AddressController();
