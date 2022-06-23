require('http-status-codes');
require('dotenv').config();

const morgan = require('morgan');
const connectDB = require('./db/connect');

const express = require('express');
const app = express();

const { getTenantModel } = require('./db/adminDB');
const { getCustomerModel } = require('./db/tenantDB');

// logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.get('/', (req, res) => {
  res.send(`<h2>Multi tenant API</h2>`);
});
app.get('/tenant', async (req, res) => {
  let tenantId = req.query.tenantId;
  let tenantModel = await getTenantModel();
  const tenant = new tenantModel({ id: tenantId, name: tenantId });
  let doc = await tenantModel.findOneAndUpdate({ id: tenant.id }, { i });

  if (!doc) {
    // if tenant not found then save tenant, for simplicity
    // if (err) handle error
    // saved
    tenant.save();
  }
  res.json(tenant);
});

app.get('/customer', async (req, res) => {
  let tenantId = req.query.tenantId;
  let customerName = req.query.customer;
  let tenantModel = await getTenantModel();

  //   find tenant
  let tenant = await tenantModel.findOne({ id: tenantId });
  if (!tenant) {
    return res.status(404).send('Tenant not found');
  }

  let customerModel = await getCustomerModel();
});

const port = process.env.PORT || 7500;

const start = async () => {
  try {
    app.listen(port, console.log(`listening on at port ${port}....`));
    // await connectDB(process.env.MONGO_URL);
  } catch (err) {
    console.log(err);
  }
};

start();
