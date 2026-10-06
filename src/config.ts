export const TELEGRAM_BOT = "SEU_BOT";

export function telegramLink(servico?: string): string {
  if (servico) {
    return `https://t.me/${TELEGRAM_BOT}?start=${servico}`;
  }
  return `https://t.me/${TELEGRAM_BOT}`;
}
