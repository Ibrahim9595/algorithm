const ds = "01F0TK2W12WF64S3WVD7HRQE2P";
const countries = ["01F0TK3EBQF0QZNYEGVVZZAC0F", "01F0TK3R84JBSNTV647DTBMK3P"];
const currencies = ["01F0TK4CJY47FZNC6QQBTTRRXM", "01F0TK48M8BBDWN29MHM724YDX"];

const getRandomInt = (max, min = 0) =>
  Math.round(min + Math.random() * (max - min));
const getRandomEl = (arr) => arr[getRandomInt(arr.length - 1)];
const getRandomDate = (maxDate = "") => {
  const [year, month, day] = maxDate.split("-");
  return `${getRandomInt(year || 2020, 2020)}-${getRandomInt(
    month || 12,
    1
  )}-${getRandomInt(day || 28, 1)}`;
};

// const getSalaries = () =>
//   new Array(getRandomInt(3, 1)).fill(0).map(() => ({
//     currencyId: getRandomEl(currencies),
//     dataSourceId: ds,
//     cacPercent: getRandomInt(50),
//     employeeSocialChargePercent: getRandomInt(20),
//     employerSocialChargePercent: getRandomInt(20),
//     taxPercent: getRandomInt(30),
//     gross: getRandomInt(10000),
//     orgId: "test",
//     scenarioId: getRandomEl(["default", undefined]),
//     startDate: getRandomDate(),
//     endDate: getRandomDate(),
//     paymentFrequency: getRandomEl([
//       "weekly",
//       "bimonthly",
//       "monthly",
//       "one_off",
//     ]),
//   }));

// const emp = (count) =>
//   new Array(count || 1).fill(0).map(() => ({
//     dataSourceId: ds,
//     countryId: getRandomEl(countries),
//     departmentId: getRandomEl([
//       undefined,
//       "01F0XB5H1JNR6A1EPDMF81NGDM",
//       "01F0XB5MKN4PQVTVVKY4PCTD00",
//       "01F0XB5Q4ABNK5CGT44SW0QWDE",
//       "01F0XB5S89BHZCN44AXAF9MXDF",
//     ]),
//     jobTitle: "Admin",
//     name: "Test",
//     orgId: "test",
//     salaries: {
//       data: salaries(),
//     },
//   }));

const getSales = (repeats) => {
  return {
    sales: new Array(repeats).fill(0).map(() => ({
      costType: "amount",
      countryId: getRandomEl([890, 286, 45286, 891]),
      currencyId: getRandomEl([9714, 97, 107]),
      customerId: getRandomEl([
        undefined,
        1549627,
        1549629,
        1549633,
        1549634,
        1549636,
      ]),
      day: getRandomDate(),
      initialCustomerCount: getRandomInt(25, 1),
      customerCost: 10,
      dataSourceId: 68,
      orgId: 22,
      scenarioId: 18,
      records: {
        data: {
          orgId: 22,
          dataSourceId: 68,
          discountType: "amount",
          main: true,
          productId: getRandomEl([58321, 58322, 1116, 1117, 58383, 1124]),
          price: getRandomInt(100000, 10000),
          quantity: getRandomInt(10, 1),
          discount: 0,
          scenarioId: 18,
        },
      },
    })),
  };
};

console.log(JSON.stringify(getSales(20)));
