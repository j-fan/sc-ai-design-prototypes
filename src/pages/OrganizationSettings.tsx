/**
 * OrganizationSettings Prototype
 *
 * User Instructions/Messages:
 * 1. "Create a prototype for organisation settings. It is in a table that has a hierarchy of 2. When a parent checkbox is selected, the columns of the child rows below also change. The child can also affect the parent, which can go into fully selected, indeterminate and empty selection states."
 * 2. "The link is https://www.figma.com/design/eMNpMc3FEb83hqQ0SVUJqG/Notifications?node-id=1418-38588&t=XvkMXuAaigw1Ozep-4"
 * 3. "Can you align the parent and child rows so they match?"
 * 4. "in a comment abovce the component, list all the messages I gacve you to create this prototype"
 */

import { useState } from 'react';
import { Typography, ToggleSwitch, PolymorphicButton, Checkbox } from '@safetyculture/sc-web-ui';
import {
  ClipboardLines,
  Calendar,
  Lightning,
  CircleInfo,
  CircleInfo as CircleAlert,
  Eye,
  GraduationCap,
  UserEdit,
  CreditCard,
  UserPlus,
  ChevronRight,
  Lock
} from '@safetyculture/icons-react';

interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  inApp: boolean;
  slack: boolean;
  locked: boolean;
}

interface NotificationRow {
  id: string;
  label: string;
  icon: any;
  settings: NotificationSettings;
  children?: NotificationRow[];
  isExpanded?: boolean;
}

function OrganizationSettings() {
  const [lockAll, setLockAll] = useState(false);
  const [rows, setRows] = useState<NotificationRow[]>([
    {
      id: 'inspections',
      label: 'Inspections',
      icon: ClipboardLines,
      settings: { email: true, sms: true, push: true, inApp: true, slack: true, locked: false }
    },
    {
      id: 'schedules',
      label: 'Schedules',
      icon: Calendar,
      settings: { email: true, sms: true, push: true, inApp: true, slack: true, locked: false }
    },
    {
      id: 'actions',
      label: 'Actions',
      icon: Lightning,
      settings: { email: true, sms: false, push: false, inApp: true, slack: true, locked: false },
      isExpanded: true,
      children: [
        {
          id: 'actions-assigned',
          label: 'Is assigned to them',
          icon: null,
          settings: { email: true, sms: true, push: false, inApp: true, slack: true, locked: false }
        },
        {
          id: 'actions-completed',
          label: 'Action they created has been completed',
          icon: null,
          settings: { email: true, sms: false, push: false, inApp: true, slack: true, locked: false }
        },
        {
          id: 'actions-comment',
          label: "Comment added to an action they're following",
          icon: null,
          settings: { email: true, sms: false, push: false, inApp: true, slack: true, locked: false }
        },
        {
          id: 'actions-media',
          label: "Media added to an action they're following",
          icon: null,
          settings: { email: true, sms: false, push: false, inApp: true, slack: true, locked: false }
        },
        {
          id: 'actions-due',
          label: 'Is due soon that they are assigned or following',
          icon: null,
          settings: { email: true, sms: false, push: false, inApp: true, slack: true, locked: false }
        }
      ]
    },
    {
      id: 'issues',
      label: 'Issues',
      icon: CircleAlert,
      settings: { email: true, sms: true, push: true, inApp: true, slack: true, locked: false }
    },
    {
      id: 'sensors',
      label: 'Sensors',
      icon: CircleInfo,
      settings: { email: true, sms: true, push: true, inApp: true, slack: true, locked: false }
    },
    {
      id: 'headsup',
      label: 'Heads Up',
      icon: Eye,
      settings: { email: true, sms: true, push: true, inApp: true, slack: true, locked: false }
    },
    {
      id: 'training',
      label: 'Training',
      icon: GraduationCap,
      settings: { email: true, sms: true, push: true, inApp: true, slack: true, locked: false }
    },
    {
      id: 'contractors',
      label: 'Contractors',
      icon: UserEdit,
      settings: { email: true, sms: true, push: true, inApp: true, slack: true, locked: false }
    },
    {
      id: 'credentials',
      label: 'Credentials',
      icon: CreditCard,
      settings: { email: true, sms: true, push: true, inApp: true, slack: true, locked: false }
    },
    {
      id: 'onboarding',
      label: 'Onboarding',
      icon: UserPlus,
      settings: { email: true, sms: true, push: true, inApp: true, slack: true, locked: false }
    }
  ]);

  // Calculate parent checkbox state based on children
  const getParentCheckboxState = (children: NotificationRow[], channel: keyof NotificationSettings): 'checked' | 'indeterminate' | 'unchecked' => {
    if (!children || children.length === 0) return 'unchecked';

    const checkedCount = children.filter(child => child.settings[channel]).length;

    if (checkedCount === 0) return 'unchecked';
    if (checkedCount === children.length) return 'checked';
    return 'indeterminate';
  };

  // Toggle parent checkbox - affects all children
  const toggleParentCheckbox = (parentId: string, channel: keyof NotificationSettings) => {
    setRows(prevRows => {
      return prevRows.map(row => {
        if (row.id === parentId && row.children) {
          const parentState = getParentCheckboxState(row.children, channel);
          const newValue = parentState !== 'checked';

          return {
            ...row,
            settings: { ...row.settings, [channel]: newValue },
            children: row.children.map(child => ({
              ...child,
              settings: { ...child.settings, [channel]: newValue }
            }))
          };
        }
        return row;
      });
    });
  };

  // Toggle child checkbox - may affect parent
  const toggleChildCheckbox = (parentId: string, childId: string, channel: keyof NotificationSettings) => {
    setRows(prevRows => {
      return prevRows.map(row => {
        if (row.id === parentId && row.children) {
          const updatedChildren = row.children.map(child => {
            if (child.id === childId) {
              return {
                ...child,
                settings: { ...child.settings, [channel]: !child.settings[channel] }
              };
            }
            return child;
          });

          // Update parent based on children states
          const parentState = getParentCheckboxState(updatedChildren, channel);
          const parentValue = parentState === 'checked';

          return {
            ...row,
            settings: { ...row.settings, [channel]: parentValue },
            children: updatedChildren
          };
        }
        return row;
      });
    });
  };

  // Toggle simple row (no children)
  const toggleRowCheckbox = (rowId: string, channel: keyof NotificationSettings) => {
    setRows(prevRows => {
      return prevRows.map(row => {
        if (row.id === rowId) {
          return {
            ...row,
            settings: { ...row.settings, [channel]: !row.settings[channel] }
          };
        }
        return row;
      });
    });
  };

  // Toggle locked state
  const toggleLocked = (rowId: string) => {
    setRows(prevRows => {
      return prevRows.map(row => {
        if (row.id === rowId) {
          return {
            ...row,
            settings: { ...row.settings, locked: !row.settings.locked }
          };
        }
        return row;
      });
    });
  };

  // Toggle expand/collapse
  const toggleExpand = (rowId: string) => {
    setRows(prevRows => {
      return prevRows.map(row => {
        if (row.id === rowId) {
          return { ...row, isExpanded: !row.isExpanded };
        }
        return row;
      });
    });
  };

  const unsavedChanges = 14; // Mock value for demo

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <Typography variant="titleLarge" component="h1" style={{ marginBottom: '8px' }}>
          Notification Preferences
        </Typography>
        <Typography variant="bodyMedium" component="p" style={{ color: '#545f70', marginBottom: '16px' }}>
          Set the default notification preferences for all users in the organisation.
        </Typography>

        {/* Lock all preferences */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Lock size={16} color="#545f70" />
          <Typography variant="bodyMedium" component="span">
            Lock all preferences
          </Typography>
          <div onClick={() => setLockAll(!lockAll)}>
            <ToggleSwitch isChecked={lockAll} aria-label="Lock all preferences" />
          </div>
          {lockAll && (
            <div style={{
              position: 'relative',
              marginLeft: '8px',
              padding: '12px 16px',
              backgroundColor: '#1f2633',
              color: 'white',
              borderRadius: '8px',
              maxWidth: '280px'
            }}>
              <Typography variant="bodySmall" component="div">
                This will lock users from editing their preferences and apply to all users in the organisation
              </Typography>
              <div style={{
                position: 'absolute',
                left: '-6px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderRight: '6px solid #1f2633'
              }} />
            </div>
          )}
        </div>
      </div>

      {/* Unsaved changes banner */}
      {unsavedChanges > 0 && (
        <div style={{
          backgroundColor: '#f0efff',
          padding: '12px 16px',
          borderRadius: '8px',
          marginBottom: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="bodyMedium" component="span">
            {unsavedChanges} unsaved changes
          </Typography>
          <PolymorphicButton variant="primary">
            Save Changes
          </PolymorphicButton>
        </div>
      )}

      {/* Table */}
      <div style={{
        border: '1px solid #e1e4e8',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {/* Table Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '300px repeat(5, 1fr) 80px',
          backgroundColor: '#f6f8fa',
          borderBottom: '1px solid #e1e4e8',
          padding: '12px 16px',
          alignItems: 'center'
        }}>
          <Typography variant="labelMedium" component="div">
            Notify users about
          </Typography>
          <Typography variant="labelMedium" component="div" style={{ textAlign: 'center' }}>
            📧 Email
          </Typography>
          <Typography variant="labelMedium" component="div" style={{ textAlign: 'center' }}>
            💬 SMS
          </Typography>
          <Typography variant="labelMedium" component="div" style={{ textAlign: 'center' }}>
            📱 Push
          </Typography>
          <Typography variant="labelMedium" component="div" style={{ textAlign: 'center' }}>
            🔔 In-app
          </Typography>
          <Typography variant="labelMedium" component="div" style={{ textAlign: 'center' }}>
            💼 Slack
          </Typography>
          <Typography variant="labelMedium" component="div" style={{ textAlign: 'center' }}>
            🔒 Locked
          </Typography>
        </div>

        {/* Table Body */}
        {rows.map((row) => (
          <div key={row.id}>
            {/* Parent Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '300px repeat(5, 1fr) 80px',
              borderBottom: '1px solid #e1e4e8',
              padding: '12px 16px',
              alignItems: 'center',
              backgroundColor: row.children ? '#fafbfc' : 'white'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {row.children && (
                  <button
                    onClick={() => toggleExpand(row.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      transform: row.isExpanded ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.2s'
                    }}
                  >
                    <ChevronRight size={16} />
                  </button>
                )}
                {row.icon && <row.icon size={20} color="#545f70" />}
                <Typography variant="bodyMedium" component="span">
                  {row.label}
                </Typography>
              </div>

              {/* Checkboxes */}
              {(['email', 'sms', 'push', 'inApp', 'slack'] as const).map((channel) => (
                <div key={channel} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Checkbox
                    checked={row.settings[channel]}
                    indeterminate={row.children ? getParentCheckboxState(row.children, channel) === 'indeterminate' : false}
                    onChange={() => {
                      if (row.children) {
                        toggleParentCheckbox(row.id, channel);
                      } else {
                        toggleRowCheckbox(row.id, channel);
                      }
                    }}
                  />
                </div>
              ))}

              {/* Locked Toggle */}
              <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={() => toggleLocked(row.id)}>
                <ToggleSwitch
                  isChecked={row.settings.locked}
                  aria-label={`Lock ${row.label}`}
                />
              </div>
            </div>

            {/* Child Rows */}
            {row.children && row.isExpanded && row.children.map((child) => (
              <div
                key={child.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '300px repeat(5, 1fr) 80px',
                  borderBottom: '1px solid #e1e4e8',
                  padding: '12px 16px',
                  alignItems: 'center',
                  backgroundColor: 'white'
                }}
              >
                <div style={{ paddingLeft: '48px' }}>
                  <Typography variant="bodyMedium" component="span">
                    {child.label}
                  </Typography>
                </div>

                {/* Child Checkboxes */}
                {(['email', 'sms', 'push', 'inApp', 'slack'] as const).map((channel) => (
                  <div key={channel} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Checkbox
                      checked={child.settings[channel]}
                      onChange={() => toggleChildCheckbox(row.id, child.id, channel)}
                    />
                  </div>
                ))}

                {/* Locked Toggle */}
                <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                  <ToggleSwitch
                    isChecked={child.settings.locked}
                    aria-label={`Lock ${child.label}`}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Save Button */}
      <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
        <PolymorphicButton variant="primary">
          Save changes
        </PolymorphicButton>
      </div>
    </div>
  );
}

export default OrganizationSettings;
