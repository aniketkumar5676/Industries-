import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';

const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    text: "Mandal Industries - Website Content Requirements",
                    heading: HeadingLevel.HEADING_1,
                }),
                new Paragraph({
                    text: "Please review and update the text below for each page of the website. You can add comments or instructions directly in this document.",
                    spacing: { after: 400 },
                }),

                // Home Page
                new Paragraph({ text: "1. Home Page", heading: HeadingLevel.HEADING_2 }),
                new Paragraph({ text: "Hero Section Title:", bold: true }),
                new Paragraph("Mandal Industries – Powering Modern Logistics"),
                new Paragraph({ text: "Hero Section Subtitle:", bold: true }),
                new Paragraph("End-to-end logistics and industrial solutions designed to move your business forward with speed, reliability, and precision."),
                new Paragraph({ text: "Call to Action Buttons:", bold: true }),
                new Paragraph("- Get a Quote\n- Explore Services"),
                
                new Paragraph({ text: "About Us Snippet", heading: HeadingLevel.HEADING_3 }),
                new Paragraph({ text: "Heading:", bold: true }),
                new Paragraph("Delivering 360-Degree Logistics Solutions"),
                new Paragraph({ text: "Description:", bold: true }),
                new Paragraph("Mandal Industries is an integrated logistics service provider offering complete supply chain solutions across multiple industries. We specialize in project cargo, freight management, warehousing, and industrial transport solutions."),
                new Paragraph({ text: "Key Features:", bold: true }),
                new Paragraph("- Proven industry expertise\n- Pan-region logistics network\n- Reliable and scalable operations\n- End-to-end customized solutions"),

                new Paragraph({ text: "Industries We Serve", heading: HeadingLevel.HEADING_3 }),
                new Paragraph({ text: "Description:", bold: true }),
                new Paragraph("Mandal Industries provides specialized, tailored logistics solutions across core industrial sectors, understanding the unique challenges of each."),
                new Paragraph({ text: "Sectors:", bold: true }),
                new Paragraph("- Rail & Transit\n- Power & Energy\n- Oil & Gas\n- Steel & Cement\n- Heavy Engineering"),

                new Paragraph({ text: "Testimonials", heading: HeadingLevel.HEADING_3 }),
                new Paragraph({ text: "Review 1:", bold: true }),
                new Paragraph("\"We rely on Mandal Industries for critical logistics operations. Their reliability is unmatched and their team always delivers on time.\"\n- Rajesh Kumar, Operations Director, SteelCo"),
                new Paragraph({ text: "Review 2:", bold: true }),
                new Paragraph("\"The level of professionalism and efficiency they bring to our supply chain has significantly reduced our operational costs.\"\n- Sarah Jenkins, Supply Chain Manager, TechCorp"),
                new Paragraph({ text: "Review 3:", bold: true }),
                new Paragraph("\"Handling our over-dimensional cargo was a breeze with Mandal. Their route planning and execution are flawless.\"\n- Amit Patel, Project Head, HeavyEngg"),

                // About Page
                new Paragraph({ text: "2. About Page", heading: HeadingLevel.HEADING_2, spacing: { before: 400 } }),
                new Paragraph({ text: "(Please provide the full company history, mission, vision, and team details here)", italics: true }),
                new Paragraph({ text: "Mission:", bold: true }),
                new Paragraph("[Insert Mission Statement]"),
                new Paragraph({ text: "Vision:", bold: true }),
                new Paragraph("[Insert Vision Statement]"),
                new Paragraph({ text: "Company History:", bold: true }),
                new Paragraph("[Insert Company History]"),

                // Services Page
                new Paragraph({ text: "3. Services Page", heading: HeadingLevel.HEADING_2, spacing: { before: 400 } }),
                new Paragraph({ text: "(Please provide detailed descriptions for each service offered)", italics: true }),
                new Paragraph({ text: "Service 1:", bold: true }),
                new Paragraph("[Service Name]\n[Service Description]"),
                new Paragraph({ text: "Service 2:", bold: true }),
                new Paragraph("[Service Name]\n[Service Description]"),
                new Paragraph({ text: "Service 3:", bold: true }),
                new Paragraph("[Service Name]\n[Service Description]"),

                // Industries Page
                new Paragraph({ text: "4. Industries Page", heading: HeadingLevel.HEADING_2, spacing: { before: 400 } }),
                new Paragraph({ text: "(Please provide detailed case studies or specific solutions for each industry)", italics: true }),
                new Paragraph({ text: "Rail & Transit:", bold: true }),
                new Paragraph("[Insert details]"),
                new Paragraph({ text: "Power & Energy:", bold: true }),
                new Paragraph("[Insert details]"),
                new Paragraph({ text: "Oil & Gas:", bold: true }),
                new Paragraph("[Insert details]"),
                new Paragraph({ text: "Steel & Cement:", bold: true }),
                new Paragraph("[Insert details]"),
                new Paragraph({ text: "Heavy Engineering:", bold: true }),
                new Paragraph("[Insert details]"),

                // Contact Page
                new Paragraph({ text: "5. Contact Page", heading: HeadingLevel.HEADING_2, spacing: { before: 400 } }),
                new Paragraph({ text: "Company Name:", bold: true }),
                new Paragraph("Mandal Industries"),
                new Paragraph({ text: "Address:", bold: true }),
                new Paragraph("[Insert Physical Address]"),
                new Paragraph({ text: "Phone Number:", bold: true }),
                new Paragraph("+1 (234) 567-890"),
                new Paragraph({ text: "Email Address:", bold: true }),
                new Paragraph("info@mandalindustries.com"),
                new Paragraph({ text: "WhatsApp Number:", bold: true }),
                new Paragraph("+1 (234) 567-890"),
                new Paragraph({ text: "Business Hours:", bold: true }),
                new Paragraph("[Insert Business Hours]"),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Website_Content_Requirements.docx", buffer);
    console.log("Document created successfully");
});
