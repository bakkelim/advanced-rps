export const gameResult = {
  TIE: 0,
  PLAYER_A_WINS: 1,
  PLAYER_B_WINS: 2,
};

export function getGameResult(playerAChoice, playerBChoice) {
  const damageMap = {
    A: { B: 1, E: 2, F: 2 },
    B: { C: 1, F: 2, D: 2 },
    C: { A: 1, D: 2, E: 2 },
    D: { E: 1, A: 2 },
    E: { F: 1, B: 2 },
    F: { D: 1, C: 2 },
  };

  const playerADamage = damageMap[playerAChoice][playerBChoice] || 0;
  const playerBDamage = damageMap[playerBChoice][playerAChoice] || 0;

  let result = gameResult.TIE;
  let damageTaken = 0;
  if (playerADamage > playerBDamage) {
    result = gameResult.PLAYER_A_WINS;
    damageTaken = playerADamage;
  } else if (playerADamage < playerBDamage) {
    result = gameResult.PLAYER_B_WINS;
    damageTaken = playerBDamage;
  }

  return { result, damageTaken };
}
