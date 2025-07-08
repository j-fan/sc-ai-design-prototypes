import { useState } from 'react'
import { SideSheet, FooterDefaultLayout } from '@safetyculture/sc-web-ui'

function InspectionSchedulePrototype() {
  const [isOpen, setIsOpen] = useState(false)

  const openSideSheet = () => setIsOpen(true)
  const closeSideSheet = () => setIsOpen(false)

  return (
    <div>
      <h1>Inspection Schedule Prototype</h1>
      <p>This prototype demonstrates a side sheet for scheduling health and safety inspections.</p>
      
      <button 
        data-anchor="modal-open"
        onClick={openSideSheet}
        style={{ 
          padding: '12px 24px', 
          backgroundColor: '#6366f1', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Open Schedule
      </button>

      {isOpen && (
        <SideSheet
          mode="overlay"
          isOpen={isOpen}
          onClose={closeSideSheet}
        >
          <SideSheet.HeaderDefaultLayout
            actionsSlot={
              <button 
                onClick={closeSideSheet}
                style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
              >
                ✕
              </button>
            }
            contentSlot={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ 
                  backgroundColor: '#e0e7ff', 
                  color: '#6366f1', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  SCHEDULE
                </span>
              </div>
            }
            title="Coles health and safety inspection for Maroubra Deli Workers"
          />
          
          <SideSheet.BodyDefaultLayout 
            contentSlot={
              <div style={{ padding: '16px' }}>
                <h3>Details</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>📋 Template</span>
                    <span>Coles health and safety inspection</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>🔓 Available from</span>
                    <span>9:00 AM 14/08/2024</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>🔒 Due</span>
                    <span>5:00 PM 17/08/2024</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>📍 Site</span>
                    <span>Maroubra Coles</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>📋 Requirement</span>
                    <span>Only one assignee needs to complete</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>🔄 Repeats</span>
                    <span>Every day</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>👤 Assigned by</span>
                    <span>Josh Rat</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>📊 Status</span>
                    <span style={{ 
                      backgroundColor: '#e0e7ff', 
                      color: '#6366f1', 
                      padding: '2px 8px', 
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      To do
                    </span>
                  </div>
                </div>

                <div style={{ 
                  backgroundColor: '#fef3c7', 
                  border: '1px solid #f59e0b', 
                  borderRadius: '6px', 
                  padding: '12px', 
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '8px'
                }}>
                  <span>📅</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#d97706' }}>Schedule overdue</div>
                    <div style={{ color: '#92400e', fontSize: '14px' }}>
                      Please complete your inspection as soon as possible to avoid missing the schedule.
                    </div>
                  </div>
                </div>
              </div>
            } 
          />
          
          <FooterDefaultLayout
            primaryActionSlot={
              <button style={{
                height: '2.5rem', 
                width: '11.25rem',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Start inspection
              </button>
            }
            secondaryActionSlot={
              <button style={{
                height: '2.5rem', 
                width: '11.25rem',
                backgroundColor: 'transparent',
                color: '#6b7280',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Won't do
              </button>
            }
          />
        </SideSheet>
      )}
    </div>
  )
}

export default InspectionSchedulePrototype
