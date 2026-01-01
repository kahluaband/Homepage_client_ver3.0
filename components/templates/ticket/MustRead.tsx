const MustRead = () => {
  return (
    <div className="w-full h-full bg-gray-5 pad:bg-gray-0 py-6 pad:py-2 pad:mb-4 pad:pt-0 px-4 pad:px-12">
      <div className="font-semibold text-lg pad:text-xl leading-[30px]  text-gray-90">
        필독사항
      </div>
      <ol className="mx-4 list-disc list-inside font-normal leading-6 text-gray-40 text-[16px] mt-2">
        <li>
          계좌이체 결제를 선택하신 분들은 [예매현황-입금계좌]에 24시간 이내로
          입금해주시면 자동으로 결제 완료 처리됩니다.
        </li>
        <li>
          결제 취소를 원하시면 [예매하기 - 결제 내역확인하기 - 예매번호 조회]를
          통해 취소하실 수 있습니다.{' '}
        </li>
        <li>
          여러 장의 티켓을 구매하셨을 경우 결제와 결제 취소의 경우 모든 티켓이
          일괄처리됩니다.{' '}
        </li>
        <li>
          이외에 모든 문의 사항은 [깔루아 카카오톡]을 이용해주시기 바랍니다.{' '}
        </li>
      </ol>
    </div>
  );
};

export default MustRead;
