const fs = require('fs');
const glob = require('glob');
const path = require('path');

function replaceInFile(filePath, replacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = content;
    for (const { regex, replace } of replacements) {
        modified = modified.replace(regex, replace);
    }
    if (modified !== content) {
        fs.writeFileSync(filePath, modified);
        console.log('Updated', filePath);
    }
}

const dirList = ['src/components/sections', 'src/components/layout', 'src/app'];

const replacements = [
    { regex: /enquire about upcoming training batches/gi, replace: 'explore our practical learning initiatives' },
    { regex: /Explore Training Programs/gi, replace: 'Explore Our Farm' },
    { regex: /Practical Training & Exposure Programs/gi, replace: 'Practical Learning (Developing)' },
    { regex: /starting practical training/gi, replace: 'exploring our farm' },
    { regex: /training batch announcements/gi, replace: 'farm updates' },
    { regex: /training schedule/gi, replace: 'farm visit' },
    { regex: /Practical Training & Demonstration Centre/gi, replace: 'Farmer Development Initiative (Developing)' },
    { regex: /Practical Training Centre/gi, replace: 'Farmer Development Initiative' },
    { regex: /structured programs from 1-day farm exposure to full crop-cycle practical training/gi, replace: 'Developing farmer-development initiatives focused on practical exposure.' },
    { regex: /Learn Training Methodology/gi, replace: 'Learn From Our Experience' },
    { regex: /Practical Training/g, replace: 'Practical Learning (Developing)' },
    { regex: /href="\/practical-training"/g, replace: 'href="/case-studies"' },
    { regex: /href="\/services\/practical-aquaculture-training"/g, replace: 'href="/services/practical-aquaculture-training"' }, // keep this route but we modified its content
    { regex: /href="\/training-cancellation-refund"/g, replace: 'href="/policies"' },
    { regex: /Book a farm visit or practical training session today/gi, replace: 'Contact KE Aqua Group today.' },
    { regex: /Refund Policy/g, replace: 'Policies' },
    { regex: /30-Acre Commercial Farm & Training Centre/gi, replace: '30-Acre Commercial Farm' }
];

for (const dir of dirList) {
    const files = glob.sync(`${dir}/**/*.tsx`);
    for (const file of files) {
        replaceInFile(file, replacements);
    }
}
console.log("Done");
