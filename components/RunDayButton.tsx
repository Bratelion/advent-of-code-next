import { FC } from "react";
import { BoltIcon } from "@heroicons/react/24/outline";
import { queuedPuzzlePartsState } from "../lib/atoms";
import { useRecoilState } from "recoil";

const RunDayButton: FC<{ puzzleDay: string }> = ({ puzzleDay }) => {
  const [queuedPuzzleParts, setQueuedPuzzleParts] = useRecoilState(
    queuedPuzzlePartsState
  );
  return (
    <button
      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={
        queuedPuzzleParts.includes(`${puzzleDay}-1`) &&
        queuedPuzzleParts.includes(`${puzzleDay}-2`)
      }
      onClick={() => {
        setQueuedPuzzleParts((oldQueuedPuzzleParts) => [
          ...oldQueuedPuzzleParts,
          `${puzzleDay}-1`,
          `${puzzleDay}-2`,
        ]);
      }}
      type="button"
    >
      <BoltIcon
        aria-hidden="true"
        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
      />
      <span>Run Day</span>
    </button>
  );
};
export default RunDayButton;