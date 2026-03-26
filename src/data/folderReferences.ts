import type { StaticImageData } from "next/image";

import BHT from "../../Referanslar/BHT.avif";
import GLOBAL from "../../Referanslar/GLOBAL.avif";
import alisafasayim from "../../Referanslar/alisafasayim.avif";
import bolnut from "../../Referanslar/bolnut.avif";
import bdtEgitim from "../../Referanslar/bdt egitim.avif";
import bubala from "../../Referanslar/bubala.avif";
import cfh from "../../Referanslar/cfh.avif";
import eminonuToptanTicaret from "../../Referanslar/eminonutoptanticaret.avif";
import hairextrem from "../../Referanslar/hairextrem.avif";
import hec from "../../Referanslar/hec.avif";
import heynut from "../../Referanslar/heynut.avif";
import jakuzi from "../../Referanslar/jakuzi.avif";
import koksalyuca from "../../Referanslar/koksalyuca.avif";
import lotusdis from "../../Referanslar/lotusdis.avif";
import makascim from "../../Referanslar/makascim.avif";
import maksimarka from "../../Referanslar/maksimarka.avif";
import marca from "../../Referanslar/marca.avif";
import maxi from "../../Referanslar/maxi.avif";
import medicana from "../../Referanslar/medicana.avif";
import mielo from "../../Referanslar/mielo.avif";
import proper from "../../Referanslar/proper.avif";
import rehberimsensin from "../../Referanslar/rehberimsensin.avif";
import renkAkademi from "../../Referanslar/3renkakademi.avif";
import sonax from "../../Referanslar/sonax.avif";
import turna from "../../Referanslar/turna.avif";
import vellorahair from "../../Referanslar/vellorahair.avif";
import yugen from "../../Referanslar/yugen.avif";

export type FolderReference = {
  id: string;
  title: string;
  src: StaticImageData;
  category: string;
};

export const FOLDER_REFERENCES: FolderReference[] = [
  { id: "lotusdis", title: "Lotus Diş", src: lotusdis, category: "Sağlık" },
  { id: "sonax", title: "Sonax", src: sonax, category: "Otomotiv" },
  { id: "medicana", title: "Medicana", src: medicana, category: "Sağlık" },
  { id: "bht", title: "BHT", src: BHT, category: "Sağlık" },
  { id: "global", title: "GLOBAL", src: GLOBAL, category: "E-Ticaret" },
  { id: "cfh", title: "CFH", src: cfh, category: "Psikoloji" },
  { id: "mielo", title: "Mielo", src: mielo, category: "E-Ticaret" },
  { id: "vellorahair", title: "Vellora Hair", src: vellorahair, category: "Sağlık" },
  { id: "yugen", title: "Yugen", src: yugen, category: "E-Ticaret" },
  { id: "bubala", title: "Bubala", src: bubala, category: "E-Ticaret" },
  { id: "bolnut", title: "Bolnut", src: bolnut, category: "E-Ticaret" },
  { id: "proper", title: "Proper", src: proper, category: "E-Ticaret" },
  { id: "marca", title: "Marca", src: marca, category: "E-Ticaret" },
  { id: "maxi", title: "Maxi", src: maxi, category: "E-Ticaret" },
  { id: "makascim", title: "Makascim", src: makascim, category: "Perakende" },
  { id: "hec", title: "HEC", src: hec, category: "Sağlık" },
  { id: "heynut", title: "Heynut", src: heynut, category: "E-Ticaret" },
  { id: "jakuzi", title: "Jakuzi", src: jakuzi, category: "Perakende" },
  { id: "koksalyuca", title: "Köksal Yüca", src: koksalyuca, category: "Gayrimenkul" },
  { id: "rehberimsensin", title: "Rehberim Sensin", src: rehberimsensin, category: "Eğitim" },
  { id: "alisafasayim", title: "Ali Safa Sayım", src: alisafasayim, category: "Spor" },
  { id: "maksimarka", title: "Maksimarka", src: maksimarka, category: "Otomotiv" },
  { id: "renkakademi", title: "3 Renk Akademi", src: renkAkademi, category: "Eğitim" },
  { id: "bdtegitim", title: "BDT Eğitim", src: bdtEgitim, category: "Eğitim" },
  { id: "eminonutoptanticaret", title: "Eminönü Toptan Ticaret", src: eminonuToptanTicaret, category: "Perakende" },
  { id: "hairextrem", title: "Hair Extrem", src: hairextrem, category: "Sağlık" },
  { id: "turna", title: "Turna", src: turna, category: "E-Ticaret" },
];

