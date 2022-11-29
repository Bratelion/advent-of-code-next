import { FC } from "react";
import { useRecoilState } from "recoil";
import { queuedPuzzlePartsState } from "@/lib/atoms";
import { PlayIcon } from "@heroicons/react/24/outline";

const RunAllButton: FC<{ allDays: string[] }> = ({ allDays }) => {
  const allPuzzlePartIDs: string[] = allDays.flatMap((day) => [
    `${day}-1`,
    `${day}-2`,
  ]);
  const [queuedPuzzleParts, seQueuedPuzzleParts] = useRecoilState(
    queuedPuzzlePartsState
  );
  return (
    <button
      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm dark:text-zinc-900 dark:bg-green-400 hover:bg-green-700 dark:hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:ring-offset-2 sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed dark:ring-offset-zinc-900"
      type="button"
      disabled={allPuzzlePartIDs.every((id) => queuedPuzzleParts.includes(id))}
      onClick={() => {
        seQueuedPuzzleParts((oldQueuedPuzzleParts) => [
          ...oldQueuedPuzzleParts,
          ...allPuzzlePartIDs,
        ]);
      }}
    >
      Run All
      <PlayIcon
        aria-hidden="true"
        className="w-4 h-4 ml-1.5 -mr-1 text-white dark:text-zinc-900"
      />
    </button>
  );
};
export default RunAllButton;
