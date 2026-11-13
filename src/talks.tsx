import type { ReactNode } from "react";

export interface Talk {
  date: string;
  title: ReactNode;
  event: string;
  location: { venue: string; country: string } | "online";
  recording?: string;
}

export const talks: Talk[] = [
  {
    date: "2026-11-10",
    title: "Automated model building in cryo-EM",
    event: "CCP-EM Icknield Model Building Workshop",
    location: { venue: "Diamond Light Source, Oxfordshire", country: "UK" },
  },
  {
    date: "2026-09-08",
    title: "Automated model building and density modification",
    event: "CCP4-BCA Protein Crystallography Summer School",
    location: { venue: "John Innes Centre, Norwich", country: "UK" },
  },
  {
    date: "2026-07-23",
    title: "Adventures in machine learning",
    event: "Diffraction Methods in Structural Biology",
    location: { venue: "Harnack-Haus, Berlin", country: "Germany" },
  },
  {
    date: "2026-07-11",
    title: "Automated model building",
    event: "CCP4/APS School in Macromolecular Crystallography",
    location: { venue: "Advanced Photon Source, Illinois", country: "USA" },
  },
  {
    date: "2026-04-29",
    title: "Automated model building and density modification",
    event: "CCP4 Central European Workshop",
    location: {
      venue: "Nové Hrady Château, South Bohemia",
      country: "Czechia",
    },
  },
  {
    date: "2025-11-25",
    title: "Automated model building and density modification",
    event: "DLS-CCP4 Data Collection and Structure Solution Workshop",
    location: { venue: "Diamond Light Source, Oxfordshire", country: "UK" },
  },
  {
    date: "2025-10-14",
    title: "Automated model building in cryo-EM with Buccaneer and ModelCraft",
    event: "CCP-EM Icknield Model Building Workshop",
    location: { venue: "Diamond Light Source, Oxfordshire", country: "UK" },
  },
  {
    date: "2025-09-23",
    title:
      "Automated and interactive model building in crystallography and cryo-EM",
    event:
      "CCP4/Shanghai School in Macromolecular Crystallography and Cryo Electron Microscopy",
    location: {
      venue: "National Facility for Protein Science Shanghai",
      country: "China",
    },
  },
  {
    date: "2025-08-23",
    title:
      "Using neural networks to interpret electron density maps for automated atomic model building",
    event: "ECM35 Computing in Crystallography Forum",
    location: {
      venue: "Adam Mickiewicz University, Poznań",
      country: "Poland",
    },
  },
  {
    date: "2025-08-06",
    title: "Automated model building in crystallography and cryo-EM",
    event: "CCP4 Structural Biology Summer School",
    location: { venue: "York Structural Biology Laboratory", country: "UK" },
  },
  {
    date: "2025-06-27",
    title: "Automated model building",
    event: "CCP4/APS School in Macromolecular Crystallography",
    location: { venue: "Advanced Photon Source, Illinois", country: "USA" },
  },
  {
    date: "2025-01-09",
    title: "Lunchtime Byte: ModelCraft and NucleoFind",
    event: "CCP4 Study Weekend",
    location: {
      venue: "East Midlands Conference Centre, Nottingham",
      country: "UK",
    },
  },
  {
    date: "2024-11-29",
    title: "Automated model building and density modification",
    event: "DLS-CCP4 Data Collection and Structure Solution Workshop",
    location: { venue: "Diamond Light Source, Oxfordshire", country: "UK" },
  },
  {
    date: "2024-11-06",
    title: "Automated model building in cryo-EM with Buccaneer and ModelCraft",
    event: "CCP-EM Icknield Model Building Workshop",
    location: { venue: "Diamond Light Source, Oxfordshire", country: "UK" },
  },
  {
    date: "2024-11-01",
    title: "Automated model building",
    event: "CCP4/APS School in Macromolecular Crystallography",
    location: { venue: "Advanced Photon Source, Illinois", country: "USA" },
  },
  {
    date: "2024-09-05",
    title: "Automated model building and density modification",
    event: "CCP4-BCA Protein Crystallography Summer School",
    location: { venue: "John Innes Centre, Norwich", country: "UK" },
  },
  {
    date: "2024-01-03",
    title: "Lunchtime Byte: Buccaneer, Nautilus and ModelCraft",
    event: "CCP4 Study Weekend",
    location: {
      venue: "East Midlands Conference Centre, Nottingham",
      country: "UK",
    },
  },
  {
    date: "2023-12-03",
    title: "Automated model building and density modification",
    event: "DLS-CCP4 Data Collection and Structure Solution Workshop",
    location: { venue: "Diamond Light Source, Oxfordshire", country: "UK" },
  },
  {
    date: "2023-11-09",
    title: "Automated model building in crystallography and cryo-EM",
    event: "SPring-8 CCP4/CCP-EM School & Workshop",
    location: { venue: "SPring-8, Hyōgo", country: "Japan" },
  },
  {
    date: "2023-03-31",
    title: "Automated model building",
    event: "CCP4/APS School in Macromolecular Crystallography",
    location: { venue: "Advanced Photon Source, Illinois", country: "USA" },
  },
  {
    date: "2023-01-06",
    title: "Lunchtime Byte: Buccaneer, Nautilus and ModelCraft",
    event: "CCP4 Study Weekend",
    location: {
      venue: "East Midlands Conference Centre, Nottingham",
      country: "UK",
    },
  },
  {
    date: "2022-12-04",
    title: "Automated model building",
    event: "DLS-CCP4 Data Collection and Structure Solution Workshop",
    location: { venue: "Diamond Light Source, Oxfordshire", country: "UK" },
  },
  {
    date: "2022-12-04",
    title: "Density modification",
    event: "DLS-CCP4 Data Collection and Structure Solution Workshop",
    location: { venue: "Diamond Light Source, Oxfordshire", country: "UK" },
  },
  {
    date: "2022-06-21",
    title:
      "ModelCraft: an advanced automated model-building pipeline using Buccaneer",
    event: "CCP4/APS School in Macromolecular Crystallography",
    location: "online",
  },
  {
    date: "2022-01-07",
    title:
      "ModelCraft: an advanced automated model-building pipeline using Buccaneer",
    event: "CCP4 Study Weekend",
    location: "online",
    recording: "https://www.youtube.com/watch?v=zwDuCzkvFBI",
  },
  {
    date: "2021-12-08",
    title: "Automated model building with Buccaneer and ModelCraft",
    event: "DLS-CCP4 Data Collection and Structure Solution Workshop",
    location: "online",
  },
  {
    date: "2019-12-13",
    title:
      "Next-generation software for placing atoms into electron density maps",
    event: "BBSRC White Rose Mechanistic Biology DTP Research Symposium",
    location: { venue: "University of York", country: "UK" },
  },
  {
    date: "2019-09-01",
    title: "Interactive model building with Coot",
    event: "CCP4-BCA Protein Crystallography Summer School",
    location: { venue: "York Structural Biology Laboratory", country: "UK" },
  },
  {
    date: "2019-06-21",
    title: "Automated model building with Buccaneer and Nautilus",
    event: "CCP4/APS School in Macromolecular Crystallography",
    location: { venue: "Advanced Photon Source, Illinois", country: "USA" },
  },
  {
    date: "2019-06-20",
    title: "Density modification",
    event: "CCP4/APS School in Macromolecular Crystallography",
    location: { venue: "Advanced Photon Source, Illinois", country: "USA" },
  },
  {
    date: "2018-11-20",
    title: "Automated model building with Buccaneer and Nautilus",
    event: "IFSC/CCP4 Macromolecular Crystallography School",
    location: { venue: "Instituto de Física de São Carlos", country: "Brazil" },
  },
  {
    date: "2018-11-19",
    title: "Density modification",
    event: "IFSC/CCP4 Macromolecular Crystallography School",
    location: { venue: "Instituto de Física de São Carlos", country: "Brazil" },
  },
  {
    date: "2018-10-25",
    title: "Automated model building with Buccaneer",
    event: "CCP4 Workshop and Computational Crystallography School",
    location: {
      venue: "CSIR-Institute of Microbial Technology, Chandigarh",
      country: "India",
    },
  },
];
