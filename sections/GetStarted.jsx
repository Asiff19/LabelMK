'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const GetStarted = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT;

    if (!endpoint) {
      setSubmissionStatus({
        type: 'error',
        message: 'Order submission is not connected yet. Please contact us directly.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const payload = new URLSearchParams({
        whatsapp: formData.get('whatsapp')?.toString().trim() || '',
        email: formData.get('email')?.toString().trim() || '',
        designRequirement: formData.get('designRequirement')?.toString().trim() || '',
        website: formData.get('website')?.toString().trim() || '',
      });

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });

      form.reset();
      setSubmissionStatus({
        type: 'success',
        message: 'Your request was sent. We will get back to you soon.',
      });
    } catch {
      setSubmissionStatus({
        type: 'error',
        message: 'Your request could not be sent. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 items-center`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-1 w-full flex justify-center"
      >
        <div className="relative w-full max-w-[500px] overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <img
            src="https://images.unsplash.com/photo-1708234165852-89c978e5e33d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Woman working with sewing machine"
            className="h-[420px] w-full object-cover sm:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] w-full flex justify-center flex-col"
      >
        <TypingText title="| Place your order" />
        <TitleText title={<>Submit your order & we'll get back</>} />

        <form onSubmit={handleSubmit} className="mt-[31px] flex w-full max-w-[420px] flex-col gap-5">
          <div className="absolute -left-[10000px]" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="whatsapp" className="text-sm font-medium text-white/80">
              WhatsApp Number
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              placeholder="+91 98765 43210"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#f4d35e] focus:bg-white/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white/80">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="yourname@example.com"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#f4d35e] focus:bg-white/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="designRequirement" className="text-sm font-medium text-white/80">
              Design Requirement
            </label>
            <textarea
              id="designRequirement"
              name="designRequirement"
              rows="5"
              required
              placeholder="Tell us about your dress manufacturing requirements, style, or quanntity..."
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#f4d35e] focus:bg-white/10"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-2xl bg-[#f4d35e] px-6 py-3 text-base font-semibold text-[#111827] transition hover:bg-[#f7df8a] disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>
          {submissionStatus && (
            <p
              role={submissionStatus.type === 'error' ? 'alert' : 'status'}
              className={submissionStatus.type === 'error' ? 'text-sm text-red-300' : 'text-sm text-emerald-300'}
            >
              {submissionStatus.message}
            </p>
          )}
        </form>
      </motion.div>
    </motion.div>
    </section>
  );
};

export default GetStarted;
