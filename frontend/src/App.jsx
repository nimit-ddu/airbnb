import React, { useState } from 'react';
import Header from './components/layout/Header';
import StickyNav from './components/layout/StickyNav';
import Footer from './components/layout/Footer';

import ListingHeader from './components/listing/ListingHeader';
import HeroGallery from './components/listing/HeroGallery';
import PropertyInfo from './components/listing/PropertyInfo';
import Description from './components/listing/Description';
import SleepingArrangements from './components/listing/SleepingArrangements';
import Amenities from './components/listing/Amenities';
import CalendarSection from './components/listing/CalendarSection';
import ReviewsSection from './components/listing/ReviewsSection';
import LocationSection from './components/listing/LocationSection';
import HostCardSection from './components/listing/HostCardSection';
import ThingsToKnow from './components/listing/ThingsToKnow';
import ExploreSection from './components/listing/ExploreSection';

import BookingCard from './components/booking/BookingCard';

import PhotoTour from './components/gallery/PhotoTour';
import Lightbox from './components/gallery/Lightbox';
import AmenitiesModal from './components/modals/AmenitiesModal';
import ShareModal from './components/modals/ShareModal';

import { listingData } from './data/listingData';

export default function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Gallery handlers
  const handleOpenPhotoTour = (index = 0) => {
    setActivePhotoIndex(index);
    setIsPhotoTourOpen(true);
  };

  const handleOpenLightbox = (index = 0) => {
    setActivePhotoIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900 antialiased selection:bg-[#FF385C] selection:text-white">
      {/* Global Navbar Header */}
      <Header />

      {/* Sticky Secondary Navigation Bar (Visible on scroll) */}
      <StickyNav
        pricePerNight={listingData.pricePerNight}
        rating={listingData.rating}
        reviewCount={listingData.reviewCount}
      />

      {/* Main Page Layout Container */}
      <main className="flex-1 max-w-[1120px] w-full mx-auto px-6">
        {/* Listing Title & Share/Save */}
        <div id="photos">
          <ListingHeader
            title={listingData.title}
            onShareClick={() => setIsShareModalOpen(true)}
          />

          {/* 5-Hero Image Grid */}
          <HeroGallery
            images={listingData.images}
            onShowAllPhotos={(idx) => handleOpenPhotoTour(idx)}
            onImageClick={(idx) => handleOpenLightbox(idx)}
          />
        </div>

        {/* 2-Column Content Layout (Left details + Right sticky booking) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8 relative">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-2">
            <PropertyInfo
              specs={listingData.specs}
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
              host={listingData.host}
              highlights={listingData.highlights}
            />

            <Description text={listingData.description} />

            <SleepingArrangements rooms={listingData.sleepingArrangements} />

            <div id="amenities">
              <Amenities
                amenities={listingData.amenities}
                onShowAllAmenities={() => setIsAmenitiesModalOpen(true)}
              />
            </div>

            <CalendarSection />
          </div>

          {/* Right Column (Sticky Booking Widget) */}
          <div className="lg:col-span-1" id="booking">
            <BookingCard
              pricePerNight={listingData.pricePerNight}
              cleaningFee={listingData.cleaningFee}
              serviceFee={listingData.serviceFee}
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
            />
          </div>
        </div>

        {/* Full-width Sections */}
        <div id="reviews">
          <ReviewsSection
            rating={listingData.rating}
            reviewCount={listingData.reviewCount}
            categoryRatings={listingData.categoryRatings}
            reviews={listingData.reviews}
          />
        </div>

        <div id="location">
          <LocationSection location={listingData.location} />
        </div>

        <HostCardSection host={listingData.host} />

        <ThingsToKnow thingsToKnow={listingData.thingsToKnow} />

        <ExploreSection listings={listingData.exploreListings} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* View 2: Full-screen Photo Tour */}
      <PhotoTour
        isOpen={isPhotoTourOpen}
        images={listingData.images}
        onClose={() => setIsPhotoTourOpen(false)}
        onPhotoClick={(idx) => {
          setIsPhotoTourOpen(false);
          handleOpenLightbox(idx);
        }}
        onShareClick={() => setIsShareModalOpen(true)}
      />

      {/* View 3: Single-Image Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        images={listingData.images}
        currentIndex={activePhotoIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />

      {/* Modals */}
      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        amenities={listingData.amenities}
        onClose={() => setIsAmenitiesModalOpen(false)}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        title={listingData.title}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
