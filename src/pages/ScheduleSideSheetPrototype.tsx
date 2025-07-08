import { useState } from 'react';
import {
  SideSheet,
  FooterDefaultLayout,
} from '@safetyculture/sc-web-ui';
import { Button } from '@safetyculture/sc-web-ui';
import { Badge } from '@safetyculture/sc-web-ui';
import { Icon } from '@safetyculture/icons-react';

function ScheduleSideSheetPrototype() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button data-anchor="modal-open" onClick={() => setOpen(true)}>
        Open
      </button>
      <SideSheet mode="overlay" isOpen={open} onClose={() => setOpen(false)}>
        <SideSheet.HeaderDefaultLayout
          title="Coles health and safety inspection for Maroubra Deli Workers"
        />
        <SideSheet.BodyDefaultLayout
          contentSlot={
            <div style={{ padding: 24 }}>
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ color: '#6B7280', fontWeight: 600, margin: 0 }}>Details</h4>
                <div style={{ marginTop: 16, fontSize: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Icon name="template" size={20} style={{ marginRight: 8 }} />
                    <span style={{ fontWeight: 500, minWidth: 120 }}>Template</span>
                    <span style={{ marginLeft: 8 }}>Coles health and safety inspection</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Icon name="calendar" size={20} style={{ marginRight: 8 }} />
                    <span style={{ fontWeight: 500, minWidth: 120 }}>Available from</span>
                    <span style={{ marginLeft: 8 }}>9:00 AM 14/08/2024</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Icon name="calendar" size={20} style={{ marginRight: 8 }} />
                    <span style={{ fontWeight: 500, minWidth: 120 }}>Due</span>
                    <span style={{ marginLeft: 8 }}>5:00 PM 17/08/2024</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Icon name="location" size={20} style={{ marginRight: 8 }} />
                    <span style={{ fontWeight: 500, minWidth: 120 }}>Site</span>
                    <span style={{ marginLeft: 8 }}>Maroubra Coles</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Icon name="user" size={20} style={{ marginRight: 8 }} />
                    <span style={{ fontWeight: 500, minWidth: 120 }}>Requirement</span>
                    <span style={{ marginLeft: 8 }}>Only one assignee needs to complete</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Icon name="repeat" size={20} style={{ marginRight: 8 }} />
                    <span style={{ fontWeight: 500, minWidth: 120 }}>Repeats</span>
                    <span style={{ marginLeft: 8 }}>Every day</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Icon name="user" size={20} style={{ marginRight: 8 }} />
                    <span style={{ fontWeight: 500, minWidth: 120 }}>Assigned by</span>
                    <span style={{ marginLeft: 8 }}>Josh Rat</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <Icon name="calendar" size={20} style={{ marginRight: 8 }} />
                    <span style={{ fontWeight: 500, minWidth: 120 }}>Status</span>
                    <Badge variant="information">To do</Badge>
                  </div>
                </div>
              </div>
              <div style={{ background: '#FEF3C7', borderRadius: 8, padding: 16, marginBottom: 24, display: 'flex', alignItems: 'flex-start' }}>
                <Icon name="calendar" size={24} style={{ color: '#B45309', marginRight: 12, marginTop: 2 }} />
                <div>
                  <div style={{ color: '#B45309', fontWeight: 600, marginBottom: 4 }}>Schedule overdue</div>
                  <div style={{ color: '#92400E' }}>Please complete your inspection as soon as possible to avoid missing the schedule.</div>
                </div>
              </div>
            </div>
          }
        />
        <FooterDefaultLayout
          primaryActionSlot={
            <Button variant="primary" style={{ height: '2.5rem', width: '11.25rem' }}>
              Start inspection
            </Button>
          }
          secondaryActionSlot={
            <Button variant="secondary" style={{ height: '2.5rem', width: '11.25rem' }}>
              Won't do
            </Button>
          }
        />
      </SideSheet>
    </>
  );
}

export default ScheduleSideSheetPrototype; 