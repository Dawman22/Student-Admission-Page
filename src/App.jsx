import { useEffect, useState } from 'react';

const courses = [
  {
    name: 'Computer Science',
    duration: '4 years',
    eligibility: '10+2 with Mathematics',
    description: 'Build strong foundations in software development, data, and emerging technology.',
  },
  {
    name: 'Business Administration',
    duration: '3 years',
    eligibility: '10+2 in any stream',
    description: 'Learn to lead teams, shape strategy, and create value in a changing business world.',
  },
  {
    name: 'Mass Communication',
    duration: '3 years',
    eligibility: '10+2 with 50% marks',
    description: 'Explore storytelling, journalism, digital media, and the ideas that connect people.',
  },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  course: '',
  address: '',
};

function Header() {
  return (
    <header className="site-header">
      <div className="brand-mark" aria-hidden="true">UA</div>
      <div>
        <p className="eyebrow">Admissions 2025-26</p>
        <h1>University Admission Portal</h1>
      </div>
    </header>
  );
}

function CourseCard({ course, index }) {
  return (
    <article className={`course-card course-card-${index + 1}`}>
      <div className="course-number">0{index + 1}</div>
      <h3>{course.name}</h3>
      <div className="course-meta">
        <span><strong>Duration</strong>{course.duration}</span>
        <span><strong>Eligibility</strong>{course.eligibility}</span>
      </div>
      <p>{course.description}</p>
    </article>
  );
}

function CourseSection() {
  return (
    <section className="courses-section" aria-labelledby="courses-heading">
      <div className="section-heading">
        <p className="eyebrow">Choose your direction</p>
        <h2 id="courses-heading">Courses built for what comes next.</h2>
      </div>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={course.name} course={course} index={index} />
        ))}
      </div>
    </section>
  );
}

function AdmissionForm({ onSubmit }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }

  function validate() {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email address.';
    if (!/^[0-9+\-()\s]{7,}$/.test(formData.phone)) nextErrors.phone = 'Enter a valid phone number.';
    if (!formData.dateOfBirth) nextErrors.dateOfBirth = 'Select your date of birth.';
    if (!formData.course) nextErrors.course = 'Choose a course.';
    if (!formData.address.trim()) nextErrors.address = 'Enter your current address.';
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    onSubmit(formData);
  }

  return (
    <section className="form-panel" aria-labelledby="form-heading">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Start your application</p>
        <h2 id="form-heading">Tell us about yourself.</h2>
        <p className="section-intro">Complete the details below and our admissions team will be in touch.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <Field label="Applicant Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} placeholder="e.g. Aisha Sharma" />
          <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" />
          <Field label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="+91 98765 43210" />
          <Field label="Date of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} error={errors.dateOfBirth} />
          <div className="field">
            <label htmlFor="course">Course</label>
            <select id="course" name="course" value={formData.course} onChange={handleChange} aria-invalid={Boolean(errors.course)}>
              <option value="">Select a course</option>
              {courses.map((course) => <option key={course.name} value={course.name}>{course.name}</option>)}
            </select>
            {errors.course && <span className="error-message">{errors.course}</span>}
          </div>
          <div className="field field-full">
            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" rows="4" value={formData.address} onChange={handleChange} aria-invalid={Boolean(errors.address)} placeholder="Enter your current address" />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>
        </div>
        <button className="submit-button" type="submit">Submit Application <span aria-hidden="true">→</span></button>
      </form>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} aria-invalid={Boolean(error)} placeholder={placeholder} />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

function ApplicationDetails({ application, onReset }) {
  return (
    <section className="success-panel" aria-live="polite">
      <div className="success-icon" aria-hidden="true">✓</div>
      <p className="eyebrow">Application received</p>
      <h2>Application Submitted Successfully</h2>
      <p className="success-copy">Thank you, {application.name}. We have recorded your interest in {application.course}.</p>
      <dl className="details-list">
        <div><dt>Email</dt><dd>{application.email}</dd></div>
        <div><dt>Phone</dt><dd>{application.phone}</dd></div>
        <div><dt>Date of Birth</dt><dd>{application.dateOfBirth}</dd></div>
        <div><dt>Address</dt><dd>{application.address}</dd></div>
      </dl>
      <button className="secondary-button" type="button" onClick={onReset}>Submit another application</button>
    </section>
  );
}

function App() {
  const [application, setApplication] = useState(null);

  useEffect(() => {
    let frameId;

    function updateParallax() {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
      });
    }

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', updateParallax);
    };
  }, []);

  return (
    <main>
      <div className="page-shell">
        <Header />
        <section className="hero-copy">
          <p className="hero-kicker">Your next chapter starts here</p>
          <p className="hero-description">A focused education for curious minds, ambitious plans, and meaningful work.</p>
        </section>
        <CourseSection />
        {application ? <ApplicationDetails application={application} onReset={() => setApplication(null)} /> : <AdmissionForm onSubmit={setApplication} />}
        <footer>University Admissions Office <span>•</span> Building tomorrow, one application at a time.</footer>
      </div>
    </main>
  );
}

export default App;
