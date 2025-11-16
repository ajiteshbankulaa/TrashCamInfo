import "./App.css";

function App() {
  return (
    <div className="tc-app">
      {/* Top neon grid background */}
      <div className="tc-background-grid" />

      <header className="tc-hero">
        <div className="tc-hero-content">
          <span className="tc-pill">RCOS • Hackathon Project</span>
          <h1 className="tc-title">TrashCam</h1>
          <p className="tc-subtitle">
            An AI-powered, camera-driven smart trashcan that tracks fill level,
            detects mis-sorted waste, and glows with retro LED feedback.
          </p>

          <div className="tc-hero-actions">
            <a
              href="https://github.com/your-org/trashcam"
              target="_blank"
              rel="noreferrer"
              className="tc-btn tc-btn-primary"
            >
              View on GitHub
            </a>
            <a href="#features" className="tc-btn tc-btn-ghost">
              See Features
            </a>
          </div>

          <div className="tc-hero-diagram">
            <div className="tc-diagram-node tc-diagram-node-muted">
              <span className="tc-diagram-label">Camera</span>
              <span className="tc-diagram-desc">USB / Pi Cam</span>
            </div>
            <div className="tc-diagram-arrow">→</div>
            <div className="tc-diagram-node">
              <span className="tc-diagram-label">Raspberry Pi</span>
              <span className="tc-diagram-desc">Streams over LAN</span>
            </div>
            <div className="tc-diagram-arrow">→</div>
            <div className="tc-diagram-node">
              <span className="tc-diagram-label">Laptop</span>
              <span className="tc-diagram-desc">YOLO + React UI</span>
            </div>
            <div className="tc-diagram-arrow">→</div>
            <div className="tc-diagram-node tc-diagram-node-muted">
              <span className="tc-diagram-label">LED Strip</span>
              <span className="tc-diagram-desc">Retro feedback</span>
            </div>
          </div>
        </div>
      </header>

      <main className="tc-main">
        {/* Features */}
        <section id="features" className="tc-section">
          <h2 className="tc-section-title">Why TrashCam?</h2>
          <p className="tc-section-subtitle">
            Designed for campuses, offices, and hackathons—TrashCam makes waste
            sorting visible, fun, and data-driven.
          </p>

          <div className="tc-grid tc-grid-3">
            <div className="tc-card">
              <h3>AI-Powered Sorting Insights</h3>
              <p>
                Computer vision detects items like bottles, cans, cups, and
                containers to estimate how well people are sorting their trash.
              </p>
              <ul className="tc-list">
                <li>YOLO-based classifier</li>
                <li>Per-item category mapping</li>
                <li>Contamination alerts</li>
              </ul>
            </div>

            <div className="tc-card">
              <h3>Live Fill-Level Monitoring</h3>
              <p>
                Tracks how full the bin is over time so custodial teams know
                when to empty without constant checking.
              </p>
              <ul className="tc-list">
                <li>Estimated fill percentage</em></li>
                <li>Last emptied timestamp</li>
                <li>Historic log of events</li>
              </ul>
            </div>

            <div className="tc-card">
              <h3>Retro LED Feedback Loop</h3>
              <p>
                The bin glows different colors depending on fill level and
                contamination, turning invisible waste behavior into a lightshow.
              </p>
              <ul className="tc-list">
                <li>Green: good sorting</li>
                <li>Yellow: almost full / mild issues</li>
                <li>Red: full or heavily mis-sorted</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="tc-section">
          <h2 className="tc-section-title">How It Works</h2>
          <div className="tc-steps">
            <div className="tc-step">
              <div className="tc-step-number">1</div>
              <div className="tc-step-body">
                <h3>Capture the Trash</h3>
                <p>
                  A camera mounted above the bin watches trash as it falls in.
                  The video stream is sent from a Raspberry Pi to a laptop over
                  Wi-Fi/LAN.
                </p>
              </div>
            </div>

            <div className="tc-step">
              <div className="tc-step-number">2</div>
              <div className="tc-step-body">
                <h3>Run AI on Each Frame</h3>
                <p>
                  The laptop runs YOLO-style models to detect waste items and
                  estimate their type (plastic, paper, metal, organic, etc.) and
                  track approximate fill level.
                </p>
              </div>
            </div>

            <div className="tc-step">
              <div className="tc-step-number">3</div>
              <div className="tc-step-body">
                <h3>Display Retro Dashboard</h3>
                <p>
                  A React dashboard shows fill percentage, mis-assignment rate,
                  and recent events in a retro terminal-inspired UI—perfect for
                  a wall-mounted monitor.
                </p>
              </div>
            </div>

            <div className="tc-step">
              <div className="tc-step-number">4</div>
              <div className="tc-step-body">
                <h3>Send LED Feedback</h3>
                <p>
                  The laptop talks back to the Pi, which controls an LED strip
                  wrapped around the bin. The LEDs visualize fullness and
                  sorting quality in real time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="tc-section">
          <h2 className="tc-section-title">Metrics We Track</h2>
          <div className="tc-grid tc-grid-4">
            <div className="tc-metric-card">
              <span className="tc-metric-label">Fill Level</span>
              <span className="tc-metric-value">~72%</span>
              <span className="tc-metric-caption">Estimated bin fullness</span>
            </div>
            <div className="tc-metric-card">
              <span className="tc-metric-label">Mis-Assigned Items</span>
              <span className="tc-metric-value">12%</span>
              <span className="tc-metric-caption">
                Items in the wrong bin
              </span>
            </div>
            <div className="tc-metric-card">
              <span className="tc-metric-label">Detections Logged</span>
              <span className="tc-metric-value">1,248</span>
              <span className="tc-metric-caption">Session total</span>
            </div>
            <div className="tc-metric-card">
              <span className="tc-metric-label">Bins Monitored</span>
              <span className="tc-metric-value">1–N</span>
              <span className="tc-metric-caption">
                Scales to multiple cans
              </span>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="tc-section">
          <h2 className="tc-section-title">Tech Stack</h2>
          <p className="tc-section-subtitle">
            Built fast for a hackathon, but designed to be extended into a real
            campus-scale system.
          </p>

          <div className="tc-tech-grid">
            <div className="tc-card tc-tech-card">
              <h3>Hardware</h3>
              <ul className="tc-list">
                <li>Raspberry Pi Zero 2 / Pi 4</li>
                <li>USB or Pi camera module</li>
                <li>Addressable LED strip</li>
                <li>Standard trash / recycling cans</li>
              </ul>
            </div>

            <div className="tc-card tc-tech-card">
              <h3>Software &amp; AI</h3>
              <ul className="tc-list">
                <li>Python + OpenCV</li>
                <li>YOLO / YOLO-World models</li>
                <li>Custom label mapping for waste types</li>
                <li>Logging for detections and events</li>
              </ul>
            </div>

            <div className="tc-card tc-tech-card">
              <h3>Dashboard</h3>
              <ul className="tc-list">
                <li>React single-page app</li>
                <li>Retro neon dark theme</li>
                <li>Cards, bars, and logs for trash data</li>
                <li>Ready for FastAPI/WebSocket backend</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What’s next */}
        <section className="tc-section">
          <h2 className="tc-section-title">What&apos;s Next?</h2>
          <div className="tc-grid tc-grid-3">
            <div className="tc-card">
              <h3>Multi-Bin Support</h3>
              <p>
                Track multiple bins at once with per-location stats and alerts
                for when specific cans need service.
              </p>
            </div>
            <div className="tc-card">
              <h3>Cloud Analytics</h3>
              <p>
                Upload anonymized stats to the cloud to visualize waste
                behavior across an entire campus or building.
              </p>
            </div>
            <div className="tc-card">
              <h3>Gamified Sustainability</h3>
              <p>
                Show live “eco score” dashboards on TVs and pit different dorms
                or buildings against each other in sorting challenges.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="tc-footer">
        <p>
          Built with ❤️ as <span className="tc-highlight">TrashCam</span> —
          Smart, retro, and a little obsessed with your garbage.
        </p>
      </footer>
    </div>
  );
}

export default App;
