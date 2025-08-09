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
  const [year, month, day] = openDate.split("-");

  return {
    year: Number.parseInt(year, 10),
    month: month.padStart(2, "0"),
    day: day.padStart(2, "0"),
  };
};

/**
 * 날짜와 시간을 "YYYY-MM-DD HH:MM" 형식으로 포맷
 * @param dateTime ISO 형식의 날짜시간 문자열
 * @returns 포맷된 날짜시간 문자열
 */
export const formatDateTime = (dateTime: string) => {
  if (!dateTime) return "";

  const [date, timeWithZone] = dateTime.split("T");
  const time = timeWithZone?.split(".")[0] || "";

  // 초(SS) 부분 제거
  const timeWithoutSeconds = time.split(":").slice(0, 2).join(":");

  return `${date} ${timeWithoutSeconds}`;
};

/**
 * 오늘 날짜 반환
 * @returns 오늘 날짜 문자열 (YYYY-MM-DD)
 */
export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * 오늘로부터 지정된 일수 후의 날짜 반환
 * @param daysAfter 오늘로부터 며칠 후인지 (기본값: 14)
 * @returns 날짜 문자열 (YYYY-MM-DD)
 */
export const getDefaultDate = (daysAfter = 14) => {
  const today = new Date();
  today.setDate(today.getDate() + daysAfter);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
