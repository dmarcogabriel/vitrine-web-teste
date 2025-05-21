export function formatMoney(money) {
  const moneyString = String(money);

  const cents = moneyString.substring(moneyString.length - 2);
  const currency = moneyString.substring(0, moneyString.length - 2);

  return `R$ ${currency},${cents}`;
}
