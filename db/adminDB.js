const connectDB = require('connect');
const mongoose = require('mongoose');

const url = `${process.env.MONGO_URL}/adminDB`;

let db;

const tenantSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
  },
  { timestamps: true }
);

const tenantModel = mongoose.model('Tenants', tenantSchema);

const getDB = async () => {
  return db ? db : await connectDB(url);
};

const getTenantModel = async () => {
  const adminDB = await getDB();
  return adminDB.model('Tenants', tenantSchema);
};

module.exports = { getTenantModel };
