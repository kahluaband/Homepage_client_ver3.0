'use client';

import React, { useState } from 'react';
import ReactionBadge from './ReactionBadge';
import ReactionSelector from './ReactionSelector';

const ReactionWidget = () => {
  // 전체 리액션 상태 관리
  const [reactions, setReactions] = useState([
    { id: 'lovable', count: 0, isSelected: false },
    { id: 'baffled', count: 0, isSelected: false },
    { id: 'funny', count: 0, isSelected: false },
  ]);

  // 클릭 시 실행될 핵심 토글 로직
  const handleToggle = (id: string) => {
    setReactions((prev) => {
      const existingReaction = prev.find((r) => r.id === id);

      let updatedReactions = prev.map((reac) => {
        if (reac.id === id) {
          const nextSelected = !reac.isSelected;
          return {
            ...reac,
            isSelected: nextSelected,
            count: nextSelected ? reac.count + 1 : Math.max(0, reac.count - 1),
          };
        }
        if (reac.isSelected) {
          return {
            ...reac,
            isSelected: false,
            count: Math.max(0, reac.count - 1),
          };
        }
        return reac;
      });

      // 뱃지 목록에 없던 걸 골랐을 때 추가
      if (!existingReaction) {
        updatedReactions = [
          ...updatedReactions,
          { id, count: 1, isSelected: true },
        ];
      }

      return updatedReactions;
    });
  };

  // 현재 유저가 '선택한(isSelected: true)' 리액션의 ID 찾기
  const selectedReactionId = reactions.find((r) => r.isSelected)?.id || null;

  return (
    <div className="flex items-center gap-3">
      {/* 1. 가져다 쓴 ReactionBadge */}
      <div className="flex flex-wrap gap-2">
        {reactions
          .filter((reac) => reac.count > 0)
          .map((reac) => (
            <ReactionBadge
              key={reac.id}
              type={reac.id}
              count={reac.count}
              isSelected={reac.isSelected}
              onClick={() => handleToggle(reac.id)}
            />
          ))}
      </div>

      {/* 2. 가져다 쓴 ReactionSelector */}
      <ReactionSelector
        selectedId={selectedReactionId}
        onSelect={handleToggle}
      />
    </div>
  );
};

export default ReactionWidget;
