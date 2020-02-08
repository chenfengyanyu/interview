/**
 * 在二维平面上，有一个机器人从原点 (0, 0) 开始。
 * 给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。
 * 移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。
 * 机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。
 * @param {string} moves
 * @return {boolean}
 */
var robotMove = function(moves) {
  let x = 0;
  let y = 0;
  [...moves].forEach(item => {
      if(item === 'R') x++;
      if(item === 'L') x--;
      if(item === 'U') y++;
      if(item === 'D') y--;
  })
  
  return x === 0 && y === 0
};