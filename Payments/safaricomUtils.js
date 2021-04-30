const base64 = require("base-64");
const { format } = require("date-fns");
const axios = require("axios");
const ngrok = require("ngrok");

const consumerKey = "fRDVGrLFPipoDVN44Pg2t8ZKUh23cu7E";
const consumerSecret = "GEAhY7jC8t7KWKHC";

const timeStamp = format(new Date(), "yyyyMMddhhmmss");

const body = {
  BusinessShortCode: "174379",
  Password: base64.encode(
    "174379" +
      "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" +
      timeStamp
  ),
  Timestamp: timeStamp,
  TransactionType: "CustomerPayBillOnline",
  Amount: "1",
  PartyA: "254714287056",
  PartyB: "174379",
  PhoneNumber: "254714287056",
  CallBackURL: "",
  AccountReference: "account",
  TransactionDesc: "test",
};

async function getToken() {
  const safUrl =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  const header = "Basic " + base64.encode(consumerKey + ":" + consumerSecret);
  return axios.get(safUrl, {
    headers: {
      Authorization: header,
    },
  });
}

async function askSafForStkPush(phoneNumber, paymentId, amount) {
  const { access_token } = (await getToken()).data;
  const safUrl =
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  const headers = {
    Authorization: "Bearer " + access_token,
  };
  body.CallBackURL =
    (await ngrok.connect(5500)) + "/payment/callback/" + paymentId;
  body.PartyA = phoneNumber;
  body.PhoneNumber = phoneNumber;
  body.Amount = amount;
  return axios({
    method: "POST",
    headers: { ...headers },
    data: body,
    url: safUrl,
  });
}

module.exports = { askSafForStkPush };
