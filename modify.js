const fs = require("fs");
let content = fs.readFileSync("src/components/services/PracticalAquacultureTraining.tsx", "utf8");

content = content.replace("Practical Aquaculture Training<", "Practical Learning & Farmer Development<");
content = content.replace("Learn Aquaculture by", "Developing Practical");
content = content.replace("Practising It at the Farm", "Farmer Development");

content = content.replace(/\/\* ====================================================================\r?\n \* SECTION 2: TRAINING PROGRAMS\r?\n \* ====================================================================\*\/[\s\S]*?(?=\/\* ====================================================================\r?\n \* SECTION 3: WHAT PARTICIPANTS LEARN)/g, "");

content = content.replace(/\/\* ====================================================================\r?\n \* SECTION 8: ENQUIRE & CONTACT\r?\n \* ====================================================================\*\/[\s\S]*?(?=<\/div>\r?\n    \);\r?\n\}$)/g, "");

content = content.replace(/ENQUIRE ABOUT TRAINING/g, "EXPLORE OUR FARM");
content = content.replace(/EXPLORE TRAINING PROGRAMS/g, "LEARN FROM OUR EXPERIENCE");
content = content.replace(/href="#contact-section"/g, "href=\"/contact\"");
content = content.replace(/href="#training-programs"/g, "href=\"/case-studies\"");
content = content.replace(/KE Aqua Farms practical training programs are farm-based practical exposure/g, "KE Aqua Farms is developing practical learning and farmer-development initiatives based on real farm experience. Program details will be published when formally launched.");

fs.writeFileSync("src/components/services/PracticalAquacultureTraining.tsx", content);
console.log("Done");
