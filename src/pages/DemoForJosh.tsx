/**
 * DemoForJosh Prototype
 *
 * User Instructions/Messages:
 * 1. "make this design https://www.figma.com/design/uCtloQrEAHZWkBGhEUNq9f/%F0%9F%97%93%EF%B8%8F-EA-to-GA-UI?node-id=361-39055&t=RqhkkRFFhNLtGUck-1, call it DemoForJosh"
 * 2. "let's make it interactive. Enable the Schedule Now button. When it is clicked, it goes to this screen: https://www.figma.com/design/uCtloQrEAHZWkBGhEUNq9f/%F0%9F%97%93%EF%B8%8F-EA-to-GA-UI?node-id=361-39157&t=RqhkkRFFhNLtGUck-4"
 * 3. "the grey background has a gap at the top. Please make the content panel background fully grey"
 * 4. "In a comment above the prototype component, list out all the instructions/messages I have given you"
 * 5. "the grey background doesn't extend to the bottom of the content when scrolled down"
 * 6. "we are back to the old problem with the white gap at the top of the content"
 */

import { useState } from 'react';
import { Button, Badge, Typography } from '@safetyculture/sc-web-ui';
import {
  ClockRotateLeft,
  Bell,
  UserEdit,
  Eye,
  CircleCheckFilled,
  Circle,
  CircleInfo
} from '@safetyculture/icons-react';
import DemoForJoshConfirmation from './DemoForJoshConfirmation';

function DemoForJosh() {
  const [lateCompletionEnabled, setLateCompletionEnabled] = useState(false);
  const [notifyStart, setNotifyStart] = useState(false);
  const [notify60Min, setNotify60Min] = useState(false);
  const [notifyOverdue, setNotifyOverdue] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Check if form is valid to enable Schedule Now button
  const isFormValid = true; // In a real app, you'd validate required fields

  if (showConfirmation) {
    return (
      <DemoForJoshConfirmation
        onBack={() => setShowConfirmation(false)}
        onSchedule={() => alert('Schedule created successfully!')}
      />
    );
  }

  return (
    <div style={{
      backgroundColor: '#e9edf6',
      minHeight: '100vh',
      width: '100%',
      fontFamily: '"Noto Sans", sans-serif',
      margin: 0,
      padding: 0
    }}>
      {/* Top Header */}
      <div style={{
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Button variant="tertiary" size="medium">
            Fire Hydrant Inspection Checklist
          </Button>
          <Badge variant="neutral" size="medium">Draft</Badge>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Stepper placeholder - would use Stepper component */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#4740D4',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '14px'
            }}>1</div>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#BFC6D4' }} />
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#4740D4',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '14px'
            }}>2</div>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#BFC6D4' }} />
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#E9EDF6',
              color: '#828EA0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '14px'
            }}>3</div>
          </div>
        </div>

        <div>
          <Button
            variant="primary"
            size="medium"
            disabled={!isFormValid}
            onClick={() => setShowConfirmation(true)}
          >
            Schedule now
          </Button>
        </div>
      </div>

      {/* Left Sidebar */}
      <div style={{
        backgroundColor: '#ffffff',
        width: '322px',
        height: 'calc(100vh - 72px)',
        position: 'fixed',
        left: 0,
        top: '72px',
        display: 'flex',
        flexDirection: 'column',
        gap: '160px',
        overflowY: 'auto'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '80px 24px'
        }}>
          {/* Late completion - Active */}
          <div style={{
            backgroundColor: '#cacffe',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ClockRotateLeft size={24} />
              <Typography variant="labelLarge">Late completion</Typography>
            </div>
            <CircleCheckFilled size={24} />
          </div>

          {/* Notifications */}
          <div style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Bell size={24} />
              <Typography variant="labelLarge">Notifications</Typography>
            </div>
            <Circle size={24} />
          </div>

          {/* Schedule admin */}
          <div style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <UserEdit size={24} />
              <Typography variant="labelLarge">Schedule admin</Typography>
            </div>
            <Circle size={24} />
          </div>

          {/* Schedule viewer */}
          <div style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Eye size={24} />
              <Typography variant="labelLarge">Schedule viewer</Typography>
            </div>
            <Circle size={24} />
          </div>
        </div>

        {/* Progress Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: '40px 24px 24px'
        }}>
          <Typography variant="labelMedium">Schedule progress</Typography>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{
              flex: 1,
              height: '8px',
              backgroundColor: '#E9EDF6',
              borderRadius: '4px',
              overflow: 'hidden',
              marginRight: '16px'
            }}>
              <div style={{
                height: '100%',
                width: '58%',
                backgroundColor: '#4740D4',
                borderRadius: '4px'
              }} />
            </div>
            <Typography variant="bodyXSmall" style={{ color: '#000000', whiteSpace: 'nowrap' }}>
              7/12 steps
            </Typography>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '386px',
        marginTop: '160px',
        marginRight: '64px',
        maxWidth: '955px',
        paddingBottom: '80px'
      }}>
        {/* Title */}
        <div style={{ marginBottom: '80px' }}>
          <Typography variant="headlineLarge" style={{ color: '#1f2533' }}>
            Create schedule
          </Typography>
        </div>

        {/* Completion Section */}
        <div style={{ marginBottom: '80px' }}>
          <Typography variant="titleLarge" style={{ color: '#1f2533', marginBottom: '24px' }}>
            Completion
          </Typography>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '40px'
          }}>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
              <div style={{ paddingTop: '2px' }}>
                <ClockRotateLeft size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    Late completion
                  </Typography>
                  <Typography variant="captionSmall" style={{ color: '#828EA0' }}>
                    (optional)
                  </Typography>
                  <CircleInfo size={12} color="#828EA0" />
                </div>
                <Typography variant="bodySmall" style={{ color: '#545f70', marginBottom: '24px' }}>
                  Choose whether assignees can complete schedules after the due date and time of each repeat.
                </Typography>
              </div>
            </div>

            <div style={{ paddingLeft: '48px' }}>
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '12px 0',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={lateCompletionEnabled}
                  onChange={(e) => setLateCompletionEnabled(e.target.checked)}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    cursor: 'pointer'
                  }}
                />
                <div>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    No late completion
                  </Typography>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div style={{ marginBottom: '80px' }}>
          <Typography variant="titleLarge" style={{ color: '#1f2533', marginBottom: '24px' }}>
            Notifications
          </Typography>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '40px'
          }}>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
              <div style={{ paddingTop: '2px' }}>
                <Bell size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    Notifications
                  </Typography>
                  <Typography variant="captionSmall" style={{ color: '#828EA0' }}>
                    (optional)
                  </Typography>
                  <CircleInfo size={12} color="#828EA0" />
                </div>
                <Typography variant="bodySmall" style={{ color: '#545f70', marginBottom: '24px' }}>
                  Select if you would like your assignees to receive notifications for the following events.
                </Typography>
              </div>
            </div>

            <div style={{ paddingLeft: '48px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '12px 0',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={notifyStart}
                  onChange={(e) => setNotifyStart(e.target.checked)}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    cursor: 'pointer'
                  }}
                />
                <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                  When the schedule is starting
                </Typography>
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '12px 0',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={notify60Min}
                  onChange={(e) => setNotify60Min(e.target.checked)}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    cursor: 'pointer'
                  }}
                />
                <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                  60 minutes before schedule is due
                </Typography>
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '12px 0',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={notifyOverdue}
                  onChange={(e) => setNotifyOverdue(e.target.checked)}
                  style={{
                    width: '20px',
                    height: '20px',
                    marginTop: '2px',
                    cursor: 'pointer'
                  }}
                />
                <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                  Reminder that schedule is now overdue
                </Typography>
              </label>
            </div>
          </div>
        </div>

        {/* Access Section */}
        <div>
          <Typography variant="titleLarge" style={{ color: '#1f2533', marginBottom: '24px' }}>
            Access
          </Typography>

          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '40px'
          }}>
            {/* Schedule admin */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '24px', marginBottom: '8px' }}>
                <div style={{ paddingTop: '2px' }}>
                  <UserEdit size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                      Schedule admin
                    </Typography>
                    <Typography variant="captionSmall" style={{ color: '#828EA0' }}>
                      (optional)
                    </Typography>
                    <CircleInfo size={12} color="#828EA0" />
                  </div>
                </div>
              </div>

              <div style={{ paddingLeft: '48px' }}>
                <input
                  type="text"
                  placeholder="Choose users or groups to edit schedule"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #BFC6D4',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* View only */}
            <div>
              <div style={{ display: 'flex', gap: '24px', marginBottom: '8px' }}>
                <div style={{ paddingTop: '2px' }}>
                  <Eye size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                      View only
                    </Typography>
                    <Typography variant="captionSmall" style={{ color: '#828EA0' }}>
                      (optional)
                    </Typography>
                    <CircleInfo size={12} color="#828EA0" />
                  </div>
                </div>
              </div>

              <div style={{ paddingLeft: '48px' }}>
                <input
                  type="text"
                  placeholder="Choose users or groups to view schedule details"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #BFC6D4',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar at bottom */}
        <div style={{
          marginTop: '80px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            height: '8px',
            backgroundColor: '#007a52',
            width: '156px',
            borderRadius: '4px 0 0 4px'
          }} />
          <div style={{
            height: '8px',
            backgroundColor: '#a8242a',
            width: '99px',
            borderRadius: '0 4px 4px 0'
          }} />
          <Typography variant="bodyXSmall" style={{ color: '#007a52', marginLeft: '8px' }}>
            60% Completed
          </Typography>
          <Typography variant="bodyXSmall" style={{ color: '#a8242a', marginLeft: '8px' }}>
            40% Missed
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default DemoForJosh;
