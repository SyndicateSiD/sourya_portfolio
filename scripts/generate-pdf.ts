import { jsPDF } from 'jspdf';
import * as fs from 'fs';
import * as path from 'path';

function generateResumePDF() {
  const doc = new jsPDF({
    unit: 'pt',
    format: 'letter',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 612
  const pageHeight = doc.internal.pageSize.getHeight(); // 792
  const margin = 32; // compact margins for 1-page fit
  const contentWidth = pageWidth - margin * 2; // 548

  let y = margin;

  // Colors - Classic Academic / LaTeX Serif Feel
  const black = [15, 23, 42];
  const darkGray = [45, 55, 72];
  const blueLink = [26, 86, 175];
  const headerLineColor = [20, 20, 20];

  function addSectionHeader(title: string) {
    y += 5;
    doc.setFont('times', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(black[0], black[1], black[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 3;
    doc.setDrawColor(headerLineColor[0], headerLineColor[1], headerLineColor[2]);
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 9;
  }

  // --- NAME & CONTACT ---
  doc.setFont('times', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(black[0], black[1], black[2]);
  doc.text('Souryadipta Das', pageWidth / 2, y, { align: 'center' });
  y += 13;

  doc.setFont('times', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  doc.text('Email: souryadiptadas14102@gmail.com  |  Phone no: 9800590222', pageWidth / 2, y, { align: 'center' });
  y += 11;

  doc.setTextColor(blueLink[0], blueLink[1], blueLink[2]);
  const linksLine = 'linkedin.com/in/souryadipta-das-69667120a  |  Github  |  Leetcode  |  Hackerrank  |  Portfolio';
  doc.text(linksLine, pageWidth / 2, y, { align: 'center' });
  y += 11;

  // --- EDUCATION ---
  addSectionHeader('Education');
  doc.setFont('times', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(black[0], black[1], black[2]);
  doc.text('• Kalinga Institute of Industrial Technology, Bhubaneswar', margin + 2, y);
  doc.text('Bhubaneswar, India', margin + contentWidth, y, { align: 'right' });
  y += 9.5;

  doc.setFont('times', 'italic');
  doc.text('  Bachelor of Technology - Computer Science and Systems Engineering ;CGPA: 8.81', margin + 4, y);
  doc.setFont('times', 'normal');
  doc.text('Sept. 2020 - May 2024', margin + contentWidth, y, { align: 'right' });
  y += 10.5;

  // --- SKILLS SUMMARY ---
  addSectionHeader('Skills Summary');
  const skills = [
    { label: '• Languages:', val: 'C/C++, Python, JAVA, SQL, HTML, CSS, JavaScript' },
    { label: '• Tools & Frameworks:', val: 'Selenium WebDriver, TestNG, Postman, JIRA, SoapUI, Maven, Git, Android Studio, IntelliJ, Visual Studio Code, Jupyter Notebook, Google Colab, Salesforce Playground, Botpress, Canva.' },
    { label: '• GenAI Tools:', val: 'Github Copilot (for test scenario generation, code optimization), ChatGPT (for defect pattern analysis).' },
    { label: '• Soft Skills:', val: 'Ownership, Problem Solving, Collaboration, Time Management, Proactive, Creative Thinking, Leadership, Problem Solving, Work Ethic.' },
  ];

  skills.forEach((s) => {
    doc.setFont('times', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(black[0], black[1], black[2]);
    const labelW = doc.getTextWidth(s.label + ' ');
    doc.text(s.label, margin + 2, y);
    doc.setFont('times', 'normal');
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const lines = doc.splitTextToSize(s.val, contentWidth - labelW - 4);
    doc.text(lines[0], margin + 2 + labelW, y);
    if (lines.length > 1) {
      for (let i = 1; i < lines.length; i++) {
        y += 9;
        doc.text(lines[i], margin + 12, y);
      }
    }
    y += 9.5;
  });

  // --- EXPERIENCE ---
  addSectionHeader('Experience');

  // Coforge
  doc.setFont('times', 'bold');
  doc.setFontSize(8.75);
  doc.setTextColor(black[0], black[1], black[2]);
  doc.text('• QA Engineer at Coforge', margin + 2, y);
  doc.text('Noida, India', margin + contentWidth, y, { align: 'right' });
  y += 9;
  doc.setFont('times', 'italic');
  doc.text('  COSYS+ Project and Cathay WOS Project – Airport Cargo Management System (SATS)', margin + 4, y);
  doc.setFont('times', 'normal');
  doc.text('June 2024 – Present', margin + contentWidth, y, { align: 'right' });
  y += 9;

  const coforgeBullets = [
    'Conducted manual and automation testing (web/mobile) for cargo management system',
    'Tracked bugs via JIRA, collaborated with developers on fixes',
    'Performed API testing (Postman) and regression testing for updates',
    'Contributed to test design, stress testing, and deployment verification',
  ];
  coforgeBullets.forEach((b) => {
    doc.setFont('times', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text('  ◦  ' + b, margin + 8, y);
    y += 8.5;
  });
  y += 1.5;

  // Blu Cucoon Digital
  doc.setFont('times', 'bold');
  doc.setFontSize(8.75);
  doc.setTextColor(black[0], black[1], black[2]);
  doc.text('• Data Science intern at Blu Cucoon Digital', margin + 2, y);
  doc.text('Kolkata, India', margin + contentWidth, y, { align: 'right' });
  y += 9;
  doc.setFont('times', 'italic');
  doc.text('  Project intern & Learner, Letter of Recommendation', margin + 4, y);
  doc.setFont('times', 'normal');
  doc.text('June 2023 - August 2023', margin + contentWidth, y, { align: 'right' });
  y += 9;

  const bluBullets = [
    'Data collection and annotation using Makesense and LabelImg.',
    'Applied image processing models, Yolo V5, Yolo V8 and YoloX for plant disease recognition and analysis.',
    'Used Time Series Algorithms such as LSTM on historical data to forecast the future sales of the products.',
    'Performed NPK analysis of soil using Multiple Linear Regression.',
  ];
  bluBullets.forEach((b) => {
    doc.setFont('times', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text('  ◦  ' + b, margin + 8, y);
    y += 8.5;
  });
  y += 1.5;

  // Salesforce
  doc.setFont('times', 'bold');
  doc.setFontSize(8.75);
  doc.setTextColor(black[0], black[1], black[2]);
  doc.text('• Salesforce Developer Virtual Internship', margin + 2, y);
  doc.text('Remote', margin + contentWidth, y, { align: 'right' });
  y += 9;
  doc.setFont('times', 'italic');
  doc.text('  Intern & Learner', margin + 4, y);
  doc.setFont('times', 'normal');
  doc.text('May 2023 - July 2023', margin + contentWidth, y, { align: 'right' });
  y += 9;

  const sfBullets = [
    'Completed modules on Salesforce Fundamentals, Organizational Setup and Relationship & Process Automation',
    'Implemented various types Of Flows & Security Protocols, Apex Code, Testing & Debugging',
    'Completed VS Code Setup & CLI Setup, developed Lightning Web Components (LWC) & APIs',
  ];
  sfBullets.forEach((b) => {
    doc.setFont('times', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text('  ◦  ' + b, margin + 8, y);
    y += 8.5;
  });

  // --- PROJECTS ---
  addSectionHeader('Projects');
  const projs = [
    { title: 'Full Stack Grocery Management :', desc: 'The Full Stack Grocery Management Application offers efficient inventory management, dynamic user interface, integrated chatbot, and personalized food recommendations, developed collaboratively for modern grocery needs.' },
    { title: 'Virtual Mouse:', desc: 'This personal project utilizes MediaPipe and OpenCV for real-time hand tracking and gesture recognition, enabling seamless mouse control via Win32api and PyAutoGUI.' },
    { title: 'Unit Converter:', desc: 'A web based Unit Converter using HTML,CSS and JavaScript.' },
    { title: 'Digital Clock with Timer and Stopwatch:', desc: 'A web based Digital Clock with Stopwatch and Timer using HTML,CSS and JavaScript.' },
    { title: 'Captcha Generator:', desc: 'A Python and flask based Website for Captcha generation.' },
  ];

  projs.forEach((p) => {
    doc.setFont('times', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(black[0], black[1], black[2]);
    const lead = '• ' + p.title + ' ';
    const leadW = doc.getTextWidth(lead);
    doc.text(lead, margin + 2, y);

    doc.setFont('times', 'normal');
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const fullText = p.desc + '  [Github]';
    const lines = doc.splitTextToSize(fullText, contentWidth - leadW - 4);
    doc.text(lines[0], margin + 2 + leadW, y);
    if (lines.length > 1) {
      for (let i = 1; i < lines.length; i++) {
        y += 8.5;
        doc.text(lines[i], margin + 12, y);
      }
    }
    y += 8.5;
  });

  // --- RESEARCH PAPERS ---
  addSectionHeader('Research Papers');
  const papers = [
    '• Enhanced Communication by using Sign Language Recognition (Paper Review) [Taylor & Francis / CRC Press]',
    '• Stock Market Prediction Analysis using LSTM (Paper Review) [Springer Nature]',
  ];
  papers.forEach((p) => {
    doc.setFont('times', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    doc.text(p, margin + 2, y);
    y += 8.5;
  });

  // --- CERTIFICATIONS & ACHIEVEMENTS ---
  addSectionHeader('Certifications & Achievements');
  const certList = [
    '• Salesforce Certificate: Salesforce Developer Virtual Internship',
    '• AICTE Certificate: AWS Cloud Virtual Internship',
    '• AWS Academy Graduate: Cloud Semester 1, AWS Academy Cloud Foundations, AWS Academy Cloud Architecting',
    '• IBM Certifications: Artificial Intelligence Fundamentals',
    '• Coursera Certifications: Technical Support Fundamentals, Google Cloud Big Data and Machine Learning Fundamentals, Project Initiation: Starting a Successful Project, Project Planning: Putting It All Together, Basic Statistics',
    '• HackerRank Certifications  |  Certified Web Professional E-Commerce',
    '• Data Science from Yhills  |  National Engineering Olympiad',
  ];

  certList.forEach((c) => {
    doc.setFont('times', 'normal');
    doc.setFontSize(7.75);
    doc.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    const lines = doc.splitTextToSize(c, contentWidth - 4);
    doc.text(lines, margin + 2, y);
    y += lines.length * 8;
  });

  // Save to public files
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const files = [
    'Souryadipta dasresume.pdf',
    'Souryadipta_dasresume.pdf',
    'resume.pdf',
  ];

  files.forEach((f) => {
    const p = path.join(publicDir, f);
    fs.writeFileSync(p, pdfBuffer);
    console.log(`Saved PDF to ${p}`);
  });
}

generateResumePDF();

