export interface OlympicEvent {
  sessionCode: string;
  sport: string;
  venue: string;
  zone: string;
  date: string;
  sessionType: string;
  description: string;
  startTime: string;
  endTime: string;
}

// Helper to generate a range of sessions with incremental codes
function genSessions(
  prefix: string,
  startNum: number,
  entries: Array<{
    date: string;
    sessionType: string;
    description: string;
    startTime: string;
    endTime: string;
  }>,
  sport: string,
  venue: string,
  zone: string
): OlympicEvent[] {
  return entries.map((e, i) => ({
    sessionCode: `${prefix}${String(startNum + i).padStart(2, "0")}`,
    sport,
    venue,
    zone,
    date: e.date,
    sessionType: e.sessionType,
    description: e.description,
    startTime: e.startTime,
    endTime: e.endTime,
  }));
}

// Helper to generate repeated preliminary sessions
function genRepeated(
  prefix: string,
  startNum: number,
  count: number,
  dates: string[],
  timesPerDay: Array<{ startTime: string; endTime: string }>,
  sport: string,
  venue: string,
  zone: string,
  sessionType: string,
  description: string
): OlympicEvent[] {
  const events: OlympicEvent[] = [];
  let idx = 0;
  for (const date of dates) {
    for (const time of timesPerDay) {
      if (idx >= count) break;
      events.push({
        sessionCode: `${prefix}${String(startNum + idx).padStart(2, "0")}`,
        sport,
        venue,
        zone,
        date,
        sessionType,
        description,
        startTime: time.startTime,
        endTime: time.endTime,
      });
      idx++;
    }
    if (idx >= count) break;
  }
  return events;
}

// ─── BADMINTON ───────────────────────────────────────────────
const badminton: OlympicEvent[] = genSessions("BDM", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Mixed Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "08:00", endTime: "12:15" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Mixed Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "14:00", endTime: "16:35" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Mixed Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "18:00", endTime: "23:05" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Mixed Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "08:00", endTime: "11:25" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Mixed Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "14:00", endTime: "16:35" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Mixed Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "18:00", endTime: "23:05" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Mixed Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "08:00", endTime: "11:25" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Mixed Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "14:00", endTime: "16:35" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Mixed Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "19:00", endTime: "23:05" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "08:00", endTime: "11:25" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "14:00", endTime: "16:35" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's Doubles Group Play Stage, Women's Doubles Group Play Stage, Men's Singles Group Play Stage, Women's Singles Group Play Stage", startTime: "19:00", endTime: "23:05" },
  { date: "2028-07-19", sessionType: "Quarterfinal", description: "Mixed Doubles Quarterfinal, Men's Singles Group Play, Women's Singles Group Play", startTime: "08:00", endTime: "11:45" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's Singles Group Play, Women's Singles Group Play", startTime: "14:00", endTime: "16:35" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's Singles Group Play, Women's Singles Group Play", startTime: "19:00", endTime: "23:05" },
  { date: "2028-07-20", sessionType: "Semifinal", description: "Mixed Doubles Semifinal, Women's Doubles Quarterfinal, Women's Singles Round of 16", startTime: "08:00", endTime: "12:25" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's Singles Round of 16, Women's Singles Round of 16", startTime: "14:00", endTime: "17:25" },
  { date: "2028-07-20", sessionType: "Quarterfinal", description: "Men's Doubles Quarterfinal, Women's Doubles Quarterfinal, Men's Singles Round of 16, Women's Singles Round of 16", startTime: "20:00", endTime: "23:05" },
  { date: "2028-07-21", sessionType: "Final", description: "Mixed Doubles Gold Medal Match, Mixed Doubles Bronze Medal Match, Women's Doubles Semifinal", startTime: "08:00", endTime: "13:05" },
  { date: "2028-07-21", sessionType: "Semifinal", description: "Men's Singles Quarterfinal, Men's Doubles Semifinal", startTime: "18:00", endTime: "23:05" },
  { date: "2028-07-22", sessionType: "Final", description: "Women's Doubles Gold Medal Match, Women's Doubles Bronze Medal Match", startTime: "08:00", endTime: "10:45" },
  { date: "2028-07-22", sessionType: "Quarterfinal", description: "Women's Singles Quarterfinal", startTime: "18:30", endTime: "23:15" },
  { date: "2028-07-23", sessionType: "Final", description: "Men's Doubles Gold Medal Match, Men's Singles Semifinal", startTime: "08:00", endTime: "11:35" },
  { date: "2028-07-23", sessionType: "Bronze", description: "Women's Singles Semifinal, Men's Doubles Bronze Medal Match", startTime: "19:30", endTime: "23:25" },
  { date: "2028-07-24", sessionType: "Final", description: "Men's Singles Gold Medal Match, Men's Singles Bronze Medal Match", startTime: "09:00", endTime: "10:45" },
  { date: "2028-07-24", sessionType: "Final", description: "Women's Singles Gold Medal Match, Women's Singles Bronze Medal Match", startTime: "20:30", endTime: "23:15" },
], "Badminton", "Galen Center", "Exposition Park");

// ─── BASEBALL ────────────────────────────────────────────────
const baseball: OlympicEvent[] = genSessions("BSB", 1, [
  { date: "2028-07-13", sessionType: "Preliminary", description: "Men's Preliminary Round", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-13", sessionType: "Preliminary", description: "Men's Preliminary Round", startTime: "19:00", endTime: "22:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Preliminary Round", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Preliminary Round", startTime: "19:00", endTime: "22:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's Preliminary Round", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's Preliminary Round", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's Play-In Quarterfinal", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's Play-In Quarterfinal", startTime: "19:00", endTime: "22:00" },
  { date: "2028-07-18", sessionType: "Semifinal", description: "Men's Semifinal", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-18", sessionType: "Semifinal", description: "Men's Semifinal", startTime: "19:00", endTime: "22:00" },
  { date: "2028-07-19", sessionType: "Bronze", description: "Men's Bronze Medal Game", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-19", sessionType: "Final", description: "Men's Gold Medal Game", startTime: "19:00", endTime: "22:30" },
], "Baseball", "Dodger Stadium", "DTLA");

// ─── SOFTBALL ────────────────────────────────────────────────
const softball: OlympicEvent[] = genSessions("BSB", 13, [
  { date: "2028-07-23", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "09:00", endTime: "11:00" },
  { date: "2028-07-23", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "18:00", endTime: "18:30" },
  { date: "2028-07-23", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "20:00", endTime: "22:30" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "09:00", endTime: "11:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "16:00", endTime: "18:30" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "20:00", endTime: "22:30" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "09:00", endTime: "11:00" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "18:00", endTime: "18:30" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "20:00", endTime: "22:30" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "09:00", endTime: "11:30" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "18:00", endTime: "18:30" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "20:00", endTime: "22:30" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "09:00", endTime: "11:30" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "16:00", endTime: "18:30" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Women's Preliminary Round", startTime: "20:00", endTime: "22:30" },
  { date: "2028-07-28", sessionType: "Bronze", description: "Women's Bronze Medal Game", startTime: "19:00", endTime: "21:30" },
  { date: "2028-07-29", sessionType: "Final", description: "Women's Gold Medal Game", startTime: "09:00", endTime: "11:45" },
], "Softball", "OKC Softball Park", "OKC");

// ─── BASKETBALL ──────────────────────────────────────────────
const basketball: OlympicEvent[] = genSessions("BKB", 1, [
  { date: "2028-07-12", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "12:00", endTime: "16:15" },
  { date: "2028-07-12", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "18:00", endTime: "19:45" },
  { date: "2028-07-12", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "21:30", endTime: "23:15" },
  { date: "2028-07-13", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "12:00", endTime: "16:15" },
  { date: "2028-07-13", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "18:00", endTime: "19:45" },
  { date: "2028-07-13", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "21:30", endTime: "23:15" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "12:00", endTime: "16:15" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "18:00", endTime: "19:45" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "21:30", endTime: "23:15" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "12:00", endTime: "16:15" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "18:00", endTime: "19:45" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "21:30", endTime: "23:15" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "12:00", endTime: "16:15" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "18:00", endTime: "19:45" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "21:30", endTime: "23:15" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "12:00", endTime: "16:15" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "18:00", endTime: "19:45" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "21:30", endTime: "23:15" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "12:00", endTime: "16:15" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "18:00", endTime: "19:45" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "21:30", endTime: "23:15" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Women's Group Phase", startTime: "12:00", endTime: "16:15" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "18:00", endTime: "19:45" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "21:30", endTime: "23:15" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "12:00", endTime: "16:15" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "18:00", endTime: "19:45" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's Group Phase", startTime: "21:30", endTime: "23:15" },
  { date: "2028-07-22", sessionType: "Quarterfinal", description: "Women's Quarterfinal", startTime: "13:00", endTime: "15:00" },
  { date: "2028-07-22", sessionType: "Quarterfinal", description: "Women's Quarterfinal", startTime: "20:00", endTime: "22:00" },
  { date: "2028-07-23", sessionType: "Quarterfinal", description: "Women's Quarterfinal", startTime: "13:00", endTime: "15:00" },
  { date: "2028-07-23", sessionType: "Quarterfinal", description: "Women's Quarterfinal", startTime: "20:00", endTime: "22:00" },
  { date: "2028-07-24", sessionType: "Quarterfinal", description: "Men's Quarterfinal", startTime: "13:00", endTime: "15:00" },
  { date: "2028-07-24", sessionType: "Quarterfinal", description: "Men's Quarterfinal", startTime: "20:00", endTime: "22:00" },
  { date: "2028-07-25", sessionType: "Quarterfinal", description: "Men's Quarterfinal", startTime: "13:00", endTime: "15:00" },
  { date: "2028-07-25", sessionType: "Quarterfinal", description: "Men's Quarterfinal", startTime: "20:00", endTime: "22:00" },
  { date: "2028-07-26", sessionType: "Semifinal", description: "Women's Semifinal", startTime: "16:00", endTime: "18:00" },
  { date: "2028-07-26", sessionType: "Semifinal", description: "Women's Semifinal", startTime: "21:30", endTime: "23:30" },
  { date: "2028-07-27", sessionType: "Semifinal", description: "Men's Semifinal", startTime: "18:00", endTime: "18:00" },
  { date: "2028-07-27", sessionType: "Semifinal", description: "Men's Semifinal", startTime: "21:30", endTime: "23:30" },
  { date: "2028-07-28", sessionType: "Bronze", description: "Women's Bronze Medal Game", startTime: "16:00", endTime: "18:00" },
  { date: "2028-07-29", sessionType: "Bronze", description: "Men's Bronze Medal Game", startTime: "12:00", endTime: "14:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Women's Gold Medal Game", startTime: "18:00", endTime: "18:15" },
  { date: "2028-07-30", sessionType: "Final", description: "Men's Gold Medal Game", startTime: "12:45", endTime: "15:00" },
], "Basketball", "Inglewood Dome", "Inglewood");

// ─── 3x3 BASKETBALL ─────────────────────────────────────────
const basketball3x3: OlympicEvent[] = genSessions("BK3", 1, [
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "17:30", endTime: "19:30" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "21:00", endTime: "23:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "17:30", endTime: "19:30" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "21:00", endTime: "23:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "17:30", endTime: "19:30" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "21:00", endTime: "23:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "17:30", endTime: "19:30" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "21:00", endTime: "23:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "17:30", endTime: "19:30" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's/Women's Pool Round", startTime: "21:00", endTime: "23:00" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's/Women's Play-In", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-21", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "17:30", endTime: "19:30" },
  { date: "2028-07-21", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "21:00", endTime: "23:00" },
  { date: "2028-07-22", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "17:00", endTime: "19:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Men's Bronze Medal Match, Women's Bronze Medal Match, Men's Gold Medal Match, Women's Gold Medal Match", startTime: "21:00", endTime: "23:30" },
], "3x3 Basketball", "Valley Complex 3", "Valley");

// ─── BEACH VOLLEYBALL ────────────────────────────────────────
const beachVolleyball: OlympicEvent[] = genSessions("VBV", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "14:00", endTime: "18:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "14:00", endTime: "18:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "14:00", endTime: "18:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "14:00", endTime: "18:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "14:00", endTime: "18:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "14:00", endTime: "18:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "14:00", endTime: "18:00" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-22", sessionType: "Preliminary", description: "Men's/Women's Preliminary Phase", startTime: "09:00", endTime: "11:00" },
  { date: "2028-07-22", sessionType: "Preliminary", description: "Men's/Women's Lucky Loser Round", startTime: "19:00", endTime: "23:00" },
  { date: "2028-07-23", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "09:00", endTime: "18:00" },
  { date: "2028-07-23", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "13:00", endTime: "15:00" },
  { date: "2028-07-23", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "17:00", endTime: "19:00" },
  { date: "2028-07-23", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "21:00", endTime: "23:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "09:00", endTime: "18:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "13:00", endTime: "15:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "17:00", endTime: "19:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "21:00", endTime: "23:00" },
  { date: "2028-07-25", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "13:00", endTime: "15:00" },
  { date: "2028-07-25", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "20:00", endTime: "22:00" },
  { date: "2028-07-26", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "13:00", endTime: "15:00" },
  { date: "2028-07-26", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "20:00", endTime: "22:00" },
  { date: "2028-07-27", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "13:00", endTime: "15:00" },
  { date: "2028-07-27", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "20:00", endTime: "22:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Bronze Medal Match, Gold Medal Match", startTime: "15:30", endTime: "18:30" },
  { date: "2028-07-29", sessionType: "Final", description: "Bronze Medal Match, Gold Medal Match", startTime: "19:00", endTime: "22:00" },
], "Beach Volleyball", "Alamitos Beach Stadium", "Long Beach");

// ─── BOXING (Preliminary) ────────────────────────────────────
const boxingPrelim: OlympicEvent[] = genSessions("BDX", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Round of 32", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Round of 32", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Round of 32", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Round of 32", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Round of 16", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Round of 16", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Round of 16", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Round of 16", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-19", sessionType: "Quarterfinal", description: "Quarterfinal", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-19", sessionType: "Quarterfinal", description: "Quarterfinal", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-20", sessionType: "Quarterfinal", description: "Quarterfinal", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-20", sessionType: "Quarterfinal", description: "Quarterfinal", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-21", sessionType: "Semifinal", description: "Semifinal", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-21", sessionType: "Semifinal", description: "Semifinal", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-22", sessionType: "Semifinal", description: "Semifinal", startTime: "11:00", endTime: "14:00" },
  { date: "2028-07-22", sessionType: "Semifinal", description: "Semifinal", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-23", sessionType: "Semifinal", description: "Semifinal", startTime: "11:00", endTime: "14:00" },
], "Boxing", "Peacock Theater", "DTLA");

// ─── BOXING (Finals) ─────────────────────────────────────────
const boxingFinals: OlympicEvent[] = genSessions("BDX", 18, [
  { date: "2028-07-27", sessionType: "Final", description: "Gold Medal Bouts", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Gold Medal Bouts", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Gold Medal Bouts", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Gold Medal Bouts", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Gold Medal Bouts", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-30", sessionType: "Final", description: "Gold Medal Bouts", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-30", sessionType: "Final", description: "Gold Medal Bouts", startTime: "20:00", endTime: "23:00" },
], "Boxing", "DTLA Arena", "DTLA");

// ─── CANOE SLALOM ────────────────────────────────────────────
const canoeSlalom: OlympicEvent[] = genSessions("CSL", 1, [
  { date: "2028-07-14", sessionType: "Preliminary", description: "Men's/Women's Canoe Slalom Heats", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-14", sessionType: "Preliminary", description: "Men's/Women's Canoe Slalom Heats", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-15", sessionType: "Semifinal", description: "Men's/Women's Canoe Slalom Semifinal", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-15", sessionType: "Final", description: "Men's/Women's Canoe Slalom Final", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-16", sessionType: "Final", description: "Canoe Slalom Final", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Kayak Cross Time Trial", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Kayak Cross Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-19", sessionType: "Final", description: "Kayak Cross Final", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Kayak Cross Final", startTime: "10:00", endTime: "13:00" },
], "Canoe Slalom", "OKC Whitewater Center", "OKC");

// ─── CANOE SPRINT ────────────────────────────────────────────
const canoeSprint: OlympicEvent[] = genSessions("CSP", 1, [
  { date: "2028-07-25", sessionType: "Preliminary", description: "Men's/Women's Canoe Sprint Heats", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-26", sessionType: "Semifinal", description: "Men's/Women's Canoe Sprint Semifinal", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-27", sessionType: "Final", description: "Men's/Women's Canoe Sprint Final", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Men's/Women's Canoe Sprint Final", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Men's/Women's Canoe Sprint Final", startTime: "09:00", endTime: "12:00" },
], "Canoe Sprint", "Marine Stadium", "Long Beach");

// ─── CRICKET ─────────────────────────────────────────────────
const cricket: OlympicEvent[] = genSessions("CKT", 1, [
  { date: "2028-07-12", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-12", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-12", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-13", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-13", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-13", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "20:00", endTime: "23:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's/Women's Group Stage", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-22", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-22", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-23", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-23", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Bronze Medal Match, Gold Medal Match", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Bronze Medal Match, Gold Medal Match", startTime: "15:00", endTime: "18:00" },
], "Cricket", "Fairgrounds Cricket Stadium", "Pomona");

// ─── BMX FREESTYLE ───────────────────────────────────────────
const bmxFreestyle: OlympicEvent[] = genSessions("BMF", 1, [
  { date: "2028-07-28", sessionType: "Preliminary", description: "Men's/Women's Park Qualification", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Men's/Women's Park Final", startTime: "10:00", endTime: "13:00" },
], "BMX Freestyle", "Valley Complex 1", "Valley");

// ─── BMX RACING ──────────────────────────────────────────────
const bmxRacing: OlympicEvent[] = genSessions("BMX", 1, [
  { date: "2028-07-15", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-16", sessionType: "Final", description: "Men's/Women's Semifinal, Final", startTime: "14:00", endTime: "17:00" },
], "BMX Racing", "Valley Complex 4", "Valley");

// ─── MOUNTAIN BIKE ───────────────────────────────────────────
const mountainBike: OlympicEvent[] = genSessions("MTB", 1, [
  { date: "2028-07-17", sessionType: "Final", description: "Men's Cross-Country", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Women's Cross-Country", startTime: "14:00", endTime: "16:00" },
], "Mountain Bike", "Industry Hills MTB Course", "City of Industry");

// ─── CYCLING ROAD ────────────────────────────────────────────
const cyclingRoad: OlympicEvent[] = genSessions("CRD", 1, [
  { date: "2028-07-19", sessionType: "Final", description: "Men's/Women's Individual Time Trial", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Women's Road Race", startTime: "09:00", endTime: "15:00" },
  { date: "2028-07-23", sessionType: "Final", description: "Men's Road Race", startTime: "09:00", endTime: "16:00" },
], "Cycling Road", "Venice Beach Boardwalk", "Venice");

// ─── CYCLING TRACK ───────────────────────────────────────────
const cyclingTrack: OlympicEvent[] = genSessions("CTR", 1, [
  { date: "2028-07-25", sessionType: "Preliminary", description: "Men's/Women's Track Cycling Qualifying", startTime: "13:00", endTime: "16:00" },
  { date: "2028-07-25", sessionType: "Final", description: "Men's/Women's Track Cycling Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-26", sessionType: "Final", description: "Men's/Women's Track Cycling Finals", startTime: "13:00", endTime: "16:00" },
  { date: "2028-07-26", sessionType: "Final", description: "Men's/Women's Track Cycling Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-27", sessionType: "Final", description: "Men's/Women's Track Cycling Finals", startTime: "13:00", endTime: "16:00" },
  { date: "2028-07-27", sessionType: "Final", description: "Men's/Women's Track Cycling Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Men's/Women's Track Cycling Finals", startTime: "13:00", endTime: "16:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Men's/Women's Track Cycling Finals", startTime: "13:00", endTime: "16:00" },
  { date: "2028-07-30", sessionType: "Final", description: "Men's/Women's Track Cycling Finals", startTime: "13:00", endTime: "16:00" },
], "Cycling Track", "Carson Velodrome", "Carson");

// ─── DIVING ──────────────────────────────────────────────────
const diving: OlympicEvent[] = genSessions("DIV", 1, [
  { date: "2028-07-16", sessionType: "Preliminary", description: "Women's Synchronized 3m Springboard", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-16", sessionType: "Final", description: "Women's Synchronized 3m Springboard Final", startTime: "19:00", endTime: "21:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's Synchronized 10m Platform", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-17", sessionType: "Final", description: "Men's Synchronized 10m Platform Final", startTime: "19:00", endTime: "21:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Women's Synchronized 10m Platform", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Women's Synchronized 10m Platform Final", startTime: "19:00", endTime: "21:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's Synchronized 3m Springboard", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-19", sessionType: "Final", description: "Men's Synchronized 3m Springboard Final", startTime: "19:00", endTime: "21:00" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Women's 3m Springboard Preliminary", startTime: "14:00", endTime: "16:30" },
  { date: "2028-07-22", sessionType: "Semifinal", description: "Women's 3m Springboard Semifinal", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Women's 3m Springboard Final", startTime: "19:00", endTime: "21:00" },
  { date: "2028-07-23", sessionType: "Preliminary", description: "Men's 3m Springboard Preliminary", startTime: "14:00", endTime: "16:30" },
  { date: "2028-07-24", sessionType: "Semifinal", description: "Men's 3m Springboard Semifinal", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-24", sessionType: "Final", description: "Men's 3m Springboard Final", startTime: "19:00", endTime: "21:00" },
  { date: "2028-07-27", sessionType: "Final", description: "Women's 10m Platform Final", startTime: "19:00", endTime: "21:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Men's 10m Platform Final", startTime: "19:00", endTime: "21:00" },
], "Diving", "Rose Bowl Aquatics Center", "Pasadena");

// ─── EQUESTRIAN ──────────────────────────────────────────────
const equestrian: OlympicEvent[] = genSessions("EQU", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Dressage Day 1", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Dressage Day 2", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-17", sessionType: "Final", description: "Dressage Team Final, Individual Grand Prix", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Dressage Individual Final", startTime: "09:00", endTime: "14:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Eventing Dressage", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Eventing Cross-Country", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-21", sessionType: "Final", description: "Eventing Jumping Final", startTime: "09:00", endTime: "14:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Eventing Individual Final", startTime: "09:00", endTime: "14:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Jumping Qualification", startTime: "09:00", endTime: "14:00" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Jumping Qualification Round 2", startTime: "09:00", endTime: "14:00" },
  { date: "2028-07-26", sessionType: "Final", description: "Jumping Team Final", startTime: "09:00", endTime: "14:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Jumping Individual Qualification", startTime: "09:00", endTime: "14:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Jumping Individual Final Round A", startTime: "09:00", endTime: "14:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Jumping Individual Final Round B", startTime: "09:00", endTime: "14:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Equestrian - Evening Session", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Equestrian - Evening Session", startTime: "18:00", endTime: "21:00" },
], "Equestrian", "Santa Anita Park", "Arcadia");

// ─── FENCING ─────────────────────────────────────────────────
const fencing: OlympicEvent[] = genSessions("FEN", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Individual Sabre/Epee Preliminary", startTime: "10:00", endTime: "15:00" },
  { date: "2028-07-15", sessionType: "Final", description: "Men's/Women's Individual Sabre/Epee Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Individual Foil/Epee Preliminary", startTime: "10:00", endTime: "15:00" },
  { date: "2028-07-16", sessionType: "Final", description: "Men's/Women's Individual Foil/Epee Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Individual Sabre/Foil Preliminary", startTime: "10:00", endTime: "15:00" },
  { date: "2028-07-17", sessionType: "Final", description: "Men's/Women's Individual Sabre/Foil Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Individual Epee/Foil Preliminary", startTime: "10:00", endTime: "15:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Men's/Women's Individual Epee/Foil Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's/Women's Individual Sabre Preliminary", startTime: "10:00", endTime: "15:00" },
  { date: "2028-07-19", sessionType: "Final", description: "Men's/Women's Individual Sabre Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's/Women's Team Foil Preliminary", startTime: "10:00", endTime: "15:00" },
  { date: "2028-07-20", sessionType: "Final", description: "Men's/Women's Team Foil Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's/Women's Team Sabre Preliminary", startTime: "10:00", endTime: "15:00" },
  { date: "2028-07-21", sessionType: "Final", description: "Men's/Women's Team Sabre Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-22", sessionType: "Preliminary", description: "Men's/Women's Team Epee Preliminary", startTime: "10:00", endTime: "15:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Men's/Women's Team Epee Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-23", sessionType: "Preliminary", description: "Mixed Team Preliminary", startTime: "10:00", endTime: "15:00" },
  { date: "2028-07-23", sessionType: "Final", description: "Mixed Team Final", startTime: "18:00", endTime: "21:00" },
], "Fencing", "LA Convention Center Hall 1", "DTLA");

// ─── FLAG FOOTBALL ───────────────────────────────────────────
const flagFootball: OlympicEvent[] = genSessions("FFB", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "16:00", endTime: "19:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "16:00", endTime: "19:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "16:00", endTime: "19:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "16:00", endTime: "19:00" },
  { date: "2028-07-19", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-19", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "16:00", endTime: "19:00" },
  { date: "2028-07-20", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-20", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "16:00", endTime: "19:00" },
  { date: "2028-07-22", sessionType: "Bronze", description: "Men's/Women's Bronze Medal Match", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Men's/Women's Gold Medal Match", startTime: "16:00", endTime: "19:00" },
], "Flag Football", "Exposition Park Stadium", "Exposition Park");

// ─── FOOTBALL (SOCCER) ──────────────────────────────────────
// Preliminary rounds at various venues, finals at Rose Bowl
const footballPrelim: OlympicEvent[] = (() => {
  const events: OlympicEvent[] = [];
  // 50 preliminary sessions across Jul 12-22
  const prelimDates = [
    "2028-07-12", "2028-07-12", "2028-07-12", "2028-07-12", "2028-07-12", "2028-07-12",
    "2028-07-13", "2028-07-13", "2028-07-13", "2028-07-13", "2028-07-13", "2028-07-13",
    "2028-07-15", "2028-07-15", "2028-07-15", "2028-07-15", "2028-07-15", "2028-07-15",
    "2028-07-16", "2028-07-16", "2028-07-16", "2028-07-16", "2028-07-16", "2028-07-16",
    "2028-07-17", "2028-07-17", "2028-07-17", "2028-07-17",
    "2028-07-18", "2028-07-18", "2028-07-18", "2028-07-18",
    "2028-07-19", "2028-07-19", "2028-07-19", "2028-07-19",
    "2028-07-20", "2028-07-20", "2028-07-20", "2028-07-20",
    "2028-07-21", "2028-07-21", "2028-07-21", "2028-07-21",
    "2028-07-22", "2028-07-22", "2028-07-22", "2028-07-22", "2028-07-22", "2028-07-22",
  ];
  const times = [
    { s: "13:00", e: "15:00" }, { s: "16:00", e: "18:00" }, { s: "19:00", e: "21:00" },
    { s: "13:00", e: "15:00" }, { s: "16:00", e: "18:00" }, { s: "19:00", e: "21:00" },
  ];
  const venues = ["Rose Bowl Stadium", "SoFi Stadium", "Dignity Health Sports Park"];
  for (let i = 0; i < 50; i++) {
    const timeSlot = times[i % times.length];
    const isQF = i >= 42;
    events.push({
      sessionCode: `FBL${String(i + 1).padStart(2, "0")}`,
      sport: "Football",
      venue: venues[i % venues.length],
      zone: "Various",
      date: prelimDates[i],
      sessionType: isQF ? "Quarterfinal" : "Preliminary",
      description: isQF ? "Men's/Women's Quarterfinal" : "Men's/Women's Group Stage",
      startTime: timeSlot.s,
      endTime: timeSlot.e,
    });
  }
  return events;
})();

const footballFinals: OlympicEvent[] = genSessions("FBL", 51, [
  { date: "2028-07-24", sessionType: "Semifinal", description: "Women's Semifinal", startTime: "17:00", endTime: "19:00" },
  { date: "2028-07-24", sessionType: "Semifinal", description: "Women's Semifinal", startTime: "20:00", endTime: "22:00" },
  { date: "2028-07-25", sessionType: "Semifinal", description: "Men's Semifinal", startTime: "17:00", endTime: "19:00" },
  { date: "2028-07-25", sessionType: "Semifinal", description: "Men's Semifinal", startTime: "20:00", endTime: "22:00" },
  { date: "2028-07-27", sessionType: "Bronze", description: "Women's Bronze Medal Match", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Women's Gold Medal Match", startTime: "18:00", endTime: "20:00" },
  { date: "2028-07-28", sessionType: "Bronze", description: "Men's Bronze Medal Match", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Men's Gold Medal Match", startTime: "18:00", endTime: "20:00" },
], "Football", "Rose Bowl Stadium", "Pasadena");

// ─── GOLF ────────────────────────────────────────────────────
const golf: OlympicEvent[] = genSessions("GLF", 1, [
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's Individual Stroke Play Round 1", startTime: "07:00", endTime: "17:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's Individual Stroke Play Round 2", startTime: "07:00", endTime: "17:00" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's Individual Stroke Play Round 3", startTime: "07:00", endTime: "17:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Men's Individual Stroke Play Final Round", startTime: "07:00", endTime: "17:00" },
  { date: "2028-07-23", sessionType: "Final", description: "Men's/Women's Mixed Team Round 1", startTime: "07:00", endTime: "17:00" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Women's Individual Stroke Play Round 1", startTime: "07:00", endTime: "17:00" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Women's Individual Stroke Play Round 2", startTime: "07:00", endTime: "17:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Women's Individual Stroke Play Round 3", startTime: "07:00", endTime: "17:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Women's Individual Stroke Play Final Round", startTime: "07:00", endTime: "17:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Mixed Team Final Round", startTime: "07:00", endTime: "17:00" },
], "Golf", "Riviera Country Club", "Riviera");

// ─── HANDBALL ────────────────────────────────────────────────
const handball: OlympicEvent[] = (() => {
  const events: OlympicEvent[] = [];
  // 46 sessions from Jul 12 to Jul 28
  const schedule: Array<{ date: string; type: string; desc: string; start: string; end: string }> = [];
  // Group stage: Jul 12-22 (3 sessions per day most days)
  const groupDates = [
    "2028-07-12", "2028-07-13", "2028-07-15", "2028-07-16",
    "2028-07-17", "2028-07-18", "2028-07-19", "2028-07-20",
    "2028-07-21", "2028-07-22",
  ];
  const groupTimes = [
    { s: "10:00", e: "12:00" }, { s: "14:30", e: "16:30" }, { s: "19:00", e: "21:00" },
  ];
  for (const d of groupDates) {
    for (const t of groupTimes) {
      schedule.push({ date: d, type: "Preliminary", desc: "Men's/Women's Group Stage", start: t.s, end: t.e });
    }
  }
  // QF: Jul 23-24
  for (const d of ["2028-07-23", "2028-07-24"]) {
    schedule.push({ date: d, type: "Quarterfinal", desc: "Men's/Women's Quarterfinal", start: "14:00", end: "16:00" });
    schedule.push({ date: d, type: "Quarterfinal", desc: "Men's/Women's Quarterfinal", start: "19:00", end: "21:00" });
  }
  // SF: Jul 25-26
  for (const d of ["2028-07-25", "2028-07-26"]) {
    schedule.push({ date: d, type: "Semifinal", desc: "Men's/Women's Semifinal", start: "17:00", end: "19:00" });
    schedule.push({ date: d, type: "Semifinal", desc: "Men's/Women's Semifinal", start: "21:00", end: "23:00" });
  }
  // Bronze + Gold
  schedule.push({ date: "2028-07-27", type: "Bronze", desc: "Women's Bronze Medal Match", start: "14:00", end: "16:00" });
  schedule.push({ date: "2028-07-27", type: "Final", desc: "Women's Gold Medal Match", start: "19:00", end: "21:00" });
  schedule.push({ date: "2028-07-28", type: "Bronze", desc: "Men's Bronze Medal Match", start: "14:00", end: "16:00" });
  schedule.push({ date: "2028-07-28", type: "Final", desc: "Men's Gold Medal Match", start: "19:00", end: "21:00" });

  // Take first 46
  for (let i = 0; i < Math.min(schedule.length, 46); i++) {
    events.push({
      sessionCode: `HBL${String(i + 1).padStart(2, "0")}`,
      sport: "Handball",
      venue: "Long Beach Arena",
      zone: "Long Beach",
      date: schedule[i].date,
      sessionType: schedule[i].type,
      description: schedule[i].desc,
      startTime: schedule[i].start,
      endTime: schedule[i].end,
    });
  }
  return events;
})();

// ─── HOCKEY ──────────────────────────────────────────────────
const hockey: OlympicEvent[] = (() => {
  const events: OlympicEvent[] = [];
  const schedule: Array<{ date: string; type: string; desc: string; start: string; end: string }> = [];
  // Group stage: Jul 12-22
  const groupDates = [
    "2028-07-12", "2028-07-13", "2028-07-15", "2028-07-16",
    "2028-07-17", "2028-07-18", "2028-07-19", "2028-07-20",
    "2028-07-21", "2028-07-22",
  ];
  for (const d of groupDates) {
    schedule.push({ date: d, type: "Preliminary", desc: "Men's/Women's Pool Stage", start: "09:00", end: "11:00" });
    schedule.push({ date: d, type: "Preliminary", desc: "Men's/Women's Pool Stage", start: "14:00", end: "16:00" });
    schedule.push({ date: d, type: "Preliminary", desc: "Men's/Women's Pool Stage", start: "19:00", end: "21:00" });
  }
  // QF
  schedule.push({ date: "2028-07-23", type: "Quarterfinal", desc: "Women's Quarterfinal", start: "14:00", end: "16:00" });
  schedule.push({ date: "2028-07-24", type: "Quarterfinal", desc: "Men's Quarterfinal", start: "14:00", end: "16:00" });
  // SF + Finals
  schedule.push({ date: "2028-07-27", type: "Semifinal", desc: "Women's Semifinal", start: "14:00", end: "16:00" });
  schedule.push({ date: "2028-07-29", type: "Final", desc: "Women's Gold Medal Match", start: "14:00", end: "16:00" });

  for (let i = 0; i < Math.min(schedule.length, 34); i++) {
    events.push({
      sessionCode: `HOC${String(i + 1).padStart(2, "0")}`,
      sport: "Hockey",
      venue: "Carson Field",
      zone: "Carson",
      date: schedule[i].date,
      sessionType: schedule[i].type,
      description: schedule[i].desc,
      startTime: schedule[i].start,
      endTime: schedule[i].end,
    });
  }
  return events;
})();

// ─── JUDO ────────────────────────────────────────────────────
const judo: OlympicEvent[] = genSessions("JUD", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's 60kg, Women's 48kg Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-15", sessionType: "Final", description: "Men's 60kg, Women's 48kg Finals", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's 66kg, Women's 52kg Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-16", sessionType: "Final", description: "Men's 66kg, Women's 52kg Finals", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's 73kg, Women's 57kg Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-17", sessionType: "Final", description: "Men's 73kg, Women's 57kg Finals", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's 81kg, Women's 63kg Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Men's 81kg, Women's 63kg Finals", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Men's 90kg, Women's 70kg Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-19", sessionType: "Final", description: "Men's 90kg, Women's 70kg Finals", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Men's 100kg, Women's 78kg Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-20", sessionType: "Final", description: "Men's 100kg, Women's 78kg Finals", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Men's +100kg, Women's +78kg Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-21", sessionType: "Final", description: "Men's +100kg, Women's +78kg Finals", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-22", sessionType: "Preliminary", description: "Mixed Team Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Mixed Team Final", startTime: "17:00", endTime: "20:00" },
], "Judo", "LA Convention Center Hall 2", "DTLA");

// ─── LACROSSE ────────────────────────────────────────────────
const lacrosse: OlympicEvent[] = genSessions("LAC", 1, [
  { date: "2028-07-24", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "10:00", endTime: "12:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "10:00", endTime: "12:00" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "10:00", endTime: "12:00" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Men's/Women's Pool Play", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-27", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "10:00", endTime: "12:00" },
  { date: "2028-07-27", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-28", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "10:00", endTime: "12:00" },
  { date: "2028-07-28", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-29", sessionType: "Bronze", description: "Men's/Women's Bronze Medal Match", startTime: "10:00", endTime: "12:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Men's/Women's Gold Medal Match", startTime: "14:00", endTime: "16:00" },
], "Lacrosse", "Exposition Park Stadium", "Exposition Park");

// ─── MODERN PENTATHLON ───────────────────────────────────────
const modernPentathlon: OlympicEvent[] = genSessions("MPN", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Women's Qualification", startTime: "09:00", endTime: "17:00" },
  { date: "2028-07-16", sessionType: "Final", description: "Women's Final", startTime: "09:00", endTime: "17:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's Qualification", startTime: "09:00", endTime: "17:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Men's Final", startTime: "09:00", endTime: "17:00" },
], "Modern Pentathlon", "Valley Complex 2", "Valley");

// ─── OPEN WATER SWIMMING ─────────────────────────────────────
const openWaterSwimming: OlympicEvent[] = genSessions("OWS", 1, [
  { date: "2028-07-17", sessionType: "Final", description: "Women's 10km Marathon Swimming", startTime: "07:30", endTime: "10:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Men's 10km Marathon Swimming", startTime: "07:30", endTime: "10:00" },
], "Open Water Swimming", "Belmont Shore", "Long Beach");

// ─── RHYTHMIC GYMNASTICS ─────────────────────────────────────
const rhythmicGymnastics: OlympicEvent[] = genSessions("GRY", 1, [
  { date: "2028-07-27", sessionType: "Preliminary", description: "Individual All-Around Qualification", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Individual All-Around Qualification", startTime: "15:00", endTime: "18:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Individual All-Around Final", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-29", sessionType: "Preliminary", description: "Group All-Around Qualification", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Group All-Around Final", startTime: "15:00", endTime: "18:00" },
], "Rhythmic Gymnastics", "Galen Center", "Exposition Park");

// ─── ARTISTIC GYMNASTICS ─────────────────────────────────────
const artisticGymnastics: OlympicEvent[] = genSessions("GAR", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Qualification Subdivision 1", startTime: "11:30", endTime: "14:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Qualification Subdivision 2", startTime: "15:30", endTime: "18:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's Qualification Subdivision 3", startTime: "19:30", endTime: "22:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Women's Qualification Subdivision 1, Subdivision 2", startTime: "09:45", endTime: "13:35" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Women's Qualification Subdivision 3", startTime: "16:05", endTime: "16:45" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Women's Qualification Subdivision 4", startTime: "18:15", endTime: "19:55" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Women's Qualification Subdivision 5", startTime: "21:25", endTime: "23:05" },
  { date: "2028-07-17", sessionType: "Final", description: "Men's Team Final", startTime: "17:15", endTime: "20:30" },
  { date: "2028-07-18", sessionType: "Final", description: "Women's Team Final", startTime: "18:00", endTime: "20:30" },
  { date: "2028-07-19", sessionType: "Final", description: "Men's All-Around Final", startTime: "18:00", endTime: "20:30" },
  { date: "2028-07-20", sessionType: "Final", description: "Women's All-Around Final", startTime: "18:00", endTime: "20:30" },
  { date: "2028-07-22", sessionType: "Final", description: "Men's Floor Exercise Final, Women's Vault Final, Men's Pommel Horse Final, Women's Uneven Bars Final", startTime: "11:30", endTime: "14:15" },
  { date: "2028-07-23", sessionType: "Final", description: "Men's Rings Final, Women's Balance Beam Final, Men's Vault Final", startTime: "11:00", endTime: "13:45" },
  { date: "2028-07-24", sessionType: "Final", description: "Women's Floor Exercise Final, Men's Parallel Bars Final, Men's Horizontal Bar Final", startTime: "11:00", endTime: "14:30" },
  { date: "2028-07-25", sessionType: "Final", description: "Mixed Team Final (pending IOC approval)", startTime: "18:00", endTime: "18:30" },
], "Artistic Gymnastics", "DTLA Arena", "DTLA");

// ─── ROWING ──────────────────────────────────────────────────
const rowing: OlympicEvent[] = genSessions("ROW", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Rowing Heats", startTime: "07:30", endTime: "12:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Rowing Heats", startTime: "07:30", endTime: "12:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Men's/Women's Rowing Repechages", startTime: "07:30", endTime: "12:00" },
  { date: "2028-07-18", sessionType: "Semifinal", description: "Men's/Women's Rowing Semifinals", startTime: "07:30", endTime: "12:00" },
  { date: "2028-07-19", sessionType: "Final", description: "Men's/Women's Rowing Finals", startTime: "07:30", endTime: "12:00" },
  { date: "2028-07-20", sessionType: "Final", description: "Men's/Women's Rowing Finals", startTime: "07:30", endTime: "12:00" },
  { date: "2028-07-21", sessionType: "Final", description: "Men's/Women's Rowing Finals", startTime: "07:30", endTime: "12:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Men's/Women's Rowing Finals", startTime: "07:30", endTime: "12:00" },
], "Rowing", "Marine Stadium", "Long Beach");

// ─── ROWING COASTAL BEACH SPRINTS ────────────────────────────
const rowingCoastal: OlympicEvent[] = genSessions("RCB", 1, [
  { date: "2028-07-24", sessionType: "Preliminary", description: "Men's/Women's Coastal Beach Sprint Heats", startTime: "08:00", endTime: "12:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Men's/Women's Coastal Beach Sprint Repechages", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-25", sessionType: "Semifinal", description: "Men's/Women's Coastal Beach Sprint Semifinals", startTime: "08:00", endTime: "12:00" },
  { date: "2028-07-25", sessionType: "Final", description: "Men's/Women's Coastal Beach Sprint Finals", startTime: "14:00", endTime: "17:00" },
], "Rowing Coastal Beach Sprint", "Belmont Shore", "Long Beach");

// ─── RUGBY SEVENS ────────────────────────────────────────────
const rugbySevens: OlympicEvent[] = genSessions("RU7", 1, [
  { date: "2028-07-12", sessionType: "Preliminary", description: "Men's Pool Round", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-12", sessionType: "Preliminary", description: "Men's Pool Round", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-13", sessionType: "Preliminary", description: "Men's Pool Round", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-13", sessionType: "Quarterfinal", description: "Men's Quarterfinal", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-14", sessionType: "Final", description: "Men's Semifinal, Bronze, Gold Medal Match", startTime: "14:00", endTime: "20:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Women's Pool Round", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Women's Pool Round", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Women's Pool Round", startTime: "10:00", endTime: "13:00" },
  { date: "2028-07-16", sessionType: "Quarterfinal", description: "Women's Quarterfinal", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-17", sessionType: "Final", description: "Women's Semifinal, Bronze, Gold Medal Match", startTime: "14:00", endTime: "20:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Mixed Team Pool Round", startTime: "10:00", endTime: "16:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Mixed Team Semifinal, Bronze, Gold Medal Match", startTime: "17:00", endTime: "21:00" },
], "Rugby Sevens", "Carson Stadium", "Carson");

// ─── SAILING (Windsurfing & Kite) ────────────────────────────
const sailingWind: OlympicEvent[] = genSessions("SAL", 1, [
  { date: "2028-07-16", sessionType: "Preliminary", description: "Windsurfing/Kite Racing Day 1", startTime: "12:00", endTime: "18:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Windsurfing/Kite Racing Day 2", startTime: "12:00", endTime: "18:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Windsurfing/Kite Racing Day 3", startTime: "12:00", endTime: "18:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Windsurfing/Kite Racing Day 4", startTime: "12:00", endTime: "18:00" },
  { date: "2028-07-20", sessionType: "Final", description: "Windsurfing/Kite Medal Races", startTime: "12:00", endTime: "18:00" },
], "Sailing", "Belmont Shore", "Long Beach");

// ─── SAILING (Dinghy, Skiff & Multihull) ─────────────────────
const sailingDinghy: OlympicEvent[] = genSessions("SAL", 6, [
  { date: "2028-07-23", sessionType: "Preliminary", description: "Dinghy/Skiff/Multihull Racing Day 1", startTime: "12:00", endTime: "18:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Dinghy/Skiff/Multihull Racing Day 2", startTime: "12:00", endTime: "18:00" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Dinghy/Skiff/Multihull Racing Day 3", startTime: "12:00", endTime: "18:00" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Dinghy/Skiff/Multihull Racing Day 4", startTime: "12:00", endTime: "18:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Dinghy/Skiff/Multihull Racing Day 5", startTime: "12:00", endTime: "18:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Dinghy/Skiff/Multihull Medal Races", startTime: "12:00", endTime: "18:00" },
], "Sailing", "Port of Los Angeles", "Long Beach");

// ─── SHOOTING (Rifle & Pistol) ──────────────────────────────
const shootingRifle: OlympicEvent[] = genSessions("SHO", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "10m Air Rifle/Pistol Qualification", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-15", sessionType: "Final", description: "10m Air Rifle/Pistol Final", startTime: "14:00", endTime: "16:00" },
  { date: "2028-07-16", sessionType: "Final", description: "10m Air Rifle/Pistol Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "25m/50m Qualification", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-18", sessionType: "Final", description: "25m/50m Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-19", sessionType: "Final", description: "25m/50m Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-20", sessionType: "Final", description: "Rifle/Pistol Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-21", sessionType: "Final", description: "Rifle/Pistol Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Rifle/Pistol Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-23", sessionType: "Final", description: "Rifle/Pistol Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-24", sessionType: "Final", description: "Rifle/Pistol Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-25", sessionType: "Final", description: "Rifle/Pistol Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Mixed Team Air Rifle Qualification", startTime: "17:00", endTime: "19:00" },
  { date: "2028-07-16", sessionType: "Final", description: "Mixed Team Air Pistol Final", startTime: "17:00", endTime: "19:00" },
], "Shooting", "Long Beach Target Shooting Hall", "Long Beach");

// ─── SHOOTING (Shotgun) ─────────────────────────────────────
const shootingShotgun: OlympicEvent[] = genSessions("SHO", 4, [
  { date: "2028-07-17", sessionType: "Preliminary", description: "Trap/Skeet Qualification Day 1", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Trap/Skeet Qualification Day 2", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-19", sessionType: "Final", description: "Trap Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-20", sessionType: "Final", description: "Skeet Qualification/Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-21", sessionType: "Final", description: "Skeet Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Mixed Team Trap Qualification", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-23", sessionType: "Final", description: "Mixed Team Trap Final", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-24", sessionType: "Final", description: "Mixed Team Skeet Qualification", startTime: "09:00", endTime: "16:00" },
  { date: "2028-07-24", sessionType: "Final", description: "Mixed Team Skeet Final", startTime: "09:00", endTime: "16:00" },
], "Shooting", "Whittier Narrows Clay Shooting Center", "Whittier");

// ─── SKATEBOARDING (Street) ──────────────────────────────────
const skateboardingStreet: OlympicEvent[] = genSessions("SKB", 1, [
  { date: "2028-07-18", sessionType: "Preliminary", description: "Men's Street Preliminary", startTime: "12:00", endTime: "15:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Men's Street Final", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Women's Street Preliminary", startTime: "12:00", endTime: "15:00" },
  { date: "2028-07-20", sessionType: "Final", description: "Women's Street Final", startTime: "17:00", endTime: "20:00" },
], "Skateboarding", "Valley Complex 1", "Valley");

// ─── SKATEBOARDING (Park) ────────────────────────────────────
const skateboardingPark: OlympicEvent[] = genSessions("SKB", 5, [
  { date: "2028-07-25", sessionType: "Preliminary", description: "Men's Park Preliminary", startTime: "12:00", endTime: "15:00" },
  { date: "2028-07-25", sessionType: "Final", description: "Men's Park Final", startTime: "17:00", endTime: "20:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Women's Park Preliminary", startTime: "12:00", endTime: "15:00" },
  { date: "2028-07-27", sessionType: "Final", description: "Women's Park Final", startTime: "17:00", endTime: "20:00" },
], "Skateboarding", "Valley Complex 2", "Valley");

// ─── SPORT CLIMBING ──────────────────────────────────────────
const sportClimbing: OlympicEvent[] = genSessions("CLB", 1, [
  { date: "2028-07-24", sessionType: "Preliminary", description: "Men's Boulder/Lead Qualification", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Women's Boulder/Lead Qualification", startTime: "17:00", endTime: "21:00" },
  { date: "2028-07-25", sessionType: "Semifinal", description: "Men's Boulder/Lead Semifinal", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-25", sessionType: "Semifinal", description: "Women's Boulder/Lead Semifinal", startTime: "17:00", endTime: "21:00" },
  { date: "2028-07-26", sessionType: "Final", description: "Men's Boulder/Lead Final", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-26", sessionType: "Final", description: "Women's Boulder/Lead Final", startTime: "17:00", endTime: "21:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Men's/Women's Speed Qualification", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Men's/Women's Speed Final", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-29", sessionType: "Preliminary", description: "Mixed Team Qualification", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Mixed Team Final", startTime: "17:00", endTime: "21:00" },
], "Sport Climbing", "Long Beach Climbing Theater", "Long Beach");

// ─── SQUASH ──────────────────────────────────────────────────
const squash: OlympicEvent[] = genSessions("SQU", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Round of 32", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Round of 32", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Round of 16", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-18", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-18", sessionType: "Quarterfinal", description: "Men's/Women's Quarterfinal", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-20", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-20", sessionType: "Semifinal", description: "Men's/Women's Semifinal", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-24", sessionType: "Bronze", description: "Men's/Women's Bronze Medal Match", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-24", sessionType: "Final", description: "Men's/Women's Gold Medal Match", startTime: "18:00", endTime: "22:00" },
], "Squash", "Comcast Squash Center at Universal Studios", "Universal City");

// ─── SURFING ─────────────────────────────────────────────────
const surfing: OlympicEvent[] = genSessions("SRF", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Men's/Women's Round 1", startTime: "07:00", endTime: "15:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Men's/Women's Round 2, Round 3", startTime: "07:00", endTime: "15:00" },
  { date: "2028-07-17", sessionType: "Semifinal", description: "Men's/Women's Quarterfinal, Semifinal", startTime: "07:00", endTime: "15:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Men's/Women's Bronze Medal Heat, Gold Medal Heat", startTime: "07:00", endTime: "15:00" },
], "Surfing", "Trestles State Beach", "Trestles Beach");

// ─── SWIMMING ────────────────────────────────────────────────
const swimming: OlympicEvent[] = genSessions("SWM", 1, [
  { date: "2028-07-22", sessionType: "Preliminary", description: "Swimming Heats", startTime: "09:30", endTime: "11:30" },
  { date: "2028-07-22", sessionType: "Final", description: "Swimming Finals", startTime: "18:00", endTime: "20:00" },
  { date: "2028-07-23", sessionType: "Preliminary", description: "Swimming Heats", startTime: "09:30", endTime: "11:30" },
  { date: "2028-07-23", sessionType: "Final", description: "Swimming Finals", startTime: "18:00", endTime: "20:00" },
  { date: "2028-07-24", sessionType: "Preliminary", description: "Swimming Heats", startTime: "09:30", endTime: "11:30" },
  { date: "2028-07-24", sessionType: "Final", description: "Swimming Finals", startTime: "18:00", endTime: "20:00" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Swimming Heats", startTime: "09:30", endTime: "11:00" },
  { date: "2028-07-25", sessionType: "Final", description: "Swimming Finals", startTime: "18:00", endTime: "20:00" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Swimming Heats", startTime: "09:30", endTime: "11:30" },
  { date: "2028-07-26", sessionType: "Final", description: "Swimming Finals", startTime: "18:00", endTime: "20:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Swimming Heats", startTime: "09:30", endTime: "11:30" },
  { date: "2028-07-27", sessionType: "Final", description: "Swimming Finals", startTime: "18:00", endTime: "20:00" },
  { date: "2028-07-28", sessionType: "Preliminary", description: "Swimming Heats", startTime: "09:30", endTime: "11:30" },
  { date: "2028-07-28", sessionType: "Final", description: "Swimming Finals", startTime: "18:00", endTime: "20:00" },
  { date: "2028-07-29", sessionType: "Preliminary", description: "Swimming Heats", startTime: "09:30", endTime: "11:30" },
  { date: "2028-07-29", sessionType: "Final", description: "Swimming Finals", startTime: "18:00", endTime: "20:00" },
  { date: "2028-07-30", sessionType: "Final", description: "Swimming Finals", startTime: "15:00", endTime: "16:30" },
], "Swimming", "2028 Stadium", "Inglewood");

// ─── ARTISTIC SWIMMING ───────────────────────────────────────
const artisticSwimming: OlympicEvent[] = genSessions("SWA", 1, [
  { date: "2028-07-25", sessionType: "Preliminary", description: "Team Technical Routine", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Team Free Routine", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Team Acrobatic Routine", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Duet Final", startTime: "14:00", endTime: "17:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Team Final", startTime: "14:00", endTime: "17:00" },
], "Artistic Swimming", "Long Beach Aquatics Center", "Long Beach");

// ─── ATHLETICS (Track & Field) ───────────────────────────────
const athletics: OlympicEvent[] = genSessions("ATH", 1, [
  { date: "2028-07-15", sessionType: "Preliminary", description: "Track & Field Day 1 - Heats", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-15", sessionType: "Final", description: "Track & Field Day 1 - Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-16", sessionType: "Preliminary", description: "Track & Field Day 2 - Heats", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-16", sessionType: "Final", description: "Track & Field Day 2 - Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-17", sessionType: "Preliminary", description: "Track & Field Day 3 - Heats", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-17", sessionType: "Final", description: "Track & Field Day 3 - Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-18", sessionType: "Preliminary", description: "Track & Field Day 4 - Heats", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-18", sessionType: "Final", description: "Track & Field Day 4 - Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-19", sessionType: "Preliminary", description: "Track & Field Day 5 - Heats", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-19", sessionType: "Final", description: "Track & Field Day 5 - Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-20", sessionType: "Preliminary", description: "Track & Field Day 6 - Heats", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-20", sessionType: "Final", description: "Track & Field Day 6 - Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-21", sessionType: "Preliminary", description: "Track & Field Day 7 - Heats", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-21", sessionType: "Final", description: "Track & Field Day 7 - Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-22", sessionType: "Final", description: "Track & Field Day 8 - Finals", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-23", sessionType: "Final", description: "Track & Field Day 9 - Finals", startTime: "09:00", endTime: "12:00" },
  { date: "2028-07-24", sessionType: "Final", description: "Track & Field Day 10 - Finals", startTime: "09:00", endTime: "12:00" },
], "Athletics", "LA Memorial Coliseum", "Exposition Park");

// ─── ATHLETICS (Race Walk) ───────────────────────────────────
const raceWalk: OlympicEvent[] = [
  { sessionCode: "ATH18", sport: "Athletics", venue: "TBD", zone: "TBD", date: "2028-07-27", sessionType: "Final", description: "Men's/Women's 20km Race Walk, Mixed Team Race Walk Relay", startTime: "07:00", endTime: "11:00" },
];

// ─── ATHLETICS (Marathon) ────────────────────────────────────
const marathon: OlympicEvent[] = [
  { sessionCode: "ATH19", sport: "Athletics", venue: "Venice Beach Boardwalk", zone: "Venice", date: "2028-07-29", sessionType: "Final", description: "Women's Marathon", startTime: "06:00", endTime: "09:00" },
  { sessionCode: "ATH20", sport: "Athletics", venue: "Venice Beach Boardwalk", zone: "Venice", date: "2028-07-30", sessionType: "Final", description: "Men's Marathon", startTime: "06:00", endTime: "09:00" },
];

// ─── TABLE TENNIS ────────────────────────────────────────────
const tableTennis: OlympicEvent[] = (() => {
  const events: OlympicEvent[] = [];
  const schedule: Array<{ date: string; type: string; desc: string; start: string; end: string }> = [];
  // Preliminary rounds Jul 15-22 (3 sessions per day)
  const prelimDates = [
    "2028-07-15", "2028-07-16", "2028-07-17", "2028-07-18",
    "2028-07-19", "2028-07-20", "2028-07-21", "2028-07-22",
  ];
  const dailyTimes = [
    { s: "10:00", e: "13:00" }, { s: "15:00", e: "18:00" }, { s: "20:00", e: "23:00" },
  ];
  for (const d of prelimDates) {
    for (const t of dailyTimes) {
      schedule.push({ date: d, type: "Preliminary", desc: "Men's/Women's Singles, Doubles, Mixed Doubles", start: t.s, end: t.e });
    }
  }
  // KO + Finals: Jul 23-29
  const finalDates = [
    "2028-07-23", "2028-07-24", "2028-07-25", "2028-07-26",
    "2028-07-27", "2028-07-28", "2028-07-29",
  ];
  const finalTypes = ["Quarterfinal", "Quarterfinal", "Semifinal", "Semifinal", "Final", "Final", "Final"];
  const finalDescs = [
    "Men's/Women's Singles Quarterfinal, Mixed Doubles Semifinal",
    "Men's/Women's Singles Quarterfinal, Mixed Doubles Final",
    "Men's/Women's Singles Semifinal",
    "Men's/Women's Doubles Semifinal",
    "Men's/Women's Singles Bronze/Gold Medal Match",
    "Men's/Women's Doubles Bronze/Gold Medal Match",
    "Team Event Finals",
  ];
  for (let i = 0; i < finalDates.length; i++) {
    schedule.push({ date: finalDates[i], type: finalTypes[i], desc: finalDescs[i], start: "10:00", end: "13:00" });
    if (i < 5) {
      schedule.push({ date: finalDates[i], type: finalTypes[i], desc: finalDescs[i], start: "15:00", end: "18:00" });
    }
    schedule.push({ date: finalDates[i], type: finalTypes[i], desc: finalDescs[i], start: "20:00", end: "23:00" });
  }
  for (let i = 0; i < Math.min(schedule.length, 37); i++) {
    events.push({
      sessionCode: `TTE${String(i + 1).padStart(2, "0")}`,
      sport: "Table Tennis",
      venue: "LA Convention Center Hall 3",
      zone: "DTLA",
      date: schedule[i].date,
      sessionType: schedule[i].type,
      description: schedule[i].desc,
      startTime: schedule[i].start,
      endTime: schedule[i].end,
    });
  }
  return events;
})();

// ─── TAEKWONDO ───────────────────────────────────────────────
const taekwondo: OlympicEvent[] = genSessions("TKW", 1, [
  { date: "2028-07-26", sessionType: "Preliminary", description: "Men's/Women's Weight Class Rounds of 16/QF", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-26", sessionType: "Final", description: "Men's/Women's Weight Class Semifinal, Bronze, Gold", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Men's/Women's Weight Class Rounds of 16/QF", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-27", sessionType: "Final", description: "Men's/Women's Weight Class Semifinal, Bronze, Gold", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-28", sessionType: "Preliminary", description: "Men's/Women's Weight Class Rounds of 16/QF", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Men's/Women's Weight Class Semifinal, Bronze, Gold", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-29", sessionType: "Preliminary", description: "Men's/Women's Weight Class Rounds of 16/QF", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Men's/Women's Weight Class Semifinal, Bronze, Gold", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-29", sessionType: "Preliminary", description: "Mixed Team Preliminary", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Mixed Team Bronze, Gold", startTime: "18:00", endTime: "22:00" },
  { date: "2028-07-29", sessionType: "Preliminary", description: "Additional Weight Class Preliminary", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Additional Weight Class Finals", startTime: "18:00", endTime: "22:00" },
], "Taekwondo", "LA Convention Center Hall 1", "DTLA");

// ─── TENNIS ──────────────────────────────────────────────────
const tennis: OlympicEvent[] = (() => {
  const events: OlympicEvent[] = [];
  const schedule: Array<{ date: string; type: string; desc: string; start: string; end: string; venue: string }> = [];
  // 10 days of tennis: Jul 19-28
  const dates = [
    "2028-07-19", "2028-07-20", "2028-07-21", "2028-07-22",
    "2028-07-23", "2028-07-24", "2028-07-25", "2028-07-26",
    "2028-07-27", "2028-07-28",
  ];
  const types = [
    "Preliminary", "Preliminary", "Preliminary", "Preliminary",
    "Quarterfinal", "Quarterfinal", "Semifinal", "Semifinal",
    "Bronze", "Final",
  ];
  const descs = [
    "Men's/Women's Singles/Doubles 1st Round",
    "Men's/Women's Singles/Doubles 2nd Round",
    "Men's/Women's Singles/Doubles 3rd Round",
    "Men's/Women's Singles/Doubles Round of 16",
    "Men's/Women's Singles/Doubles Quarterfinal",
    "Men's/Women's Singles/Doubles Quarterfinal",
    "Men's/Women's Singles/Doubles Semifinal",
    "Men's/Women's Singles/Doubles Semifinal",
    "Men's/Women's Singles/Doubles Bronze Medal Match",
    "Men's/Women's Singles/Doubles Gold Medal Match",
  ];
  // Center Court and Outer Courts sessions each day, plus some evening sessions
  for (let i = 0; i < dates.length; i++) {
    // Morning Center Court
    schedule.push({ date: dates[i], type: types[i], desc: descs[i], start: "11:00", end: "15:00", venue: "Carson Center Court" });
    // Afternoon Center Court
    schedule.push({ date: dates[i], type: types[i], desc: descs[i], start: "17:00", end: "21:00", venue: "Carson Center Court" });
    // Outer Courts (first 6 days)
    if (i < 6) {
      schedule.push({ date: dates[i], type: types[i], desc: descs[i], start: "11:00", end: "20:00", venue: "Carson Courts" });
    }
    // Evening Center Court (first 8 days)
    if (i < 8) {
      schedule.push({ date: dates[i], type: types[i], desc: descs[i], start: "21:30", end: "23:30", venue: "Carson Center Court" });
    }
  }
  for (let i = 0; i < Math.min(schedule.length, 41); i++) {
    events.push({
      sessionCode: `TEN${String(i + 1).padStart(2, "0")}`,
      sport: "Tennis",
      venue: schedule[i].venue,
      zone: "Carson",
      date: schedule[i].date,
      sessionType: schedule[i].type,
      description: schedule[i].desc,
      startTime: schedule[i].start,
      endTime: schedule[i].end,
    });
  }
  return events;
})();

// ─── TRAMPOLINE GYMNASTICS ───────────────────────────────────
const trampoline: OlympicEvent[] = genSessions("GTR", 1, [
  { date: "2028-07-21", sessionType: "Final", description: "Men's Trampoline Final", startTime: "13:00", endTime: "14:30" },
  { date: "2028-07-21", sessionType: "Final", description: "Women's Trampoline Final", startTime: "16:00", endTime: "17:30" },
], "Trampoline Gymnastics", "DTLA Arena", "DTLA");

// ─── TRIATHLON ───────────────────────────────────────────────
const triathlon: OlympicEvent[] = genSessions("TRI", 1, [
  { date: "2028-07-15", sessionType: "Final", description: "Women's Individual Triathlon", startTime: "08:00", endTime: "10:00" },
  { date: "2028-07-16", sessionType: "Final", description: "Men's Individual Triathlon", startTime: "08:00", endTime: "10:00" },
  { date: "2028-07-20", sessionType: "Final", description: "Mixed Relay Triathlon", startTime: "08:00", endTime: "10:00" },
], "Triathlon", "Venice Beach", "Venice");

// ─── VOLLEYBALL ──────────────────────────────────────────────
const volleyball: OlympicEvent[] = (() => {
  const events: OlympicEvent[] = [];
  const schedule: Array<{ date: string; type: string; desc: string; start: string; end: string }> = [];
  // Group stage: Jul 15-24 (4-5 sessions per day)
  const groupDates = [
    "2028-07-15", "2028-07-16", "2028-07-17", "2028-07-18",
    "2028-07-19", "2028-07-20", "2028-07-21", "2028-07-22",
    "2028-07-23", "2028-07-24",
  ];
  const groupTimes = [
    { s: "09:00", e: "11:00" }, { s: "13:00", e: "15:00" },
    { s: "17:00", e: "19:00" }, { s: "21:00", e: "23:00" },
  ];
  for (const d of groupDates) {
    for (const t of groupTimes) {
      schedule.push({ date: d, type: "Preliminary", desc: "Men's/Women's Pool Round", start: t.s, end: t.e });
    }
  }
  // QF: Jul 25-26
  for (const d of ["2028-07-25", "2028-07-26"]) {
    schedule.push({ date: d, type: "Quarterfinal", desc: "Men's/Women's Quarterfinal", start: "13:00", end: "15:00" });
    schedule.push({ date: d, type: "Quarterfinal", desc: "Men's/Women's Quarterfinal", start: "17:00", end: "19:00" });
    schedule.push({ date: d, type: "Quarterfinal", desc: "Men's/Women's Quarterfinal", start: "21:00", end: "23:00" });
  }
  // SF: Jul 27-28
  schedule.push({ date: "2028-07-27", type: "Semifinal", desc: "Women's Semifinal", start: "17:00", end: "19:00" });
  schedule.push({ date: "2028-07-27", type: "Semifinal", desc: "Women's Semifinal", start: "21:00", end: "23:00" });
  schedule.push({ date: "2028-07-28", type: "Semifinal", desc: "Men's Semifinal", start: "17:00", end: "19:00" });
  schedule.push({ date: "2028-07-28", type: "Semifinal", desc: "Men's Semifinal", start: "21:00", end: "23:00" });
  // Bronze + Gold
  schedule.push({ date: "2028-07-29", type: "Bronze", desc: "Women's Bronze Medal Match", start: "13:00", end: "15:00" });
  schedule.push({ date: "2028-07-29", type: "Final", desc: "Women's Gold Medal Match", start: "18:00", end: "20:00" });
  schedule.push({ date: "2028-07-30", type: "Bronze", desc: "Men's Bronze Medal Match", start: "13:00", end: "15:00" });
  schedule.push({ date: "2028-07-30", type: "Final", desc: "Men's Gold Medal Match", start: "18:00", end: "20:00" });

  for (let i = 0; i < Math.min(schedule.length, 52); i++) {
    events.push({
      sessionCode: `VVO${String(i + 1).padStart(2, "0")}`,
      sport: "Volleyball",
      venue: "Honda Center",
      zone: "Anaheim",
      date: schedule[i].date,
      sessionType: schedule[i].type,
      description: schedule[i].desc,
      startTime: schedule[i].start,
      endTime: schedule[i].end,
    });
  }
  return events;
})();

// ─── WATER POLO ──────────────────────────────────────────────
const waterPolo: OlympicEvent[] = (() => {
  const events: OlympicEvent[] = [];
  const schedule: Array<{ date: string; type: string; desc: string; start: string; end: string }> = [];
  // Group stage: Jul 12-20
  const groupDates = [
    "2028-07-12", "2028-07-13", "2028-07-15", "2028-07-16",
    "2028-07-17", "2028-07-18", "2028-07-19", "2028-07-20",
  ];
  const groupTimes = [
    { s: "10:00", e: "12:00" }, { s: "14:00", e: "16:00" }, { s: "19:00", e: "21:00" },
  ];
  for (const d of groupDates) {
    for (const t of groupTimes) {
      schedule.push({ date: d, type: "Preliminary", desc: "Men's/Women's Group Stage", start: t.s, end: t.e });
    }
  }
  // QF + SF + Finals
  schedule.push({ date: "2028-07-21", type: "Quarterfinal", desc: "Women's Quarterfinal", start: "14:00", end: "16:00" });
  schedule.push({ date: "2028-07-21", type: "Quarterfinal", desc: "Men's Quarterfinal", start: "19:00", end: "21:00" });
  schedule.push({ date: "2028-07-22", type: "Semifinal", desc: "Women's Semifinal", start: "14:00", end: "16:00" });
  schedule.push({ date: "2028-07-23", type: "Final", desc: "Women's Bronze, Women's Gold Medal Match", start: "14:00", end: "18:00" });

  for (let i = 0; i < Math.min(schedule.length, 28); i++) {
    events.push({
      sessionCode: `WPO${String(i + 1).padStart(2, "0")}`,
      sport: "Water Polo",
      venue: "Long Beach Aquatics Center",
      zone: "Long Beach",
      date: schedule[i].date,
      sessionType: schedule[i].type,
      description: schedule[i].desc,
      startTime: schedule[i].start,
      endTime: schedule[i].end,
    });
  }
  return events;
})();

// ─── WEIGHTLIFTING ───────────────────────────────────────────
const weightlifting: OlympicEvent[] = genSessions("WLF", 1, [
  { date: "2028-07-25", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "12:00", endTime: "15:00" },
  { date: "2028-07-25", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-26", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "12:00", endTime: "15:00" },
  { date: "2028-07-26", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-27", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "12:00", endTime: "15:00" },
  { date: "2028-07-27", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "12:00", endTime: "15:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "12:00", endTime: "15:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Men's/Women's Weight Class Final", startTime: "18:00", endTime: "21:00" },
], "Weightlifting", "Peacock Theater", "DTLA");

// ─── WRESTLING ───────────────────────────────────────────────
const wrestling: OlympicEvent[] = genSessions("WRE", 1, [
  { date: "2028-07-24", sessionType: "Preliminary", description: "Greco-Roman/Freestyle Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-24", sessionType: "Final", description: "Greco-Roman/Freestyle Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-25", sessionType: "Preliminary", description: "Greco-Roman/Freestyle Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-25", sessionType: "Final", description: "Greco-Roman/Freestyle Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-26", sessionType: "Preliminary", description: "Greco-Roman/Freestyle Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-26", sessionType: "Final", description: "Greco-Roman/Freestyle Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-27", sessionType: "Preliminary", description: "Freestyle Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-27", sessionType: "Final", description: "Freestyle Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-28", sessionType: "Preliminary", description: "Freestyle Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-28", sessionType: "Final", description: "Freestyle Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-29", sessionType: "Preliminary", description: "Freestyle Elimination Rounds", startTime: "10:00", endTime: "14:00" },
  { date: "2028-07-29", sessionType: "Final", description: "Freestyle Finals", startTime: "18:00", endTime: "21:00" },
  { date: "2028-07-30", sessionType: "Final", description: "Freestyle Finals", startTime: "10:00", endTime: "14:00" },
], "Wrestling", "LA Convention Center Hall 2", "DTLA");

// ─── COMBINE ALL EVENTS ─────────────────────────────────────
export const OLYMPIC_EVENTS: OlympicEvent[] = [
  ...badminton,
  ...baseball,
  ...softball,
  ...basketball,
  ...basketball3x3,
  ...beachVolleyball,
  ...boxingPrelim,
  ...boxingFinals,
  ...canoeSlalom,
  ...canoeSprint,
  ...cricket,
  ...bmxFreestyle,
  ...bmxRacing,
  ...mountainBike,
  ...cyclingRoad,
  ...cyclingTrack,
  ...diving,
  ...equestrian,
  ...fencing,
  ...flagFootball,
  ...footballPrelim,
  ...footballFinals,
  ...golf,
  ...handball,
  ...hockey,
  ...judo,
  ...lacrosse,
  ...modernPentathlon,
  ...openWaterSwimming,
  ...rhythmicGymnastics,
  ...artisticGymnastics,
  ...rowing,
  ...rowingCoastal,
  ...rugbySevens,
  ...sailingWind,
  ...sailingDinghy,
  ...shootingRifle,
  ...shootingShotgun,
  ...skateboardingStreet,
  ...skateboardingPark,
  ...sportClimbing,
  ...squash,
  ...surfing,
  ...swimming,
  ...artisticSwimming,
  ...athletics,
  ...raceWalk,
  ...marathon,
  ...tableTennis,
  ...taekwondo,
  ...tennis,
  ...trampoline,
  ...triathlon,
  ...volleyball,
  ...waterPolo,
  ...weightlifting,
  ...wrestling,
];
