import { useState } from 'react';
import {
  SideSheet,
  FooterDefaultLayout,
  PolymorphicButton,
  Badge,
  Typography,
} from '@safetyculture/sc-web-ui';
import {
  Calendar,
  User,
  Layout,
  ArrowRotate,
  CalendarCheck,
  LockOpen,
  Lock,
  CalendarExclamation,
} from '@safetyculture/icons-react';

function SideSheetWithMcpPrototype() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <PolymorphicButton 
        variant="primary" 
        size="medium" 
        onClick={() => setOpen(true)}
      >
        Open
      </PolymorphicButton>
      <SideSheet mode="overlay" isOpen={open} onClose={() => setOpen(false)}>
        <SideSheet.HeaderDefaultLayout
          title={
            <Typography component="span" variant="titleMedium">
              Coles health and safety inspection for Deli Workers - Maroubra Coles - Every day
            </Typography>
          }
          contentSlot={
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Calendar size={12} color="#4740D4" />
              <Typography component="span" variant="overlineSmall" style={{ color: '#4740D4' }}>
                schedule
              </Typography>
            </div>
          }
        />
        <SideSheet.BodyDefaultLayout
          contentSlot={
            <div
              style={{
                maxWidth: 600,
                width: '100%',
                margin: '0 auto',
                boxSizing: 'border-box',
                padding: 16,
              }}
            >
              <div style={{ background: '#fff', borderRadius: 8, padding: 0, marginBottom: 24 }}>
                <div style={{ padding: '16px 16px 0 16px' }}>
                  <Typography component="div" variant="titleMedium" style={{ marginBottom: 16 }}>
                    Details
                  </Typography>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <DetailRow icon={<User size={16} color="#545f70" />} label="Assigned by" value={<Typography component="span" variant="bodyMedium">Josh Rat</Typography>} />
                    <DetailRow icon={<Layout size={16} color="#545f70" />} label="Template" value={<Typography component="span" variant="bodyMedium">Coles health and safety inspection</Typography>} />
                    <DetailRow icon={<ArrowRotate size={16} color="#545f70" />} label="Repeats" value={<Typography component="span" variant="bodyMedium">Every day</Typography>} />
                    <DetailRow icon={<CalendarCheck size={16} color="#545f70" />} label="Requirement" value={<Typography component="span" variant="bodyMedium">Only one assignee needs to complete</Typography>} />
                    <DetailRow icon={<LockOpen size={16} color="#545f70" />} label="Available from" value={<Typography component="span" variant="bodyMedium">9:00 AM 14/08/2024</Typography>} />
                    <DetailRow icon={<Lock size={16} color="#545f70" />} label="Due" value={<Typography component="span" variant="bodyMedium">5:00 PM 17/08/2024</Typography>} />
                    <DetailRow icon={<CalendarExclamation size={16} color="#545f70" />} label="Status" value={<Typography component="span" variant="bodyMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>To do</Typography>} />
                  </div>
                </div>
                <div style={{ background: '#FFFAE5', borderRadius: 8, margin: 16, padding: 16, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <Calendar size={24} color="#B45309" style={{ marginTop: 2 }} />
                  <div>
                    <Typography component="div" variant="titleSmall" style={{ color: '#B45309', marginBottom: 4 }}>
                      Schedule overdue
                    </Typography>
                    <Typography component="div" variant="bodySmall" style={{ color: '#92400E' }}>
                      Please complete your inspection as soon as possible to avoid missing the schedule.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <FooterDefaultLayout
          primaryActionSlot={
            <PolymorphicButton 
              variant="primary" 
              size="large"
            >
              Start inspection
            </PolymorphicButton>
          }
          secondaryActionSlot={
            <PolymorphicButton 
              variant="secondary" 
              size="large"
            >
              Won't do
            </PolymorphicButton>
          }
        />
      </SideSheet>
    </>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {icon}
      <Typography component="span" variant="labelMedium" style={{ minWidth: 120, color: '#545f70' }}>{label}</Typography>
      <span style={{ marginLeft: 8 }}>{value}</span>
    </div>
  );
}

export default SideSheetWithMcpPrototype; 