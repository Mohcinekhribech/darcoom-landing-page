import React from 'react';
import { REVIEWS, BUSINESS_INFO } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="section-spacing bg-white overflow-hidden">
      <div className="container-narrow">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label justify-center">
            <i className="fas fa-star text-amber-400" aria-hidden />
            Testimonials
          </div>
          <h2 className="section-title font-serif">
            What Our Guests Say
          </h2>
          
          {/* Rating Summary */}
          <div className="mt-6 inline-flex items-center gap-4 px-6 py-3 rounded-full bg-amber-50 border border-amber-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star text-lg ${i < 4 ? 'text-amber-400' : 'text-amber-200'}`}
                  aria-hidden
                />
              ))}
            </div>
            <div className="w-px h-6 bg-amber-200" aria-hidden />
            <div className="text-left">
              <span className="font-bold text-slate-900">4.1</span>
              <span className="text-slate-500 text-sm ml-1">out of 5</span>
              <p className="text-xs text-slate-400">Based on Google Reviews</p>
            </div>
          </div>
        </header>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((review, index) => (
            <article
              key={review.id}
              className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50/80 to-orange-50/50 border border-amber-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-400/50 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300"
                aria-hidden
              >
                <i className="fas fa-quote-right text-lg" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${review.rating} stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-amber-400 text-sm" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-slate-600 leading-relaxed mb-6 min-h-[4.5rem]">
                &ldquo;{review.comment}&rdquo;
              </blockquote>

              {/* Reviewer Info */}
              <footer className="flex items-center gap-4 pt-4 border-t border-amber-100/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b1d1d] to-[#b52929] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <cite className="font-bold text-slate-900 not-italic block">
                    {review.name}
                  </cite>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <i className="fab fa-google" aria-hidden />
                    <span>{review.date}</span>
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href={BUSINESS_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-100 text-slate-700 font-medium text-sm hover:bg-slate-200 transition-colors"
            >
              <i className="fab fa-google text-[#4285F4]" aria-hidden />
              Read More on Google
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a
              href={BUSINESS_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#8b1d1d] font-semibold text-sm hover:gap-3 transition-all"
            >
              Leave a Review
              <i className="fas fa-arrow-right text-xs" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
