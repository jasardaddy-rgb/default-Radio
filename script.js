let level = 0;

function eventTrigger() {
  const logs = [
    "系统检测到现实波动...",
    "时间线发生轻微偏移...",
    "城市结构正在重新计算...",
    "检测到未知维度信号...",
    "现实稳定性下降..."
  ];

  const worlds = [
    "正常世界",
    "轻微异常",
    "科技增强现实",
    "时间错乱世界",
    "崩坏边缘",
    "未知维度"
  ];

  const colors = [
    "radial-gradient(circle at top, #1a2b4f, #050814)",
    "radial-gradient(circle at top, #2b1a4f, #050814)",
    "radial-gradient(circle at top, #0f3d3a, #050814)",
    "radial-gradient(circle at top, #3a1a2f, #050814)",
    "radial-gradient(circle at top, #4a1a1a, #050814)"
  ];

  let i = Math.floor(Math.random() * logs.length);

  document.getElementById("log").innerText = logs[i];
  document.getElementById("world").innerText = worlds[i];

  level += Math.floor(Math.random() * 25);
  if (level > 100) level = 100;

  document.getElementById("level").innerText = level + "%";

  document.querySelector(".bg").style.background =
    colors[Math.floor(Math.random() * colors.length)];

  document.body.style.transform = "scale(1.01)";
  setTimeout(() => {
    document.body.style.transform = "scale(1)";
  }, 100);
}
