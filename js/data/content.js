/**
 * Centralised site content.
 * Edit this file to change copy, add facilitators / team members, or update skills.
 * Nothing here is invented: unknown details are explicit placeholders (see `placeholder: true`).
 */

export const brand = {
  name: 'STUDENTICO',
  tagline: "More Than a Brand. It's a Pathway.",
  description:
    'A student-focused initiative redefining the student experience through affordable essentials, accessible services, practical skills and meaningful empowerment opportunities for tertiary students.',
  programme: 'Studentico Skills Acquisition and Empowerment Programme 1.0',
  institution: 'University of Medical Sciences (UNIMED), Ondo',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Skills', href: '#skills' },
  { label: 'Our Facilitators', href: '#facilitators' },
  { label: 'Our Team', href: '#team' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Our Vision', href: '#vision' },
];

export const aboutPoints = [
  { title: 'Practical skills', text: 'Hands-on abilities that work beyond the classroom.' },
  { title: 'Opportunities', text: 'Real doors to open while you are still a student.' },
  { title: 'Affordable essentials', text: 'Products and services priced with students in mind.' },
  { title: 'A stage for talent', text: 'Platforms to showcase your ideas and creativity.' },
  { title: 'Professional networks', text: 'Access to people who can guide your next step.' },
  { title: 'Financial growth', text: 'Support for personal and financial development.' },
];

export const ecosystem = [
  {
    id: 'skills',
    number: '01',
    title: 'Skills and Empowerment',
    text: 'Practical, income-ready skills that prepare students for life beyond the lecture hall.',
    current: true,
    icon: 'M12 3 2 8l10 5 8-4v6h2V8L12 3Zm-6 9.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.5l-6 3-6-3Z',
  },
  {
    id: 'essentials',
    number: '02',
    title: 'Affordable Essentials and Services',
    text: 'Everyday student needs made accessible and easier on the pocket.',
    current: false,
    icon: 'M7 4h10l1 4H6l1-4Zm-2 6h14v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V10Zm5 3v3h4v-3h-4Z',
  },
  {
    id: 'talent',
    number: '03',
    title: 'Talent, Ideas and Innovation',
    text: 'A platform for students to present what they create and the ideas they carry.',
    current: false,
    icon: 'M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2Zm-3 18h6v2H9v-2Z',
  },
  {
    id: 'community',
    number: '04',
    title: 'Opportunities and Community',
    text: 'A growing network connecting students with people and possibilities.',
    current: false,
    icon: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 13c-2.7 0-6 1.3-6 4v2h12v-2c0-2.7-3.300-4-6-4Zm8 0c-.5 0-1 .1-1.500.2 1.200.9 2 2.100 2 3.800v2h6v-2c0-2.700-3.300-4-6.500-4Z',
  },
];

export const skills = [
  { id: 'barbing', name: 'Barbing', image: 'assets/images/skills/barbing.svg',
    category: 'Grooming', intro: 'Learn the craft of clean cuts, fades and grooming that every campus needs.',
    detail: 'Explore the foundations of a clean, client-ready barbering practice, from consultation through finishing touches.', learn: 'Core cutting techniques, basic fades, clipper control, hygiene and client care.', value: 'A practical grooming skill can grow into a flexible campus service and a lasting creative trade.' },
  { id: 'hairdressing', name: 'Hairdressing', image: 'assets/images/skills/hairdressing.svg',
    category: 'Beauty', intro: 'Build skill in styling and hair care that turns creativity into a service.',
    detail: 'Develop confidence in the essential techniques behind thoughtful hair styling and care.', learn: 'Hair preparation, foundational styling, basic maintenance practices and client communication.', value: 'Hairdressing blends creativity with a service students can build around their own time and community.' },
  { id: 'graphic-design', name: 'Graphic Design', image: 'assets/images/skills/graphic-design.svg',
    category: 'Creative tech', intro: 'Create visuals, brands and designs that communicate ideas with impact.',
    detail: 'Learn how to translate an idea into clear visual communication for real audiences.', learn: 'Design principles, layout, type, colour, visual identity and creating social-ready graphics.', value: 'Design is a versatile skill for communicating ideas, supporting businesses and building a creative portfolio.' },
  { id: 'makeup', name: 'Makeup', image: 'assets/images/skills/makeup.svg',
    category: 'Beauty', intro: 'Explore the art of makeup, from everyday looks to event-ready finishes.',
    detail: 'Discover a practical approach to makeup artistry that centres preparation, confidence and polished finishing.', learn: 'Skin preparation, colour matching, product application, everyday looks and basic client hygiene.', value: 'Makeup artistry lets students turn an eye for detail into a useful, in-demand personal service.' },
  { id: 'photography', name: 'Photography', image: 'assets/images/skills/photography.svg',
    category: 'Visual storytelling', intro: 'Capture moments and tell stories through the lens of a camera.',
    detail: 'Learn to notice, frame and preserve moments with intention through the camera lens.', learn: 'Composition, light, basic camera handling, portrait direction and image selection.', value: 'Photography helps students document stories, support events and develop a visual point of view.' },
  { id: 'mobile-videography', name: 'Mobile Videography and Editing', image: 'assets/images/skills/mobile-videography.svg',
    category: 'Visual storytelling', intro: 'Shoot and edit compelling video content using just a smartphone.',
    detail: 'Create purposeful video stories with an accessible tool already in many students’ hands: a smartphone.', learn: 'Shot planning, stable mobile shooting, useful angles, basic editing flow and story structure.', value: 'Mobile video skills are valuable for content, events, small businesses and communicating ideas clearly.' },
  { id: 'baking', name: 'Baking', image: 'assets/images/skills/baking.svg',
    category: 'Food craft', intro: 'Turn a love for baking into a skill that can become a small business.',
    detail: 'Build a hands-on baking foundation that brings care, consistency and creativity into every batch.', learn: 'Ingredient preparation, basic baking processes, presentation, food safety awareness and planning.', value: 'Baking can become a thoughtful way to serve a community and explore a small creative enterprise.' },
  { id: 'crocheting', name: 'Crocheting', image: 'assets/images/skills/crocheting.svg',
    category: 'Handcraft', intro: 'Make handcrafted pieces stitch by stitch and discover a creative craft.',
    detail: 'Learn the calming, expressive craft of turning yarn into useful and original handmade pieces.', learn: 'Yarn handling, foundational stitches, reading simple patterns, shaping and finishing techniques.', value: 'Crocheting nurtures patience and creativity while offering a path to distinctive handmade products.' },
  { id: 'web-development', name: 'AI-Assisted Web Development', image: 'assets/images/skills/web-development.svg',
    category: 'Creative tech', intro: 'Build websites with the help of AI tools and learn how modern web creation works.',
    detail: 'Get introduced to modern website-making and the thoughtful use of AI tools in a creative workflow.', learn: 'Web page structure, visual layout, responsive thinking, prompt-led iteration and project presentation.', value: 'Web development can help students turn ideas into useful digital experiences and communicate online.' },
  { id: 'nails-lash', name: 'Nails and Lash', image: 'assets/images/skills/nails-lash.svg',
    category: 'Beauty', intro: 'Learn nail and lash artistry, a service in steady demand.',
    detail: 'Explore the detail-focused world of nail and lash artistry through a careful, client-aware introduction.', learn: 'Nail preparation, basic artistry, lash application foundations, hygiene and client aftercare awareness.', value: 'Nail and lash artistry combines precision and style in a service that can fit naturally into student life.' },
];

export const pricing = [
  { id: 'freshers', label: 'Freshers', amount: '₦10,000', note: 'Programme fee' },
  { id: 'stalites', label: 'Stalites', amount: '₦15,000', note: 'Programme fee' },
];

export const cohort = { target: 100, label: 'Students' };

export const programmeInfo = [
  { label: 'Programme', value: 'Skills Acquisition and Empowerment Programme 1.0' },
  { label: 'Cohort', value: 'First cohort — target of 100 students' },
  { label: 'Participation', value: 'Freshers and Stalites' },
  { label: 'Training', value: 'Details to be announced', placeholder: true },
];

/** Facilitators: replace placeholder entries with real people. Set `placeholder: false` and fill every field. */
export const facilitators = [
  { id: 'f1', placeholder: true, name: 'Facilitator Name', skill: 'Skill to be announced',
    bio: 'A short biography of this facilitator will appear here once their details are confirmed.',
    background: 'Professional background to be added', photo: 'assets/images/placeholders/facilitator.svg' },
  { id: 'f2', placeholder: true, name: 'Facilitator Name', skill: 'Skill to be announced',
    bio: 'A short biography of this facilitator will appear here once their details are confirmed.',
    background: 'Professional background to be added', photo: 'assets/images/placeholders/facilitator.svg' },
  { id: 'f3', placeholder: true, name: 'Facilitator Name', skill: 'Skill to be announced',
    bio: 'A short biography of this facilitator will appear here once their details are confirmed.',
    background: 'Professional background to be added', photo: 'assets/images/placeholders/facilitator.svg' },
  { id: 'f4', placeholder: true, name: 'Facilitator Name', skill: 'Skill to be announced',
    bio: 'A short biography of this facilitator will appear here once their details are confirmed.',
    background: 'Professional background to be added', photo: 'assets/images/placeholders/facilitator.svg' },
];

/** Team: replace placeholder entries with real members. */
export const team = [
  { id: 't1', placeholder: true, name: 'Team Member Name', role: 'Role to be announced',
    text: 'A short description of this team member and what they do at Studentico.', photo: 'assets/images/placeholders/team.svg' },
  { id: 't2', placeholder: true, name: 'Team Member Name', role: 'Role to be announced',
    text: 'A short description of this team member and what they do at Studentico.', photo: 'assets/images/placeholders/team.svg' },
  { id: 't3', placeholder: true, name: 'Team Member Name', role: 'Role to be announced',
    text: 'A short description of this team member and what they do at Studentico.', photo: 'assets/images/placeholders/team.svg' },
  { id: 't4', placeholder: true, name: 'Team Member Name', role: 'Role to be announced',
    text: 'A short description of this team member and what they do at Studentico.', photo: 'assets/images/placeholders/team.svg' },
];

export const partnershipPaths = [
  { id: 'financial', number: '01', title: 'Financial Sponsorship',
    text: 'Support training delivery, programme costs, learning resources and student participation.' },
  { id: 'equipment', number: '02', title: 'Equipment and Resource Support',
    text: 'Support students through equipment, software, laptops, internet access and learning materials.' },
  { id: 'strategic', number: '03', title: 'Strategic Partnerships',
    text: 'Collaborate with Studentico through institutional support, expertise, networks and shared initiatives.' },
  { id: 'scholarships', number: '04', title: 'Scholarships and Student Support',
    text: 'Help reduce financial barriers and make opportunities accessible to more students.' },
];

export const visionGroups = ['Students', 'Skilled professionals', 'Educational institutions', 'Businesses', 'Development partners'];

/** Contact + social placeholders. Replace with real values later. */
export const contact = {
  email: 'Email address to be added',
  phone: 'Phone / WhatsApp number to be added',
  location: 'University of Medical Sciences (UNIMED), Ondo',
};

export const socials = [
  { label: 'Instagram', href: '#', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.500-3.500a1.200 1.200 0 1 0 0 2.400 1.200 1.200 0 0 0 0-2.400Z' },
  { label: 'X (Twitter)', href: '#', path: 'M18.200 2H21l-6.500 7.400L22 22h-6l-4.700-6.100L5.800 22H3l7-8L2.500 2h6.100l4.300 5.700L18.200 2Zm-1 18h1.600L7.900 3.800H6.200L17.200 20Z' },
  { label: 'Facebook', href: '#', path: 'M13.500 22v-8h2.700l.5-3.300h-3.200V8.600c0-1 .4-1.700 1.800-1.700h1.500V4.100c-.3 0-1.300-.1-2.400-.1-2.500 0-4.100 1.500-4.100 4.200v2.500H7.200V14h2.800v8h3.500Z' },
  { label: 'WhatsApp', href: '#', path: 'M12 2a10 10 0 0 0-8.600 15.100L2 22l5-1.300A10 10 0 1 0 12 2Zm5.200 14.100c-.2.600-1.200 1.200-1.700 1.200-.4.100-1 .1-1.600-.1-.4-.1-.9-.3-1.600-.6-2.700-1.200-4.500-3.900-4.600-4.100-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.2.1.3 0 .5l-.3.500-.4.400c-.1.100-.3.300-.1.600.2.300.7 1.200 1.600 1.900 1.100 1 2 1.300 2.300 1.400.3.200.5.100.6-.1l.8-1c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400Z' },
];
