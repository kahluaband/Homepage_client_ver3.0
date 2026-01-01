const Warning = () => {
  return (
    <div className="w-full h-[100%] bg-gray-5 pad:bg-gray-0 py-[36px] px-4 pad:px-12">
      <div className="font-semibold text-lg pad:text-xl leading-[30px]  text-gray-90">
        유의사항 및 취소 규정
      </div>
      <ol className="mx-4 list-disc list-inside font-normal leading-6 text-gray-40 text-[16px] mt-2">
        <li>
          예매취소는 공연 24시간 이전에만 가능하며 그 이후에는 환불이
          불가합니다.
        </li>
        <li>
          여러 장의 티켓을 구매하셨을 경우 결제와 결제 취소의 경우 모든 티켓이
          일괄처리됩니다.
        </li>
        <li>
          결제 취소를 원하시면 [예매하기 - 예매내역 조회하기]를 통해 취소하실 수
          있습니다.
        </li>
        <li>공연 24시간 전 이후에 예매 확정 및 안내 문자 발송예정입니다.</li>
      </ol>
    </div>
  );
};

export default Warning;
