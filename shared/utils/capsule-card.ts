import type { TimeCapsules } from "@/shared/types/api/capsule";

/**
 * 캡슐의 남은 시간을 기반으로, 탐색과 내캡슐 페이지의 카드에서 사용되는 상태 라벨을 생성합니다.
 *
 * @param status - 캡슐의 remainingStatus 정보
 * @returns 캡슐 상태에 따른 표시 라벨
 *
 * @example
 * ```typescript
 *
 * const label2 = cardStatusLabel({
 *   type: "REMAINING",
 *   remainingTime: { days: 5, hours: 12, minutes: 30 }
 * });
 * // 결과: "D-5"
 * ```
 */
export const cardStatusLabel = (
  status: TimeCapsules["remainingStatus"],
): string => {
  if (status.type === "OPENED") {
    return status.message ?? "캡슐 오픈";
  }

  // remainingTime이 없는 경우
  if (!status.remainingTime) {
    return "오픈 완료";
  }

  const { days, hours, minutes } = status.remainingTime;

  /**
   * 시간 단위별 우선순위를 결정합니다.
   * 일 > 시간 > 분 순서로 우선순위를 가집니다.
   *
   * @returns 우선순위가 높은 시간 단위 ('days' | 'hours' | 'minutes' | 'default')
   */
  const getTimePriority = () => {
    if (days && days > 0) return "days";
    if (hours && hours > 0) return "hours";
    if (minutes && minutes > 0) return "minutes";
    return "default";
  };

  switch (getTimePriority()) {
    case "days":
      return `${days}일 후 오픈`;
    case "hours":
      return `${hours}시간 후 오픈`;
    case "minutes":
      return `${minutes}분 후 오픈`;
    default:
      return "잠시 후 오픈";
  }
};
