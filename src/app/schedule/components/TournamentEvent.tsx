type TournamentEventProps = {
  event: {
    name: string;
    date: string;
    time: string;
    prizePool: number;
    maxParticipants: number;
    open: boolean;
  };
};

const TournamentEvent: React.FC<TournamentEventProps> = ({ event }) => {
  const { name, date, time, prizePool, maxParticipants, open } = event;

  return (
    <div className="tournament-event">
      <h2>{name}</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Prize Pool: ${prizePool}</p>
      <p>Max Participants: {maxParticipants}</p>
      <p>Status: {open ? "Open for Registration" : "Closed"}</p>
    </div>
  );
};

export default TournamentEvent;
