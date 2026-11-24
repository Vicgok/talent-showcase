/** Deliberately illustrative: never present this as a real product screenshot. */
export function ProductPreview({
  compact = false,
  label = "Illustrative UI / screenshot placeholder",
}: {
  compact?: boolean;
  label?: string;
}) {
  const rows = Array.from({ length: 3 }, (_, i) => (
    <div className="preview-row" key={i}>
      <span className="preview-avatar" />
      <span className="preview-lines">
        <i />
        <i />
      </span>
    </div>
  ));
  return (
    <figure className={`product-preview ${compact ? "product-preview-compact" : ""}`}>
      <div className="preview-devices" aria-hidden="true">
        <div className="preview-desktop">
          <div className="preview-browser">
            <i />
            <i />
            <i />
            <span>muaflow.app / illustrative</span>
          </div>
          <div className="preview-app">
            <div className="preview-sidebar">
              <b>MUAFlow</b>
              <span>Today</span>
              <span>Enquiries</span>
              <span>Calendar</span>
              <span>More</span>
            </div>
            <div className="preview-content">
              <strong>Your business today</strong>
              <div className="preview-metrics">
                {["Bookings", "Enquiries", "Payments"].map((name) => (
                  <div key={name}>
                    {name}
                    <b>—</b>
                  </div>
                ))}
              </div>
              <div className="preview-list">
                <b>Upcoming appointments</b>
                {rows}
              </div>
            </div>
          </div>
        </div>
        <div className="preview-phone">
          <b>MUAFlow</b>
          <strong>Upcoming</strong>
          {rows}
          <div className="preview-action">+ New enquiry</div>
        </div>
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
