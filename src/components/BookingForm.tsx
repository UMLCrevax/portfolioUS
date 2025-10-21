import { useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function BookingForm({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:4000/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, date, time, notes }),
      });
      if (!res.ok) throw new Error('Errore server');
      setSuccess('Prenotazione ricevuta — controlla la tua email.');
      setName(''); setEmail(''); setDate(''); setTime(''); setNotes('');
    } catch (err) {
      setError('Impossibile inviare. Controlla il server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0F0F0F] rounded-3xl p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Chiudi"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-[#0F0F0F] dark:text-white mb-4">
          Prenota una call
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Scegli giorno e orario. Ti invieremo conferma via email.
        </p>

        <form onSubmit={submit} className="grid grid-cols-1 gap-4">
          <input
            className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] text-[#0F0F0F] dark:text-white"
            placeholder="Nome"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] text-[#0F0F0F] dark:text-white"
            placeholder="Email"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] text-[#0F0F0F] dark:text-white"
              type="date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] text-[#0F0F0F] dark:text-white"
              type="time"
              value={time}
              required
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <textarea
            className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] text-[#0F0F0F] dark:text-white"
            placeholder="Note (opzionale)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#007AFF] hover:bg-[#0051D5] text-white px-6 py-3 rounded-full font-medium transition"
            >
              {loading ? 'Invio...' : 'Conferma prenotazione'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              Annulla
            </button>
          </div>

          {success && <div className="text-green-600 mt-2">{success}</div>}
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
}