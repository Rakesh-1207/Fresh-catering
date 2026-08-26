import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Calendar, User, Phone, MapPin, Users, FileText } from 'lucide-react';
import { siteData } from '../data/cateringData';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    venue: '',
    guests: '',
    eventType: 'Wedding & Reception Catering',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    'Outdoor Catering',
    'Wedding & Reception Catering',
    'Corporate Catering',
    'Birthday & Private Events',
    'Housewarming Catering',
    'Bulk Food & Meal Boxes',
    'Buffet & Dining Service'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `*NEW CATERING INQUIRY - FRESH CATERING* 🍽️
-----------------------------------
👤 *Name:* ${formData.name || 'Not specified'}
📞 *Mobile:* ${formData.phone || 'Not specified'}
📅 *Event Date:* ${formData.eventDate || 'TBD'}
📍 *Venue:* ${formData.venue || 'Not specified'}
👥 *Guests:* ${formData.guests || 'Not specified'} Persons
🎉 *Event Type:* ${formData.eventType}
📝 *Requirements:* ${formData.requirements || 'Standard Package Inquiry'}
-----------------------------------
Please provide me with a customized menu quote!`;

    return `https://wa.me/${siteData.brand.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.open(generateWhatsAppMessage(), '_blank');
    }, 800);
  };

  return (
    <section className="py-16 bg-[#F9F8F6] relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="font-title text-[10px] tracking-[0.25em] text-[#006B46] uppercase block font-bold">
            INSTANT QUOTE ENQUIRY
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827]">
            Request a Bespoke <span className="text-[#006B46] font-serif italic">Proposal</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#374151] font-light leading-relaxed">
            Fill in your event details below to receive a custom quote sent directly to your WhatsApp.
          </p>
        </div>

        {/* BEFORE FORM: DIRECT QUICK CONNECT BUTTONS (CALL US & WHATSAPP) */}
        <div className="mb-8 p-6 rounded-2xl bg-white border border-[#006B46]/15 shadow-sm text-center space-y-3">
          <span className="font-title text-[10px] tracking-widest text-gray-400 uppercase font-bold block">
            NEED AN IMMEDIATE RESPONSE?
          </span>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* CALL US BUTTON */}
            <a
              href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
              className="btn-editorial-outline px-7 py-3.5 rounded-full flex items-center justify-center gap-2 text-xs w-full sm:w-auto font-bold"
            >
              <Phone className="w-4 h-4 text-[#006B46]" />
              <span>CALL US: {siteData.brand.phone}</span>
            </a>

            {/* DIRECT WHATSAPP BUTTON */}
            <a
              href={`https://wa.me/${siteData.brand.whatsapp}?text=Hi%20Fresh%20Catering,%20I%20would%20like%20to%20enquire%20about%20catering%20packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-solid px-7 py-3.5 rounded-full flex items-center justify-center gap-2 text-xs w-full sm:w-auto font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* High-End Editorial Form Card */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl relative shadow-xl border border-[#006B46]/15">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 bg-[#006B46]/10 text-[#006B46] rounded-full flex items-center justify-center mx-auto border border-[#006B46]/20">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#111827]">Connecting to WhatsApp...</h3>
              <p className="text-sm text-[#374151] font-light">Opening your pre-filled inquiry details.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="font-title text-xs tracking-widest text-[#006B46] hover:underline pt-4 block mx-auto font-bold uppercase"
              >
                ← Edit Form Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-title font-bold text-[#006B46] tracking-widest uppercase flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#006B46]" />
                    <span>YOUR NAME *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#111827]/15 rounded-xl px-4 py-3.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#006B46] focus:ring-2 focus:ring-[#006B46]/15 transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-title font-bold text-[#006B46] tracking-widest uppercase flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-[#006B46]" />
                    <span>MOBILE NUMBER *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#111827]/15 rounded-xl px-4 py-3.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#006B46] focus:ring-2 focus:ring-[#006B46]/15 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 2: Event Date & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-title font-bold text-[#006B46] tracking-widest uppercase flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#006B46]" />
                    <span>EVENT DATE</span>
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#111827]/15 rounded-xl px-4 py-3.5 text-sm text-[#111827] focus:outline-none focus:border-[#006B46] focus:ring-2 focus:ring-[#006B46]/15 transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-title font-bold text-[#006B46] tracking-widest uppercase flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#006B46]" />
                    <span>EVENT TYPE</span>
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#111827]/15 rounded-xl px-4 py-3.5 text-sm text-[#111827] focus:outline-none focus:border-[#006B46] focus:ring-2 focus:ring-[#006B46]/15 transition-all shadow-sm cursor-pointer"
                  >
                    {eventTypes.map((type, idx) => (
                      <option key={idx} value={type} className="bg-white text-[#111827]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Manual Guest Count Input & Venue Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-title font-bold text-[#006B46] tracking-widest uppercase flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#006B46]" />
                    <span>ESTIMATED GUESTS (MANUAL) *</span>
                  </label>
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    required
                    placeholder="Enter guest count (e.g. 150, 500)"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#111827]/15 rounded-xl px-4 py-3.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#006B46] focus:ring-2 focus:ring-[#006B46]/15 transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-title font-bold text-[#006B46] tracking-widest uppercase flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#006B46]" />
                    <span>VENUE LOCATION / CITY</span>
                  </label>
                  <input
                    type="text"
                    name="venue"
                    placeholder="e.g. Coimbatore / Chennai / Madurai"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#111827]/15 rounded-xl px-4 py-3.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#006B46] focus:ring-2 focus:ring-[#006B46]/15 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 4: Notes */}
              <div className="space-y-2">
                <label className="text-xs font-title font-bold text-[#006B46] tracking-widest uppercase flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#006B46]" />
                  <span>SPECIFIC REQUIREMENTS & NOTES</span>
                </label>
                <textarea
                  name="requirements"
                  rows="3"
                  placeholder="Mention preferred dishes, Veg/Non-Veg ratio, or special live counters..."
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#111827]/15 rounded-xl px-4 py-3.5 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#006B46] focus:ring-2 focus:ring-[#006B46]/15 transition-all shadow-sm resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full btn-editorial-solid py-4 rounded-full flex items-center justify-center gap-2 text-center text-xs shadow-lg mt-4"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>SEND INQUIRY VIA WHATSAPP</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
