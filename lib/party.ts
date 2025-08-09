export type PartyKey = "Democratic" | "Republican" | "Other"

export function normalizeParty(p?: string | null): PartyKey {
  if (!p) return "Other"
  const s = p.trim().toLowerCase()
  if (["dem", "d", "democrat", "democratic"].includes(s)) return "Democratic"
  if (["rep", "r", "gop", "republican"].includes(s)) return "Republican"
  return "Other"
}

export const PARTY_STYLES: Record<PartyKey, { badge: string; border: string }> = {
  Democratic: {
    badge: "bg-blue-600 text-white",
    border: "border-blue-600",
  },
  Republican: {
    badge: "bg-red-600 text-white",
    border: "border-red-600",
  },
  Other: {
    badge: "bg-gray-400 text-white",
    border: "border-gray-400",
  },
}
