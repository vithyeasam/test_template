// import vectorLine from "../assets/Vector 15.png";
// import Image from "next/image";
import AdjustableVerticalVector from "./vectorLine";
function TimeAgendaDetail({Time, Event} : {Time: string, Event: string}) {
  return (
    <div className="text-white">
      <div className="flex py-2 items-center justify-center">
        <AdjustableVerticalVector lineLength={50} />
      </div>
      <p className="text-base font-bold py-2">{Time}</p>
      <p className="text-sm">{Event}</p>
    </div>
  );
}
function TitleAgenda({ timeLine }: { timeLine: string }) {
  return <p className="text-white text-2xl font-bold font-moulpali">{timeLine}</p>;
}
export default function Agenda() {
  return (
    <div className="items-center text-center justify-center px-5">
      <TitleAgenda timeLine="កម្មវិធីពេលព្រឹក" />
      <TimeAgendaDetail Time="ម៉ោង​​ ០៦:៣០​ ព្រឹក" Event="ជួបជុំភ្ញៀវកិត្តិយសដើម្បីរៀបចំហែជំនូននៅគេហដ្ធានខាងស្រីនៅខណ្ឌខណ្ឌទួលគោក"/>
      <TimeAgendaDetail Time="ម៉ោង​​ ០៧:០០​ ព្រឹក" Event="ពិធីហែជំនូន (កំណត់)"/>
      <TimeAgendaDetail Time="ម៉ោង​​ ០៨:០០​ ព្រឹក" Event="ពិធីពិសាស្លាកំណត់"/>
      <TimeAgendaDetail Time="ម៉ោង​​ ០៨:៣០​ ព្រឹក" Event="ពិធីបំពាក់ចិញ្ចៀន"/>
      <TimeAgendaDetail Time="ម៉ោង​​ ០៩:៣០​ ព្រឹក" Event="ពិធីកាត់សក់បង្កក់សិរី"/>
      <TimeAgendaDetail Time="ម៉ោង​​ ១០:០០​ ព្រឹក" Event="ពិធីសែនផ្ទឹម សែនចងដៃ និងបាចផ្កាស្លា"/>
      <TimeAgendaDetail Time="ម៉ោង ១២:០០ ថ្ងៃ" Event="អញ្ជើញភ្ញៀវពិសារអាហារពេលថ្ងៃត្រង់នៅគេហដ្ធានខាងស្រីផ្លូវលេខ៥៨០
សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ"/>
      <div className="flex py-5 items-center justify-center">
        <AdjustableVerticalVector lineLength={50} />
      </div>
      <TitleAgenda timeLine="កម្មវិធីពេលល្ងាច" />
      <TimeAgendaDetail Time="ម៉ោង ០៥:០០ ល្ងាច" Event="អញ្ជើញភ្ញៀវពិសារអាហារពេលល្ងាចស្ថិតនៅមជ្ឈមណ្ឌលសន្និបាត និងពិព័រណ៍អន្តរជាតិជ្រោយចង្វារ (OCIC) អាគារ​ F&G"/>
    </div>
  );
}
