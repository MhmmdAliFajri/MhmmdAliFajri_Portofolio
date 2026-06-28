/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkExperienceItem, ActiveProjectItem, CertificateItem, CompetencyItem } from './types';

// ✨ IMPORT GAMBAR DI SINI
import imgElearn from './assets/images/E-LEARNLOGICGATE.png';
import imgJevetCall from './assets/images/JEVET-CALLFORPAPERS.png';
import imgJevetHeader from './assets/images/JEVET_HEADER.png'; // Pastikan nama file sesuai
import imgCertPkl from './assets/images/SERTIFIKAT_PKL_PLN.png';
import imgCertPkm from './assets/images/SERTIFIKAT_PKM_SMKN55.png';

export const workExperienceData: WorkExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'PT PLN (Persero) Pusat Sertifikasi',
    role: 'Operator',
    duration: 'Feb 2024 - Apr 2024',
    description: [
      'Focused on testing processes for "Pekerjaan Dalam Keadaan Bertegangan" (PDKB).',
      'Operating precision diagnostic equipment for high-voltage systems with zero safety violation records.'
    ]
  },
  {
    id: 'exp-2',
    company: 'SMK NEGERI 55 Jakarta',
    role: 'Teacher',
    duration: 'Jul 2024 - Dec 2024',
    description: [
      'Taught Electrical Lighting Installation for Grade XI students.',
      'Developed interactive learning media and structured Learning Goal Flows (ATP).',
      'Managed classrooms using practice-based learning methods to maximize engagement.'
    ]
  }
];

export const activeProjectsData: ActiveProjectItem[] = [
  {
    id: 'proj-1',
    title: 'E-Learn Logic Gate Sim',
    subtitle: 'An interactive educational app featuring digital circuit simulations with a user-friendly interface tailored for engineering students.',
    techBadge: 'FLUTTER',
    imageUrl: imgElearn, // ✨ Gunakan variabel import tanpa tanda kutip
    longDescription: 'An immersive Flutter-based educational suite designed to help electrical engineering students easily grasp principles of Boolean algebra and logical circuits...',
    features: [
      'Simulate AND, OR, NAND, NOR, XOR, XNOR, NOT gates in dynamic cascading arrays.',
      'Interactive truth tables updating instantly as state inputs are flipped from 0 to 1.',
      'Challenge mode with pre-designed digital gates problems (e.g. build a Half-Adder).',
      'Full state persistence and offline support for students out in experimental laboratories.'
    ],
    links: {
      label: 'VIEW',
      url: 'https://play.google.com/store/apps/details?id=com.pkm.elearnlogicgate'
    }
  },
  {
    id: 'proj-2',
    title: 'Call for Papers JEVET',
    subtitle: 'Designed informative, visually engaging academic publication media optimized for target audiences in the engineering sector.',
    techBadge: 'PUBLISHER',
    imageUrl: imgJevetCall, // ✨ Gunakan variabel import tanpa tanda kutip
    longDescription: 'A custom-tailored campaign set designed to draw highly refined engineering and technical papers to the Journal of Electrical Vocational Education and Technology (JEVET)...',
    features: [
      'Strict visual alignment with formal academic and engineering institutions.',
      'Clear callouts for key topics: Smart Grid, Energy Management, Industrial Automation, multimedia systems.',
      'Streamlined QR code access and visual pathways to guidelines for submission.',
      'High-contrast professional layout ensuring readability on both digital and physical bulletin boards.'
    ],
    links: {
      label: 'VIEW',
      url: 'https://journal.unj.ac.id/unj/index.php/jevet/announcement'
    }
  },
  {
    id: 'proj-3',
    title: 'Header Design JEVET',
    subtitle: 'Clean, authoritative header design for the Journal of Electrical Vocational Education and Technology website.',
    techBadge: 'WEB_ASSET',
    imageUrl: imgJevetHeader, // ✨ Gunakan variabel import tanpa tanda kutip
    longDescription: 'An elegant header restructuring for JEVET website, establishing absolute scholastic authority and boosting mobile compliance...',
    features: [
      'Responsive full-width desktop layout with modular grid guidelines.',
      'Embedded indexing badges of academic certification in pristine high-resolution rendering.',
      'SVG optimized vector structures ensuring zero blurriness on 4K professional monitors.',
      'Strictly aligned typography pairing classic editorial sans with monospaced metadata identifiers.'
    ],
    links: {
      label: 'VIEW',
      url: 'https://journal.unj.ac.id/unj/index.php/jevet'
    }
  }
];

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'INDUSTRIAL INTERNSHIP',
    issuer: 'PT PLN (Persero) Pusat Sertifikasi',
    duration: 'Feb - Apr 2024',
    type: 'INTERNSHIP',
    imageUrl: imgCertPkl, // ✨ Gunakan variabel import tanpa tanda kutip
    description: 'Implementing an industrial internship program to align Electrical Engineering theory with national electrical industry standards.'
  },
  {
    id: 'cert-2',
    title: 'TEACHING CREDENTIAL',
    issuer: 'SMK Negeri 55 Jakarta',
    duration: 'Jul - Dec 2024',
    score: '95.34',
    type: 'CREDENTIAL',
    imageUrl: imgCertPkm, // ✨ Gunakan variabel import tanpa tanda kutip
    description: 'Responsible for planning, implementing teaching, and evaluating learning in Electrical Power Installation Engineering.'
  },
  {
    id: 'cert-3',
    title: 'ADDITIONAL COURSES',
    issuer: 'Universitas Negeri Jakarta & Education Centers',
    duration: '2025 - 2026',
    type: 'COURSES',
    description: 'Additional professional development credentials in journals management and advanced application structures.'
  }
];

// ... competenciesData tetap sama seperti yang Anda tulis
