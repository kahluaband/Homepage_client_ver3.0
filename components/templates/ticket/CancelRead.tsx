const CancelRead = () => {
  return (
    <div className="w-full h-[100%] bg-gray-5 pad:bg-gray-0 py-10 pad:pt-0 px-4 pad:px-12">
      <div className="font-semibold text-lg pad:text-xl leading-[30px]  text-gray-90">
        필독사항
      </div>
      <ol className="mx-4 list-disc list-inside font-normal leading-6 text-gray-40 text-[16px] mt-2">
        <li>
          계좌이체결제를 선택하신 분들은 24시간 이내로 자동 환불처리될
          예정입니다.
        </li>
        <li>
          여러 장의 티켓을 구매하셨을 경우 모든 티켓이 일괄취소 처리됩니다.
        </li>
        <li>
          이외에 모든 문의 사항은 깔루아 카카오톡을 이용해주시기 바랍니다.
        </li>
      </ol>
    </div>
  );
};

export default CancelRead;
