import React, { useState } from 'react';
import { X, Sparkles, CheckCircle } from 'lucide-react';

export default function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: 'Acting Wing',
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div class="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-surface-container-high border border-primary-fixed/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,215,0,0.15)] rounded-3xl">
        <button
          onClick={onClose}
          class="absolute top-5 right-5 text-on-surface-variant hover:text-primary-fixed transition-colors"
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div class="text-center py-12 space-y-4">
            <CheckCircle className="w-16 h-16 text-primary-container mx-auto animate-bounce" />
            <h3 class="font-headline-lg text-3xl text-primary-fixed uppercase">Audition Registered!</h3>
            <p class="font-body-lg text-on-surface-variant">
              Welcome to the spotlight, {formData.fullName}. Our team will contact you shortly with audition schedules.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} class="space-y-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-primary-fixed" />
                <span class="font-label-sm text-xs text-primary-fixed uppercase tracking-widest">Stage Call 2024</span>
              </div>
              <h2 class="font-headline-lg text-2xl sm:text-4xl text-on-surface uppercase">Join The Ensemble</h2>
              <p class="font-body-md text-on-surface-variant text-xs sm:text-sm mt-1">
                Step into the spotlight. Select your creative domain and register for auditions.
              </p>
            </div>

            <div class="space-y-4">
              <div>
                <label class="block font-label-sm text-xs uppercase text-on-surface mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Julian Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  class="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary-fixed px-4 py-3 text-on-surface outline-none transition-colors rounded-xl"
                />
              </div>

              <div>
                <label class="block font-label-sm text-xs uppercase text-on-surface mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. julian@iem.edu.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  class="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary-fixed px-4 py-3 text-on-surface outline-none transition-colors rounded-xl"
                />
              </div>

              <div>
                <label class="block font-label-sm text-xs uppercase text-on-surface mb-1">Creative Wing</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  class="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary-fixed px-4 py-3 text-on-surface outline-none transition-colors rounded-xl"
                >
                  <option value="Acting Wing">Acting Wing</option>
                  <option value="Scripting Wing">Scripting & Playwriting</option>
                  <option value="Stage & Props Wing">Stage Design & Props</option>
                  <option value="Tech Wing">Sound & Stage Lighting</option>
                  <option value="PR & Marketing Wing">PR, Media & Photography</option>
                </select>
              </div>

              <div>
                <label class="block font-label-sm text-xs uppercase text-on-surface mb-1">Your Artistic Statement</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your passion or past stage experience..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  class="w-full bg-surface-container-low border border-outline-variant/50 focus:border-primary-fixed px-4 py-3 text-on-surface outline-none transition-colors rounded-xl"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              class="w-full bg-primary-fixed text-black font-label-sm text-sm uppercase font-bold py-3.5 hover:glow-primary-fixed rounded-full transition-all duration-300 active:scale-95 mt-2"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
