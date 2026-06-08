/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkExperienceItem, ActiveProjectItem, CertificateItem, CompetencyItem } from './types';

export const translations = {
  en: {
    // Nav / Header
    nav_profil: 'PROFIL',
    nav_experience: 'EXPERIENCE',
    nav_projects: 'ACTIVE PROJECT',
    nav_certificates: 'CERTIFICATES & TRAINING',
    nav_competencies: 'COMPETENCIES',
    nav_links: 'LINKS',
    live_feed: 'LIVE_FEED.SYS',
    overclocked: 'OVERCLOCKED.SYS',
    cabinet_title: 'SYS_CORE CABINET',
    cabinet_crt: 'CRT INTERFERENCE',
    cabinet_crt_desc: 'Toggle the synthetic cathode ray terminal viewport grid lines overlay overlaying the portfolio.',
    cabinet_overclock: 'OVERCLOCK CORE',
    cabinet_overclock_desc: 'Accelerate signal lines, overdrive telemetry, and alter simulated loads to emergency maximum thresholds.',
    cabinet_theme_title: 'THEME SECTOR SELECTOR',
    cabinet_theme_desc: 'Hot-swap global visual themes and interface styling accents dynamically across the layout.',
    cabinet_night_vision: 'NIGHT VISION',
    cabinet_night_vision_desc: 'Calibrate optical nodes for low-light conditions. Dark gray surfaces shift to absolute Pitch Black (#000000) with crisp, high-contrast neon highlights.',
    cabinet_synth: 'WAVEFORM SYNTHESIZER',
    cabinet_synth_desc: "Inject sound wave signals using your browser's core Web Audio API. Touch any frequency probe below:",
    cabinet_sys_fdb: 'SYSTEM_FEEDBACK',
    cabinet_temp: 'CORE TEMPERATURE',
    cabinet_audio: 'AUDIO WORKLET STATUS',
    cabinet_loads: 'SIMULATIVE PORT LOADS',
    cabinet_footer: 'SYSTEM INTERFACE PANEL V1.0.9\nDEVELOPED BY M. ALI_FAJRI',
    choose_node: 'CHOOSE SYSTEM NODE SECTOR:',

    // Hero
    hero_station: 'STATION_ID: MAF.EL_2026',
    hero_status: 'SYSTEM.ACTIVE',
    hero_sub: 'MAF_ // Portfolio',
    hero_title_eng: 'ENGINEER',
    hero_desc: 'Bachelor of Electrical Engineering Education Graduate / Jakarta State University',
    hero_quote: 'Passionate about electrical installations, mobile app development (Flutter), and instructional media development. Adaptive, fast learner, and an effective communicator of technology systems.',
    hero_btn_contact: 'GET IN TOUCH',
    hero_btn_inspect: 'Inspect Subsystems',
    hero_load: 'SYSTEM_LOAD',

    // Diagnostics / Notification
    diag_title: 'SYS_DIAGNOSTICS',
    diag_status: 'ONLINE',
    diag_msg: 'Luminous schematic compiled for Muhammad Ali Fajri. Select system nodes in the menu or index tabs to examine files.',
    diag_dismiss: '[ Dismiss telemetry console ]',

    // Experience
    exp_heading_sub: 'HISTORICAL LABWORK RECORDS // SECURE_ARCHIVE',
    exp_heading_main: 'WORK EXPERIENCE',
    exp_nodes: 'EXPERIENCE_NODES: 2',
    exp_role_operator: 'Operator',
    exp_role_teacher: 'Teacher',
    exp_1_desc: [
      'Focused on testing processes for "Pekerjaan Dalam Keadaan Bertegangan" (PDKB).',
      'Operating precision diagnostic equipment for high-voltage systems with zero safety violation records.'
    ],
    exp_2_desc: [
      'Taught Electrical Lighting Installation for Grade XI students.',
      'Developed interactive learning media and structured Learning Goal Flows (ATP).',
      'Managed classrooms using practice-based learning methods to maximize engagement.'
    ],

    // Projects
    proj_heading_sub: 'COMPILED ALGORITHMS & HARDWARE DESIGN',
    proj_heading_main: 'ACTIVE PROJECTS',
    proj_nodes: 'ACTIVE_PROJECT_NODES: 3',
    proj_tech: 'TECH:',
    proj_action_view: 'OPEN REPORT // DIAGNOSE',

    // Certificates
    cert_heading_sub: 'VERIFIED CREDENTIAL PROOFS // ACCREDITED',
    cert_heading_main: 'AWARDS & CERTIFICATES',
    cert_nodes: 'VERIFIED_RECORDS_COUNT: 3',
    cert_view: 'EXAMINE DOCUMENT // PREVIEW',
    cert_gpa: 'GPA: ',
    cert_score: 'Score: ',

    // Competencies
    comp_heading_sub: 'STATION CORE EFFICIENCY RATINGS // DIAG_LOADS',
    comp_heading_main: 'SYSTEMS COMPETENCY',
    comp_gpa: 'INDEX: 93.3% OVERALL EFFICACY',
    comp_inspector_lbl: 'CONNECTED SUBSYSTEM_REPORT',
    comp_density: 'DENSITY',
    comp_edu_sys: 'SYS.LOAD (Education)',
    comp_edu_desc: 'S1 Electrical Engineering Education, Universitas Negeri Jakarta',

    // Contact form
    contact_heading_sub: 'ESTABLISH SECURE INTERFACE CARRIER',
    contact_heading_main: 'TRANSMIT SIGNAL',
    contact_desc: 'Engage encrypted handshake with Station Operator. Send data packets via local carrier array.',
    contact_name: 'OPERATOR IDENTITY (FULL NAME)',
    contact_email: 'TRANSMISSION ADDR (EMAIL ADDRESS)',
    contact_message: 'PACKET BURST CONTENT (MESSAGE)',
    contact_btn: 'TRANSMIT DATA PACKET',
    contact_sending: 'SIMULATING HANDSHAKE...',
    contact_msg_ph: 'Enter message payload here...',
    contact_success: 'TRANSMISSION ACCEPTED // Handshake complete. Station Operator has been alerted.',
    contact_error: 'TRANSMISSION REFUSED // Validation error detected in payload packet.',
    contact_coordinates: 'NODE_COORDINATES',
    contact_field_name: 'ID_NAME',
    contact_field_name_placeholder: 'Enter your identification name',
    contact_field_email: 'SYS_EMAIL',
    contact_field_email_placeholder: 'Enter source connection address',
    contact_field_msg: 'DATA_PACKET',
    contact_field_msg_placeholder: 'Transmit message contents',
    contact_err_empty: 'All transmission headers [ID_NAME, SYS_EMAIL, DATA_PACKET] must satisfy integrity values.',
    contact_err_email: 'SYS_EMAIL must resemble a standard SMTP protocol address structure.',
    contact_btn_trans: 'TRANSMIT PACKET',
    contact_btn_transacting: 'TRANSMITTING DATA_STREAM...',
    contact_console_feed: 'CONSOLE_FEED',
    contact_console_lines: 'LINES',

    // Modal
    modal_title: 'PROJECT SPECIFICATION REPORT //',
    modal_sub: 'EXAMINED METRICS',
    modal_features: 'CORE_NODES_KEY_FEATURES:',
    modal_close: 'CLOSE REPORT',
    modal_cert_title: 'ACC_CERTIFICATE SPEC SHEET //',
    modal_duration: 'DURATION / DATE:',
    modal_authority: 'VERIFYING AUTHORITY:',
    modal_proj_node: 'PROJECT_DETAILED_NODE',
    modal_cert_report: 'CREDENTIAL_VERIFICATION_REPORT',
    modal_issuer: 'ISSUER AUTHORITY',
    modal_period: 'PERIOD STAMP',
    modal_validation: 'VALIDATION_STATEMENT',
    modal_action_proj1: 'GET APP ON PLAY STORE',
    modal_action_proj2: 'VISIT CALL FOR PAPERS',
    modal_action_proj3: 'VISIT JOURNAL WEBSITE',

    // Dynamic Data lists for English
    workExperienceData: [
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
    ] as WorkExperienceItem[],

    activeProjectsData: [
      {
        id: 'proj-1',
        title: 'E-Learn Logic Gate Sim',
        subtitle: 'An interactive educational app featuring digital circuit simulations with a user-friendly interface tailored for engineering students.',
        techBadge: 'FLUTTER',
        imageUrl: '/src/assets/images/E-LEARNLOGICGATE.png',
        longDescription: 'An immersive Flutter-based educational suite designed to help electrical engineering students easily grasp principles of Boolean algebra and logical circuits. The app simulates real-time signals, gate tables, and offers guided circuit construction challenges.',
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
        imageUrl: '/src/assets/images/JEVET - CALL FOR PAPERS.png',
        longDescription: 'A custom-tailored campaign set designed to draw highly refined engineering and technical papers to the Journal of Electrical Vocational Education and Technology (JEVET). Includes posters, social graphics, and informational schematics optimized for vocational researchers.',
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
        imageUrl: '/src/assets/images/JEVET HEADER.png',
        longDescription: 'An elegant header restructuring for JEVET website, establishing absolute scholastic authority and boosting mobile compliance. This asset modernizes the journal portal layout using crisp line arrays, classic Indonesian educational branding tones, and strict grid alignments.',
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
    ] as ActiveProjectItem[],

    certificatesData: [
      {
        id: 'cert-1',
        title: 'INDUSTRIAL INTERNSHIP',
        issuer: 'PT PLN (Persero) Pusat Sertifikasi',
        duration: 'Feb - Apr 2024',
        type: 'INTERNSHIP',
        imageUrl: '/src/assets/images/SERTIFIKAT PKL PLN.png',
        description: 'Implementing an industrial internship program to align Electrical Engineering theory with national electrical industry standards.'
      },
      {
        id: 'cert-2',
        title: 'TEACHING CREDENTIAL',
        issuer: 'SMK Negeri 55 Jakarta',
        duration: 'Jul - Dec 2024',
        score: '95.34',
        type: 'CREDENTIAL',
        imageUrl: '/src/assets/images/SERTIFIKAT PKM SMKN 55.png',
        description: 'Responsible for planning, implementing, and evaluating learning in Electrical Power Installation Engineering.'
      },
      {
        id: 'cert-3',
        title: 'ADDITIONAL COURSES',
        issuer: 'Universitas Negeri Jakarta & Education Centers',
        duration: '2025 - 2026',
        type: 'COURSES',
        description: 'Additional professional development credentials in journals management and advanced application structures.'
      }
    ] as CertificateItem[],

    competenciesData: [
      {
        name: 'Electrical Installation & Maintenance',
        level: 95,
        info: 'Certified lighting design, smart relay programming, and high-voltage PDKB diagnostic operations.'
      },
      {
        name: 'Flutter Programming (Certified)',
        level: 92,
        info: 'Full-stack mobile app development, state management (Provider/Bloc), custom interactive canvas integrations.',
        isSpecial: true
      },
      {
        name: 'UI/UX Design (Figma)',
        level: 88,
        info: 'Precision wireframing, interactive prototyping, full system-oriented glassmorphism assets, grid alignments.'
      },
      {
        name: 'Learning Media Dev',
        level: 94,
        info: 'E-learning simulator programming, structured Learning Goal Flows (ATP), logic simulation widgets development.'
      },
      {
        name: 'Video/Image Editing',
        level: 85,
        info: 'Vector asset styling, motion graphic promotions, audio editing, and high-fidelity promotional media creation.'
      },
      {
        name: 'Computer Systems',
        level: 90,
        info: 'Hardware and server structures, software deployment pipeline configuration, microcontrollers (Arduino/ESP32) wiring.'
      }
    ] as CompetencyItem[],
  },
  id: {
    // Nav / Header
    nav_profil: 'PROFIL',
    nav_experience: 'PENGALAMAN',
    nav_projects: 'PROYEK AKTIF',
    nav_certificates: 'SERTIFIKAT & PELATIHAN',
    nav_competencies: 'KOMPETENSI',
    nav_links: 'TAUTAN',
    live_feed: 'BERANDA_AKTIF.SYS',
    overclocked: 'OVERCLOCK.SYS',
    cabinet_title: 'SYS_CORE KABINET',
    cabinet_crt: 'INTERFERENSI CRT',
    cabinet_crt_desc: 'Aktifkan hamparan garis kisi layar tabung sinar katode sintetis pada portofolio.',
    cabinet_overclock: 'OVERCLOCK CORE',
    cabinet_overclock_desc: 'Percepat garis sinyal, overdrive telemetri, dan ubah simulasi beban ke batas darurat maksimum.',
    cabinet_theme_title: 'SELEKTOR SEKTOR TEMA',
    cabinet_theme_desc: 'Ganti tema visual global dan aksen gaya antarmuka secara dinamis di seluruh tata letak.',
    cabinet_night_vision: 'PENGLIHATAN MALAM',
    cabinet_night_vision_desc: 'Kalibrasi node optik untuk kondisi kurang cahaya. Permukaan abu-abu gelap bergeser ke Hitam Pekat (#000000) dengan sorotan neon kontras tinggi.',
    cabinet_synth: 'SINTESIS WAVEFORM',
    cabinet_synth_desc: 'Injeksi sinyal gelombang suara menggunakan Web Audio API inti browser Anda. Sentuh salah satu probe frekuensi di bawah:',
    cabinet_sys_fdb: 'UMPAN_BALIK_SISTEM',
    cabinet_temp: 'SUHU INTI',
    cabinet_audio: 'STATUS WORKLET SOUND',
    cabinet_loads: 'BEBAN PORT SIMULASI',
    cabinet_footer: 'PANEL ANTARMUKA SISTEM V1.0.9\nDIBERDAYAKAN OLEH M. ALI_FAJRI',
    choose_node: 'PILIH SEKTOR NODE SISTEM:',

    // Hero
    hero_station: 'STATION_ID: MAF.EL_2026',
    hero_status: 'SISTEM.AKTIF',
    hero_sub: 'MAF_ // Portofolio',
    hero_title_eng: 'TEKNISI',
    hero_desc: 'S1 Pendidikan Teknik Elektro / Universitas Negeri Jakarta',
    hero_quote: 'Sangat menyukai instalasi listrik, pengembangan aplikasi seluler (Flutter), dan pengembangan media pembelajaran. Adaptif, cepat belajar, serta komunikator yang efektif dalam sistem teknologi.',
    hero_btn_contact: 'HUBUNGI SAYA',
    hero_btn_inspect: 'Periksa Subsistem',
    hero_load: 'BEBAN_SISTEM',

    // Diagnostics / Notification
    diag_title: 'SYS_DIAGNOSTIK',
    diag_status: 'ONLINE',
    diag_msg: 'Skema bercahaya berhasil dikompilasi untuk Muhammad Ali Fajri. Pilih node sistem di menu atau tab indeks untuk memeriksa file.',
    diag_dismiss: '[ Sembunyikan konsol telemetri ]',

    // Experience
    exp_heading_sub: 'CATATAN PRAKTIKUM HISTORIS // ARSIP_AMAN',
    exp_heading_main: 'PENGALAMAN KERJA',
    exp_nodes: 'NODE_PENGALAMAN: 2',
    exp_role_operator: 'Operator',
    exp_role_teacher: 'Guru',
    exp_1_desc: [
      'Fokus pada proses pengujian untuk Pekerjaan Dalam Keadaan Bertegangan (PDKB).',
      'Mengoperasikan peralatan diagnostik presisi untuk sistem tegangan tinggi dengan catatan nol pelanggaran keselamatan.'
    ],
    exp_2_desc: [
      'Mengajar Instalasi Penerangan Listrik untuk siswa Kelas XI.',
      'Mengembangkan media pembelajaran interaktif dan menyusun Alur Tujuan Pembelajaran (ATP) yang terstruktur.',
      'Mengelola kelas menggunakan metode pembelajaran berbasis praktik untuk memaksimalkan keterlibatan.'
    ],

    // Projects
    proj_heading_sub: 'ALGORITMA & DESAIN PERANGKAT KERAS YANG DIKOMPILASI',
    proj_heading_main: 'PROYEK AKTIF',
    proj_nodes: 'NODE_PROYEK_AKTIF: 3',
    proj_tech: 'TEKNOLOGI:',
    proj_action_view: 'BUKA LAPORAN // DIAGNOSA',

    // Certificates
    cert_heading_sub: 'BUKTI KREDENSIAL TERVERIFIKASI // DIAKREDITASI',
    cert_heading_main: 'PENGHARGAAN & SERTIFIKAT',
    cert_nodes: 'JUMLAH_REKOR_TERVERIFIKASI: 3',
    cert_view: 'PERIKSA DOKUMEN // PRATINJAU',
    cert_gpa: 'IPK: ',
    cert_score: 'Nilai: ',

    // Competencies
    comp_heading_sub: 'PERINGKAT EFISIENSI INTI STASIUN // BEBAN_DIAG',
    comp_heading_main: 'KOMPETENSI SISTEM',
    comp_gpa: 'INDEKS: 93.3% TOTAL EFIKASI',
    comp_inspector_lbl: 'LAPORAN SUBSISTEM TERHUBUNG',
    comp_density: 'KERAPATAN',
    comp_edu_sys: 'BEBAN.SYS (Pendidikan)',
    comp_edu_desc: 'S1 Pendidikan Teknik Elektro, Universitas Negeri Jakarta',

    // Contact form
    contact_heading_sub: 'MEMBANGUN ENKRIPSI JALUR ANTARMUKA',
    contact_heading_main: 'KIRIM SINYAL',
    contact_desc: 'Lakukan pertukaran jabat tangan (handshake) aman dengan Operator Stasiun. Kirim paket data melalui rangkaian transmisi lokal.',
    contact_name: 'IDENTITAS OPERATOR (NAMA LENGKAP)',
    contact_email: 'ALAMAT TRANSMISI (ALAMAT EMAIL)',
    contact_message: 'ISI PAKET BURST (PESAN)',
    contact_btn: 'KIRIM PAKET DATA',
    contact_sending: 'SIMULASI JABAT TANGAN...',
    contact_msg_ph: 'Masukkan pesan muatan data di sini...',
    contact_success: 'TRANSMISI DITERIMA // Jabat tangan selesai. Operator Stasiun telah diperingatkan.',
    contact_error: 'TRANSMISI DITOLAK // Kesalahan validasi terdeteksi pada paket muatan.',
    contact_coordinates: 'KOORDINAT_NODE',
    contact_field_name: 'ID_NAMA',
    contact_field_name_placeholder: 'Masukkan identitas nama Anda',
    contact_field_email: 'SYS_SUREL',
    contact_field_email_placeholder: 'Masukkan alamat surel sumber koneksi',
    contact_field_msg: 'PAKET_DATA',
    contact_field_msg_placeholder: 'Kirim konten pesan data',
    contact_err_empty: 'Seluruh komponen transmisi [ID_NAMA, SYS_SUREL, PAKET_DATA] harus diisi dengan benar.',
    contact_err_email: 'Format surel pada SYS_SUREL tidak sesuai dengan standar SMTP protokol.',
    contact_btn_trans: 'KIRIM PAKET',
    contact_btn_transacting: 'MENGIRIM ALUR_DATA...',
    contact_console_feed: 'UMPAN_BALIK_KONSOL',
    contact_console_lines: 'BARIS',

    // Modal
    modal_title: 'LAPORAN SPESIFIKASI PROYEK //',
    modal_sub: 'METRIK YANG DIPERIKSA',
    modal_features: 'FITUR_UTAMA_NODES:',
    modal_close: 'TUTUP LAPORAN',
    modal_cert_title: 'LEMBAR SPESIFIKASI SERTIFIKAT AKREDITASI //',
    modal_duration: 'DURASI / TANGGAL:',
    modal_authority: 'OTORITAS VERIFIKASI:',
    modal_proj_node: 'NODE_PROYEK_SPESIFIK',
    modal_cert_report: 'LAPORAN_VERIFIKASI_KREDENSIAL',
    modal_issuer: 'OTORITAS PENERBIT',
    modal_period: 'PERIODE AKTIF',
    modal_validation: 'PERNYATAAN_VALIDASI',
    modal_action_proj1: 'DOWNLOAD DI PLAY STORE',
    modal_action_proj2: 'KUNJUNGI CALL FOR PAPERS',
    modal_action_proj3: 'KUNJUNGI WEBSITE JURNAL',

    // Dynamic Data lists for Indonesian
    workExperienceData: [
      {
        id: 'exp-1',
        company: 'PT PLN (Persero) Pusat Sertifikasi',
        role: 'Operator',
        duration: 'Feb 2024 - Apr 2024',
        description: [
          'Fokus pada proses pengujian untuk Pekerjaan Dalam Keadaan Bertegangan (PDKB).',
          'Mengoperasikan peralatan diagnostik presisi untuk sistem tegangan tinggi dengan catatan nol pelanggaran keselamatan.'
        ]
      },
      {
        id: 'exp-2',
        company: 'SMK NEGERI 55 Jakarta',
        role: 'Guru',
        duration: 'Jul 2024 - Des 2024',
        description: [
          'Mengajar Instalasi Penerangan Listrik untuk siswa Kelas XI.',
          'Mengembangkan media pembelajaran interaktif dan menyusun Alur Tujuan Pembelajaran (ATP) yang terstruktur.',
          'Mengelola kelas menggunakan metode pembelajaran berbasis praktik untuk memaksimalkan keterlibatan.'
        ]
      }
    ] as WorkExperienceItem[],

    activeProjectsData: [
      {
        id: 'proj-1',
        title: 'E-Learn Logic Gate Sim',
        subtitle: 'Aplikasi edukasi interaktif simulasi sirkuit digital dengan antarmuka ramah pengguna yang disesuaikan untuk mahasiswa teknik.',
        techBadge: 'FLUTTER',
        imageUrl: '/src/assets/images/E-LEARNLOGICGATE.png',
        longDescription: 'Rangkaian edukasi berbasis Flutter mendalam yang dirancang untuk membantu mahasiswa teknik elektro memahami prinsip aljabar Boolean dan sirkuit logika dengan mudah. Aplikasi ini mensimulasikan sinyal waktu nyata, tabel gerbang logis, dan menawarkan tantangan konstruksi sirkuit interaktif.',
        features: [
          'Simulasikan gerbang AND, OR, NAND, NOR, XOR, XNOR, NOT dalam rangkaian kaskade dinamis.',
          'Tabel kebenaran interaktif yang diperbarui secara instan saat kondisi input beralih dari 0 ke 1.',
          'Mode tantangan dengan sirkuit logika pradesain (misalnya membangun Half-Adder).',
          'Fungsionalitas penuh offline dan penyimpanan data lokal untuk digunakan mahasiswa di laboratorium eksperimen.'
        ],
        links: {
          label: 'LIHAT',
          url: 'https://play.google.com/store/apps/details?id=com.pkm.elearnlogicgate'
        }
      },
      {
        id: 'proj-2',
        title: 'Call for Papers JEVET',
        subtitle: 'Mendesain media publikasi akademik yang informatif dan menarik secara visual untuk audiens di sektor teknik.',
        techBadge: 'PUBLISHER',
        imageUrl: '/src/assets/images/JEVET - CALL FOR PAPERS.png',
        longDescription: 'Kampanye publikasi teratur yang disesuaikan untuk menarik makalah teknik berkualitas tinggi ke Journal of Electrical Vocational Education and Technology (JEVET). Termasuk poster publikasi, grafis media sosial, dan selebaran akademik.',
        features: [
          'Penyelarasan visual dengan institusi akademik dan teknik formal.',
          'Panggilan jelas topik utama: Smart Grid, Manajemen Energi, Otomasi Industri dan sistem multimedia.',
          'Akses cepat lewat QR code ke panduan pengajuan naskah ilmiah.',
          'Tata letak kontras tinggi yang memastikan keterbacaan mumpuni baik di papan pengumuman fisik maupun seluler.'
        ],
        links: {
          label: 'LIHAT',
          url: 'https://journal.unj.ac.id/unj/index.php/jevet/announcement'
        }
      },
      {
        id: 'proj-3',
        title: 'Header Design JEVET',
        subtitle: 'Desain header website yang bersih dan berwibawa untuk situs Journal of Electrical Vocational Education and Technology.',
        techBadge: 'WEB_ASSET',
        imageUrl: '/src/assets/images/JEVET HEADER.png',
        longDescription: 'Restrukturisasi header elegan untuk website JEVET, menetapkan otoritas ilmiah tingkat tinggi dan mengoptimalkan kegunaan aplikasi seluler. Aset memodifikasi tata letak portal jurnal menggunakan kisi garis silet, warna akademik, dan penataan kisi presisi.',
        features: [
          'Tata letak desktop lebar penuh responsif dengan panduan kisi pembatas modular.',
          'Penempatan lencana indeks akreditasi ilmiah jurnal akademik terverifikasi.',
          'Penataan file SVG/vektor memastikan ketajaman total pada monitor resolusi tinggi.',
          'Tipografi seimbang memasangkan font sans serif editorial dengan dekorator metadata mumpuni.'
        ],
        links: {
          label: 'LIHAT',
          url: 'https://journal.unj.ac.id/unj/index.php/jevet'
        }
      }
    ] as ActiveProjectItem[],

    certificatesData: [
      {
        id: 'cert-1',
        title: 'MAGANG INDUSTRI',
        issuer: 'PT PLN (Persero) Pusat Sertifikasi',
        duration: 'Feb - Apr 2024',
        type: 'INTERNSHIP',
        imageUrl: '/src/assets/images/SERTIFIKAT PKL PLN.png',
        description: 'Melaksanakan program magang industri guna menyelaraskan teori Teknik Elektro dengan standar industri kelistrikan nasional.'
      },
      {
        id: 'cert-2',
        title: 'PRAKTIK KEPENDIDIKAN (PKM)',
        issuer: 'SMK Negeri 55 Jakarta',
        duration: 'Jul - Des 2024',
        score: '95.34',
        type: 'CREDENTIAL',
        imageUrl: '/src/assets/images/SERTIFIKAT PKM SMKN 55.png',
        description: 'Bertanggung jawab dalam perencanaan, pelaksanaan mengajar, dan evaluasi pembelajaran pada Teknik Instalasi Tenaga Listrik.'
      },
      {
        id: 'cert-3',
        title: 'PELATIHAN TAMBAHAN',
        issuer: 'Universitas Negeri Jakarta & Pusat Diklat',
        duration: '2025 - 2026',
        type: 'COURSES',
        description: 'Pengalaman pengembangan profesional tambahan dalam manajemen pengelolaan jurnal/artikel ilmiah serta perancangan aplikasi tingkat lanjut.'
      }
    ] as CertificateItem[],

    competenciesData: [
      {
        name: 'Instalasi & Perawatan Listrik',
        level: 95,
        info: 'Perancangan instalasi kelistrikan, pengawatan instalasi daya, pemrograman smart relay, dan pengoperasian diagnosis PDKB tegangan tinggi.'
      },
      {
        name: 'Pemrograman Flutter (Sertifikasi)',
        level: 92,
        info: 'Pembuatan aplikasi seluler full-stack multiplatform, manajemen state (Provider/Bloc), dan integrasi kanvas/sirkuit interaktif.',
        isSpecial: true
      },
      {
        name: 'Desain UI/UX (Figma)',
        level: 88,
        info: 'Pembuatan wireframe presisi, prototipe interaktif, visualisasi sistem bermotif glassmorphism, dan penataan tata letak silet.'
      },
      {
        name: 'Media Pembelajaran Interaktif',
        level: 94,
        info: 'Pemrograman simulator e-learning sirkuit digital, penyusunan Alur Tujuan Pembelajaran (ATP), dan perancangan widget interaktif sekolah vokasi.'
      },
      {
        name: 'Penyuntingan Gambar & Video',
        level: 85,
        info: 'Desain aset promosi berbasis vektor, grafik gerak presentasi/pameran, editing audio, dan pembuatan media publikasi resolusi mumpuni.'
      },
      {
        name: 'Sistem Komputer',
        level: 90,
        info: 'Struktur jaringan kelistrikan perangkat keras & server lokal, deployment pipa program, pengawatan mikrokontroler (Arduino/ESP32) terintegrasi.'
      }
    ] as CompetencyItem[],
  }
};
