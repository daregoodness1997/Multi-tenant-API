const connectDB = require('./connect');
const mongoose = require('mongoose');

console.log(url);
let db;

const customerSchema = mongoose.Schema(
  {
    customerName: String,
  },
  { timestamps: true }
);

const customerModel = mongoose.model('Customers', customerSchema);

const getTenantDB = async tenantId => {
  const dbName = `tenant-${tenantId}`;
  db = db ? db : await connectDB(url);
  let tenantDB = db.useDb(dbName, { useCache: true });
  return tenantDB;
};

const getCustomerModel = async tenantId => {
  const tenantDB = await getTenantDB(tenantId);
  return tenantDB.model('Customers', customerSchema);
};

module.exports = { getCustomerModel };
