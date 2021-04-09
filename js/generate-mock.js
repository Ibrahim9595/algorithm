const ds = "01F0TK2W12WF64S3WVD7HRQE2P";
const countries = ["01F0TK3EBQF0QZNYEGVVZZAC0F", "01F0TK3R84JBSNTV647DTBMK3P"];
const currencies = ["01F0TK4CJY47FZNC6QQBTTRRXM", "01F0TK48M8BBDWN29MHM724YDX"];

const getRandomInt = (max, min = 0) =>
  Math.round(min + Math.random() * (max - min));
const getRandomEl = (arr) => arr[getRandomInt(arr.length - 1)];
const getRandomDate = (maxDate = "") => {
  const [year, month, day] = maxDate.split("-");
  return `${getRandomInt(year || 2019, 2019)}-${getRandomInt(
    month || 12,
    1
  )}-${getRandomInt(day || 28, 1)}`;
};

const repeatObj = (obj, count) => new Array(count).fill(0).map(() => obj);

const getSalaries = () =>
  new Array(getRandomInt(3, 1)).fill(0).map(() => ({
    currencyId: getRandomEl(currencies),
    dataSourceId: ds,
    cacPercent: getRandomInt(50),
    employeeSocialChargePercent: getRandomInt(20),
    employerSocialChargePercent: getRandomInt(20),
    taxPercent: getRandomInt(30),
    gross: getRandomInt(10000),
    orgId: "test",
    scenarioId: getRandomEl(["default", undefined]),
    startDate: getRandomDate(),
    endDate: getRandomDate(),
    paymentFrequency: getRandomEl([
      "weekly",
      "bimonthly",
      "monthly",
      "one_off",
    ]),
  }));

const emp = (count) =>
  new Array(count || 1).fill(0).map(() => ({
    dataSourceId: ds,
    countryId: getRandomEl(countries),
    departmentId: getRandomEl([
      undefined,
      "01F0XB5H1JNR6A1EPDMF81NGDM",
      "01F0XB5MKN4PQVTVVKY4PCTD00",
      "01F0XB5Q4ABNK5CGT44SW0QWDE",
      "01F0XB5S89BHZCN44AXAF9MXDF",
    ]),
    jobTitle: "Admin",
    name: "Test",
    orgId: "test",
    salaries: {
      data: salaries(),
    },
  }));

console.log(JSON.stringify(emp(30)));

const getSales = (repeats) => {
  return {
    sales: repeatObj(
      {
        costType: "amount",
        countryId: getRandomInt(2, 1),
        currencyId: getRandomInt(2, 1),
        day: getRandomDate(),
        customerCost: 10,
        customerCount: getRandomInt(25),
        dataSourceId: 1,
        orgId: 1,
        scenarioId: 1,
        records: {
          data: repeatObj(
            {
              orgId: 1,
              dataSourceId: 1,
              discountType: "amount",
              main: false,
              productId: 1,
              price: 0,
              quantity: 0,
              discount: 1,
              scenarioId: 1,
            },
            getRandomInt(3)
          ),
        },
      },
      repeats
    ),
  };
};
