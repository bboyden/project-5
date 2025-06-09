async function sendPlay(userMove) {
    try {
      const res = await fetch("/play", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice: userMove })
      });
      const data = await res.json();
      document.getElementById("game-result").innerHTML =
        `You picked <strong>${data.user}</strong><br>` +
        `Opponent picked <strong>${data.opponent}</strong><br>` +
        `<strong>${data.outcome}</strong>`;
    } catch (err) {
      console.error("Play error:", err);
    }
  }
