import { useState } from "react";
import {
  SideSheet,
  FooterDefaultLayout,
  PolymorphicButton,
  Typography,
} from "@safetyculture/sc-web-ui";
import {
  Calendar,
  User,
  Layout,
  ArrowRotate,
  CalendarCheck,
  LockOpen,
  Lock,
  CalendarExclamation,
} from "@safetyculture/icons-react";

function ScheduleDetailsPrototype() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <PolymorphicButton
        variant="primary"
        size="medium"
        onClick={() => setOpen(true)}
      >
        Open Schedule Details
      </PolymorphicButton>
      <SideSheet mode="overlay" isOpen={open} onClose={() => setOpen(false)}>
        <SideSheet.HeaderDefaultLayout
          title={
            <Typography component="span" variant="titleMedium">
              Coles health and safety inspection for Deli Workers - Maroubra
              Coles - Every day
            </Typography>
          }
          contentSlot={
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Calendar size={12} color="#4740D4" />
              <Typography
                component="span"
                variant="overlineSmall"
                style={{ color: "#4740D4", textTransform: "uppercase" }}
              >
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
                width: "100%",
                margin: "0 auto",
                boxSizing: "border-box",
                padding: 24,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  padding: 24,
                  marginBottom: 24,
                }}
              >
                <Typography
                  component="div"
                  variant="titleMedium"
                  style={{ marginBottom: 24 }}
                >
                  Details
                </Typography>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <DetailRow
                    icon={<User size={16} color="#545f70" />}
                    label="Assigned by"
                    value="Josh Rat"
                  />
                  <DetailRow
                    icon={<Layout size={16} color="#545f70" />}
                    label="Template"
                    value="Coles health and safety inspection"
                  />
                  <DetailRow
                    icon={<ArrowRotate size={16} color="#545f70" />}
                    label="Repeats"
                    value="Every day"
                  />
                  <DetailRow
                    icon={<CalendarCheck size={16} color="#545f70" />}
                    label="Requirement"
                    value="Only one assignee needs to complete"
                  />
                  <DetailRow
                    icon={<LockOpen size={16} color="#545f70" />}
                    label="Available from"
                    value="9:00 AM 14/08/2024"
                  />
                  <DetailRow
                    icon={<Lock size={16} color="#545f70" />}
                    label="Due"
                    value="5:00 PM 17/08/2024"
                  />
                  <DetailRow
                    icon={<CalendarExclamation size={16} color="#545f70" />}
                    label="Status"
                    value={
                      <span
                        style={{
                          backgroundColor: "#E8E7FC",
                          color: "#4740D4",
                          padding: "4px 8px",
                          borderRadius: 4,
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        To do
                      </span>
                    }
                  />
                </div>
                <div
                  style={{
                    background: "#FFFAE5",
                    borderRadius: 8,
                    marginTop: 24,
                    padding: 16,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <Calendar
                    size={20}
                    color="#B45309"
                    style={{ marginTop: 2, flexShrink: 0 }}
                  />
                  <div>
                    <Typography
                      component="div"
                      variant="titleSmall"
                      style={{ color: "#B45309", marginBottom: 4 }}
                    >
                      Schedule overdue
                    </Typography>
                    <Typography
                      component="div"
                      variant="bodySmall"
                      style={{ color: "#92400E" }}
                    >
                      Please complete your inspection as soon as possible to
                      avoid missing the schedule.
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
              style={{ width: "100%" }}
            >
              Start inspection
            </PolymorphicButton>
          }
          secondaryActionSlot={
            <PolymorphicButton
              variant="secondary"
              size="large"
              style={{ width: "100%" }}
            >
              Won't do
            </PolymorphicButton>
          }
        />
      </SideSheet>
    </>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode | string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ flexShrink: 0 }}>{icon}</div>
      <Typography
        component="span"
        variant="labelMedium"
        style={{ minWidth: 120, color: "#545f70" }}
      >
        {label}
      </Typography>
      {typeof value === "string" ? (
        <Typography
          component="span"
          variant="bodyMedium"
          style={{ color: "#1a1a1a" }}
        >
          {value}
        </Typography>
      ) : (
        value
      )}
    </div>
  );
}

export default ScheduleDetailsPrototype;
