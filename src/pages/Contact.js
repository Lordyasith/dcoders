import { useState } from 'react';
import GlassCard from '../components/GlassCard';
import GradientText from '../components/GradientText';
import Btn from '../components/Btn';
import { C, SERVICES_ALL } from '../tokens';
import styles from './Contact.module.css';

const INFO = [
  { icon: '📍', label: 'Location',      val: 'Colombo, Sri Lanka' },
  { icon: '✉️', label: 'Email',         val: 'hello@dcoders.lk' },
  { icon: '📞', label: 'Phone',         val: '+94 11 234 5678' },
  { icon: '🕐', label: 'Response Time', val: 'Within 24 hours' },
];

const PROCESS = [
  'Discovery call (free)',
  'Proposal & timeline',
  'Design sprint',
  'Development & QA',
  'Launch & support',
];

const BUDGETS = ['< $5K', '$5K–$15K', '$15K–$50K', '$50K+', "Let's discuss"];

function FormInput({ label, type = 'text', value, onChange, placeholder, required, error }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className={styles.fieldWrap}>
      <label className={styles.fieldLabel}>
        {label}{required && <span style={{ color: C.cyan, marginLeft: 3 }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={styles.input}
        style={{ borderColor: error ? '#f87171' : focus ? 'rgba(56,189,248,0.55)' : 'rgba(255,255,255,0.10)', boxShadow: focus ? '0 0 0 3px rgba(56,189,248,0.10)' : error ? '0 0 0 3px rgba(248,113,113,0.10)' : 'none' }}
      />
      {error && <div className={styles.fieldError}>{error}</div>}
    </div>
  );
}

function FormTextarea({ label, value, onChange, placeholder, required, error }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className={styles.fieldWrap}>
      <label className={styles.fieldLabel}>
        {label}{required && <span style={{ color: C.cyan, marginLeft: 3 }}>*</span>}
      </label>
      <textarea
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={styles.input}
        style={{ borderColor: error ? '#f87171' : focus ? 'rgba(56,189,248,0.55)' : 'rgba(255,255,255,0.10)', boxShadow: focus ? '0 0 0 3px rgba(56,189,248,0.10)' : 'none', resize: 'vertical' }}
      />
      {error && <div className={styles.fieldError}>{error}</div>}
    </div>
  );
}

export default function Contact() {
  const EMPTY = { name: '', email: '', company: '', service: '', budget: '', message: '' };
  const [form, setForm]     = useState(EMPTY);
  const [touched, setTouch] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const set  = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const blur = k => () => setTouch(t => ({ ...t, [k]: true }));

  const errors = {
    name:    touched.name    && !form.name.trim()           ? 'Name is required'          : '',
    email:   touched.email   && !form.email.includes('@')   ? 'Valid email is required'   : '',
    message: touched.message && !form.message.trim()        ? 'Project description required' : '',
  };

  const valid = form.name.trim() && form.email.includes('@') && form.message.trim();

  const handleSubmit = async () => {
    setTouch({ name: true, email: true, message: true });
    if (!valid) return;
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className={styles.successWrap}>
        <div className={styles.successIcon}>✓</div>
        <h2 className={styles.successTitle}>Message Sent!</h2>
        <p className={styles.successSub}>
          Thanks <strong style={{ color: '#fff' }}>{form.name}</strong>! We've received your message and will
          get back to you within 24 hours at{' '}
          <strong style={{ color: C.cyan }}>{form.email}</strong>.
        </p>
        <Btn primary onClick={() => { setForm(EMPTY); setTouch({}); setStatus('idle'); }}>
          Send Another Message
        </Btn>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.label}>Let's Talk</div>
        <h1 className={styles.h1}>Start Your <GradientText>Project</GradientText></h1>
        <p className={styles.sub}>Fill out the form and we'll get back to you within 24 hours.</p>
      </div>

      <div className={styles.layout}>
        {/* Left col — info */}
        <div className={styles.infoCol}>
          {INFO.map(i => (
            <GlassCard key={i.label} style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 22 }}>{i.icon}</span>
              <div>
                <div className={styles.infoLabel}>{i.label}</div>
                <div className={styles.infoVal}>{i.val}</div>
              </div>
            </GlassCard>
          ))}

          <GlassCard style={{ padding: '24px', marginTop: 4 }}>
            <div className={styles.processHeading}>Our Process</div>
            {PROCESS.map((step, i) => (
              <div key={step} className={styles.processStep}>
                <div className={styles.processNum}>{i + 1}</div>
                <span className={styles.processText}>{step}</span>
              </div>
            ))}
          </GlassCard>
        </div>

        {/* Right col — form */}
        <GlassCard noHover style={{ padding: '40px 36px' }}>
          <div className={styles.row2}>
            <FormInput label="Full Name" value={form.name} onChange={set('name')} onBlur={blur('name')} placeholder="John Doe" required error={errors.name} />
            <FormInput label="Email Address" type="email" value={form.email} onChange={set('email')} onBlur={blur('email')} placeholder="john@company.com" required error={errors.email} />
          </div>

          <div className={styles.row2}>
            <FormInput label="Company" value={form.company} onChange={set('company')} placeholder="Acme Inc. (optional)" />
            <div className={styles.fieldWrap}>
              <label className={styles.fieldLabel}>Service Needed</label>
              <select value={form.service} onChange={set('service')} className={styles.input} style={{ color: form.service ? '#fff' : 'rgba(255,255,255,0.3)', cursor: 'pointer' }}>
                <option value="" style={{ background: '#0a1628' }}>Select a service…</option>
                {SERVICES_ALL.map(s => (
                  <option key={s.title} value={s.title} style={{ background: '#0a1628' }}>{s.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.fieldWrap}>
            <label className={styles.fieldLabel}>Budget Range</label>
            <div className={styles.budgets}>
              {BUDGETS.map(b => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setForm(f => ({ ...f, budget: b }))}
                  className={`${styles.budgetBtn} ${form.budget === b ? styles.budgetActive : ''}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <FormTextarea label="Tell us about your project" value={form.message} onChange={set('message')} onBlur={blur('message')} placeholder="Describe your project, goals, timeline, and any specific requirements…" required error={errors.message} />

          <Btn
            primary
            disabled={status === 'sending'}
            onClick={handleSubmit}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {status === 'sending' ? (
              <><span className={styles.spinner} /> Sending…</>
            ) : 'Send Message ↗'}
          </Btn>
          <p className={styles.disclaimer}>We reply within 24 hours · No spam, ever</p>
        </GlassCard>
      </div>
    </div>
  );
}
