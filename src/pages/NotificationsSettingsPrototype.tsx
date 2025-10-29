import { useState } from "react";
import {
  Typography,
  PolymorphicButton,
  Checkbox,
  ToggleSwitch,
} from "@safetyculture/sc-web-ui";
import {
  Envelope,
  MessageChatSquare,
  Bell,
  Mobile,
  Stack,
  Lock,
  ChevronRight,
  ChevronDown,
  Calendar,
  CalendarCheck,
  Flag,
  GraduationCap,
  Users,
  CreditCard,
  UserPlus,
} from "@safetyculture/icons-react";

/**
 * Notifications Settings Prototype
 *
 * Commands used to create this prototype:
 * 1. "Implement this design in the picture as a prototype. Create a new page in src/pages
 *     and use the design system components from @safetyculture/sc-web-ui package.
 *     This design uses the side-sheet."
 * 2. "Make the implementation pixel perfect by looking in the browser"
 * 3. "Use the toggle-switch component from sc-web-ui"
 * 4. "Make the checkbox larger. use size=medium"
 * 5. "Let's make this prototype more interactive. When I click on a checkbox in the section
 *     header row e.g. 'Actions', the column of the child rows below should check and uncheck accordingly"
 * 6. "Don't forget about indeterminate state and the ability for child checkboxes to effect the parent"
 * 7. "You didn't link to the latest prototype in the home page"
 * 8. "The unsaved changes banner does not span full width as it does in the figma design"
 *
 */

interface NotificationRow {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: NotificationRow[];
  email: boolean;
  sms: boolean;
  push: boolean;
  inApp: boolean;
  slack: boolean;
  locked: boolean;
}

function NotificationsSettingsPrototype() {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [inAppEnabled, setInAppEnabled] = useState(true);
  const [slackEnabled, setSlackEnabled] = useState(false);
  const [lockAllPreferences, setLockAllPreferences] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const [expandedRows, setExpandedRows] = useState<Set<string>>(
    new Set(["inspections", "schedules", "actions"])
  );

  const [notifications, setNotifications] = useState<NotificationRow[]>([
    {
      id: "inspections",
      label: "Inspections",
      icon: <Calendar size={16} />,
      email: true,
      sms: true,
      push: true,
      inApp: true,
      slack: true,
      locked: true,
    },
    {
      id: "schedules",
      label: "Schedules",
      icon: <CalendarCheck size={16} />,
      email: true,
      sms: true,
      push: true,
      inApp: true,
      slack: true,
      locked: true,
    },
    {
      id: "actions",
      label: "Actions",
      icon: <Flag size={16} />,
      email: true,
      sms: false,
      push: false,
      inApp: true,
      slack: true,
      locked: true,
      children: [
        {
          id: "actions-assigned",
          label: "Is assigned to them",
          email: true,
          sms: true,
          push: false,
          inApp: true,
          slack: true,
          locked: true,
        },
        {
          id: "actions-completed",
          label: "Action they created has been completed",
          email: true,
          sms: false,
          push: false,
          inApp: true,
          slack: true,
          locked: true,
        },
        {
          id: "actions-comment",
          label: "Comment added to an action they're following",
          email: true,
          sms: false,
          push: false,
          inApp: true,
          slack: true,
          locked: true,
        },
        {
          id: "actions-media",
          label: "Media added to an action they're following",
          email: true,
          sms: false,
          push: false,
          inApp: true,
          slack: true,
          locked: true,
        },
        {
          id: "actions-due",
          label: "Is due soon that they are assigned or following",
          email: true,
          sms: false,
          push: false,
          inApp: true,
          slack: true,
          locked: true,
        },
      ],
    },
    {
      id: "issues",
      label: "Issues",
      email: true,
      sms: true,
      push: true,
      inApp: true,
      slack: true,
      locked: true,
    },
    {
      id: "sensors",
      label: "Sensors",
      email: true,
      sms: true,
      push: true,
      inApp: true,
      slack: true,
      locked: true,
    },
    {
      id: "heads-up",
      label: "Heads Up",
      email: true,
      sms: true,
      push: true,
      inApp: true,
      slack: true,
      locked: true,
    },
    {
      id: "training",
      label: "Training",
      icon: <GraduationCap size={16} />,
      email: true,
      sms: true,
      push: true,
      inApp: true,
      slack: true,
      locked: true,
    },
    {
      id: "contractors",
      label: "Contractors",
      icon: <Users size={16} />,
      email: true,
      sms: true,
      push: true,
      inApp: true,
      slack: true,
      locked: true,
    },
    {
      id: "credentials",
      label: "Credentials",
      icon: <CreditCard size={16} />,
      email: true,
      sms: true,
      push: true,
      inApp: true,
      slack: true,
      locked: true,
    },
    {
      id: "onboarding",
      label: "Onboarding",
      icon: <UserPlus size={16} />,
      email: true,
      sms: true,
      push: true,
      inApp: true,
      slack: true,
      locked: true,
    },
  ]);

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const updateRowCheckbox = (
    rowId: string,
    field: keyof Pick<
      NotificationRow,
      "email" | "sms" | "push" | "inApp" | "slack"
    >,
    value: boolean
  ) => {
    setNotifications((prevNotifications) => {
      return prevNotifications.map((row) => {
        if (row.id === rowId) {
          return { ...row, [field]: value };
        }
        // If this row has children, check if any child matches and update parent accordingly
        if (row.children) {
          const updatedChildren = row.children.map((child) =>
            child.id === rowId ? { ...child, [field]: value } : child
          );

          // Update parent based on children's state
          const allChecked = updatedChildren.every((child) => child[field]);
          const someChecked = updatedChildren.some((child) => child[field]);

          return {
            ...row,
            children: updatedChildren,
            [field]: allChecked ? true : someChecked ? row[field] : false,
          };
        }
        return row;
      });
    });
  };

  const toggleParentCheckbox = (
    parentId: string,
    field: keyof Pick<
      NotificationRow,
      "email" | "sms" | "push" | "inApp" | "slack"
    >
  ) => {
    setNotifications((prevNotifications) => {
      return prevNotifications.map((row) => {
        if (row.id === parentId && row.children) {
          // Check current state
          const allChecked = row.children.every((child) => child[field]);
          const someChecked = row.children.some((child) => child[field]);

          // If all checked or some checked, uncheck all. Otherwise, check all
          const newValue = !(allChecked || someChecked);

          // Update parent and all children
          return {
            ...row,
            [field]: newValue,
            children: row.children.map((child) => ({
              ...child,
              [field]: newValue,
            })),
          };
        }
        return row;
      });
    });
  };

  const getCheckboxState = (
    row: NotificationRow,
    field: keyof Pick<
      NotificationRow,
      "email" | "sms" | "push" | "inApp" | "slack"
    >
  ) => {
    if (!row.children || row.children.length === 0) {
      return { checked: row[field], indeterminate: false };
    }

    const checkedCount = row.children.filter((child) => child[field]).length;
    const allChecked = checkedCount === row.children.length;
    const someChecked = checkedCount > 0 && checkedCount < row.children.length;

    return {
      checked: allChecked,
      indeterminate: someChecked,
    };
  };

  const renderRow = (
    row: NotificationRow,
    isChild = false
  ): React.ReactNode => {
    const isExpanded = expandedRows.has(row.id);
    const hasChildren = row.children && row.children.length > 0;

    return (
      <>
        <tr
          key={row.id}
          style={{
            backgroundColor: isChild ? "#F9FAFB" : "#fff",
          }}
        >
          <td
            style={{
              padding: "12px 16px",
              paddingLeft: isChild ? "48px" : "16px",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {hasChildren && (
                <button
                  onClick={() => toggleRow(row.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {isExpanded ? (
                    <ChevronDown size={16} color="#6B7280" />
                  ) : (
                    <ChevronRight size={16} color="#6B7280" />
                  )}
                </button>
              )}
              {!hasChildren && !isChild && <div style={{ width: 16 }} />}
              {row.icon && <span style={{ color: "#6B7280" }}>{row.icon}</span>}
              <Typography component="span" variant="bodyMedium">
                {row.label}
              </Typography>
            </div>
          </td>
          <td
            style={{
              padding: "12px 16px",
              textAlign: "center",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <Checkbox
              checked={
                hasChildren && !isChild
                  ? getCheckboxState(row, "email").checked
                  : row.email
              }
              indeterminate={
                hasChildren && !isChild
                  ? getCheckboxState(row, "email").indeterminate
                  : false
              }
              size="medium"
              onChange={() => {
                if (hasChildren && !isChild) {
                  toggleParentCheckbox(row.id, "email");
                } else {
                  updateRowCheckbox(row.id, "email", !row.email);
                }
              }}
            />
          </td>
          <td
            style={{
              padding: "12px 16px",
              textAlign: "center",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <Checkbox
              checked={
                hasChildren && !isChild
                  ? getCheckboxState(row, "sms").checked
                  : row.sms
              }
              indeterminate={
                hasChildren && !isChild
                  ? getCheckboxState(row, "sms").indeterminate
                  : false
              }
              size="medium"
              onChange={() => {
                if (hasChildren && !isChild) {
                  toggleParentCheckbox(row.id, "sms");
                } else {
                  updateRowCheckbox(row.id, "sms", !row.sms);
                }
              }}
            />
          </td>
          <td
            style={{
              padding: "12px 16px",
              textAlign: "center",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <Checkbox
              checked={
                hasChildren && !isChild
                  ? getCheckboxState(row, "push").checked
                  : row.push
              }
              indeterminate={
                hasChildren && !isChild
                  ? getCheckboxState(row, "push").indeterminate
                  : false
              }
              size="medium"
              onChange={() => {
                if (hasChildren && !isChild) {
                  toggleParentCheckbox(row.id, "push");
                } else {
                  updateRowCheckbox(row.id, "push", !row.push);
                }
              }}
            />
          </td>
          <td
            style={{
              padding: "12px 16px",
              textAlign: "center",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <Checkbox
              checked={
                hasChildren && !isChild
                  ? getCheckboxState(row, "inApp").checked
                  : row.inApp
              }
              indeterminate={
                hasChildren && !isChild
                  ? getCheckboxState(row, "inApp").indeterminate
                  : false
              }
              size="medium"
              onChange={() => {
                if (hasChildren && !isChild) {
                  toggleParentCheckbox(row.id, "inApp");
                } else {
                  updateRowCheckbox(row.id, "inApp", !row.inApp);
                }
              }}
            />
          </td>
          <td
            style={{
              padding: "12px 16px",
              textAlign: "center",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <Checkbox
              checked={
                hasChildren && !isChild
                  ? getCheckboxState(row, "slack").checked
                  : row.slack
              }
              indeterminate={
                hasChildren && !isChild
                  ? getCheckboxState(row, "slack").indeterminate
                  : false
              }
              size="medium"
              onChange={() => {
                if (hasChildren && !isChild) {
                  toggleParentCheckbox(row.id, "slack");
                } else {
                  updateRowCheckbox(row.id, "slack", !row.slack);
                }
              }}
            />
          </td>
          <td
            style={{
              padding: "12px 16px",
              textAlign: "center",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <ToggleSwitch
              isChecked={row.locked}
              aria-label="Lock preference"
              onChange={() => {}}
            />
          </td>
        </tr>
        {hasChildren &&
          isExpanded &&
          row.children?.map((child) => renderRow(child, true))}
      </>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#E5E7EB",
        minHeight: "100vh",
        padding: "24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <Typography
            component="h1"
            variant="displaySmall"
            style={{ marginBottom: 16 }}
          >
            Organisation settings
          </Typography>
          <div
            style={{
              display: "flex",
              gap: 24,
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <Tab label="Global settings" active={false} />
            <Tab label="Features" active={false} />
            <Tab label="Activity log" active={false} />
            <Tab label="Security" active={false} />
            <Tab label="Notifications" active={true} />
          </div>
        </div>

        {/* Enable or disable notification channels */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            padding: 24,
            marginBottom: 16,
          }}
        >
          <Typography
            component="h2"
            variant="titleMedium"
            style={{ marginBottom: 8 }}
          >
            Enable or disable notification channels
          </Typography>
          <Typography
            component="p"
            variant="bodyMedium"
            style={{ color: "#6B7280", marginBottom: 24 }}
          >
            Set the default notification preferences for all users in the
            organisation.
          </Typography>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <ChannelToggle
              icon={<Envelope size={16} />}
              label="Email"
              checked={emailEnabled}
              onChange={setEmailEnabled}
            />
            <ChannelToggle
              icon={<MessageChatSquare size={16} />}
              label="SMS"
              checked={smsEnabled}
              onChange={setSmsEnabled}
            />
            <ChannelToggle
              icon={<Bell size={16} />}
              label="Push"
              checked={pushEnabled}
              onChange={setPushEnabled}
            />
            <ChannelToggle
              icon={<Mobile size={16} />}
              label="In-app"
              checked={inAppEnabled}
              onChange={setInAppEnabled}
            />
            <ChannelToggle
              icon={<Stack size={16} />}
              label="Slack/Teams"
              checked={slackEnabled}
              onChange={setSlackEnabled}
            />
          </div>
        </div>

        {/* Notification Preferences */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            padding: 24,
          }}
        >
          <Typography
            component="h2"
            variant="titleMedium"
            style={{ marginBottom: 8 }}
          >
            Notification Preferences
          </Typography>
          <Typography
            component="p"
            variant="bodyMedium"
            style={{ color: "#6B7280", marginBottom: 24 }}
          >
            Set the default notification preferences for all users in the
            organisation.
          </Typography>

          {/* Lock all preferences */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
              position: "relative",
            }}
          >
            <Lock size={16} color="#6B7280" />
            <Typography component="span" variant="labelMedium">
              Lock all preferences
            </Typography>
            <ToggleSwitch
              isChecked={lockAllPreferences}
              aria-label="Lock all preferences"
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                setLockAllPreferences(target.checked);
                if (target.checked) {
                  setShowTooltip(true);
                  setTimeout(() => setShowTooltip(false), 3000);
                }
              }}
            />
            {showTooltip && (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "100%",
                  transform: "translateX(-50%)",
                  marginTop: 8,
                  backgroundColor: "#1F2937",
                  color: "#fff",
                  padding: "8px 12px",
                  borderRadius: 6,
                  fontSize: 14,
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                This will lock users from editing their preferences and apply to
                all users in the organisation
              </div>
            )}
          </div>

          {/* Unsaved changes banner */}
          <div
            style={{
              backgroundColor: "#EEF2FF",
              padding: "12px 24px",
              borderRadius: 6,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              marginLeft: -24,
              marginRight: -24,
            }}
          >
            <Typography component="span" variant="bodyMedium">
              14 unsaved changes
            </Typography>
            <PolymorphicButton variant="primary" size="medium">
              Save Changes
            </PolymorphicButton>
          </div>

          {/* Notification table */}
          <div
            style={{
              overflowX: "auto",
              border: "1px solid #E5E7EB",
              borderRadius: 8,
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#F9FAFB" }}>
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "left",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    <Typography
                      component="span"
                      variant="labelMedium"
                      style={{ color: "#6B7280" }}
                    >
                      Notify users about
                    </Typography>
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                      }}
                    >
                      <Envelope size={16} color="#6B7280" />
                      <Typography
                        component="span"
                        variant="labelMedium"
                        style={{ color: "#6B7280" }}
                      >
                        Email
                      </Typography>
                    </div>
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                      }}
                    >
                      <MessageChatSquare size={16} color="#6B7280" />
                      <Typography
                        component="span"
                        variant="labelMedium"
                        style={{ color: "#6B7280" }}
                      >
                        SMS
                      </Typography>
                    </div>
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                      }}
                    >
                      <Bell size={16} color="#6B7280" />
                      <Typography
                        component="span"
                        variant="labelMedium"
                        style={{ color: "#6B7280" }}
                      >
                        Push
                      </Typography>
                    </div>
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                      }}
                    >
                      <Mobile size={16} color="#6B7280" />
                      <Typography
                        component="span"
                        variant="labelMedium"
                        style={{ color: "#6B7280" }}
                      >
                        In-app
                      </Typography>
                    </div>
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                      }}
                    >
                      <Stack size={16} color="#6B7280" />
                      <Typography
                        component="span"
                        variant="labelMedium"
                        style={{ color: "#6B7280" }}
                      >
                        Slack
                      </Typography>
                    </div>
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                      }}
                    >
                      <Lock size={16} color="#6B7280" />
                      <Typography
                        component="span"
                        variant="labelMedium"
                        style={{ color: "#6B7280" }}
                      >
                        Lock
                      </Typography>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>{notifications.map((row) => renderRow(row))}</tbody>
            </table>
          </div>

          {/* Bottom save button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 24,
            }}
          >
            <PolymorphicButton variant="primary" size="medium">
              Save changes
            </PolymorphicButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tab({ label, active }: { label: string; active: boolean }) {
  return (
    <button
      style={{
        background: "none",
        border: "none",
        padding: "12px 0",
        cursor: "pointer",
        borderBottom: active ? "2px solid #4F46E5" : "2px solid transparent",
        color: active ? "#4F46E5" : "#6B7280",
      }}
    >
      <Typography component="span" variant="labelMedium">
        {label}
      </Typography>
    </button>
  );
}

function ChannelToggle({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {icon}
      <Typography component="span" variant="bodyMedium">
        {label}
      </Typography>
      <ToggleSwitch
        isChecked={checked}
        aria-label={label}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          onChange(target.checked);
        }}
      />
    </div>
  );
}

export default NotificationsSettingsPrototype;
