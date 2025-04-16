import { useState } from "react";
import RequestCard from "./components/RequestCard";
import RequestQueue from "./components/RequestQueue";
import StatsPanel from "./components/StatsPanel";
import ActionButtons from "./components/ActionButtons";
import NotificationBar from "./components/NotificationBar";
import requestsData from "./data/requests.json";
import rentsdueback from "./assets/rentsdueback.png";
import "./App.css";

const initialStats = {
  bank: 10000,
  properties: 3,
  satisfaction: 33,
};

function App() {
  const [requests, setRequests] = useState(requestsData);
  const [currentId, setCurrentId] = useState(requests[0]?.id || null);
  const [stats, setStats] = useState(initialStats);
  const [notification, setNotification] = useState(
    "A new request has come in from property #" + (requests[0]?.propertyId || "?")
  );

  const currentRequest = requests.find((r) => r.id === currentId);
  const queue = requests.filter((r) => r.id !== currentId);

  const handleSelect = (id) => {
    setCurrentId(id);
    setNotification(`Viewing request for unit #${requests.find(r => r.id === id)?.unit}`);
  };

  const handleApprove = () => {
    if (!currentRequest) return;
    setStats((s) => ({
      ...s,
      bank: s.bank - currentRequest.cost,
      satisfaction: Math.min(100, s.satisfaction + 10),
    }));
    setNotification("Request approved! Work order sent.");
    nextRequest();
  };

  const handleDeny = () => {
    setStats((s) => ({
      ...s,
      satisfaction: Math.max(0, s.satisfaction - 10),
    }));
    setNotification("Request denied. Tenant is not happy.");
    nextRequest();
  };

  const handlePostpone = () => {
    if (!currentRequest) return;
    setRequests((reqs) => [...reqs.filter((r) => r.id !== currentId), currentRequest]);
    setNotification("Request postponed. Moved to back of queue.");
    setTimeout(() => {
      setCurrentId(requests.filter((r) => r.id !== currentId)[0]?.id || null);
    }, 100);
  };

  const nextRequest = () => {
    const next = queue[0];
    setTimeout(() => {
      setCurrentId(next?.id || null);
    }, 100);
    setRequests((reqs) => reqs.filter((r) => r.id !== currentId));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-mono">
      {/* Background image at full opacity */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${rentsdueback})`,
        }}
      />
      {/* Main game UI big card */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl min-h-[90vh] py-8 px-2">
        <div className="bg-gray-100 bg-opacity-95 rounded-3xl shadow-2xl p-8 w-full max-w-5xl flex flex-col items-center overflow-hidden border-4 border-yellow-800">
          {/* Title Card */}
          <div className="mb-8 px-8 py-4 rounded-xl bg-gray-100 bg-opacity-95 text-black shadow-lg w-full text-center overflow-hidden">
            <h1 className="text-5xl font-extrabold tracking-widest drop-shadow-lg whitespace-pre-line break-words">
              RENT'S DUE!
            </h1>
          </div>
          {/* Main content row */}
          <div className="flex flex-row w-full gap-8 justify-center items-start">
            {/* Request Queue Card */}
            <div className="bg-gray-100 bg-opacity-95 text-black rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[220px] max-w-xs overflow-hidden">
              <RequestQueue queue={queue} onSelect={handleSelect} selectedId={currentId} />
            </div>
            {/* Main Request Card + Actions Card */}
            <div className="flex flex-col items-center gap-6 flex-1 min-w-[350px] max-w-xl">
              <div className="bg-gray-100 bg-opacity-95 text-black rounded-xl shadow-lg p-6 w-full flex flex-col items-center overflow-hidden">
                <RequestCard request={currentRequest} />
              </div>
              <div className="bg-gray-100 bg-opacity-95 text-black rounded-xl shadow-lg p-4 w-full flex flex-col items-center overflow-hidden">
                <ActionButtons onApprove={handleApprove} onDeny={handleDeny} onPostpone={handlePostpone} />
              </div>
            </div>
            {/* Stats Card */}
            <div className="bg-gray-100 bg-opacity-95 text-black rounded-xl shadow-lg p-6 flex flex-col items-center min-w-[200px] max-w-xs overflow-hidden">
              <StatsPanel bank={stats.bank} properties={stats.properties} satisfaction={stats.satisfaction} />
            </div>
          </div>
          {/* Notification bar as a card at the bottom */}
          {notification && (
            <div className="w-full flex justify-center mt-8">
              <div className="bg-gray-100 bg-opacity-95 text-black rounded-xl shadow-lg px-8 py-3 max-w-full overflow-hidden">
                <NotificationBar message={notification} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
