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
};

export const FOLDER_REFERENCES: FolderReference[] = [
  { id: "lotusdis", title: "Lotus Diş", src: lotusdis },
  { id: "sonax", title: "Sonax", src: sonax },
  { id: "medicana", title: "Medicana", src: medicana },
  { id: "bht", title: "BHT", src: BHT },
  { id: "global", title: "GLOBAL", src: GLOBAL },
  { id: "cfh", title: "CFH", src: cfh },
  { id: "mielo", title: "Mielo", src: mielo },
  { id: "vellorahair", title: "Vellora Hair", src: vellorahair },
  { id: "yugen", title: "Yugen", src: yugen },
  { id: "bubala", title: "Bubala", src: bubala },
  { id: "bolnut", title: "Bolnut", src: bolnut },
  { id: "proper", title: "Proper", src: proper },
  { id: "marca", title: "Marca", src: marca },
  { id: "maxi", title: "Maxi", src: maxi },
  { id: "makascim", title: "Makascim", src: makascim },
  { id: "hec", title: "HEC", src: hec },
  { id: "heynut", title: "Heynut", src: heynut },
  { id: "jakuzi", title: "Jakuzi", src: jakuzi },
  { id: "koksalyuca", title: "Köksal Yüca", src: koksalyuca },
  { id: "rehberimsensin", title: "Rehberim Sensin", src: rehberimsensin },
  { id: "alisafasayim", title: "Ali Safa Sayım", src: alisafasayim },
  { id: "maksimarka", title: "Maksimarka", src: maksimarka },
  { id: "renkakademi", title: "3 Renk Akademi", src: renkAkademi },
  { id: "bdtegitim", title: "BDT Eğitim", src: bdtEgitim },
  { id: "eminonutoptanticaret", title: "Eminönü Toptan Ticaret", src: eminonuToptanTicaret },
  { id: "hairextrem", title: "Hair Extrem", src: hairextrem },
  { id: "turna", title: "Turna", src: turna },
];

