import { Button, Badge, Typography } from '@safetyculture/sc-web-ui';
import {
  Pencil,
  Buildings,
  UserPlus,
  CalendarCheck,
  Layout,
  Clock,
  Globe,
  CalendarExclamation,
  Bell,
  Eye,
  CircleInfo
} from '@safetyculture/icons-react';

interface DemoForJoshConfirmationProps {
  onBack?: () => void;
  onSchedule?: () => void;
}

function DemoForJoshConfirmation({ onBack, onSchedule }: DemoForJoshConfirmationProps) {
  const handleScheduleNow = () => {
    if (onSchedule) {
      onSchedule();
    } else {
      alert('Schedule created successfully!');
    }
  };

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
          <Button variant="tertiary" size="medium" onClick={onBack}>
            Fire Hydrant Inspection Checklist
          </Button>
          <Badge variant="neutral" size="medium">Draft</Badge>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Stepper - Step 3 active */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
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
            }}>1</div>
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
            }}>2</div>
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
            }}>3</div>
          </div>
        </div>

        <div>
          <Button variant="primary" size="medium" onClick={handleScheduleNow}>
            Schedule now
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '160px',
        marginTop: '152px',
        marginRight: '160px',
        maxWidth: '1120px',
        paddingBottom: '80px'
      }}>
        {/* Title Section */}
        <div style={{ marginBottom: '24px' }}>
          <Typography variant="titleLarge" style={{ color: '#1f2533', marginBottom: '8px' }}>
            Review and publish
          </Typography>
          <Typography variant="bodyMedium" style={{ color: '#545f70' }}>
            This schedule will be visible to all assignees once published.
          </Typography>
        </div>

        {/* Review Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          <div style={{ paddingLeft: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* First Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Title */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Pencil size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Title</Typography>
                  </div>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    Coles 10.30am Deli Check
                  </Typography>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>
                  Edit title
                </Typography>
              </div>

              {/* Site */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Buildings size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Site</Typography>
                  </div>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    Managing Coles NSW in bulk
                  </Typography>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>
                  Edit title
                </Typography>
              </div>

              {/* Assignees */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <UserPlus size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Assignees</Typography>
                  </div>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    13 users
                  </Typography>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>
                  Edit assignees
                </Typography>
              </div>

              {/* Requirement */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CalendarCheck size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Requirement</Typography>
                  </div>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    Only one assignee needs to complete
                  </Typography>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>
                  Edit requirement
                </Typography>
              </div>

              {/* Template */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Layout size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Template</Typography>
                  </div>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    Coles Health and Safety Inspection for Deli Workers
                  </Typography>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>
                  Edit template
                </Typography>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: '#DBE0EB', width: '100%' }} />
            </div>

            {/* Second Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Timing */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingTop: '4px' }}>
                    <Clock size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Timing</Typography>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Typography variant="bodyMedium" style={{ color: '#1f2533' }}>
                      You're about to create a weekly schedule that will start on December 09, 2024, at 10:30 AM Australian Eastern Standard Time.
                    </Typography>
                    <br />
                    <Typography variant="bodyMedium" style={{ color: '#1f2533' }}>
                      This schedule will repeat every 2 weeks on Monday, Tuesday, Wednesday, Thursday, and Friday. Each repeat will last 60 minutes, starting at 10:30 AM and ending at 11:30 AM.
                    </Typography>
                    <br />
                    <Typography variant="bodyMedium" style={{ color: '#1f2533' }}>
                      This schedule will end on August 21, 2025.
                    </Typography>
                  </div>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  Edit timing
                </Typography>
              </div>

              {/* Time zone */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Globe size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Time zone</Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                      Australia/Sydney
                    </Typography>
                    <CircleInfo size={16} color="#828EA0" />
                  </div>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>
                  Edit completion
                </Typography>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: '#DBE0EB', width: '100%' }} />

            {/* Third Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Completion */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CalendarExclamation size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Completion</Typography>
                  </div>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    Late completion allowed
                  </Typography>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>
                  Edit site
                </Typography>
              </div>

              {/* Notifications */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Bell size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Notifications</Typography>
                  </div>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    Assignees will receive all notification types
                  </Typography>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>
                  Edit notifications
                </Typography>
              </div>

              {/* Administration */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Eye size={16} />
                    <Typography variant="labelMedium" style={{ color: '#1f2533' }}>Administration</Typography>
                  </div>
                  <Typography variant="labelMedium" style={{ color: '#1f2533' }}>
                    2 viewers
                  </Typography>
                </div>
                <Typography variant="labelMedium" style={{ color: '#4740D4', cursor: 'pointer' }}>
                  Edit controls
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoForJoshConfirmation;
