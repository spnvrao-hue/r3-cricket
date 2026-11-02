/**
 * R3 Cricket website content.
 * Update this file to publish your real squad, fixtures, and links.
 * Nothing in the placeholder squad/fixtures below represents verified real-world information.
 */
export const team = {
  name: 'R3 CRICKET',
  shortName: 'R3',
  tagline: 'ALL IN. ALL R3.',
  league: 'TRIANGLE CRICKET LEAGUE',
  tournament: 'MEGA SMASH 2026',
  division: 'DIVISION 07',
  home: 'TRIANGLE, NORTH CAROLINA',
  description:
    'A team built around the love of cricket, the thrill of competition, and the people who make every match matter.',
  leagueUrl: 'https://www.thetcl.org/tournament/2100677/Mega-Smash',
  scorecardUrl: 'https://cricheroes.in/scorecard/26355092/mega-smash/sandstorm-x1-vs-r3',
  email: '', // Enter your team's public email to enable the contact link.
  instagramUrl: '', // Optional public team Instagram URL.
};

// EXAMPLE CARDS ONLY. Replace all placeholders with your actual team roster.
export const players = [
  { id: 1, name: 'Player 01', number: '01', role: 'Batter', captain: false },
  { id: 2, name: 'Player 02', number: '02', role: 'All-Rounder', captain: false },
  { id: 3, name: 'Player 03', number: '03', role: 'Bowler', captain: false },
  { id: 4, name: 'Player 04', number: '04', role: 'Wicketkeeper', captain: false },
  { id: 5, name: 'Player 05', number: '05', role: 'Batter', captain: false },
  { id: 6, name: 'Player 06', number: '06', role: 'Bowler', captain: false },
  { id: 7, name: 'Player 07', number: '07', role: 'All-Rounder', captain: false },
  { id: 8, name: 'Player 08', number: '08', role: 'Batter', captain: false },
];

// EXAMPLE UPCOMING FIXTURES. Dates and opponents are intentionally unfilled.
export const upcomingMatches = [
  { id: 'upcoming-1', opponent: 'Opponent TBA', date: 'DATE TBA', time: 'TIME TBA', ground: 'GROUND TBA', kind: 'League match' },
  { id: 'upcoming-2', opponent: 'Opponent TBA', date: 'DATE TBA', time: 'TIME TBA', ground: 'GROUND TBA', kind: 'League match' },
];

// Known scorecard link, with no unverified scores, outcome, or match date.
export const featuredMatch = {
  opponent: 'Sandstorm X1',
  tournament: 'Mega Smash',
  heading: 'MATCH ARCHIVE',
  scorecardUrl: team.scorecardUrl,
};

export const principles = [
  { number: '01', title: 'PLAY TOGETHER', text: 'Every run, catch, and wicket comes from the work we put in as a team.' },
  { number: '02', title: 'COMPETE HARD', text: 'Bring focus, respect, and intensity to every game, no matter the scoreboard.' },
  { number: '03', title: 'ENJOY THE GAME', text: 'Great cricket starts with great people. The memories matter just as much.' },
];
