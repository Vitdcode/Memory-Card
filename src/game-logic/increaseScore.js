export default function increaseScore(score, setScore) {
  setScore((score += 1));
}

export function increaseBestScore(score, setScore, bestScore, setBestScore) {
  if (bestScore < score) {
    setBestScore(score);
  }
  setScore(0);
}
