import { converSec, convertMin } from "../../helpers/convertSec";
import paceCalculator from "../../helpers/pace";
import dateFormat from "../../helpers/dates";
import dateFormatForChart from "../../helpers/dateChart";

describe("Date Formats", () => {
  const date = "10-10-2001"
  it('should return formatted full date', () => {
    expect(dateFormat(date)).toEqual("Wednesday, 10 October 2001");
  })

  it('should return only month and year', () => {
    expect(dateFormatForChart(date)).toEqual("Oct 2001")
  })
})

describe("Pace Calculator", () => {
  const km = 10;
  const timeInSeconds = 3200;
  it("should return average pace", () => {
    expect(paceCalculator(km, timeInSeconds)).toEqual('5:30')
  })
})

describe("Converstion of time functions", () => {
  it('Should return string containing exact duration time', () => {
    expect(converSec(8888)).toEqual('02:28:08');
  })

  it('Should make transform the hours in a total of seconds', () => {
    const hours = 1;
    const min = 30;
    const sec = 40;
    expect(convertMin(hours, min, sec)).toEqual(5440);
  })
})