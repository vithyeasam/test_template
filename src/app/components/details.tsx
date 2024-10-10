import AdjustableVerticalVector from "./vectorLine";

export function DetailComponent() {
  return (
    <div className="text-center text-white ">
      <p className="text-xl font-bold font-moulpali">សិរីសួស្តីអាពាហ៍ពិពាហ៍</p>
      <div className="flex justify-evenly items-center py-10">
        <div className="flow-root text-base text-left">
          <p className="font-moulpali">លោក​ សិរី សួស្តី</p>
          <p className="py-4 font-moulpali">លោកស្រី​ សិរី សួស្តី</p>
        </div>
        <AdjustableVerticalVector lineLength={100} />
        <div className="flow-root text-base font-moulpali text-right">
          <p className="font-moulpali">លោក​ សិរី សួស្តី</p>
          <p className="py-4 font-moulpali">លោកស្រី​ សិរី សួស្តី</p>
        </div>
      </div>
      <div className="py-4 px-5">
        <p className="text-base">សម្តេច ទ្រង់ ឯកឧត្តម អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តី ជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ</p>
      </div>
      <div className="flex justify-evenly items-center py-4">
        <div className="flow-root">
          <p className="text-sm">កូនប្រុសនាម</p>
          <p className="text-2xl py-4 font-moulpali">សិរី បញ្ញា</p>
        </div>
        <div className="flow-root">
          <p className="text-sm">កូនប្រុសនាម</p>
          <p className="text-2xl py-4 font-moulpali">សិរី បញ្ញា</p>
        </div>
      </div>
      <p className="text-sm mt-10 font-moulpali">ដែលនឹងប្រព្រឹត្តទៅ ចាប់ពីម៉ោង ៥ ល្ងាច</p>
      <p className="text-base py-4 font-moulpali">ថ្ងៃព្រហស្បតិ៍ ទី០៧​ ខែវិច្ឆិកា ឆ្នាំ២០២៤</p>
    </div>
  );
}
