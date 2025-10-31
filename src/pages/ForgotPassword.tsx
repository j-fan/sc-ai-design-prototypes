/**
 * Multi-Step Login Flow with Forgot Password Prototype
 *
 * This prototype demonstrates a multi-step login flow with the following screens:
 * 1. Welcome screen - Introduction with illustration
 * 2. Username entry - User provides email or username
 * 3. Organization & Password - User enters org details and password
 * 4. Forgot Password Help - Help screen (only shown when "Forgot ID and/or password?" is clicked)
 *
 * Based on Figma design: https://www.figma.com/design/AgobZRogf7oW99qO3HsvvI/Org-Alias-or-ID-login?node-id=177-18436
 *
 * User Instructions/Messages:
 * 1. "Create this multi-step login flow based on this design: https://www.figma.com/design/AgobZRogf7oW99qO3HsvvI/Org-Alias-or-ID-login?node-id=177-18436&t=DfWrgJX5yQh3ec77-4. Call it ForgotPassword. The last screen should only appear if 'Forgot ID and/or password' is clicked in the second last screen"
 */

import { useState } from "react";
import { Button, Input, Typography } from "@safetyculture/sc-web-ui";
import {
  CirclePeopleCompanies,
  ScLogo,
  SecurityPerson,
} from "@safetyculture/illustrations-react";
import { ArrowLeft } from "@safetyculture/icons-react";

type Step = "welcome" | "username" | "org-password" | "forgot-password";

function ForgotPassword() {
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [username, setUsername] = useState("");
  const [orgId, setOrgId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    setCurrentStep("username");
  };

  const handleLogin = () => {
    setCurrentStep("username");
  };

  const handleContinue = () => {
    setCurrentStep("org-password");
  };

  const handleBack = () => {
    setCurrentStep("username");
  };

  const handleSubmit = () => {
    // Handle login submission
    console.log("Login submitted");
  };

  const handleForgotPassword = () => {
    setCurrentStep("forgot-password");
  };

  const handleReturnToLogin = () => {
    setCurrentStep("org-password");
  };

  const handleClose = () => {
    setCurrentStep("welcome");
    setUsername("");
    setOrgId("");
    setPassword("");
  };

  // Welcome Screen
  if (currentStep === "welcome") {
    return (
      <div
        style={{
          backgroundColor: "#e9edf6",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: '"Noto Sans", sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: "402px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "44px 16px 34px",
            border: "1px solid #d0d8eb",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            backgroundColor: "#e9edf6",
            minHeight: "100vh",
          }}
        >
          {/* Status Bar Placeholder */}
          <div style={{ width: "100%", maxWidth: "402px" }} />

          {/* Main Content */}
          <div
            style={{
              width: "100%",
              maxWidth: "370px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="titleMedium"
              component="h1"
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
                color: "#1f2533",
              }}
            >
              Create checklists.
              <br />
              Conduct inspections
              <br />
              Generate and
              <br />
              share reports.
            </Typography>

            {/* Illustration */}
            <div
              style={{
                width: "324px",
                height: "324px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CirclePeopleCompanies
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          {/* Footer CTAs */}
          <div
            style={{
              width: "100%",
              maxWidth: "370px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Button
              variant="primary"
              size="medium"
              onClick={handleSignUp}
              style={{ width: "100%" }}
            >
              Sign up for free
            </Button>
            <Button
              variant="secondary"
              size="medium"
              onClick={handleLogin}
              style={{ width: "100%" }}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Username Entry Screen
  if (currentStep === "username") {
    return (
      <div
        style={{
          backgroundColor: "#e9edf6",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: '"Noto Sans", sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: "402px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #d0d8eb",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            backgroundColor: "#e9edf6",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "44px 0 0",
            }}
          >
            {/* Close button */}
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "24px",
              }}
              onClick={handleClose}
            >
              ✕
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              padding: "40px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "370px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            {/* Logo */}
            <div
              style={{
                width: "137px",
                height: "24px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ScLogo style={{ width: "100%", height: "auto" }} />
            </div>

            {/* Form Card */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                padding: "24px 16px 40px",
                boxShadow:
                  "0px 2.4px 8px rgba(0,0,0,0.06), 0px 14px 28px rgba(0,0,0,0.16)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Typography
                variant="titleMedium"
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "32px",
                  color: "#1f2533",
                }}
              >
                Log in
              </Typography>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1f2533",
                  }}
                >
                  Email or username
                </label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter email or username"
                  style={{ width: "100%" }}
                />
              </div>

              <Button
                variant="primary"
                size="medium"
                onClick={handleContinue}
                disabled={!username}
                style={{ width: "100%" }}
              >
                Continue
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0 16px",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              color: "#3f495a",
              maxWidth: "370px",
              width: "calc(100% - 32px)",
            }}
          >
            <span>Privacy</span>
            <span>Terms</span>
            <span>Status</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    );
  }

  // Organization & Password Screen
  if (currentStep === "org-password") {
    return (
      <div
        style={{
          backgroundColor: "#e9edf6",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: '"Noto Sans", sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: "402px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #d0d8eb",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            backgroundColor: "#e9edf6",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "44px 0 0",
            }}
          >
            {/* Close button */}
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "24px",
              }}
              onClick={handleClose}
            >
              ✕
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              padding: "40px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "370px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            {/* Logo */}
            <div
              style={{
                width: "137px",
                height: "24px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ScLogo style={{ width: "100%", height: "auto" }} />
            </div>

            {/* Form Card */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                padding: "24px 16px 40px",
                boxShadow:
                  "0px 2.4px 8px rgba(0,0,0,0.06), 0px 14px 28px rgba(0,0,0,0.16)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Navigation Header */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div
                  onClick={handleBack}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowLeft size={24} color="#1f2533" />
                </div>
                <Typography
                  variant="titleMedium"
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "32px",
                    color: "#1f2533",
                  }}
                >
                  Log in
                </Typography>
              </div>

              <Typography
                variant="bodyMedium"
                style={{
                  fontSize: "14px",
                  color: "#3f495a",
                }}
              >
                Log in with {username}
              </Typography>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1f2533",
                  }}
                >
                  Organisation name or ID
                </label>
                <Input
                  type="text"
                  value={orgId}
                  onChange={(e) => setOrgId(e.target.value)}
                  placeholder="Enter organisation name or ID"
                  style={{ width: "100%" }}
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1f2533",
                  }}
                >
                  Password
                </label>
                <div style={{ position: "relative" }}>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    style={{ width: "100%" }}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                  >
                    👁
                  </button>
                </div>
              </div>

              <Button
                variant="primary"
                size="medium"
                onClick={handleSubmit}
                disabled={!orgId || !password}
                style={{ width: "100%" }}
              >
                Log in with password and ID
              </Button>

              <Button
                variant="tertiary"
                size="medium"
                onClick={handleForgotPassword}
                style={{ width: "100%" }}
              >
                Forgot ID and/or password?
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0 16px",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              color: "#3f495a",
              maxWidth: "370px",
              width: "calc(100% - 32px)",
            }}
          >
            <span>Privacy</span>
            <span>Terms</span>
            <span>Status</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    );
  }

  // Forgot Password Help Screen
  if (currentStep === "forgot-password") {
    return (
      <div
        style={{
          backgroundColor: "#e9edf6",
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontFamily: '"Noto Sans", sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: "402px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #d0d8eb",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
            backgroundColor: "#e9edf6",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "44px 0 0",
            }}
          >
            {/* Close button */}
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "24px",
              }}
              onClick={handleClose}
            >
              ✕
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              padding: "53px 16px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "370px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            {/* Logo */}
            <div
              style={{
                width: "137px",
                height: "24px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ScLogo style={{ width: "100%", height: "auto" }} />
            </div>

            {/* Form Card */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                padding: "24px 16px 40px",
                boxShadow:
                  "0px 2.4px 8px rgba(0,0,0,0.06), 0px 14px 28px rgba(0,0,0,0.16)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Typography
                variant="titleMedium"
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "32px",
                  color: "#1f2533",
                  textAlign: "center",
                }}
              >
                Forgot ID and/or password
              </Typography>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  alignItems: "center",
                  paddingTop: "16px",
                }}
              >
                {/* Illustration */}
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SecurityPerson style={{ width: "100%", height: "100%" }} />
                </div>

                {/* Text Content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="titleLarge"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      color: "#1f2533",
                    }}
                  >
                    Contact your system administrator
                  </Typography>
                  <Typography
                    variant="bodyMedium"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20px",
                      color: "#3f495a",
                    }}
                  >
                    As you don't have an email associated with your account,
                    please contact your system administrator.
                  </Typography>
                </div>

                {/* CTAs */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "11px",
                    width: "100%",
                  }}
                >
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={handleReturnToLogin}
                    style={{ width: "100%" }}
                  >
                    Return to login
                  </Button>
                  <Button
                    variant="tertiary"
                    size="medium"
                    style={{ width: "100%" }}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0 16px",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              color: "#3f495a",
              maxWidth: "370px",
              width: "calc(100% - 32px)",
            }}
          >
            <span>Privacy</span>
            <span>Terms</span>
            <span>Status</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default ForgotPassword;
