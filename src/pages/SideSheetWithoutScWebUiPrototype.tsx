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

function SideSheetWithoutScWebUiPrototype() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          background: '#675DF4',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '8px 20px',
          fontWeight: 600,
          fontSize: 16,
          cursor: 'pointer',
        }}
        onClick={() => setOpen(true)}
      >
        Open
      </button>
      {open && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: 480,
          background: '#F4F6FB',
          boxShadow: '-4px 0 24px rgba(31,37,51,0.08)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '32px 32px 0 32px',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <Calendar size={16} color="#4740D4" />
                <span style={{
                  color: '#4740D4',
                  fontWeight: 700,
                  fontSize: 10,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  fontFamily: 'Noto Sans, sans-serif',
                }}>SCHEDULE</span>
              </div>
              <div style={{
                color: '#1F2533',
                fontWeight: 600,
                fontSize: 20,
                fontFamily: 'Noto Sans, sans-serif',
                lineHeight: '28px',
                maxWidth: 360,
              }}>
                Coles health and safety inspection for Deli Workers - Maroubra Coles - Every day
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginLeft: 16,
                marginTop: 4,
              }}
            >
              <XSymbol size={24} color="#545f70" />
            </button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
            <div style={{
              background: '#fff',
              borderRadius: 12,
              padding: 24,
              marginBottom: 32,
              boxShadow: '0 2px 8px rgba(31,37,51,0.04)',
            }}>
              <div style={{
                color: '#1F2533',
                fontWeight: 600,
                fontSize: 18,
                fontFamily: 'Noto Sans, sans-serif',
                marginBottom: 24,
              }}>
                Details
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <DetailRow icon={<User size={18} color="#545f70" />} label="Assigned by" value="Josh Rat" />
                <DetailRow icon={<Layout size={18} color="#545f70" />} label="Template" value="Coles health and safety inspection" />
                <DetailRow icon={<ArrowRotate size={18} color="#545f70" />} label="Repeats" value="Every day" />
                <DetailRow icon={<CalendarCheck size={18} color="#545f70" />} label="Requirement" value="Only one assignee needs to complete" />
                <DetailRow icon={<LockOpen size={18} color="#545f70" />} label="Available from" value="9:00 AM 14/08/2024" />
                <DetailRow icon={<Lock size={18} color="#545f70" />} label="Due" value="5:00 PM 17/08/2024" />
                <DetailRow icon={<CalendarExclamation size={18} color="#545f70" />} label="Status" value={<span style={{ color: '#4740D4', fontWeight: 500, cursor: 'pointer' }}>To do</span>} />
              </div>
              <div style={{
                background: '#FFFAE5',
                borderRadius: 8,
                padding: 16,
                marginTop: 24,
                marginBottom: 8,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
              }}>
                <Calendar size={22} color="#B45309" style={{ marginTop: 2 }} />
                <div>
                  <div style={{ color: '#B45309', fontWeight: 600, fontSize: 16, marginBottom: 4, fontFamily: 'Noto Sans, sans-serif' }}>
                    Schedule overdue
                  </div>
                  <div style={{ color: '#92400E', fontSize: 14, fontFamily: 'Noto Sans, sans-serif' }}>
                    Please complete your inspection as soon as possible to avoid missing the schedule.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 16,
            padding: '0 32px 32px 32px',
            background: '#F4F6FB',
          }}>
            <button
              style={{
                height: 44,
                minWidth: 120,
                borderRadius: 8,
                border: '1px solid #675DF4',
                background: '#fff',
                color: '#675DF4',
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
              }}
            >
              Won't do
            </button>
            <button
              style={{
                height: 44,
                minWidth: 120,
                borderRadius: 8,
                border: 'none',
                background: '#675DF4',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
              }}
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
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {icon}
      <span style={{ minWidth: 120, color: '#545f70', fontWeight: 500, fontSize: 15, fontFamily: 'Noto Sans, sans-serif' }}>{label}</span>
      <span style={{ marginLeft: 8, color: '#1f2533', fontSize: 15, fontFamily: 'Noto Sans, sans-serif' }}>{value}</span>
    </div>
  );
}

export default SideSheetWithoutScWebUiPrototype; 