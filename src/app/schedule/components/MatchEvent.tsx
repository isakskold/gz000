type MatchEventProps = {
  event: {
    date: string;
    time: string;
    prizePool: number;
    teams: {
      name: string;
      players: string[];
    }[];
  };
};

const MatchEvent: React.FC<MatchEventProps> = ({ event }) => {
  const { date, time, prizePool, teams } = event;

  return (
    <div className="match-event-card border border-gray-300 rounded-lg p-6 shadow-lg">
      {/* Teams vs Header */}
      <div className="flex justify-between mb-4 text-white font-bold text-xl">
        <h3>{teams[0].name}</h3>
        <p>vs</p>
        <h3>{teams[1].name}</h3>
      </div>

      {/* Teams and Players */}
      <div className="text-white">
        <div className="mb-4">
          <h4 className="font-semibold text-lg">Team 1 Players:</h4>
          <ul className="list-disc pl-5">
            {teams[0].players.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Team 2 Players:</h4>
          <ul className="list-disc pl-5">
            {teams[1].players.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Event Info */}
      <div className="mt-6 text-white">
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Prize Pool:</strong> ${prizePool}
        </p>
      </div>
    </div>
  );
};

export default MatchEvent;
