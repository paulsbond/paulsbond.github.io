import type { ReactNode } from "react";

export interface Paper {
  title: ReactNode;
  authors: string;
  etAl?: boolean;
  journal: string;
  date: string;
  volume: string;
  pages: string;
  doi: string;
  citations: number;
}

export const lastUpdated = "30 August 2026";

export const papers: Paper[] = [
  {
    title: (
      <>
        <i>NucleoFind</i>: a deep-learning network for interpreting nucleic acid
        electron density
      </>
    ),
    authors: "J Dialpuri, J Agirre, KD Cowtan, PS Bond",
    journal: "Nucleic Acids Research",
    date: "2024-08-20",
    volume: "52",
    pages: "e84",
    doi: "10.1093/nar/gkae715",
    citations: 2,
  },
  {
    title: "Outcomes of the EMDataResource cryo-EM Ligand Modeling Challenge",
    authors: "C Lawson",
    etAl: true,
    journal: "Nature Methods",
    date: "2024-06-25",
    volume: "21",
    pages: "1340",
    doi: "10.1038/s41592-024-02321-7",
    citations: 16,
  },
  {
    title: (
      <>
        Online carbohydrate 3D structure validation with the <i>Privateer</i>{" "}
        web app
      </>
    ),
    authors: "J Dialpuri",
    etAl: true,
    journal: "Acta Crystallographica Section F",
    date: "2024-01-24",
    volume: "80",
    pages: "30",
    doi: "10.1107/S2053230X24000359",
    citations: 19,
  },
  {
    title: (
      <>
        The <i>CCP4</i> suite: integrative software for macromolecular
        crystallography
      </>
    ),
    authors: "J Agirre",
    etAl: true,
    journal: "Acta Crystallographica Section D",
    date: "2023-05-30",
    volume: "79",
    pages: "449",
    doi: "10.1107/S2059798323003595",
    citations: 1054,
  },
  {
    title: (
      <>
        <i>ModelCraft</i>: an advanced automated model-building pipeline using{" "}
        <i>Buccaneer</i>
      </>
    ),
    authors: "PS Bond, KD Cowtan",
    journal: "Acta Crystallographica Section D",
    date: "2022-08-25",
    volume: "78",
    pages: "1090",
    doi: "10.1107/S2059798322007732",
    citations: 52,
  },
  {
    title:
      "Predicting the performance of automated crystallographic model-building pipelines",
    authors: "E Alharbi, P Bond, R Calinescu, K Cowtan",
    journal: "Acta Crystallographica Section D",
    date: "2021-11-29",
    volume: "77",
    pages: "1591",
    doi: "10.1107/S2059798321010500",
    citations: 3,
  },
  {
    title:
      "Cryo-EM model validation recommendations based on outcomes of the 2019 EMDataResource challenge",
    authors: "CL Lawson, A Kryshtafovych",
    etAl: true,
    journal: "Nature Methods",
    date: "2021-02-04",
    volume: "18",
    pages: "156",
    doi: "10.1038/s41592-020-01051-w",
    citations: 127,
  },
  {
    title: "Shift-field refinement of macromolecular atomic models",
    authors: "K Cowtan, S Metcalfe, P Bond",
    journal: "Acta Crystallographica Section D",
    date: "2020-11-19",
    volume: "76",
    pages: "1192",
    doi: "10.1107/S2059798320013170",
    citations: 12,
  },
  {
    title: (
      <>
        Predicting protein model correctness in <i>Coot</i> using machine
        learning
      </>
    ),
    authors: "PS Bond, KS Wilson, KD Cowtan",
    journal: "Acta Crystallographica Section D",
    date: "2020-07-27",
    volume: "76",
    pages: "713",
    doi: "10.1107/S2059798320009080",
    citations: 40,
  },
  {
    title: "Design and Synthesis of 56 Shape-Diverse 3D Fragments",
    authors: "P O'Brien",
    etAl: true,
    journal: "Chemistry - A European Journal",
    date: "2020-07-08",
    volume: "26",
    pages: "8969",
    doi: "10.1002/chem.202001123",
    citations: 68,
  },
  {
    title: "Comparison of automated crystallographic model-building pipelines",
    authors: "E Alharbi, PS Bond, R Calinescu, K Cowtan",
    journal: "Acta Crystallographica Section D",
    date: "2019-11-22",
    volume: "75",
    pages: "1119",
    doi: "10.1107/S2059798319014918",
    citations: 14,
  },
  {
    title:
      "Increase of enzyme activity through specific covalent modification with fragments",
    authors: "JF Darby",
    etAl: true,
    journal: "Chemical Science",
    date: "2017-09-27",
    volume: "8",
    pages: "7772",
    doi: "10.1039/C7SC01966A",
    citations: 52,
  },
  {
    title:
      "Analysis of HypD Disulfide Redox Chemistry via Optimization of Fourier Transformed ac Voltammetric Data",
    authors: "H Adamson, M Robinson",
    etAl: true,
    journal: "Analytical Chemistry",
    date: "2017-01-19",
    volume: "89",
    pages: "1565",
    doi: "10.1021/acs.analchem.6b03589",
    citations: 35,
  },
  {
    title:
      "Lead-oriented synthesis: Investigation of organolithium-mediated routes to 3-D scaffolds and 3-D shape analysis of a virtual lead-like library",
    authors: "M Lüthy, MC Wheldon, C Haji-Cheteh",
    etAl: true,
    journal: "Bioorganic & Medicinal Chemistry",
    date: "2015-06-01",
    volume: "23",
    pages: "2680",
    doi: "10.1016/j.bmc.2015.04.005",
    citations: 35,
  },
];
