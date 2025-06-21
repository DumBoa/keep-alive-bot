const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto("https://80-firebase-app-1750422867613.cluster-ikxjzjhlifcwuroomfkjrx437g.cloudworkstations.dev/vnc.html?autoconnect=true&resize=remote");
  console.log("Đã vào VNC. Đang giữ session...");

  await page.waitForTimeout(10 * 60 * 1000); // 10 phút
  await browser.close();
})();
