import { useState } from 'react';
import {
  Calendar,
  User,
  Layout,
  ArrowRotate,
  CalendarCheck,
  LockOpen,
  Lock,
  CalendarExclamation,
  XSymbol,
} from '@safetyculture/icons-react';

function TailwindSideSheetPrototype() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        className="fixed left-4"
        style={{ top: 'var(--spacing-s4)', background: 'var(--light-purple-50)', color: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-s2) var(--spacing-s5)', fontWeight: 600, fontSize: 16, boxShadow: 'var(--shadow-sm)', border: 'none', cursor: 'pointer' }}
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      {open && (
        <div className="fixed top-0 right-0 h-full z-50 flex flex-col" style={{ width: '480px', background: 'var(--light-gray-10)', right: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          {/* Header */}
          <div className="flex items-start justify-between" style={{ padding: 'var(--spacing-s8) var(--spacing-s8) 0 var(--spacing-s8)' }}>
            <div>
              <div className="flex items-center mb-2" style={{ gap: 'var(--spacing-s2)' }}>
                <Calendar size={16} color="var(--light-purple-70)" />
                <span style={{ color: 'var(--light-purple-70)', fontWeight: 700, fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'Noto Sans, sans-serif' }}>schedule</span>
              </div>
              <div style={{ color: 'var(--light-gray-100)', fontWeight: 600, fontSize: 20, fontFamily: 'Noto Sans, sans-serif', lineHeight: '28px', maxWidth: 360 }}>
                Coles health and safety inspection for Deli Workers - Maroubra Coles - Every day
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{ marginLeft: 'var(--spacing-s4)', marginTop: 'var(--spacing-s1)', padding: 'var(--spacing-s1)', borderRadius: 'var(--radius-full)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <XSymbol size={24} color="var(--light-gray-70)" />
            </button>
          </div>
          {/* Body */}
          <div className="flex-1 overflow-y-auto" style={{ padding: 'var(--spacing-s8)' }}>
            <div className="bg-white rounded-xl" style={{ padding: 'var(--spacing-s6)', marginBottom: 'var(--spacing-s8)', background: '#fff' }}>
              <div style={{ color: 'var(--light-gray-100)', fontWeight: 600, fontSize: 18, fontFamily: 'Noto Sans, sans-serif', marginBottom: 'var(--spacing-s6)' }}>Details</div>
              <div className="flex flex-col" style={{ gap: 'var(--spacing-s5)' }}>
                <DetailRow icon={<User size={18} color="var(--light-gray-70)" />} label="Assigned by" value="Josh Rat" />
                <DetailRow icon={<Layout size={18} color="var(--light-gray-70)" />} label="Template" value="Coles health and safety inspection" />
                <DetailRow icon={<ArrowRotate size={18} color="var(--light-gray-70)" />} label="Repeats" value="Every day" />
                <DetailRow icon={<CalendarCheck size={18} color="var(--light-gray-70)" />} label="Requirement" value="Only one assignee needs to complete" />
                <DetailRow icon={<LockOpen size={18} color="var(--light-gray-70)" />} label="Available from" value="9:00 AM 14/08/2024" />
                <DetailRow icon={<Lock size={18} color="var(--light-gray-70)" />} label="Due" value="5:00 PM 17/08/2024" />
                <DetailRow icon={<CalendarExclamation size={18} color="var(--light-gray-70)" />} label="Status" value={<span style={{ color: 'var(--light-purple-70)', fontWeight: 500, cursor: 'pointer' }}>To do</span>} />
              </div>
              <div className="rounded-lg flex items-start" style={{ background: 'var(--light-orange-05)', padding: 'var(--spacing-s4)', marginTop: 'var(--spacing-s6)', marginBottom: 'var(--spacing-s2)', gap: 'var(--spacing-s3)' }}>
                <Calendar size={22} color="var(--light-orange-80)" style={{ marginTop: 2 }} />
                <div>
                  <div style={{ color: 'var(--light-orange-80)', fontWeight: 600, fontSize: 16, marginBottom: 'var(--spacing-s1)', fontFamily: 'Noto Sans, sans-serif' }}>Schedule overdue</div>
                  <div style={{ color: 'var(--light-orange-90)', fontSize: 14, fontFamily: 'Noto Sans, sans-serif' }}>Please complete your inspection as soon as possible to avoid missing the schedule.</div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-end bg-[var(--light-gray-10)]" style={{ gap: 'var(--spacing-s4)', padding: '0 var(--spacing-s8) var(--spacing-s8) var(--spacing-s8)' }}>
            <button
              style={{ height: '44px', minWidth: '120px', borderRadius: 'var(--radius-lg)', border: `1px solid var(--light-purple-50)`, background: 'white', color: 'var(--light-purple-50)', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
            >
              Won't do
            </button>
            <button
              style={{ height: '44px', minWidth: '120px', borderRadius: 'var(--radius-lg)', border: 'none', background: 'var(--light-purple-50)', color: 'white', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}
            >
              Start inspection
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center" style={{ gap: 'var(--spacing-s3)' }}>
      {icon}
      <span style={{ minWidth: 120, color: 'var(--light-gray-70)', fontWeight: 500, fontSize: 15, fontFamily: 'Noto Sans, sans-serif' }}>{label}</span>
      <span style={{ marginLeft: 'var(--spacing-s2)', color: 'var(--light-gray-100)', fontSize: 15, fontFamily: 'Noto Sans, sans-serif' }}>{value}</span>
    </div>
  );
}

export default TailwindSideSheetPrototype; 