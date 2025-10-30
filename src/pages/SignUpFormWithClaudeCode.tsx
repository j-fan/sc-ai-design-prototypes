/**
 * Multi-Step Sign Up Flow Prototype
 *
 * This prototype demonstrates a multi-step sign-up/login flow with the following screens:
 * 1. Welcome screen - Introduction with illustration
 * 2. Username entry - User provides email or username
 * 3. Organization & Password - User enters org details and password
 * 4. Loading - Processing state with spinner
 * 5. Success - Confirmation screen
 *
 * User Instructions/Messages:
 * 1. "Create this multi-step sign up flow. The figma file contains multiple screens detailing the flow: https://www.figma.com/design/AgobZRogf7oW99qO3HsvvI/Org-Alias-or-ID-login?node-id=177-17888&t=DfWrgJX5yQh3ec77-4"
 * 2. "Can you call this prototype 'SignUpFormWithClaudeCode'?"
 * 3. "This is a mobile screen prototype. Keep the screen width proportionally constrained. Having empty space on the left and right is fine"
 * 4. "Can you add a nice border around the screen to seperate it from the background"
 * 5. "Can you use the text SafetyCulture in black for the logo/picture above the login form card"
 * 6. "The privacy, terms, status, support nav items should be anchored to the bottom"
 */

import { useState } from 'react';
import { Button, Input, Typography } from '@safetyculture/sc-web-ui';

type Step = 'welcome' | 'username' | 'org-password' | 'loading' | 'success';

function SignUpFormWithClaudeCode() {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [username, setUsername] = useState('');
  const [orgId, setOrgId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    setCurrentStep('username');
  };

  const handleLogin = () => {
    setCurrentStep('username');
  };

  const handleContinue = () => {
    setCurrentStep('org-password');
  };

  const handleBack = () => {
    setCurrentStep('username');
  };

  const handleSubmit = () => {
    setCurrentStep('loading');
    // Simulate API call
    setTimeout(() => {
      setCurrentStep('success');
    }, 2000);
  };

  const handleClose = () => {
    setCurrentStep('welcome');
    setUsername('');
    setOrgId('');
    setPassword('');
  };

  // Welcome Screen
  if (currentStep === 'welcome') {
    return (
      <div style={{
        backgroundColor: '#e9edf6',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"Noto Sans", sans-serif',
      }}>
        <div style={{
          maxWidth: '402px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '44px 16px 34px',
          border: '1px solid #d0d8eb',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          backgroundColor: '#e9edf6',
          minHeight: '100vh',
        }}>
        {/* Status Bar Placeholder */}
        <div style={{ width: '100%', maxWidth: '402px' }} />

        {/* Main Content */}
        <div style={{
          width: '100%',
          maxWidth: '370px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center'
        }}>
          <Typography
            variant="titleMedium"
            component="h1"
            style={{
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '32px',
              color: '#1f2533'
            }}
          >
            Create checklists.<br />
            Conduct inspections<br />
            Generate and<br />
            share reports.
          </Typography>

          {/* Illustration Placeholder */}
          <div style={{
            width: '324px',
            height: '324px',
            borderRadius: '50%',
            backgroundColor: '#d0d8eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px'
          }}>
            ✈️
          </div>
        </div>

        {/* Footer CTAs */}
        <div style={{
          width: '100%',
          maxWidth: '370px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <Button
            variant="primary"
            size="medium"
            onClick={handleSignUp}
            style={{ width: '100%' }}
          >
            Sign up for free
          </Button>
          <Button
            variant="secondary"
            size="medium"
            onClick={handleLogin}
            style={{ width: '100%' }}
          >
            Log in
          </Button>
        </div>
        </div>
      </div>
    );
  }

  // Username Entry Screen
  if (currentStep === 'username') {
    return (
      <div style={{
        backgroundColor: '#e9edf6',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"Noto Sans", sans-serif',
      }}>
        <div style={{
          maxWidth: '402px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #d0d8eb',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          backgroundColor: '#e9edf6',
          minHeight: '100vh',
          position: 'relative',
        }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '44px 0 0',
        }}>
          {/* Close button */}
          <div style={{
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '24px'
          }} onClick={handleClose}>
            ✕
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          padding: '40px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '370px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Logo */}
          <div style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#000000',
            fontFamily: '"Noto Sans", sans-serif',
          }}>
            SafetyCulture
          </div>

          {/* Form Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '24px 16px 40px',
            boxShadow: '0px 2.4px 8px rgba(0,0,0,0.06), 0px 14px 28px rgba(0,0,0,0.16)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <Typography
              variant="titleMedium"
              style={{
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '32px',
                color: '#1f2533'
              }}
            >
              Log in
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#1f2533'
              }}>
                Email or username
              </label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter email or username"
                style={{ width: '100%' }}
              />
            </div>

            <Button
              variant="primary"
              size="medium"
              onClick={handleContinue}
              disabled={!username}
              style={{ width: '100%' }}
            >
              Continue
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '14px',
          color: '#3f495a',
          maxWidth: '370px',
          width: 'calc(100% - 32px)'
        }}>
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
  if (currentStep === 'org-password') {
    return (
      <div style={{
        backgroundColor: '#e9edf6',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"Noto Sans", sans-serif',
      }}>
        <div style={{
          maxWidth: '402px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #d0d8eb',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          backgroundColor: '#e9edf6',
          minHeight: '100vh',
          position: 'relative',
        }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '44px 0 0',
        }}>
          {/* Close button */}
          <div style={{
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '24px'
          }} onClick={handleClose}>
            ✕
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          padding: '40px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '370px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Logo */}
          <div style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#000000',
            fontFamily: '"Noto Sans", sans-serif',
          }}>
            SafetyCulture
          </div>

          {/* Form Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '24px 16px 40px',
            boxShadow: '0px 2.4px 8px rgba(0,0,0,0.06), 0px 14px 28px rgba(0,0,0,0.16)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* Navigation Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div onClick={handleBack} style={{ cursor: 'pointer', fontSize: '24px' }}>
                ←
              </div>
              <Typography
                variant="titleMedium"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  lineHeight: '32px',
                  color: '#1f2533'
                }}
              >
                Log in
              </Typography>
            </div>

            <Typography
              variant="bodyMedium"
              style={{
                fontSize: '14px',
                color: '#3f495a'
              }}
            >
              Log in with {username}
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#1f2533'
              }}>
                Organisation name or ID
              </label>
              <Input
                type="text"
                value={orgId}
                onChange={(e) => setOrgId(e.target.value)}
                placeholder="Enter organisation name or ID"
                style={{ width: '100%' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#1f2533'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  style={{ width: '100%' }}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '12px'
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
              style={{ width: '100%' }}
            >
              Log in with password and ID
            </Button>

            <Button
              variant="tertiary"
              size="medium"
              style={{ width: '100%' }}
            >
              Forgot ID and/or password?
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '0 16px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '14px',
          color: '#3f495a',
          maxWidth: '370px',
          width: 'calc(100% - 32px)'
        }}>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Status</span>
          <span>Support</span>
        </div>
        </div>
      </div>
    );
  }

  // Loading Screen
  if (currentStep === 'loading') {
    return (
      <div style={{
        backgroundColor: '#e9edf6',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"Noto Sans", sans-serif',
      }}>
        <div style={{
          maxWidth: '402px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #d0d8eb',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          backgroundColor: '#e9edf6',
          minHeight: '100vh',
          position: 'relative',
        }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '44px 0 0',
        }}>
          {/* Close button */}
          <div style={{
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '24px'
          }} onClick={handleClose}>
            ✕
          </div>
        </div>

        {/* Loading Spinner */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#4740D4',
              animation: 'pulse 1.4s ease-in-out infinite'
            }} />
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#4740D4',
              animation: 'pulse 1.4s ease-in-out 0.2s infinite'
            }} />
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#4740D4',
              animation: 'pulse 1.4s ease-in-out 0.4s infinite'
            }} />
          </div>
        </div>
        </div>
      </div>
    );
  }

  // Success Screen
  if (currentStep === 'success') {
    return (
      <div style={{
        backgroundColor: '#e9edf6',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"Noto Sans", sans-serif',
      }}>
        <div style={{
          maxWidth: '402px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #d0d8eb',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          backgroundColor: '#e9edf6',
          minHeight: '100vh',
          position: 'relative',
        }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '44px 0 0',
        }}>
          {/* Close button */}
          <div style={{
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '24px'
          }} onClick={handleClose}>
            ✕
          </div>
        </div>

        {/* Success Icon */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: '#4740D4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '120px',
            color: '#ffffff'
          }}>
            ✓
          </div>
        </div>
        </div>
      </div>
    );
  }

  return null;
}

export default SignUpFormWithClaudeCode;
