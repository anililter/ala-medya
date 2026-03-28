import type { StaticImageData } from "next/image";

// E-Ticaret
import bolnut from "../../Referanslar/E-Ticaret/bolnut.avif";
import heynut from "../../Referanslar/E-Ticaret/heynut.avif";
import makascim from "../../Referanslar/E-Ticaret/makascim.avif";
import maxi from "../../Referanslar/E-Ticaret/maxi.avif";
import eticaretSonax from "../../Referanslar/E-Ticaret/sonax.avif";
import eminonutoptanticaret from "../../Referanslar/E-Ticaret/eminonutoptanticaret.avif";
import jakuzi from "../../Referanslar/E-Ticaret/jakuzi.avif";
import maksimarka from "../../Referanslar/E-Ticaret/maksimarka.avif";
import mielo from "../../Referanslar/E-Ticaret/mielo.avif";
import studio8 from "../../Referanslar/E-Ticaret/studio8.avif";

// Eğitim
import renkAkademi from "../../Referanslar/Eğitim/3renkakademi.avif";
import bdtEgitim from "../../Referanslar/Eğitim/bdt egitim.avif";
import bubala from "../../Referanslar/Eğitim/bubala.avif";
import rehberimsensin from "../../Referanslar/Eğitim/rehberimsensin.avif";
import meltemAyhan from "../../Referanslar/Eğitim/meltem-ayhan.png";

// Gayrimenkul
import proper from "../../Referanslar/Gayrimenkul/proper.avif";

// Güzellik
import buseGenc from "../../Referanslar/Güzellik/buse-genc.jpg";
import estetiwell from "../../Referanslar/Güzellik/estetiwell.jpg";
import heda from "../../Referanslar/Güzellik/heda.jpg";

// Hizmet
import lextrumLogo from "../../Referanslar/Hizmet/lextrum_logo.avif";
import hizmetSonax from "../../Referanslar/Hizmet/sonax.avif";

// Otomotiv
import otomotivSonax from "../../Referanslar/Otomotiv/sonax.avif";

// Psikoloji
import alisafasayim from "../../Referanslar/Psikoloji/alisafasayim.avif";
import ppe from "../../Referanslar/Psikoloji/ppe.png";
import turna from "../../Referanslar/Psikoloji/turna.avif";
import yugen from "../../Referanslar/Psikoloji/yugen.avif";

// Sağlık
import BHT from "../../Referanslar/Sağlık/BHT.avif";
import cfh from "../../Referanslar/Sağlık/cfh.avif";
import hec from "../../Referanslar/Sağlık/hec.avif";
import lotusdis from "../../Referanslar/Sağlık/lotusdis.avif";
import medicana from "../../Referanslar/Sağlık/medicana.avif";
import GLOBAL from "../../Referanslar/Sağlık/GLOBAL.avif";
import hairextrem from "../../Referanslar/Sağlık/hairextrem.avif";
import koksalyuca from "../../Referanslar/Sağlık/koksalyuca.avif";
import medicanaCopy from "../../Referanslar/Sağlık/medicana copy.avif";
import vellorahair from "../../Referanslar/Sağlık/vellorahair.avif";
import avcilarHospital from "../../Referanslar/Sağlık/avcilar-hospital.png";

// Spor
import sporLogo from "../../Referanslar/Spor/Logo-Png-1.png";
import sporDownload from "../../Referanslar/Spor/download.png";
import xoom from "../../Referanslar/Spor/xoom.png";
import spor589 from "../../Referanslar/Spor/589094747_17842096917640450_5424677768261620461_n.jpg";

// Turizm
import marcaLogo from "../../Referanslar/Turizm/logo.png";
import marca from "../../Referanslar/Turizm/marca.avif";
import urlaGezi from "../../Referanslar/Turizm/urla-gezi.png";

export type FolderReference = {
  id: string;
  title: string;
  src: StaticImageData;
  category: string;
};

export const FOLDER_REFERENCES: FolderReference[] = [
  // E-Ticaret
  { id: "bolnut", title: "Bolnut", src: bolnut, category: "E-Ticaret" },
  { id: "heynut", title: "Heynut", src: heynut, category: "E-Ticaret" },
  { id: "makascim", title: "Makascim", src: makascim, category: "E-Ticaret" },
  { id: "maxi", title: "Maxi", src: maxi, category: "E-Ticaret" },
  { id: "eticaret-sonax", title: "Sonax", src: eticaretSonax, category: "E-Ticaret" },
  { id: "eminonutoptanticaret", title: "Eminönü Toptan Ticaret", src: eminonutoptanticaret, category: "E-Ticaret" },
  { id: "jakuzi", title: "Jakuzi", src: jakuzi, category: "E-Ticaret" },
  { id: "maksimarka", title: "Maksimarka", src: maksimarka, category: "E-Ticaret" },
  { id: "mielo", title: "Mielo", src: mielo, category: "E-Ticaret" },
  { id: "studio8", title: "Studio 8", src: studio8, category: "E-Ticaret" },

  // Eğitim
  { id: "3renkakademi", title: "3 Renk Akademi", src: renkAkademi, category: "Eğitim" },
  { id: "bdtegitim", title: "BDT Eğitim", src: bdtEgitim, category: "Eğitim" },
  { id: "bubala", title: "Bubala", src: bubala, category: "Eğitim" },
  { id: "rehberimsensin", title: "Rehberim Sensin", src: rehberimsensin, category: "Eğitim" },
  { id: "meltem-ayhan", title: "Meltem Ayhan", src: meltemAyhan, category: "Eğitim" },

  // Gayrimenkul
  { id: "proper", title: "Proper", src: proper, category: "Gayrimenkul" },

  // Güzellik
  { id: "buse-genc", title: "Buse Genç", src: buseGenc, category: "Güzellik" },
  { id: "estetiwell", title: "Estetiwell", src: estetiwell, category: "Güzellik" },
  { id: "heda", title: "Heda", src: heda, category: "Güzellik" },

  // Hizmet
  { id: "lextrum", title: "Lextrum", src: lextrumLogo, category: "Hizmet" },
  { id: "hizmet-sonax", title: "Sonax", src: hizmetSonax, category: "Hizmet" },

  // Otomotiv
  { id: "otomotiv-sonax", title: "Sonax", src: otomotivSonax, category: "Otomotiv" },

  // Psikoloji
  { id: "alisafasayim", title: "Ali Safa Sayım", src: alisafasayim, category: "Psikoloji" },
  { id: "ppe", title: "PPE", src: ppe, category: "Psikoloji" },
  { id: "turna", title: "Turna", src: turna, category: "Psikoloji" },
  { id: "yugen", title: "Yugen", src: yugen, category: "Psikoloji" },

  // Sağlık
  { id: "bht", title: "BHT", src: BHT, category: "Sağlık" },
  { id: "cfh", title: "CFH", src: cfh, category: "Sağlık" },
  { id: "hec", title: "HEC", src: hec, category: "Sağlık" },
  { id: "lotusdis", title: "Lotus Diş", src: lotusdis, category: "Sağlık" },
  { id: "medicana", title: "Medicana", src: medicana, category: "Sağlık" },
  { id: "global", title: "GLOBAL", src: GLOBAL, category: "Sağlık" },
  { id: "hairextrem", title: "Hair Extrem", src: hairextrem, category: "Sağlık" },
  { id: "koksalyuca", title: "Köksal Yüca", src: koksalyuca, category: "Sağlık" },
  { id: "medicana-copy", title: "Medicana", src: medicanaCopy, category: "Sağlık" },
  { id: "vellorahair", title: "Vellora Hair", src: vellorahair, category: "Sağlık" },
  { id: "avcilar-hospital", title: "Avcılar Hospital", src: avcilarHospital, category: "Sağlık" },

  // Spor
  { id: "spor-logo", title: "Spor", src: sporLogo, category: "Spor" },
  { id: "spor-download", title: "Spor Kulübü", src: sporDownload, category: "Spor" },
  { id: "xoom", title: "Xoom Training Club", src: xoom, category: "Spor" },
  { id: "spor-589", title: "Spor", src: spor589, category: "Spor" },

  // Turizm
  { id: "marca-logo", title: "Marca", src: marcaLogo, category: "Turizm" },
  { id: "marca", title: "Marca", src: marca, category: "Turizm" },
  { id: "urla-gezi", title: "Urla Gezi", src: urlaGezi, category: "Turizm" },
];
