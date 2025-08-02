/**
 * ISO 문자열에서 날짜와 시간을 파싱
 */
export const parseDateTime = (isoString: string) => {
  if (!isoString) return { date: "", time: "" };
  const dateTime = new Date(isoString).toISOString().split("T");
  return {
    date: dateTime[0] || "",
    time: dateTime[1]?.split(".")[0] || "",
  };
};

/**
 * 날짜와 시간을 조합하여 UTC ISO 문자열 생성
 */
export const createISOString = (date: string, time = "00:00:00") => {
  return new Date(`${date}T${time}.000Z`).toISOString();
};

/**
 * 날짜를 "YYYY-MM-DD" 형식으로 포맷
 */

export const formatOpenDate = (openDate: string) => {
  if (!openDate) {
    console.warn("openDate is undefined or null");
    return {
      year: 0,
      month: "00",
      day: "00",
    };
  }
  const [year, month, day] = openDate.split("-");

  return {
    year: Number.parseInt(year, 10),
    month: month.padStart(2, "0"),
    day: day.padStart(2, "0"),
  };
};
