## course1 Simple Component Diagram

```
App
  ├ NewExpense // 새로운 Expense 추가
    ├ ExpenseForm // Expense 추가 입력 폼 (Expense 활성화)
    └ button // Expense 활성화 버튼
  └ Expenses // Expense 정보
    ├ ExpenseChart // Expense 비용 차트
      └ Chart // Expense 비용 계산
        └ ChartBar // Expense 월별 차트
    ├ ExpenseFilter // Expense 연도 필터
    └ ExpenseList // ExpenseList
      └ ExpenseItem // Expense
        └ ExpenseDate // Expense 날짜
UI
  └ Card // 공통 컴포넌트
```
