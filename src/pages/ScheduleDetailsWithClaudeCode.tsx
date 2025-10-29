import { useState } from "react";
import {
  SideSheet,
  FooterDefaultLayout,
  Typography,
  Button,
  Badge,
} from "@safetyculture/sc-web-ui";
import {
  User,
  Layout,
  ArrowRotate,
  CalendarCheck,
  LockOpen,
  Lock,
  CalendarExclamation,
} from "@safetyculture/icons-react";

/**
 * 1. Implement this Figma design https://www.figma.com/design/QnLrj9UsUdGIPowHixGEEj/Assigned-to-me-tab?node-id=5271-24729&t=jcjiR8cSTlchYAxV-1
 * as a new prototype called ScheduleDetailsWithClaudeCode
 */
function ScheduleDetailsWithClaudeCode() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        data-anchor="modal-open"
        onClick={() => setOpen(true)}
        style={{
          padding: "8px 16px",
          background: "#675DF4",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        Open Schedule Details
      </button>
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
              <CalendarExclamation size={12} color="#4740D4" />
              <Typography
                component="span"
                variant="overlineSmall"
                style={{ color: "#4740D4", textTransform: "uppercase" }}
              >
                SCHEDULE
              </Typography>
            </div>
          }
        />
        <SideSheet.BodyDefaultLayout
          contentSlot={
            <div style={{ padding: "16px" }}>
              {/* Details Section */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #dbe0eb",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <div style={{ padding: "16px 16px 0 16px" }}>
                  <Typography
                    variant="labelLarge"
                    component="div"
                    style={{ marginBottom: "16px" }}
                  >
                    Details
                  </Typography>
                </div>
                <div style={{ padding: "0 16px 16px 16px" }}>
                  {/* Form fields */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    {/* Assigned by */}
                    <div
                      style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                        minHeight: "40px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "center",
                          minWidth: "140px",
                        }}
                      >
                        <User size={16} color="#545f70" />
                        <Typography
                          variant="labelMedium"
                          component="span"
                          style={{ color: "#545f70" }}
                        >
                          Assigned by
                        </Typography>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          background: "#ffffff",
                          borderRadius: "8px",
                          padding: "10px 8px",
                          minHeight: "40px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="labelMedium" component="span">
                          Josh Rat
                        </Typography>
                      </div>
                    </div>

                    {/* Template */}
                    <div
                      style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                        minHeight: "40px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "center",
                          minWidth: "140px",
                        }}
                      >
                        <Layout size={16} color="#545f70" />
                        <Typography
                          variant="labelMedium"
                          component="span"
                          style={{ color: "#545f70" }}
                        >
                          Template
                        </Typography>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          background: "#ffffff",
                          borderRadius: "8px",
                          padding: "10px 8px",
                          minHeight: "40px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="labelMedium" component="span">
                          Coles health and safety inspection
                        </Typography>
                      </div>
                    </div>

                    {/* Repeats */}
                    <div
                      style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                        minHeight: "40px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "center",
                          minWidth: "140px",
                        }}
                      >
                        <ArrowRotate size={16} color="#545f70" />
                        <Typography
                          variant="labelMedium"
                          component="span"
                          style={{ color: "#545f70" }}
                        >
                          Repeats
                        </Typography>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          background: "#ffffff",
                          borderRadius: "8px",
                          padding: "10px 8px",
                          minHeight: "40px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="labelMedium" component="span">
                          Every day
                        </Typography>
                      </div>
                    </div>

                    {/* Requirement */}
                    <div
                      style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                        minHeight: "40px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "center",
                          minWidth: "140px",
                        }}
                      >
                        <CalendarCheck size={16} color="#545f70" />
                        <Typography
                          variant="labelMedium"
                          component="span"
                          style={{ color: "#545f70" }}
                        >
                          Requirement
                        </Typography>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          background: "#ffffff",
                          borderRadius: "8px",
                          padding: "10px 8px",
                          minHeight: "40px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="labelMedium" component="span">
                          Only one assignee needs to complete
                        </Typography>
                      </div>
                    </div>

                    {/* Available from */}
                    <div
                      style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                        minHeight: "40px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "center",
                          minWidth: "140px",
                        }}
                      >
                        <LockOpen size={16} color="#545f70" />
                        <Typography
                          variant="labelMedium"
                          component="span"
                          style={{ color: "#545f70" }}
                        >
                          Available from
                        </Typography>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          background: "#ffffff",
                          borderRadius: "8px",
                          padding: "10px 8px",
                          minHeight: "40px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="labelMedium" component="span">
                          9:00 AM 14/08/2024
                        </Typography>
                      </div>
                    </div>

                    {/* Due */}
                    <div
                      style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                        minHeight: "40px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "center",
                          minWidth: "140px",
                        }}
                      >
                        <Lock size={16} color="#545f70" />
                        <Typography
                          variant="labelMedium"
                          component="span"
                          style={{ color: "#545f70" }}
                        >
                          Due
                        </Typography>
                      </div>
                      <div
                        style={{
                          flex: 1,
                          background: "#ffffff",
                          borderRadius: "8px",
                          padding: "10px 8px",
                          minHeight: "40px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="labelMedium" component="span">
                          5:00 PM 17/08/2024
                        </Typography>
                      </div>
                    </div>

                    {/* Status */}
                    <div
                      style={{
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                        minHeight: "40px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          alignItems: "center",
                          minWidth: "140px",
                        }}
                      >
                        <CalendarExclamation size={16} color="#545f70" />
                        <Typography
                          variant="labelMedium"
                          component="span"
                          style={{ color: "#545f70" }}
                        >
                          Status
                        </Typography>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Badge variant="information">To do</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Warning Banner */}
                  <div
                    style={{
                      background: "#FFFAE5",
                      borderRadius: "8px",
                      padding: "12px 16px",
                      marginTop: "16px",
                      display: "flex",
                      gap: "12px",
                    }}
                  >
                    <CalendarExclamation
                      size={20}
                      color="#9E4A00"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <div>
                      <Typography
                        variant="titleSmall"
                        component="div"
                        style={{ color: "#9E4A00", marginBottom: "4px" }}
                      >
                        Schedule overdue
                      </Typography>
                      <Typography
                        variant="bodySmall"
                        component="div"
                        style={{ color: "#9E4A00" }}
                      >
                        Please complete your inspection as soon as possible to
                        avoid missing the schedule.
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <FooterDefaultLayout
          primaryActionSlot={
            <Button variant="primary" style={{ width: "100%" }}>
              Start inspection
            </Button>
          }
          secondaryActionSlot={
            <Button variant="secondary" style={{ width: "100%" }}>
              Won't do
            </Button>
          }
        />
      </SideSheet>
    </>
  );
}

export default ScheduleDetailsWithClaudeCode;
