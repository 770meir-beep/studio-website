"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "he";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    studio: string;
    contact: string;
    bookSession: string;
  };
  footer: {
    tagline: string;
    description: string;
    address: string;
    professional: string;
    categories: {
      Studio: { label: string; links: { href: string; label: string }[] };
      Connect: { label: string; links: { href: string; label: string }[] };
    };
    copyright: string;
  };
  home: {
    hero: {
      subtitle: string;
      line1: string;
      line2: string;
      line3: string;
      description: string;
      bookSession: string;
      exploreStudio: string;
      scroll: string;
    };
    services: {
      label: string;
      heading: string;
      allServices: string;
      items: { title: string; description: string }[];
    };
    why: {
      label: string;
      heading: string;
      items: { number: string; title: string; description: string }[];
    };
    stats: { value: string; label: string }[];
    cta: {
      label: string;
      heading: string;
      description: string;
      bookSession: string;
      viewServices: string;
    };
  };
  about: {
    header: { label: string; heading: string; description: string };
    philosophy: { label: string; heading: string; paragraphs: string[] };
    team: {
      label: string;
      heading: string;
      members: { name: string; role: string; bio: string }[];
    };
    timeline: {
      label: string;
      heading: string;
      milestones: { year: string; event: string }[];
    };
    cta: { heading: string; description: string; bookSession: string };
  };
  services: {
    header: { label: string; heading: string; description: string };
    enquire: string;
    whatsIncluded: string;
    items: {
      id: string;
      number: string;
      title: string;
      tagline: string;
      description: string;
      features: string[];
      rate: string;
    }[];
    addOns: {
      label: string;
      heading: string;
      items: { title: string; description: string }[];
    };
    cta: { heading: string; description: string; getInTouch: string };
  };
  studio: {
    header: { label: string; heading: string; description: string };
    roomSpecs: string;
    rooms: {
      name: string;
      subtitle: string;
      size: string;
      description: string;
      specs: string[];
    }[];
    gear: {
      label: string;
      heading: string;
      categories: { category: string; items: string[] }[];
    };
    cta: { heading: string; description: string; bookTour: string; viewServices: string };
  };
  contact: {
    header: { label: string; heading: string; description: string };
    info: {
      location: { label: string; address: string[] };
      hours: { label: string; rows: { day: string; time: string }[] };
      getInTouch: { label: string };
    };
    form: {
      fullName: string;
      emailAddress: string;
      phoneNumber: string;
      service: string;
      preferredDate: string;
      projectDescription: string;
      projectPlaceholder: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      selectService: string;
      required: string;
      sendMessage: string;
      serviceOptions: string[];
    };
    success: { label: string; heading: string; description: string };
  };
}

const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      studio: "Studio",
      contact: "Contact",
      bookSession: "Book Session",
    },
    footer: {
      tagline: "Where Sound Becomes Art",
      description:
        "Where creativity meets precision. A world-class recording environment designed to bring your sound to life.",
      address: "1402 Union St, Brooklyn, NY",
      professional: "Professional Recording",
      categories: {
        Studio: {
          label: "Studio",
          links: [
            { href: "/about", label: "About Us" },
            { href: "/studio", label: "Our Studio" },
            { href: "/services", label: "Services" },
          ],
        },
        Connect: {
          label: "Connect",
          links: [
            { href: "/contact", label: "Book a Session" },
            { href: "/contact", label: "Contact Us" },
          ],
        },
      },
      copyright: "All rights reserved.",
    },
    home: {
      hero: {
        subtitle: "Professional Recording Studio · Brooklyn, NY",
        line1: "CRAFT",
        line2: "YOUR",
        line3: "SOUND",
        description:
          "Where creativity meets precision. Esti Studio is a world-class recording environment designed to transform your vision into extraordinary music.",
        bookSession: "Book a Session",
        exploreStudio: "Explore Studio",
        scroll: "Scroll",
      },
      services: {
        label: "Our Services",
        heading: "Everything You Need to Create",
        allServices: "All Services",
        items: [
          {
            title: "Recording",
            description:
              "State-of-the-art tracking rooms with pristine acoustic design. Capture every nuance of your performance with exceptional clarity.",
          },
          {
            title: "Mixing",
            description:
              "Expert mix engineers craft the perfect sonic balance — blending every element into a cohesive, powerful, and polished sound.",
          },
          {
            title: "Mastering",
            description:
              "Final polish for distribution-ready audio. Our mastering suite ensures your music translates beautifully across every platform.",
          },
          {
            title: "Production",
            description:
              "Full creative production from concept to completion. Our producers bring decades of experience spanning every genre.",
          },
        ],
      },
      why: {
        label: "Why Esti Studio",
        heading: "Where Art Meets Engineering",
        items: [
          {
            number: "01",
            title: "World-Class Equipment",
            description:
              "Neve 8078 console, vintage preamps, and modern outboard gear. Every piece chosen for character and sonic precision.",
          },
          {
            number: "02",
            title: "Experienced Engineers",
            description:
              "Our team has worked with artists across every genre — deep technical expertise paired with genuine musical intuition.",
          },
          {
            number: "03",
            title: "Inspiring Environment",
            description:
              "Acoustically treated live rooms, a comfortable control room, and a creative lounge designed for long, productive sessions.",
          },
          {
            number: "04",
            title: "Proven Track Record",
            description:
              "Over 500 released records. Our work speaks through chart placements, critical acclaim, and loyal returning artists.",
          },
        ],
      },
      stats: [
        { value: "500+", label: "Records Released" },
        { value: "15+", label: "Years of Excellence" },
        { value: "3", label: "Acoustic Live Rooms" },
        { value: "100%", label: "Artist Satisfaction" },
      ],
      cta: {
        label: "Ready to Create?",
        heading: "Book Your Studio Session",
        description:
          "Take the first step toward the record you've always envisioned. Our team at Esti Studio is ready to make it happen.",
        bookSession: "Book a Session",
        viewServices: "View Services",
      },
    },
    about: {
      header: {
        label: "About Us",
        heading: "Our Story",
        description:
          "Built by musicians for musicians. Esti Studio was founded on a single belief: that the recording environment should inspire, not intimidate.",
      },
      philosophy: {
        label: "Our Philosophy",
        heading: "Sound Is Emotion. We Help You Capture It.",
        paragraphs: [
          "Great recording isn't just technical excellence — it's creating a space where artists feel safe to take creative risks. From the moment you walk through our doors, everything is designed to remove friction and amplify inspiration.",
          "We obsess over the details most studios overlook: the acoustics that breathe naturally, the vintage gear that imparts warmth, the engineers who listen as musicians first and technicians second.",
          "The result is recordings that sound alive — not just clean, but deeply human.",
        ],
      },
      team: {
        label: "The Team",
        heading: "The People Behind the Sound",
        members: [
          {
            name: "Esti Cohen",
            role: "Founder & Lead Engineer",
            bio: "15 years of engineering experience across jazz, R&B, pop, and electronic music. Esti built this studio to be the creative space she always wished existed — welcoming, precise, and inspiring.",
          },
          {
            name: "Sofia Reyes",
            role: "Mixing & Mastering Engineer",
            bio: "Trained at Abbey Road Studios in London. Sofia brings a refined sonic sensibility and technical mastery that has become a defining quality of the Esti Studio sound.",
          },
          {
            name: "James Okafor",
            role: "Music Producer",
            bio: "Prolific producer with credits on over 200 commercial releases. James has an uncanny ability to unlock an artist's unique voice and elevate it to its full potential.",
          },
        ],
      },
      timeline: {
        label: "History",
        heading: "15 Years of Sound",
        milestones: [
          { year: "2009", event: "Esti Studio founded in a converted warehouse in Brooklyn" },
          { year: "2012", event: "Expanded to three dedicated recording rooms" },
          { year: "2015", event: "Installed vintage Neve 8078 console" },
          { year: "2018", event: "Launched in-house mastering division" },
          { year: "2022", event: "Celebrated 500th commercial release" },
          { year: "2024", event: "Major acoustic renovation and equipment upgrade" },
        ],
      },
      cta: {
        heading: "Ready to Work Together?",
        description: "Let's create something extraordinary at Esti Studio.",
        bookSession: "Book a Session",
      },
    },
    services: {
      header: {
        label: "Services",
        heading: "What We Offer",
        description:
          "Comprehensive recording services tailored to every stage of your creative process — from the first take to the final master.",
      },
      enquire: "Enquire",
      whatsIncluded: "What's Included",
      items: [
        {
          id: "recording",
          number: "01",
          title: "Recording",
          tagline: "Where Performances Become Timeless",
          description:
            "Our recording rooms are designed to capture sound with unmatched accuracy and character. Whether you're laying down a solo vocal, a full band, or a string ensemble, every nuance of your performance is preserved.",
          features: [
            "Two large live rooms with variable acoustics",
            "Dedicated isolation booth for vocals",
            "Neve 1073 and API 512c microphone preamps",
            "Vintage and modern microphone collection (over 80 mics)",
            "Protools HD and SSL Big Six recording chains",
            "Monitoring via NS10s, Genelec 8351s, and Augspurger mains",
          ],
          rate: "From $150/hr",
        },
        {
          id: "mixing",
          number: "02",
          title: "Mixing",
          tagline: "The Art of Balance and Depth",
          description:
            "Our mix engineers bring technical mastery and deep musical intuition to every project. We blend every element to create a cohesive, powerful, and emotionally resonant mix that serves the song.",
          features: [
            "Hybrid mixing: analog summing + digital precision",
            "SSL 4000 G series console for analog mixing",
            "Extensive outboard compression and EQ",
            "Stem delivery in all formats",
            "Unlimited revisions within session",
            "Reference track comparison workflow",
          ],
          rate: "From $400/song",
        },
        {
          id: "mastering",
          number: "03",
          title: "Mastering",
          tagline: "Final Polish for Every Platform",
          description:
            "Mastering is where your music prepares to meet the world. Our mastering suite is a dedicated listening environment calibrated for maximum accuracy, ensuring your music translates perfectly across every system.",
          features: [
            "Dedicated mastering room, separately calibrated",
            "Stem mastering available for added control",
            "Delivery for streaming, vinyl, and CD",
            "Loudness targeting for all major DSPs",
            "Analog limiting and saturation options",
            "DDP image and mastered WAV delivery",
          ],
          rate: "From $150/song",
        },
        {
          id: "production",
          number: "04",
          title: "Production",
          tagline: "From Concept to Complete Record",
          description:
            "Our in-house producers work closely with artists to develop sonic identities and bring creative visions to life. From initial sketches to final arrangements, we guide every step of the creative process.",
          features: [
            "Full arrangement and orchestration services",
            "Genre expertise: hip-hop, R&B, rock, pop, jazz",
            "Session musician network on call",
            "Songwriting collaboration available",
            "Sync licensing consultation",
            "Artist development packages",
          ],
          rate: "Custom quote",
        },
      ],
      addOns: {
        label: "Add-Ons",
        heading: "Additional Services",
        items: [
          {
            title: "Session Musicians",
            description: "Access to our vetted network of professional session players.",
          },
          {
            title: "Video Production",
            description: "In-studio live session video capture and content creation.",
          },
          {
            title: "Artist Development",
            description: "Comprehensive coaching for emerging artists on brand and sound.",
          },
          {
            title: "Podcast Recording",
            description: "Professional podcast setup with broadcast-quality audio output.",
          },
        ],
      },
      cta: {
        heading: "Not Sure Which Service You Need?",
        description:
          "Reach out and we'll help you find the right approach for your project, budget, and timeline.",
        getInTouch: "Get in Touch",
      },
    },
    studio: {
      header: {
        label: "The Studio",
        heading: "Our Space",
        description:
          "Three purpose-built rooms, vintage and modern gear, and an environment designed to inspire at 1402 Union St, Brooklyn.",
      },
      roomSpecs: "Room Specifications",
      rooms: [
        {
          name: "Studio A",
          subtitle: "Main Tracking Room",
          size: "1,200 sq ft",
          description:
            "Our flagship live room features variable acoustic panels, a 14-foot ceiling, and custom-built isolation booths. Designed for full band recordings, orchestral sessions, and anything requiring space and ambience.",
          specs: [
            "Variable acoustic treatment",
            "14-ft vaulted ceiling",
            "Full isolation from control room",
            "Custom low-frequency trapping",
            "Neve 8078 analog console (72-channel)",
            "Pro Tools HDX + Pyramix digital workstations",
          ],
        },
        {
          name: "Studio B",
          subtitle: "Overdub & Tracking Room",
          size: "600 sq ft",
          description:
            "An intimate and flexible space ideal for overdubs, vocals, and smaller ensemble recording. The room is acoustically neutral with selectable reflection surfaces for different sonic characters.",
          specs: [
            "Switchable live/dead acoustics",
            "Dedicated vocal booth",
            "SSL Big Six mixing surface",
            "Summing mixer for analog warmth",
            "24-channel Neve preamp bank",
            "Genelec 8351 nearfield monitors",
          ],
        },
        {
          name: "Mastering Suite",
          subtitle: "Dedicated Mastering Room",
          size: "400 sq ft",
          description:
            "A purpose-built mastering environment designed for extreme accuracy. The room is calibrated to ±0.5dB across the full frequency range, giving our engineers confidence of total sonic transparency.",
          specs: [
            "±0.5 dB room calibration",
            "Augspurger custom monitoring system",
            "Manley Vari-Mu mastering compressor",
            "Sontec and Dangerous Bax EQs",
            "Weiss DS1 and Izotope Ozone chain",
            "DDP, WAV, and vinyl delivery",
          ],
        },
      ],
      gear: {
        label: "Equipment",
        heading: "Selected Gear List",
        categories: [
          { category: "Consoles", items: ["Neve 8078 (72ch)", "SSL Big Six", "API 1608"] },
          {
            category: "Preamps",
            items: [
              "Neve 1073 (×16)",
              "API 512c (×8)",
              "Chandler REDD.47 (×4)",
              "Universal Audio 610",
            ],
          },
          {
            category: "Compressors",
            items: [
              "Neve 33609",
              "SSL G-Bus Compressor",
              "Urei 1176 (×4)",
              "Teletronix LA-2A (×2)",
              "Manley Vari-Mu",
            ],
          },
          {
            category: "EQ",
            items: [
              "Neve 1081 (×8)",
              "Pultec EQP-1A (×4)",
              "Sontec MES 432C",
              "Dangerous Bax EQ",
            ],
          },
          {
            category: "Microphones",
            items: [
              "Neumann U87 (×6)",
              "AKG C12",
              "Sony C800G",
              "Shure SM7B (×8)",
              "Royer R-121 (×4)",
              "80+ mic locker",
            ],
          },
          {
            category: "Monitoring",
            items: [
              "Augspurger Custom Mains",
              "Genelec 8351 (×4)",
              "Yamaha NS10M (×2)",
              "Avantone MixCubes",
            ],
          },
        ],
      },
      cta: {
        heading: "Come See It in Person",
        description: "1402 Union St, Brooklyn, NY · Tours available by appointment.",
        bookTour: "Book a Tour",
        viewServices: "View Services",
      },
    },
    contact: {
      header: {
        label: "Contact",
        heading: "Let's Make Something",
        description:
          "Ready to book a session, ask a question, or schedule a tour? Fill out the form and we'll get back to you within 24 hours.",
      },
      info: {
        location: {
          label: "Location",
          address: ["1402 Union St", "Brooklyn, New York", "NY 11231"],
        },
        hours: {
          label: "Hours",
          rows: [
            { day: "Monday – Friday", time: "10am – 10pm" },
            { day: "Saturday", time: "12pm – 8pm" },
            { day: "Sunday", time: "By appointment" },
          ],
        },
        getInTouch: { label: "Get In Touch" },
      },
      form: {
        fullName: "Full Name",
        emailAddress: "Email Address",
        phoneNumber: "Phone Number",
        service: "Service",
        preferredDate: "Preferred Date",
        projectDescription: "Tell Us About Your Project",
        projectPlaceholder: "Describe your project, genre, number of tracks, timeline...",
        namePlaceholder: "Your full name",
        emailPlaceholder: "you@example.com",
        phonePlaceholder: "+1 (000) 000-0000",
        selectService: "Select a service",
        required: "*",
        sendMessage: "Send Message",
        serviceOptions: [
          "Recording Session",
          "Mixing",
          "Mastering",
          "Music Production",
          "Studio Tour",
          "Other",
        ],
      },
      success: {
        label: "Sent",
        heading: "Thank You",
        description:
          "Your message has been received. We'll be in touch within 24 hours to discuss your session at Esti Studio.",
      },
    },
  },

  he: {
    nav: {
      home: "בית",
      about: "אודות",
      services: "שירותים",
      studio: "סטודיו",
      contact: "צור קשר",
      bookSession: "הזמן סשן",
    },
    footer: {
      tagline: "שם הצליל הופך לאמנות",
      description:
        "יצירתיות פוגשת דיוק. סביבת הקלטה ברמה עולמית שנועדה להחיות את הצליל שלך.",
      address: "1402 Union St, ברוקלין, ניו יורק",
      professional: "הקלטה מקצועית",
      categories: {
        Studio: {
          label: "סטודיו",
          links: [
            { href: "/about", label: "אודותינו" },
            { href: "/studio", label: "הסטודיו שלנו" },
            { href: "/services", label: "שירותים" },
          ],
        },
        Connect: {
          label: "התחברות",
          links: [
            { href: "/contact", label: "הזמן סשן" },
            { href: "/contact", label: "צור קשר" },
          ],
        },
      },
      copyright: "כל הזכויות שמורות.",
    },
    home: {
      hero: {
        subtitle: "סטודיו הקלטות מקצועי · ברוקלין, ניו יורק",
        line1: "עצב",
        line2: "את",
        line3: "הצליל",
        description:
          "שם יצירתיות פוגשת דיוק. אסטי סטודיו היא סביבת הקלטה ברמה עולמית שנועדה להפוך את החזון שלך למוזיקה יוצאת דופן.",
        bookSession: "הזמן סשן",
        exploreStudio: "גלה את הסטודיו",
        scroll: "גלול",
      },
      services: {
        label: "השירותים שלנו",
        heading: "כל מה שצריך כדי ליצור",
        allServices: "כל השירותים",
        items: [
          {
            title: "הקלטה",
            description:
              "חדרי הקלטה מתקדמים עם עיצוב אקוסטי מושלם. לוכד כל ניואנס בביצוע שלך בבהירות יוצאת דופן.",
          },
          {
            title: "מיקס",
            description:
              "מהנדסי מיקס מומחים יוצרים את האיזון הסוני המושלם — משלבים כל אלמנט לצליל מגובש, עוצמתי וממוצקת.",
          },
          {
            title: "מאסטרינג",
            description:
              "ליטוש סופי לאודיו מוכן להפצה. חדר המאסטרינג שלנו מבטיח שהמוזיקה שלך תתורגם יפה בכל פלטפורמה.",
          },
          {
            title: "הפקה",
            description:
              "הפקה יצירתית מלאה מהרעיון ועד לסיום. המפיקים שלנו מביאים עשרות שנות ניסיון בכל הז'אנרים.",
          },
        ],
      },
      why: {
        label: "למה אסטי סטודיו",
        heading: "שם אמנות פוגשת הנדסה",
        items: [
          {
            number: "01",
            title: "ציוד ברמה עולמית",
            description:
              "קונסולת Neve 8078, פרה-אמפים וינטג׳ וציוד מודרני. כל פריט נבחר בשביל האופי והדיוק הסוני שלו.",
          },
          {
            number: "02",
            title: "מהנדסים מנוסים",
            description:
              "הצוות שלנו עבד עם אמנים בכל הז'אנרים — מומחיות טכנית עמוקה לצד אינטואיציה מוזיקלית אמיתית.",
          },
          {
            number: "03",
            title: "סביבה מעוררת השראה",
            description:
              "חדרי הקלטה מטופלים אקוסטית, חדר שליטה נוח וסלון יצירתי שנועד לסשנים ארוכים ופרודוקטיביים.",
          },
          {
            number: "04",
            title: "רקורד מוכח",
            description:
              "מעל 500 הקלטות שוחררו. עבודתנו מדברת דרך מיקומי הצ׳ארטים, שבחים ביקורתיים ואמנים חוזרים.",
          },
        ],
      },
      stats: [
        { value: "500+", label: "הקלטות שוחררו" },
        { value: "15+", label: "שנות מצוינות" },
        { value: "3", label: "חדרי הקלטה חיים" },
        { value: "100%", label: "שביעות רצון אמנים" },
      ],
      cta: {
        label: "מוכן ליצור?",
        heading: "הזמן את סשן הסטודיו שלך",
        description:
          "עשה את הצעד הראשון לעבר ההקלטה שתמיד דמיינת. הצוות שלנו באסטי סטודיו מוכן להגשים אותה.",
        bookSession: "הזמן סשן",
        viewServices: "צפה בשירותים",
      },
    },
    about: {
      header: {
        label: "אודות",
        heading: "הסיפור שלנו",
        description:
          "נבנה על ידי מוזיקאים עבור מוזיקאים. אסטי סטודיו נוסד על אמונה אחת: שסביבת ההקלטה צריכה לעורר השראה, לא להרתיע.",
      },
      philosophy: {
        label: "הפילוסופיה שלנו",
        heading: "צליל הוא רגש. אנחנו עוזרים לך ללכוד אותו.",
        paragraphs: [
          "הקלטה מצוינת אינה רק מצוינות טכנית — מדובר ביצירת מרחב שבו אמנים מרגישים בטוחים לקחת סיכונים יצירתיים. מרגע כניסתך לדלתותינו, הכל מתוכנן להסיר חיכוך ולהגביר השראה.",
          "אנחנו מתעסקים בפרטים שרוב הסטודיות מתעלמות מהם: האקוסטיקה שנושמת באופן טבעי, הציוד הוינטג׳ שמעניק חמימות, המהנדסים שמקשיבים כמוזיקאים קודם כל ואז כטכנאים.",
          "התוצאה היא הקלטות שנשמעות חיות — לא רק נקיות, אלא עמוקות אנושיות.",
        ],
      },
      team: {
        label: "הצוות",
        heading: "האנשים מאחורי הצליל",
        members: [
          {
            name: "אסטי כהן",
            role: "מייסדת ומהנדסת ראשית",
            bio: "15 שנות ניסיון הנדסי בג׳אז, R&B, פופ ומוזיקה אלקטרונית. אסטי בנתה את הסטודיו הזה כדי שיהיה המרחב היצירתי שתמיד רצתה — מזמין, מדויק ומעורר השראה.",
          },
          {
            name: "סופיה ריייס",
            role: "מהנדסת מיקס ומאסטרינג",
            bio: "הוכשרה באביי רוד סטודיוס בלונדון. סופיה מביאה תחושה סונית מעודנת ושליטה טכנית שהפכו לאיכות מגדירה של צליל אסטי סטודיו.",
          },
          {
            name: "ג׳יימס אוקאפור",
            role: "מפיק מוזיקה",
            bio: "מפיק פורה עם קרדיטים על מעל 200 הוצאות מסחריות. לג׳יימס יש יכולת מיוחדת לחשוף את הקול הייחודי של אמן ולהעלות אותו לפוטנציאל מלא.",
          },
        ],
      },
      timeline: {
        label: "היסטוריה",
        heading: "15 שנות צליל",
        milestones: [
          { year: "2009", event: "אסטי סטודיו נוסד במחסן ממוחזר בברוקלין" },
          { year: "2012", event: "הורחב לשלושה חדרי הקלטה ייעודיים" },
          { year: "2015", event: "הותקנה קונסולת Neve 8078 וינטג׳" },
          { year: "2018", event: "הושק מדור מאסטרינג פנימי" },
          { year: "2022", event: "חגגנו 500 הוצאה מסחרית" },
          { year: "2024", event: "שיפוץ אקוסטי גדול ושדרוג ציוד" },
        ],
      },
      cta: {
        heading: "מוכן לעבוד ביחד?",
        description: "בואו ניצור משהו יוצא דופן באסטי סטודיו.",
        bookSession: "הזמן סשן",
      },
    },
    services: {
      header: {
        label: "שירותים",
        heading: "מה אנחנו מציעים",
        description:
          "שירותי הקלטה מקיפים המותאמים לכל שלב בתהליך היצירתי שלך — מהטייק הראשון ועד למאסטר הסופי.",
      },
      enquire: "פרטים",
      whatsIncluded: "מה כלול",
      items: [
        {
          id: "recording",
          number: "01",
          title: "הקלטה",
          tagline: "שם ביצועים הופכים לנצחיים",
          description:
            "חדרי ההקלטה שלנו מתוכננים ללכוד צליל בדיוק ואופי ללא תחרות. בין אם אתה מניח ווקאל סולו, להקה שלמה או אנסמבל כלי מיתר — כל ניואנס בביצועך נשמר.",
          features: [
            "שני חדרי הקלטה גדולים עם אקוסטיקה משתנה",
            "תא בידוד ייעודי לווקאלים",
            "פרה-אמפים Neve 1073 ו-API 512c",
            "אוסף מיקרופונים וינטג׳ ומודרני (מעל 80 מיקרופונים)",
            "שרשראות הקלטה Protools HD ו-SSL Big Six",
            "מוניטורינג דרך NS10, Genelec 8351 ו-Augspurger",
          ],
          rate: "מ-$150 לשעה",
        },
        {
          id: "mixing",
          number: "02",
          title: "מיקס",
          tagline: "אמנות האיזון והעומק",
          description:
            "מהנדסי המיקס שלנו מביאים שליטה טכנית ואינטואיציה מוזיקלית עמוקה לכל פרויקט. אנו משלבים כל אלמנט ליצירת מיקס מגובש, עוצמתי ורגשי שמשרת את השיר.",
          features: [
            "מיקס היברידי: סאמינג אנלוגי + דיוק דיגיטלי",
            "קונסולת SSL 4000 G Series למיקס אנלוגי",
            "קומפרסיה ו-EQ Outboard נרחבים",
            "אספקת Stem בכל הפורמטים",
            "עריכות ללא הגבלה בתוך הסשן",
            "תהליך עבודה להשוואת ריפרנס טראק",
          ],
          rate: "מ-$400 לשיר",
        },
        {
          id: "mastering",
          number: "03",
          title: "מאסטרינג",
          tagline: "ליטוש סופי לכל פלטפורמה",
          description:
            "מאסטרינג הוא שם המוזיקה שלך מתכוננת לפגוש את העולם. חדר המאסטרינג שלנו הוא סביבת האזנה ייעודית שכוילה לדיוק מרבי, המבטיחה שהמוזיקה שלך תתורגם בצורה מושלמת בכל מערכת.",
          features: [
            "חדר מאסטרינג ייעודי, מכויל בנפרד",
            "מאסטרינג Stem זמין לשליטה נוספת",
            "אספקה לסטרימינג, ויניל וCD",
            "טרגוט עוצמה לכל DSP מרכזי",
            "אפשרויות לימיטינג וסטורציה אנלוגית",
            "אספקת DDP image ו-WAV ממוסטר",
          ],
          rate: "מ-$150 לשיר",
        },
        {
          id: "production",
          number: "04",
          title: "הפקה",
          tagline: "מרעיון להקלטה מוגמרת",
          description:
            "המפיקים הפנימיים שלנו עובדים בשיתוף פעולה הדוק עם אמנים כדי לפתח זהויות סוניות ולהוציא לאור חזיונות יצירתיים. מסקיצות ראשוניות ועד להסדרות סופיות, אנו מנחים כל שלב בתהליך היצירתי.",
          features: [
            "שירותי עיבוד ואורקסטרציה מלאים",
            "מומחיות בז'אנרים: היפ-הופ, R&B, רוק, פופ, ג'אז",
            "רשת מוזיקאי סשן זמינים לפי דרישה",
            "שיתוף פעולה בכתיבת שירים זמין",
            "ייעוץ רישוי סינק",
            "חבילות פיתוח אמנים",
          ],
          rate: "הצעת מחיר מותאמת",
        },
      ],
      addOns: {
        label: "תוספות",
        heading: "שירותים נוספים",
        items: [
          {
            title: "מוזיקאי סשן",
            description: "גישה לרשת הנבדקת שלנו של נגני סשן מקצועיים.",
          },
          {
            title: "הפקת וידאו",
            description: "צילום סשן חי בסטודיו ויצירת תוכן.",
          },
          {
            title: "פיתוח אמנים",
            description: "אימון מקיף לאמנים מתפתחים על מיתוג וצליל.",
          },
          {
            title: "הקלטת פודקאסט",
            description: "הגדרת פודקאסט מקצועית עם פלט אודיו באיכות שידור.",
          },
        ],
      },
      cta: {
        heading: "לא בטוח באיזה שירות אתה צריך?",
        description:
          "צור קשר ונעזור לך למצוא את הגישה הנכונה לפרויקט, לתקציב ולציר הזמן שלך.",
        getInTouch: "צור קשר",
      },
    },
    studio: {
      header: {
        label: "הסטודיו",
        heading: "המרחב שלנו",
        description:
          "שלושה חדרים ייעודיים, ציוד וינטג׳ ומודרני, וסביבה שנועדה לעורר השראה ב-1402 Union St, ברוקלין.",
      },
      roomSpecs: "מפרטי חדר",
      rooms: [
        {
          name: "סטודיו A",
          subtitle: "חדר הקלטה ראשי",
          size: "1,200 רגל רבועה",
          description:
            "חדר ההקלטה הראשי שלנו כולל פאנלים אקוסטיים משתנים, תקרה בגובה 14 רגל ותאי בידוד בנויים בהזמנה. מיועד להקלטות להקות מלאות, סשנים אורקסטרליים וכל מה שדורש מרחב ואמביינס.",
          specs: [
            "טיפול אקוסטי משתנה",
            "תקרה קמורה בגובה 14 רגל",
            "בידוד מלא מחדר השליטה",
            "לוכד תדרים נמוכים מותאם",
            "קונסולת Neve 8078 אנלוגית (72 ערוצים)",
            "תחנות עבודה Pro Tools HDX + Pyramix",
          ],
        },
        {
          name: "סטודיו B",
          subtitle: "חדר אובר-דאב והקלטה",
          size: "600 רגל רבועה",
          description:
            "מרחב אינטימי וגמיש אידיאלי לאובר-דאבים, ווקאלים והקלטת אנסמבל קטן. החדר ניטרלי אקוסטית עם משטחי השתקפות ניתנים לבחירה לדמויות סוניות שונות.",
          specs: [
            "אקוסטיקה חיה/מתה ניתנת להחלפה",
            "תא ווקאל ייעודי",
            "משטח מיקס SSL Big Six",
            "סאמינג מיקסר לחמימות אנלוגית",
            "בנק פרה-אמפ Neve 24 ערוצים",
            "מוניטורים Genelec 8351 nearfield",
          ],
        },
        {
          name: "חדר מאסטרינג",
          subtitle: "חדר מאסטרינג ייעודי",
          size: "400 רגל רבועה",
          description:
            "סביבת מאסטרינג ייעודית שנועדה לדיוק קיצוני. החדר מכויל ל-±0.5dB בכל טווח התדרים, מה שנותן למהנדסים שלנו ביטחון של שקיפות סונית מוחלטת.",
          specs: [
            "כיול חדר ±0.5 dB",
            "מערכת מוניטורינג Augspurger מותאמת",
            "קומפרסור מאסטרינג Manley Vari-Mu",
            "EQ ים Sontec ו-Dangerous Bax",
            "שרשרת Weiss DS1 ו-Izotope Ozone",
            "אספקת DDP, WAV וויניל",
          ],
        },
      ],
      gear: {
        label: "ציוד",
        heading: "רשימת ציוד נבחרת",
        categories: [
          { category: "קונסולות", items: ["Neve 8078 (72ch)", "SSL Big Six", "API 1608"] },
          {
            category: "פרה-אמפים",
            items: [
              "Neve 1073 (×16)",
              "API 512c (×8)",
              "Chandler REDD.47 (×4)",
              "Universal Audio 610",
            ],
          },
          {
            category: "קומפרסורים",
            items: [
              "Neve 33609",
              "SSL G-Bus Compressor",
              "Urei 1176 (×4)",
              "Teletronix LA-2A (×2)",
              "Manley Vari-Mu",
            ],
          },
          {
            category: "אקוולייזר",
            items: [
              "Neve 1081 (×8)",
              "Pultec EQP-1A (×4)",
              "Sontec MES 432C",
              "Dangerous Bax EQ",
            ],
          },
          {
            category: "מיקרופונים",
            items: [
              "Neumann U87 (×6)",
              "AKG C12",
              "Sony C800G",
              "Shure SM7B (×8)",
              "Royer R-121 (×4)",
              "מעל 80 מיקרופונים",
            ],
          },
          {
            category: "מוניטורינג",
            items: [
              "Augspurger Custom Mains",
              "Genelec 8351 (×4)",
              "Yamaha NS10M (×2)",
              "Avantone MixCubes",
            ],
          },
        ],
      },
      cta: {
        heading: "בוא לראות בעצמך",
        description: "1402 Union St, ברוקלין, ניו יורק · סיורים זמינים על פי תיאום.",
        bookTour: "הזמן סיור",
        viewServices: "צפה בשירותים",
      },
    },
    contact: {
      header: {
        label: "צור קשר",
        heading: "בואו ניצור משהו",
        description:
          "מוכן להזמין סשן, לשאול שאלה או לתאם סיור? מלא את הטופס ונחזור אליך תוך 24 שעות.",
      },
      info: {
        location: {
          label: "מיקום",
          address: ["1402 Union St", "ברוקלין, ניו יורק", "NY 11231"],
        },
        hours: {
          label: "שעות פעילות",
          rows: [
            { day: "שני – שישי", time: "10:00 – 22:00" },
            { day: "שבת", time: "12:00 – 20:00" },
            { day: "ראשון", time: "על פי תיאום" },
          ],
        },
        getInTouch: { label: "דברו איתנו" },
      },
      form: {
        fullName: "שם מלא",
        emailAddress: "כתובת אימייל",
        phoneNumber: "מספר טלפון",
        service: "שירות",
        preferredDate: "תאריך מועדף",
        projectDescription: "ספר לנו על הפרויקט שלך",
        projectPlaceholder: "תאר את הפרויקט שלך, ז'אנר, מספר טראקים, ציר זמן...",
        namePlaceholder: "השם המלא שלך",
        emailPlaceholder: "you@example.com",
        phonePlaceholder: "+972 (000) 000-000",
        selectService: "בחר שירות",
        required: "*",
        sendMessage: "שלח הודעה",
        serviceOptions: [
          "סשן הקלטה",
          "מיקס",
          "מאסטרינג",
          "הפקה מוזיקלית",
          "סיור בסטודיו",
          "אחר",
        ],
      },
      success: {
        label: "נשלח",
        heading: "תודה רבה",
        description:
          "הודעתך התקבלה. ניצור איתך קשר תוך 24 שעות לדון בסשן שלך באסטי סטודיו.",
      },
    },
  },
};

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
  dir: "ltr" | "rtl";
  headingFont: string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  function toggleLang() {
    setLang((prev) => (prev === "en" ? "he" : "en"));
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang,
        t: translations[lang],
        dir: lang === "he" ? "rtl" : "ltr",
        headingFont:
          lang === "he" ? "var(--font-frank-ruhl)" : "var(--font-playfair)",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
