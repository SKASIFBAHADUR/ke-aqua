const fs = require("fs");
let content = fs.readFileSync("src/components/services/FarmVisitsExposure.tsx", "utf8");

content = content.replace(/\/\* ====================================================================\r?\n \* SECTION 8: ENQUIRE & CONTACT\r?\n \* ====================================================================\*\/[\s\S]*?(?=<\/div>\r?\n    \);\r?\n\}$)/g, "");

content = content.replace(/ENQUIRE ABOUT A FARM VISIT/g, "CONTACT US");
content = content.replace(/href="#contact-section"/g, "href=\"/contact\"");
content = content.replace(/1-Day Farm Exposure/g, "General Farm Exposure");
content = content.replace(/1-DAY FARM EXPOSURE/g, "GENERAL FARM EXPOSURE");
content = content.replace(/1-Day Exposure/g, "Farm Exposure");

fs.writeFileSync("src/components/services/FarmVisitsExposure.tsx", content);
console.log("Done");
