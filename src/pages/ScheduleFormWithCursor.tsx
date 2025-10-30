import { useState } from 'react';
import { 
  Typography, 
  PolymorphicButton, 
  Badge, 
  Progress, 
  ToggleSwitch, 
  FormLabel, 
  RadioItem, 
  Input, 
  FormField 
} from '@safetyculture/sc-web-ui';
import { 
  ClockRotateLeft, 
  Bell, 
  UserEdit, 
  Eye, 
  CircleCheckFilled, 
  Circle 
} from '@safetyculture/icons-react';

function ScheduleFormWithCursor() {
  const [lateCompletion, setLateCompletion] = useState(false);
  const [notifications, setNotifications] = useState({
    starting: false,
    beforeDue: false,
    overdue: false
  });
  const [scheduleAdmin, setScheduleAdmin] = useState('');
  const [scheduleViewer, setScheduleViewer] = useState('');

  return (
    <div style={{ 
      backgroundColor: '#e9edf6', 
      minHeight: '100vh', 
      display: 'flex',
      fontFamily: 'Noto Sans, sans-serif'
    }}>
      {/* Sidebar */}
      <div style={{
        backgroundColor: '#ffffff',
        width: '322px',
        padding: '80px 24px 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto',
        zIndex: 1
      }}>
        {/* Late completion item */}
        <div style={{
          backgroundColor: '#cacffe',
          padding: '8px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '274px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <ClockRotateLeft size={24} color="#4740D4" />
            <Typography variant="labelMedium" component="span">
              Late completion
            </Typography>
          </div>
          <CircleCheckFilled size={24} color="#4740D4" />
        </div>

        {/* Notifications item */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '8px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          border: '1px solid #bfc6d4'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Bell size={24} color="#545f70" />
            <Typography variant="labelMedium" component="span">
              Notifications
            </Typography>
          </div>
          <Circle size={24} color="#545f70" />
        </div>

        {/* Schedule admin item */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '8px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '274px',
          border: '1px solid #bfc6d4'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <UserEdit size={24} color="#545f70" />
            <Typography variant="labelMedium" component="span">
              Schedule admin
            </Typography>
          </div>
          <Circle size={24} color="#545f70" />
        </div>

        {/* Schedule viewer item */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '8px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '274px',
          border: '1px solid #bfc6d4'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Eye size={24} color="#545f70" />
            <Typography variant="labelMedium" component="span">
              Schedule viewer
            </Typography>
          </div>
          <Circle size={24} color="#545f70" />
        </div>

        {/* Progress section */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '40px 24px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%'
        }}>
          <Typography variant="labelMedium" component="span">
            Schedule progress
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Progress value={50} style={{ flex: 1, marginRight: '16px' }} />
            <Typography variant="bodyXSmall" component="span" style={{ color: '#1f2533' }}>
              7/12 steps
            </Typography>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ 
        marginLeft: '322px', 
        padding: '160px 0 0 64px', 
        maxWidth: 'calc(100vw - 322px - 64px)',
        width: '100%'
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          borderRadius: '8px',
          position: 'fixed',
          top: 0,
          left: '322px',
          right: 0,
          zIndex: 2
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <PolymorphicButton variant="tertiary" size="medium">
              Fire Hydrant Inspection Checklist
            </PolymorphicButton>
            <Badge variant="neutral" size="medium" />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Stepper would go here - simplified for now */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: '#e9edf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</div>
              <div style={{ width: '32px', height: '32px', backgroundColor: '#4740D4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>2</div>
              <div style={{ width: '32px', height: '32px', backgroundColor: '#e9edf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</div>
            </div>
            
            <PolymorphicButton variant="primary" size="medium" disabled>
              Schedule now
            </PolymorphicButton>
          </div>
        </div>

        {/* Form content */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '80px',
          marginTop: '80px' // Account for fixed header
        }}>
          {/* Title */}
          <Typography variant="headlineLarge" component="h1" style={{ color: '#1f2533', marginBottom: '8px' }}>
            Create schedule
          </Typography>

          {/* Completion Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Typography variant="titleLarge" component="h2" style={{ color: '#1f2533' }}>
              Completion
            </Typography>
            
            <div style={{
              backgroundColor: '#ffffff',
              padding: '40px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <ClockRotateLeft size={24} color="#545f70" />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                    <Typography variant="labelMedium" component="span" style={{ color: '#1f2533' }}>
                      Late completion
                    </Typography>
                    <Typography variant="captionSmall" component="span" style={{ color: '#1f2533' }}>
                      (optional)
                    </Typography>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#545f70', borderRadius: '50%' }} />
                  </div>
                  <Typography variant="bodySmall" component="p" style={{ color: '#545f70', marginBottom: '24px' }}>
                    Choose whether assignees can complete schedules after the due date and time of each repeat.
                  </Typography>
                  
                  <div style={{ paddingLeft: '48px' }}>
                    <RadioItem value="no-late-completion" checked={!lateCompletion} onChange={() => setLateCompletion(false)}>
                      <ToggleSwitch isChecked={false} aria-label="No late completion" />
                      <FormLabel htmlFor="no-late-completion">No late completion</FormLabel>
                    </RadioItem>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Typography variant="titleLarge" component="h2" style={{ color: '#1f2533' }}>
              Notifications
            </Typography>
            
            <div style={{
              backgroundColor: '#ffffff',
              padding: '40px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <Bell size={24} color="#545f70" />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                    <Typography variant="labelMedium" component="span" style={{ color: '#1f2533' }}>
                      Notifications
                    </Typography>
                    <Typography variant="captionSmall" component="span" style={{ color: '#1f2533' }}>
                      (optional)
                    </Typography>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#545f70', borderRadius: '50%' }} />
                  </div>
                  <Typography variant="bodySmall" component="p" style={{ color: '#545f70', marginBottom: '24px' }}>
                    Select if you would like your assignees to receive notifications for the following events.
                  </Typography>
                  
                  <div style={{ paddingLeft: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <RadioItem value="schedule-starting" checked={notifications.starting} onChange={() => setNotifications(prev => ({ ...prev, starting: !prev.starting }))}>
                      <ToggleSwitch isChecked={notifications.starting} aria-label="When the schedule is starting" />
                      <FormLabel htmlFor="schedule-starting">When the schedule is starting</FormLabel>
                    </RadioItem>
                    
                    <RadioItem value="before-due" checked={notifications.beforeDue} onChange={() => setNotifications(prev => ({ ...prev, beforeDue: !prev.beforeDue }))}>
                      <ToggleSwitch isChecked={notifications.beforeDue} aria-label="60 minutes before schedule is due" />
                      <FormLabel htmlFor="before-due">60 minutes before schedule is due</FormLabel>
                    </RadioItem>
                    
                    <RadioItem value="overdue-reminder" checked={notifications.overdue} onChange={() => setNotifications(prev => ({ ...prev, overdue: !prev.overdue }))}>
                      <ToggleSwitch isChecked={notifications.overdue} aria-label="Reminder that schedule is now overdue" />
                      <FormLabel htmlFor="overdue-reminder">Reminder that schedule is now overdue</FormLabel>
                    </RadioItem>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Access Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Typography variant="titleLarge" component="h2" style={{ color: '#1f2533' }}>
              Access
            </Typography>
            
            <div style={{
              backgroundColor: '#ffffff',
              padding: '40px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}>
              {/* Schedule Admin */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <UserEdit size={24} color="#545f70" />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                    <Typography variant="labelMedium" component="span" style={{ color: '#1f2533' }}>
                      Schedule admin
                    </Typography>
                    <Typography variant="captionSmall" component="span" style={{ color: '#1f2533' }}>
                      (optional)
                    </Typography>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#545f70', borderRadius: '50%' }} />
                  </div>
                  
                  <div style={{ paddingLeft: '48px' }}>
                    <FormField label="Schedule Admin">
                      <Input 
                        value={scheduleAdmin}
                        onChange={(e) => setScheduleAdmin(e.target.value)}
                        placeholder="Choose users or groups to edit schedule"
                        size="medium"
                      />
                    </FormField>
                  </div>
                </div>
              </div>

              {/* Schedule Viewer */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <Eye size={24} color="#545f70" />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                    <Typography variant="labelMedium" component="span" style={{ color: '#1f2533' }}>
                      View only
                    </Typography>
                    <Typography variant="captionSmall" component="span" style={{ color: '#1f2533' }}>
                      (optional)
                    </Typography>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#545f70', borderRadius: '50%' }} />
                  </div>
                  
                  <div style={{ paddingLeft: '48px' }}>
                    <FormField label="Schedule Viewer">
                      <Input 
                        value={scheduleViewer}
                        onChange={(e) => setScheduleViewer(e.target.value)}
                        placeholder="Choose users or groups to view schedule details"
                        size="medium"
                      />
                    </FormField>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleFormWithCursor;
